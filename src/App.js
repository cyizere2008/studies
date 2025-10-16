import React, { useState } from 'react';

function ProfileUpdateForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [hover, setHover] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [bioFocus, setBioFocus] = useState(false);

  const containerStyle = {
    maxWidth: '28rem',
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 10,
    backgroundColor: 'whitesmoke', // Background color of the form container
    padding: '2rem',
    borderRadius: '0.75rem',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.15)',
    transition: 'box-shadow 0.3s ease',
  };

  const titleStyle = {
    fontSize: '1.875rem',
    fontWeight: '700',
    color: '#000', // Changed to black for better contrast on whitesmoke
    marginBottom: '1.5rem',
    textAlign: 'center',
    letterSpacing: '0.05em',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#9ca3af',
    marginBottom: '0.5rem',
  };

  const baseInputStyle = {
    marginTop: '0.25rem',
    padding: '0.75rem',
    width: '100%',
    backgroundColor: '#fff', // White background for inputs for clarity
    border: '1px solid #4b5563',
    borderRadius: '0.375rem',
    color: '#000', // Black text for readability
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.1s',
  };

  const inputStyle = (isFocused) => ({
    ...baseInputStyle,
    borderColor: isFocused ? '#8b5cf6' : '#4b5563',
    boxShadow: isFocused ? '0 0 0 3px rgba(139, 92, 246, 0.2)' : 'none',
    transform: isFocused ? 'scale(1.02)' : 'scale(1)',
  });

  const textareaStyle = (isFocused) => ({
    ...inputStyle(isFocused),
    resize: 'vertical',
    minHeight: '6rem',
  });

  const buttonStyle = {
    backgroundImage: 'linear-gradient(to right, #8b5cf6, #ec4899, #3b82f6)',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    fontWeight: '600',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'opacity 0.2s, transform 0.2s, box-shadow 0.2s',
    opacity: hover ? 0.8 : 1,
    transform: hover ? 'scale(1.05)' : 'scale(1)',
    boxShadow: hover ? '0 4px 10px rgba(139, 92, 246, 0.3)' : 'none',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '1.5rem',
  };

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor:' rgba(45, 43, 43, 0)', // Outer background color
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background circles for a more attractive look */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-15%',
          width: '20rem',
          height: '20rem',
          background:
            'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          zIndex: 5,
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '25rem',
          height: '25rem',
          background:
            'radial-gradient(circle at 70% 70%, rgba(74, 222, 128, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 5,
        }}
      ></div>

      <div style={containerStyle}>
        <h2 style={titleStyle}>Update Your Profile</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log({ name, email, bio });
          }}
        >
          {/* Full Name */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="name" style={labelStyle}>
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
              style={inputStyle(nameFocus)}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="email" style={labelStyle}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              style={inputStyle(emailFocus)}
            />
          </div>

          {/* Bio */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="bio" style={labelStyle}>
              Bio
            </label>
            <textarea
              id="bio"
              rows="4"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              onFocus={() => setBioFocus(true)}
              onBlur={() => setBioFocus(false)}
              style={textareaStyle(bioFocus)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div style={buttonContainerStyle}>
            <button
              type="submit"
              style={buttonStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  return <ProfileUpdateForm />;
}