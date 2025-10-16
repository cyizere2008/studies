import React, { useState } from 'react';

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  const containerStyle = {
    backgroundColor: 'transparent',
    width: '500px',
    height: '300px',
    perspective: '1500px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const innerStyle = {
    width: '100%',
    height: '100%',
    position: 'relative',
    transition: 'transform 0.8s cubic-bezier(.4, 0, .2, 1)',
    transformStyle: 'preserve-3d',
    boxShadow: hovered ? '0 10px 20px rgba(0,0,0,0.3)' : '0 4px 8px rgba(0,0,0,0.2)',
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    transformOrigin: '50% 50%',
    // Add slight scale on hover for attraction
    ...(hovered && { transform: 'scale(1.02) rotateY(' + (flipped ? '180deg' : '0deg') + ')' }),
  };

  // Common styles for front and back
  const faceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '1rem',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 2px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset',
    backgroundColor: '#171717',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  };

  return (
    <div
      style={containerStyle}
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={innerStyle}>
        {/* Front */}
        <div style={faceStyle}>
          <p style={{
            position: 'absolute',
            letterSpacing: '.2em',
            fontSize: '12px',
            top: '10px',
            left: '20px',
            margin: 0,
            color: '#fff'
          }}>MASTERCARD</p>
          <svg style={{
            position: 'absolute',
            top: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '36px',
            height: '36px'
          }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" />
            <path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" />
            <path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z" />
          </svg>
          <p style={{
            position: 'absolute',
            fontWeight: 'bold',
            fontSize: '10px',
            top: '100px',
            left: '20px',
            color: '#fff'
          }}>4519 0321 2023</p>
          <p style={{
            position: 'absolute',
            fontWeight: 'bold',
            top: '160px',
            fontSize: '8px',
            left: '20px',
            color: '#ccc'
          }}>VALID THRU</p>
          <p style={{
            position: 'absolute',
            fontWeight: 'bold',
            fontSize: '10px',
            top: '170px',
            left: '20px',
            color: '#fff'
          }}>12 / 24</p>
          <p style={{
            position: 'absolute',
            fontWeight: 'bold',
            fontSize: '10px',
            top: '200px',
            left: '20px',
            color: '#fff'
          }}>BRUCE WAYNE</p>
        </div>
        {/* Back side */}
        <div style={{
          ...faceStyle,
          transform: 'rotateY(180deg)',
        }}>
          <div style={{
            position: 'absolute',
            top: '50px',
            width: '80%',
            height: '20px',
            backgroundColor: 'black',
            background: 'repeating-linear-gradient(45deg, #303030, #303030 10px, #202020 10px, #202020 20px)',
            borderRadius: '4px'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '80px',
            width: '40%',
            height: '16px',
            backgroundColor: 'white',
            borderRadius: '4px'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '120px',
            width: '50%',
            height: '16px',
            backgroundColor: 'white',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <p style={{ margin: 0, fontWeight: 'bold', color: 'black' }}>********</p>
            <p style={{ margin: 0, fontWeight: 'bold', color: 'black', fontSize: '8px' }}>This is property of CHC</p>
            <p style={{ margin: 0, fontWeight: 'bold', color: 'black', fontSize: '8px' }}>Bring it to me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;