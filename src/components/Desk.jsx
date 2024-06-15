import React from 'react';

function Desk({ desk }) {
  return (
    <div className={`desk ${desk.type} ${desk.booked ? 'booked' : ''}`}>
      <div>Desk {desk.id}</div>
      {desk.booked ? (
        <div>Booked</div>
      ) : (
        <div>{desk.type.charAt(0).toUpperCase() + desk.type.slice(1)}</div>
      )}
    </div>
  );
}

export default Desk;
