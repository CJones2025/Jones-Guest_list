import "./index.css";

export default function GuestDetails({ selectedGuest, setSelectedGuest }) {
  return (
    <div className="guest-details-container">
      <h2>Guest Details</h2>
      <p>Name: {selectedGuest.name}</p>
      <p>Email: {selectedGuest.email}</p>
      <p>Phone: {selectedGuest.phone}</p>
      <button className="backBtn" onClick={() => setSelectedGuest(null)}>
        Back
      </button>
    </div>
  );
}