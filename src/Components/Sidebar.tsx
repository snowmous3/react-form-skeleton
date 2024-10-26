import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', height: '100vh', background: '#f0f0f0', padding: '20px' }}>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/details">Details</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/about">About</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/contact">Contact</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/zod">ZodForm</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;