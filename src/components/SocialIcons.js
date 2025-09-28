import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const iconStyle = {
  position: 'fixed',
  top: '50%',
  right: '0',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: 1000,
  gap: '1rem',
  padding: '0.5rem',
  backgroundColor: '#ffffffcc',
  borderTopLeftRadius: '8px',
  borderBottomLeftRadius: '8px',
  boxShadow: '0 0 8px rgba(0,0,0,0.1)'
};

const iconItemStyle = {
  fontSize: '1.8rem',
  color: '#0a66c2', // LinkedIn blue
  textDecoration: 'none'
};

function SocialIcons() {
  return (
    <div style={iconStyle}>
      <a
        href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
        target="_blank"
        rel="noreferrer"
        style={iconItemStyle}
      >
        <i className="bi bi-linkedin"></i>
      </a>
      <a
        href="https://www.youtube.com/@andresalbertolealmaldonado7286"
        target="_blank"
        rel="noreferrer"
        style={{ ...iconItemStyle, color: 'red' }}
      >
        <i className="bi bi-youtube"></i>
      </a>
    </div>
  );
}

export default SocialIcons;
