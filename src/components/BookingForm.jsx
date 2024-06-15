import React, { useState } from 'react';

function BookingForm({ desks, onBooking }) {
  const [deskId, setDeskId] = useState('');
  const [membership, setMembership] = useState('Basic');
  const [hours, setHours] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!deskId) return;
    onBooking(parseInt(deskId), membership, hours);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Desk:
        <select value={deskId} onChange={e => setDeskId(e.target.value)}>
          <option value="">Select a desk</option>
          {desks.filter(desk => !desk.booked).map(desk => (
            <option key={desk.id} value={desk.id}>
              Desk {desk.id} ({desk.type})
            </option>
          ))}
        </select>
      </label>
      <label>
        Membership:
        <select value={membership} onChange={e => setMembership(e.target.value)}>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="Executive">Executive</option>
        </select>
      </label>
      <label>
        Hours:
        <input
          type="number"
          value={hours}
          min="1"
          onChange={e => setHours(parseInt(e.target.value))}
        />
      </label>
      <button type="submit">Book Desk</button>
    </form>
  );
}

export default BookingForm;
