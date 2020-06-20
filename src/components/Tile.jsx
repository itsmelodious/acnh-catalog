import React from 'react';
import './Tile.css';

export default function Tile(props) {
  const { data } = props;
  const name = data.name['name-USen'];
  const price = data.price;
  const iconURI = data.icon_uri;

  return (
    <div className="tile">
      <img
        className="tile-image"
        src={iconURI}
        alt={name}
      />
      <div className="tile-text">{name}: {price} bells</div>
    </div>
  );
}
