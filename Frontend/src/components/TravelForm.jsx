import React, { useState } from 'react';

function TravelForm() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travelerName, setTravelerName] = useState('');
  const [travelerAge, setTravelerAge] = useState('');
  const [travelerGender, setTravelerGender] = useState('');
  const [travelerBudget, setTravelerBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      startDate,
      endDate,
      travelerName,
      travelerAge,
      travelerGender,
      travelerBudget
    };
    console.log(formData);
    // You can send the form data to the backend or perform further actions here
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Plan your next adventure</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Traveler Name:
              <input
                type="text"
                value={travelerName}
                onChange={(e) => setTravelerName(e.target.value)}
              />
            </label>
            <label>
              Traveler Age:
              <input
                type="number"
                value={travelerAge}
                onChange={(e) => setTravelerAge(e.target.value)}
              />
            </label>
            <label>
              Traveler Gender:
              <input
                type="text"
                value={travelerGender}
                onChange={(e) => setTravelerGender(e.target.value)}
              />
            </label>
            <label>
              Transportation Type:
              <input
                type="number"
                value={travelerBudget}
                onChange={(e) => setTravelerBudget(e.target.value)}
              />
            </label>
            <label>
              Accomodation Type:
              <input
                type="number"
                value={travelerBudget}
                onChange={(e) => setTravelerBudget(e.target.value)}
              />
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
    </div>
  );
}

export default TravelForm;
