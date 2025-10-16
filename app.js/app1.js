import React from 'react';

const Form = () => {
  return (
    <div style={{
      position: 'relative',
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      maxWidth: '36rem',
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      <div style={{
        position: 'relative',
        padding: '2.5rem',
        backgroundColor: 'black',
        marginLeft: '2rem',
        marginRight: '2rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderRadius: '1.75rem',
      }}>
        <div style={{ maxWidth: '28rem', margin: '0 auto', color: 'white' }}>

          {/* First grid of inputs */}
          <div style={{
            marginTop: '1.25rem',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.25rem'
          }}>
            {/* Full Name */}
            <div>
              <label style={{
                fontWeight: 600,
                fontSize: '0.875rem',
                color: '#9ca3af',
                paddingBottom: '0.25rem',
                display: 'block'
              }} htmlFor="fullname">
                Full Name
              </label>
              <input
                style={{
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  marginTop: '0.25rem',
                  marginBottom: '1.25rem',
                  fontSize: '0.875rem',
                  width: '100%',
                  backgroundColor: '#2d3748',
                  color: 'white',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                type="text"
                id="fullname"
                onFocus={(e) => {
                  e.target.style.borderColor = '#4299e1';
                  e.target.style.boxShadow = '0 0 0 2px #4299e1 inset';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            {/* Email */}
            <div>
              <label style={{
                fontWeight: 600,
                fontSize: '0.875rem',
                color: '#9ca3af',
                paddingBottom: '0.25rem',
                display: 'block'
              }} htmlFor="email">
                Email
              </label>
              <input
                style={{
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  marginTop: '0.25rem',
                  marginBottom: '1.25rem',
                  fontSize: '0.875rem',
                  width: '100%',
                  backgroundColor: '#2d3748',
                  color: 'white',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                type="email"
                id="email"
                onFocus={(e) => {
                  e.target.style.borderColor = '#4299e1';
                  e.target.style.boxShadow = '0 0 0 2px #4299e1 inset';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            {/* Username */}
            <div>
              <label style={{
                fontWeight: 600,
                fontSize: '0.875rem',
                color: '#9ca3af',
                paddingBottom: '0.25rem',
                display: 'block'
              }} htmlFor="username">
                Username
              </label>
              <input
                style={{
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  marginTop: '0.25rem',
                  marginBottom: '1.25rem',
                  fontSize: '0.875rem',
                  width: '100%',
                  backgroundColor: '#2d3748',
                  color: 'white',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                type="text"
                id="username"
                onFocus={(e) => {
                  e.target.style.borderColor = '#4299e1';
                  e.target.style.boxShadow = '0 0 0 2px #4299e1 inset';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            {/* Password */}
            <div>
              <label style={{
                fontWeight: 600,
                fontSize: '0.875rem',
                color: '#9ca3af',
                paddingBottom: '0.25rem',
                display: 'block'
              }} htmlFor="password">
                Password
              </label>
              <input
                style={{
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  marginTop: '0.25rem',
                  marginBottom: '1.25rem',
                  fontSize: '0.875rem',
                  width: '100%',
                  backgroundColor: '#2d3748',
                  color: 'white',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                type="password"
                id="password"
                onFocus={(e) => {
                  e.target.style.borderColor = '#4299e1';
                  e.target.style.boxShadow = '0 0 0 2px #4299e1 inset';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          {/* Second grid of inputs */}
          <div style={{
            marginTop: '1.25rem',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.25rem'
          }}>
            {/* Date of Birth */}
            <div>
              <label style={{
                fontWeight: 600,
                fontSize: '0.875rem',
                color: '#9ca3af',
                paddingBottom: '0.25rem',
                display: 'block'
              }} htmlFor="dob">
                Date of Birth
              </label>
              <input
                style={{
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  marginTop: '0.25rem',
                  marginBottom: '1.25rem',
                  fontSize: '0.875rem',
                  width: '100%',
                  backgroundColor: '#2d3748',
                  color: 'white',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                type="date"
                id="dob"
                onFocus={(e) => {
                  e.target.style.borderColor = '#4299e1';
                  e.target.style.boxShadow = '0 0 0 2px #4299e1 inset';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            {/* Gender */}
            <div>
              <label style={{
                fontWeight: 600,
                fontSize: '0.875rem',
                color: '#9ca3af',
                paddingBottom: '0.25rem',
                display: 'block'
              }} htmlFor="gender">
                Gender
              </label>
              <select
                style={{
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  marginTop: '0.25rem',
                  marginBottom: '1.25rem',
                  fontSize: '0.875rem',
                  width: '100%',
                  backgroundColor: '#2d3748',
                  color: 'white',
                  outline: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s'
                }}
                id="gender"
                onFocus={(e) => {
                  e.target.style.borderColor = '#4299e1';
                  e.target.style.boxShadow = '0 0 0 2px #4299e1 inset';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Sign Up Button */}
          <div style={{ marginTop: '1.25rem' }}>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem 5rem',
                backgroundColor: 'white',
                color: '#4b5563',
                width: '100%',
                borderRadius: '0.5rem',
                fontWeight: 600,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e2e8f0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
            >
              {/* SVG icon */}
              <svg viewBox="0 0 24 24" height={25} width={25} style={{ marginRight: '0.5rem' }} xmlns="http://www.w3.org/2000/svg">
                <path d="M12,5c1.6167603,0,3.1012573,0.5535278,4.2863159,1.4740601l3.637146-3.4699707 C17.8087769,1.1399536,15.0406494,0,12,0C7.392395,0,3.3966675,2.5999146,1.3858032,6.4098511l4.0444336,3.1929321 C6.4099731,6.9193726,8.977478,5,12,5z" fill="#F44336" />
                <path d="M23.8960571,13.5018311C23.9585571,13.0101929,24,12.508667,24,12 c0-0.8578491-0.093689-1.6931763-0.2647705-2.5H12v5h6.4862061c-0.5247192,1.3637695-1.4589844,2.5177612-2.6481934,3.319458 l4.0594482,3.204834C22.0493774,19.135437,23.5219727,16.4903564,23.8960571,13.5018311z" fill="#2196F3" />
                <path d="M5,12c0-0.8434448,0.1568604-1.6483765,0.4302368-2.3972168L1.3858032,6.4098511 C0.5043335,8.0800171,0,9.9801636,0,12c0,1.9972534,0.4950562,3.8763428,1.3582153,5.532959l4.0495605-3.1970215 C5.1484375,13.6044312,5,12.8204346,5,12z" fill="#FFC107" />
                <path d="M12,19c-3.0455322,0-5.6295776-1.9484863-6.5922241-4.6640625L1.3582153,17.532959 C3.3592529,21.3734741,7.369812,24,12,24c3.027771,0,5.7887573-1.1248169,7.8974609-2.975708l-4.0594482-3.204834 C14.7412109,18.5588989,13.4284058,19,12,19z" fill="#00B060" />
                <path opacity=".1" d="M12,23.75c-3.5316772,0-6.7072754-1.4571533-8.9524536-3.7786865C5.2453613,22.4378052,8.4364624,24,12,24 c3.5305786,0,6.6952515-1.5313721,8.8881226-3.9592285C18.6495972,22.324646,15.4981079,23.75,12,23.75z" />
                <polygon opacity=".1" points="12,14.25 12,14.5 18.4862061,14.5 18.587492,14.25" />
                <path d="M23.9944458,12.1470337C23.9952393,12.0977783,24,12.0493774,24,12 c0-0.0139771-0.0021973-0.0274658-0.0022583-0.0414429C23.9970703,12.0215454,23.9938965,12.0838013,23.9944458,12.1470337z" fill="#E6E6E6" />
                <path opacity=".2" d="M12,9.5v0.25h11.7855721c-0.0157471-0.0825195-0.0329475-0.1680908-0.0503426-0.25H12z" fill="#FFF" />
                <linearGradient gradientUnits="userSpaceOnUse" y2={12} y1={12} x2={24} x1={0} id="LxT-gk5MfRc1Gl_4XsNKba_xoyhGXWmHnqX_gr1">
                  <stop stopOpacity=".2" stopColor="#fff" offset={0} />
                  <stop stopOpacity={0} stopColor="#fff" offset={1} />
                </linearGradient>
                <path d="M23.7352295,9.5H12v5h6.4862061C17.4775391,17.121582,14.9771729,19,12,19 c-3.8659668,0-7-3.1340332-7-7c0-3.8660278,3.1340332-7,7-7c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686 c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374l3.637146-3.4699707L19.8414307,2.940979 C17.7369385,1.1170654,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12c0,6.6273804,5.3725586,12,12,12 c6.1176758,0,11.1554565-4.5812378,11.8960571-10.4981689C23.9585571,13.0101929,24,12.508667,24,12 C24,11.1421509,23.906311,10.3068237,23.7352295,9.5z" fill="url(#LxT-gk5MfRc1Gl_4XsNKba_xoyhGXWmHnqX_gr1)" />
                <path opacity=".1" d="M15.7885132,5.890686C14.6939087,5.1806641,13.4018555,4.75,12,4.75c-3.8659668,0-7,3.1339722-7,7 c0,0.0421753,0.0005674,0.0751343,0.0012999,0.1171875C5.0687437,8.0595093,8.1762085,5,12,5 c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374 l3.637146-3.4699707l-3.637146,3.2199707C16.1289062,6.1018066,15.9560547,5.9995728,15.7885132,5.890686z" />
                <path opacity=".2" d="M12,0.25c2.9750366,0,5.6829224,1.0983887,7.7792969,2.8916016l0.144165-0.1375122 l-0.110014-0.0958166C17.7089558,1.0843592,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12 c0,0.0421753,0.0058594,0.0828857,0.0062866,0.125C0.0740356,5.5558472,5.4147339,0.25,12,0.25z" fill="#FFF" />
              </svg>
              <span style={{ marginLeft: '0.5rem' }}>Sign up with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;