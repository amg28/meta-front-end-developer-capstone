import React, { useState } from 'react';
import './../styles/ReservationForm.css'
import { submitAPI } from '../utls/fakeAPI';

const TimeOption = ({ time, isSelected, onClick }) => {
  return (
    <div
      className={`time-option ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(time)}  // Pass a function reference
      aria-label="On Click"
    >
      {time}
    </div>
  );
};

const ReservationForm = ({ availableTimes = [], onDateChange, selectedDate, isLoading }) => {
  const [reservationDate, setReservationDate] = useState(selectedDate);
  const [reservationTime, setReservationTime] = useState('');
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Update handleDateChange function to handle date validation
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
  
    // Validate if the date is a valid date
    const isValidDate = isValidDateInput(selectedDate);
  
    if (isValidDate) {
      setReservationDate(selectedDate);
      onDateChange(selectedDate);
    } else {
      // Handle invalid date (you can show an error message or take other actions)
      console.error('Invalid date selected');
    }
  };

const isValidDateInput = (dateString) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/; // Assuming YYYY-MM-DD format

  if (!regex.test(dateString)) {
    return false;
  }

  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

  const handleTimeChange = (e) => {
    setReservationTime(e);
  };

  // Update handleNumOfGuestsChange function to handle numeric validation
const handleNumOfGuestsChange = (e) => {
  const value = e.target.value;
  // Validate if the value is a positive integer
  if (/^[1-9]\d*$/.test(value) || value === '') {
    setNumOfGuests(value);
  }
};

// Add event listener to handle changes in occasion dropdown
const handleOccasionChange = (e) => {
  setOccasion(e.target.value);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date: reservationDate, reservationTime, numOfGuests, occasion };
    console.log('Form submitted:', formData);
    // Add logic for form submission or API communication here
    submitAPI(formData).then(alert('success booking')).catch(console.log('Unexpected issue while submiting, please refer to our support team'))
  };

  const isTimeSelected = () => {
    // Check if selectedDate is truthy and reservationTime is not an empty string
    return selectedDate && reservationTime !== '';
  };

  return (
    <>
    <h2 className='form-title'>Please reserve your table by completing the Form:</h2>
    <form
      onSubmit={handleSubmit}
      className="reservation-form"
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={reservationDate}
        onChange={handleDateChange}
      />

        <label htmlFor="res-time">Choose time</label>
        <div className="time-options">
          {isLoading ? (
            <div>Loading ...</div>
          ) : (
            availableTimes &&
            availableTimes.map((time) => (
              <TimeOption
                key={time}
                time={time}
                isSelected={time === reservationTime}
                onClick={handleTimeChange} // Pass function reference
              />
            ))
          )}
        </div>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numOfGuests}
        onChange={handleNumOfGuestsChange}
        required  // This makes the field required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!selectedDate || !reservationTime || !numOfGuests || !occasion || !isTimeSelected()}
        className={(!selectedDate || !reservationTime || !numOfGuests || !occasion || !isTimeSelected()) ? 'disabled' : ''}
      />
    </form>
    </>
  );
};

export default ReservationForm;
