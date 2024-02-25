from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import joblib


class DestinationRecommendationModel:
    def __init__(self, checkpoint_filename=None):
        self.model = None
        self.df = None
        self.tfidf_matrix = None
        self.tfidf_vectorizer = None

        if checkpoint_filename:
            self.load_checkpoint(checkpoint_filename)

    def preprocess_data(self, data):
        data['combined_features'] = data.apply(lambda x: ' '.join(x[['Traveler age', 'Traveler gender', 'Traveler nationality',
                                                                     'Accommodation type','Transportation type', 'Budget']].astype(str)), axis=1)
        return data

    def train_model(self, data):
        self.df = self.preprocess_data(data)
        self.tfidf_vectorizer = TfidfVectorizer()
        self.tfidf_matrix = self.tfidf_vectorizer.fit_transform(self.df['combined_features'])
        self.model = cosine_similarity(self.tfidf_matrix, self.tfidf_matrix)

    def save_checkpoint(self, filename):
        joblib.dump((self.model, self.df, self.tfidf_matrix, self.tfidf_vectorizer), filename)

    def load_checkpoint(self, filename):
        self.model, self.df, self.tfidf_matrix, self.tfidf_vectorizer = joblib.load(filename)

    def recommend_destination(self, user_preferences, top_n=5):
        if self.model is None:
            raise Exception("Model has not been trained or loaded.")

        # Extract the user preferences
        user_features = ' '.join([str(value) for value in user_preferences.values()])
        user_tfidf = self.tfidf_vectorizer.transform([user_features])

        # Compute similarity between user preferences and destinations
        user_destination_similarity = cosine_similarity(user_tfidf, self.tfidf_matrix)

        sim_scores = user_destination_similarity[0]
        sim_scores = list(enumerate(sim_scores))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        sim_scores = sim_scores[:top_n]  # Consider top n destinations
        trip_indices = [i[0] for i in sim_scores]

        recommended_destinations = []
        for index in trip_indices:
            destination = self.df.iloc[index]
            # Convert budget to float for comparison
            budget = float(destination['Budget'])
            # Check if the budget is within the user's budget
            if budget <= user_preferences['Budget']:
                recommended_destinations.append({
                    'Destination': destination['Destination'],
                    'Budget': budget
                })
                # Break if we have found enough recommendations
                if len(recommended_destinations) == top_n:
                    break
        return recommended_destinations
