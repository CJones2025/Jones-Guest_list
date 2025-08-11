import GuestDetails from "./GuestDetails";
import { useState } from "react";
import "./index.css";
export default function GuestList({ guests }) {
  const [selectedGuest, setSelectedGuest] = useState(null);

  if (selectedGuest) {
    return (
      <GuestDetails
        selectedGuest={selectedGuest}
        setSelectedGuest={setSelectedGuest}
      />
    );
  }
  return (
    <div className="guest-list-container">
      <>
        <h2>Guest List</h2>
        <table className="guest-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest) => (
              <tr
                key={guest.id}
                className="guest"
                onClick={() => {
                  setSelectedGuest(guest);
                }}
              >
                <td>
                  <p>{guest.name}</p>
                  <p>{guest.email}</p>
                  <p>{guest.phone}</p>
                </td>
              </tr>
            ))}
            {guests.length === 0 && (
              <tr>
                <td colSpan="3">No guests found</td>
              </tr>
            )}
          </tbody>
        </table>
        <p>Select a guest to see more details</p>
      </>
    </div>
  );
}