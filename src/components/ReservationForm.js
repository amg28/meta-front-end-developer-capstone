import React, { useState } from 'react';
import './../styles/ReservationForm.css'
import { submitAPI } from '../utls/fakeAPI';

const TimeOption = ({ time, isSelected, onClick }) => {
  return (
    <div
      className={`time-option ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(time)}  // Pass a function reference
    >
      {time}
    </div>
  );
};

const ReservationForm = ({ availableTimes = [], onDateChange, selectedDate, isLoading }) => {
  const [reservationDate, setReservationDate] = useState(selectedDate);
  const [reservationTime, setReservationTime] = useState('17:00');
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setReservationDate(selectedDate);
    onDateChange(selectedDate);
  };

  const handleTimeChange = (e) => {
    setReservationTime(e);
  };

  const handleNumOfGuestsChange = (e) => {
    setNumOfGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date: reservationDate, reservationTime, numOfGuests, occasion };
    console.log('Form submitted:', formData);
    // Add logic for form submission or API communication here
    submitAPI(formData).then(alert('success booking')).catch(alert('failed booking'))
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
      />
    </form>
    </>
  );
};

export default ReservationForm;
