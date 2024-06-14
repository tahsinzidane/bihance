import React from 'react';

function MpCard({ name, subName,  ammount, minused}) {
  return (
    <div className="d-flex justify-content-start mt-3">
      <h5 className="ms-3">{name}</h5>
      <span className="ms-3">{subName}</span>
      <span className="ms-5">{ammount}</span>
      <span className="ms-5 text-danger">{minused}</span>
    </div>
  );
}

export default MpCard;
