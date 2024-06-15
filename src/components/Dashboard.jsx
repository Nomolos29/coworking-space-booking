import React from 'react';

function Dashboard({ revenue, bookings }) {
  return (
    <div className="dashboard">
      <h2>Revenue Dashboard</h2>
      <p>Basic: ${revenue.Basic.toFixed(2)}</p>
      <p>Premium: ${revenue.Premium.toFixed(2)}</p>
      <p>Executive: ${revenue.Executive.toFixed(2)}</p>
      <h3>Bookings</h3>
      <ul>
        {bookings.map((booking, index) => (
          <p key={index}>
            Desk {booking.deskId} - {booking.membership} - {booking.hours} hours - ${booking.totalCost.toFixed(2)}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
