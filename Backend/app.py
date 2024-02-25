from flask import Flask, request, jsonify
from recommendation_model import DestinationRecommendationModel
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Load the recommendation model
model = DestinationRecommendationModel()
checkpoint_filename = r'E:\Class Files\Agnethon\project\backend\checkpoint\destination_recommendation_checkpoint.pkl'
model.load_checkpoint(checkpoint_filename)

@app.route('/recommend', methods=['POST'])
def recommend():
    user_preferences = request.json
    recommendations = model.recommend_destination(user_preferences)
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)
