// src/components/LogoT.jsx
import React from 'react';

const LogoT = ({ size = 40, color = '#7FDBFF' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo T"
      role="img"
    >
      <rect width="64" height="64" rx="12" fill={color} />
      <path
        d="M20 16H44V24H36V48H28V24H20V16Z"
        fill="#001F3F"
      />
    </svg>
  );
};

export default LogoT;
