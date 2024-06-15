import React, { useState } from 'react';
import { Desk, BookingForm, Dashboard } from './components';
import './App.css';

// All Tables
const initialDesks = [
  { id: 1, type: 'individual', booked: false },
  { id: 2, type: 'individual', booked: false },
  { id: 3, type: 'individual', booked: false },
  { id: 4, type: 'individual', booked: false },
  { id: 5, type: 'individual', booked: false },
  { id: 6, type: 'individual', booked: false },
  { id: 7, type: 'individual', booked: false },
  { id: 8, type: 'individual', booked: false },
  { id: 9, type: 'individual', booked: false },
  { id: 10, type: 'individual', booked: false },
  { id: 11, type: 'team', booked: false },
  { id: 12, type: 'team', booked: false },
  { id: 13, type: 'team', booked: false },
  { id: 14, type: 'team', booked: false },
  { id: 15, type: 'team', booked: false },
];

function App() {
  const [desks, setDesks] = useState(initialDesks);
  const [bookings, setBookings] = useState([]);
  const [revenue, setRevenue] = useState({ Basic: 0, Premium: 0, Executive: 0 });

  const handleBooking = (deskId, membership, hours) => {
    // Mark desk as booked
    const updatedDesks = desks.map(desk =>
      desk.id === deskId ? { ...desk, booked: true, membership } : desk
    );
    setDesks(updatedDesks);

    // Calculate cost
    let costPerHour;
    switch (membership) {
      case 'Basic':
        costPerHour = 10;
        break;
      case 'Premium':
        costPerHour = 15;
        break;
      case 'Executive':
        costPerHour = 20;
        break;
      default:
        costPerHour = 25; // team desk
    }
    let totalCost = costPerHour * hours;
    if (hours > 3) totalCost *= 0.9; // Apply 10% discount

    // Update bookings and revenue
    setBookings([...bookings, { deskId, membership, hours, totalCost }]);
    setRevenue({ ...revenue, [membership]: revenue[membership] + totalCost });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Co-working Space Booking System</h1>
      </header>
      <div className="desks">
        {desks.map(desk => (
          <Desk key={desk.id} desk={desk} />
        ))}
      </div>
      <BookingForm desks={desks} onBooking={handleBooking} />
      <Dashboard revenue={revenue} bookings={bookings} />
    </div>
  );
}

export default App;
