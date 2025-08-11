import { useState, useEffect } from "react";
import guestsData from "../data";

export default function useGuest() {
  const [guests, setGuests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setTimeout(() => {
        setGuests(guestsData);
        setIsLoading(false);
      }, 300);
    } catch (err) {
      console.error(err);
      setError(err);
      setIsLoading(false);
    }
  }, []);

  return { guests, isLoading, error };
}
