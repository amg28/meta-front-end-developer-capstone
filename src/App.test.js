import { render, screen } from '@testing-library/react';
import ReservationForm from './components/ReservationForm';
import  { initializeTimes } from './pages/BookingPage';

test('Renders the BookingForm heading', () => {
  render(<ReservationForm />);
  const headingElement = screen.getByText("Please reserve your table by completing the Form:");
  expect(headingElement).toBeInTheDocument();
})

// Test initializeTimes function
test('initializeTimes returns the correct initial state', () => {
  return initializeTimes().then(data => {
    expect(data).toStrictEqual(['10:00', '11:00', '12:00']);
})});