import React, { useState } from 'react';
import axios from 'axios';

function TravelForm() {
  const [travelerName, setTravelerName] = useState('');
  const [travelerAge, setTravelerAge] = useState('');
  const [travelerGender, setTravelerGender] = useState('');
  const [transportationType, setTransportationType] = useState('');
  const [accommodationType, setAccommodationType] = useState('');
  const [Budget, setTravelerBudget] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      travelerName,
      travelerAge,
      travelerGender,
      transportationType,
      accommodationType,
      Budget: parseFloat(Budget)
    };
    try {
      const response = await axios.post('http://localhost:5000/recommend', formData);
      setRecommendations(response.data);
      setShowModal(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openChatbot = () => {
    window.open('https://mediafiles.botpress.cloud/f1857890-1b7e-46bd-a801-f506c70f1ea5/webchat/bot.html', '_blank');
  };

  return (
    <div className="container">
      <div className="form">
      <h2 style={headerTextStyle}>Plan your next adventure</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Name:
              <input
                type="text"
                value={travelerName}
                onChange={(e) => setTravelerName(e.target.value)}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                value={travelerAge}
                onChange={(e) => setTravelerAge(e.target.value)}
              />
            </label>
            <label>
              Gender:
              <select
                value={travelerGender}
                onChange={(e) => setTravelerGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </label>
            <label>
              Transportation Type:
              <select
                value={transportationType}
                onChange={(e) => setTransportationType(e.target.value)}
              >
                <option value="">Select Transportation Type</option>
                <option value="Plane">Plane</option>
                <option value="Train">Train</option>
                <option value="Bus">Bus</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>
              Accommodation Type:
              <select
                value={accommodationType}
                onChange={(e) => setAccommodationType(e.target.value)}
              >
                <option value="">Select Accommodation Type</option>
                <option value="Hotel">Hotel</option>
                <option value="Hostel">Hostel</option>
                <option value="Airbnb">Airbnb</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>
              Traveler Budget:
              <input
                type="number"
                value={Budget}
                onChange={(e) => setTravelerBudget(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" style={submitButtonStyle}>Submit</button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Recommended Destinations</h2>
            <ul>
              {recommendations.map((destination, index) => (
                <li key={index}>{destination.Destination} - {destination.Budget}</li>
              ))}
            </ul>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* Open Chatbot button */}
      {/* <div className="chatbot-container">
        <button className="chatbot-button" onClick={openChatbot}>Open Chatbot</button>
      </div> */}
    </div>
  );
}


// Custom styles
const headerTextStyle = {
  fontFamily: 'cursive', // Replace with your preferred font family
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '10px',
};

const submitButtonStyle = {
  backgroundColor: '#4CAF50', /* Green background */
  border: 'none', /* Remove borders */
  color: 'white', /* White text */
  padding: '15px 24px', /* Adjusted padding for slightly smaller length */
  textAlign: 'center', /* Center text */
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px', /* Font size */
  margin: '4px 2px', /* Margin between buttons */
  cursor: 'pointer', /* Pointer cursor on hover */
  borderRadius: '8px', /* Rounded corners */
};


export default TravelForm;
