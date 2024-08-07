import React from 'react';
import carousel1 from "../images/hotel3.png";
import carousel2 from "../images/hotel1.jpg";
import carousel3 from "../images/hotel2.jpg";
import roomImage from "../images/room.jpg"; // Add the new room image here
import welcomeImage from "../images/welc.jpg"; // Add the new image here

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
          style={{ backgroundColor: 'purple' }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          style={{ backgroundColor: 'purple' }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          style={{ backgroundColor: 'purple' }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
          style={{ backgroundColor: 'purple' }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
          style={{ backgroundColor: 'purple' }}
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={welcomeImage} className="d-block w-100" alt="Welcome to Saffron Stays" />
          <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h3 style={{ color: 'white', fontSize: '2.5rem' }}>Welcome to Saffron Stays</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src={roomImage} className="d-block h-100 w-100" alt="Room" />
          <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h3 style={{ color: 'white', fontSize: '2rem' }}>Elegant Rooms</h3>
            <p style={{ color: 'white', fontSize: '1.5rem' }}>Experience the luxury and comfort of our stylish rooms.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carousel1} className="d-block w-100" alt="Swimming Pool" />
          <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h5 style={{ color: 'white', fontSize: '2rem', fontFamily: 'cursive' }}>Swimming Pool</h5>
            <p style={{ color: 'white', fontSize: '1.5rem', fontFamily: 'cursive' }}>Relax and unwind in our luxurious pool.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carousel2} className="d-block w-100" alt="Bar" />
          <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h5 style={{ color: 'white', fontSize: '2rem', fontFamily: 'cursive' }}>Bar</h5>
            <p style={{ color: 'white', fontSize: '1.5rem', fontFamily: 'cursive' }}>Enjoy a wide selection of drinks at our stylish bar.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={carousel3} className="d-block w-100" alt="Terrace" />
          <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h5 style={{ color: 'white', fontSize: '2rem', fontFamily: 'cursive' }}>Terrace</h5>
            <p style={{ color: 'white', fontSize: '1.5rem', fontFamily: 'cursive' }}>Dine with a view at our stylish terrace restaurant.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: 'invert(100%)' }}></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: 'invert(100%)' }}></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
