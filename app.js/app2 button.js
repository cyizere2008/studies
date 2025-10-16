import React from 'react';

const IconButton = () => {
  // Handle hover and active state for the pseudo-elements and effects
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  // Styles for outer container
  const outerContStyle = {
    marginTop: '350px',
    padding: '12px 20px',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    position: 'relative',
    borderRadius: '12px',
    color: '#fff',
    // Transition for smoothness
    transition: 'all 0.10s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    outline: 'none',
    background: 'linear-gradient(90deg, #5bfcc4, #f593e4, #71a4f0)',
    boxShadow: 'inset 0px 0px 5px #ffffffa9, inset 0px 35px 30px #000, 0px 5px 10px #000000cc',
    // Pseudo-element styles handled via a separate overlay div
  };

  // Styles for the overlay pseudo-element equivalent
  const beforeStyle = {
    content: '""',
    position: 'absolute',
    inset: 0,
    margin: 'auto',
    borderRadius: '12px',
    filter: hover ? 'blur(15px)' : active ? 'blur(5px)' : 'none',
    boxShadow: hover ? 'none' : active ? 'inset 0px 0px 5px #ffffffa9, inset 0px 35px 30px #000' : 'none',
    background: 'conic-gradient(#00000000 80deg, #40baf7, #f34ad7, #5bfcc4, #00000000 280deg)',
    transition: 'all 0.3s ease',
    zIndex: -1,
    width: '100%',
    height: '100%',
  };

  // Styles for the SVG icon
  const svgStyle = {
    height: '24px',
    width: '24px',
    display: 'inline-block',
  };

  return (
    <center>
    <button
      style={outerContStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    >
      {/* Overlay div simulating ::before pseudo-element */}
      <div style={beforeStyle} />
      {/* SVG icon */}
      <svg
        viewBox="0 0 24 24"
        style={svgStyle}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">
          <path
            d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
            fill="currentColor"
          />
          <path
            d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM11 6.094l-.806 2.36a6 6 0 0 1-3.49 3.649l-.25.091l-2.36.806l2.36.806a6 6 0 0 1 3.649 3.49l.091.25l.806 2.36l.806-2.36a6 6 0 0 1 3.49-3.649l.25-.09l2.36-.807l-2.36-.806a6 6 0 0 1-3.649-3.49l-.09-.25z"
            fill="currentColor"
          />
          <path
            d="M19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"
            fill="currentColor"
          />
        </g>
      </svg>
      <span style={{ marginLeft: '5px' }}>Ask Cyizere AI</span>
    </button>
    </center>
  );
};

export default IconButton;