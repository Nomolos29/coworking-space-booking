import React from 'react';

function Desk({ desk }) {
  return (
    <div className={`desk ${desk.type} ${desk.booked ? 'booked' : ''}`}>
      Desk {desk.id} ({desk.type})
    </div>
  );
}

export default Desk;
