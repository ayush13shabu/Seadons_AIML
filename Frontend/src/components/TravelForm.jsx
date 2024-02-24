import React, { useState } from 'react';

function TravelForm() {
  const [travelerName, setTravelerName] = useState('');
  const [travelerAge, setTravelerAge] = useState('');
  const [travelerGender, setTravelerGender] = useState('');
  const [transportationType, setTransportationType] = useState('');
  const [accommodationType, setAccommodationType] = useState('');
  const [travelerBudget, setTravelerBudget] = useState('');
  const [showModal, setShowModal] = useState(false); // State variable to control modal visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      travelerName,
      travelerAge,
      travelerGender,
      transportationType,
      accommodationType,
      travelerBudget
    };
    console.log(formData);
    setShowModal(true);
    // You can send the form data to the backend or perform further actions here
    // Show modal when form is submitted
  };

  const closeModal = () => { // Function to close the modal
    setShowModal(false);
  };

  const openChatbot = () => {
    // Function to navigate to the chatbot webpage
    window.open('URL_OF_YOUR_CHATBOT_PAGE', '_blank'); // Replace 'URL_OF_YOUR_CHATBOT_PAGE' with the actual URL
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Plan your next adventure</h2>
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
                value={travelerBudget}
                onChange={(e) => setTravelerBudget(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <a href="https://mediafiles.botpress.cloud/f1857890-1b7e-46bd-a801-f506c70f1ea5/webchat/bot.html">Chat Bot </a>
            <p>Here goes your recommended destination information.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* Chatbot button */}
      <button className="chatbot-button" onClick={openChatbot}>
        Open Chatbot
      </button>
    </div>
  );
}

export default TravelForm;
