import React from 'react';
import './Ninjas.css';

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninjas" key={ninja.id}>
        <div className="ninja-name">Name: {ninja.name}</div>
        <div className="ninja-age">Age: {ninja.age}</div>
        <div className="ninja-belt">Belt: {ninja.belt}</div>
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
      </div>
    )
  });

  return (
    <div className="ninja-list">
      {ninjaList}
    </div>
  )
};

export default Ninjas;
