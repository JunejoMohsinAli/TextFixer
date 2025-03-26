// // Footer.jsx
// import React from 'react';

// export default function Footer(props) {
//   // Dynamic style for footer based on the mode prop passed from App.jsx or About.jsx
//   const footerStyle = {
//     backgroundColor: props.mode === 'dark' ? '#042745' : 'white', // Dark/light background
//     color: props.mode === 'dark' ? 'white' : 'black',              // Dark/light text color
//     padding: '20px 0',
//     textAlign: 'center'
//   };

//   const iconStyle = {
//     fontSize: '1.5rem',               // Set icon size
//     margin: '0 10px',                // Add spacing between icons
//     color: props.mode === 'dark' ? 'white' : 'black'  // Icon color changes based on mode
//   };

//   return (
//     <footer style={footerStyle}>
//       <div className="container">
//         {/* Header text for footer */}
//         <h5>Connect with me</h5>
//         <div>
//         <img src="/linkedin.svg" alt="LinkedIn" style={iconStyle} />
//         <a
//             href="https://www.linkedin.com/in/mohsinalijunejo/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mx-2 text-decoration-none"
//           >
//             <i className="fab fa-linkedin" style={iconStyle}></i>
//           </a>
//           {/* GitHub Icon - update the URL if needed */}
//           <a
//             href="https://github.com/mohsinalijunejo"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mx-2 text-decoration-none"
//           >
//             <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i>
//           </a>
//           {/* Twitter Icon - update the URL if needed */}
//           <a
//             href="https://twitter.com/mohsinalijunejo"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mx-2 text-decoration-none"
//           >
//             <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
//           </a>
//           {/* Add more icons as desired */}
//         </div>
//         {/* Footer copyright text */}
//         <p className="mt-3 mb-0">&copy; {new Date().getFullYear()} Mohsin Ali Junejo</p>
//       </div>
//     </footer>
//   );
// }
