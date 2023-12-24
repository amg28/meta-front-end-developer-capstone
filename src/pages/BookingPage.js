import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ReservationForm from "../components/ReservationForm";
import { fetchAPI } from "../utls/fakeAPI";
import { getFormattedDate } from "../utls/utils";

    // Updated initializeTimes to use fetchAPI for today's date
    export const initializeTimes = async () => {
        const todayDate = getFormattedDate(new Date());
        try {
          const response = await fetchAPI(todayDate);
          return response;
        } catch (error) {
          console.error(error);
          return [];
        }
    };

const BookingPage = () => {
const [availableTimes, setAvailableTimes] = useState();
const [selectedDate, setSelectedDate] = useState(getFormattedDate());
const [loading, setLoading] = useState(false);

  console.log({availableTimes, selectedDate}, 'fetchAPI')

  useEffect(() => {
    if(!selectedDate) return;

    setLoading(true);
    fetchAPI(selectedDate)
      .then((response) => setAvailableTimes(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [selectedDate]);



  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <>
      <Header />
      <ReservationForm
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        selectedDate={selectedDate}
        isLoading={loading}
      />
      <Footer />
    </>
  );
};

export default BookingPage;
