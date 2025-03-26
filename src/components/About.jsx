import React from 'react';

export default function About(props) {

  const myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#042745' : 'white'
  };

  return (
    <div className="container mt-5" style={myStyle}>
      {/* Header Section */}
      <header className="mb-4 text-center">
        <h1>About Us</h1>
        <p className="lead">Learn more about the developer and the app.</p>
      </header>

      {/* Profile Card */}
      <div className="card mb-5 shadow" style={myStyle}>
        <div className="row g-0">
          <div className="col-md-4 text-center my-auto">
            <img
              src="/photo.jpg"
              alt="Mohsin Ali Junejo"
              className="img-fluid rounded-circle p-3"
              style={{ maxWidth: '200px' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">Mohsin Ali Junejo</h2>
              <h6 className="card-subtitle mb-2"><i>Front-End Developer</i></h6>
              <p className="card-text">
                Expertise in HTML, CSS, JavaScript, Bootstrap, and React.JS. Passionate about MERN stack development.
              </p>
              <a
                href="https://www.linkedin.com/in/mohsinalijunejo/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="bi bi-linkedin"></i> Let's Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion for Q&A */}
      <div className="accordion mb-4" id="aboutAccordion" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              What is the purpose of this app?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body" style={myStyle}>
              This app is a text utility tool that allows you to manipulate text in various ways – converting text to uppercase or lowercase, clearing the text, copying it, and removing extra spaces. It’s designed to be fast, efficient, and user-friendly.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              How do I use the text manipulation features?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body" style={myStyle}>
              Enter your text in the provided text area, then click any of the buttons to perform the action you desire, whether it’s converting to uppercase, lowercase, clearing the text, copying it, or removing extra spaces. The app responds instantly with your modified text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              How do I connect with the developer?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body" style={myStyle}>
              You can easily connect with Mohsin Ali Junejo by clicking the LinkedIn button above, which will take you to his LinkedIn profile.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
