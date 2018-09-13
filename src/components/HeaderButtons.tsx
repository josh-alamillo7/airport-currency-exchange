import * as React from 'react';
import {Link} from 'react-router-dom';

const headerButtons = () => {
  return (
    <div className="Header-buttons">
      <button className="Home-button"><Link to="/home">Home</Link></button>
      <button className="Home-button"><Link to="/admin">Admin</Link></button>
    </div>);
};

export default headerButtons;
