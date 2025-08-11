import useGuest from "./hooks/useGuest.js";
import GuestList from "./GuestList";
export default function App() {
  const { guests, isLoading, error } = useGuest();
  if (isLoading) return <p>Loading..</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <GuestList guests={guests} />
    </>
  );
}