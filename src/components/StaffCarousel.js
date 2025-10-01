import React, { useState, useEffect } from 'react';
import './StaffCarousel.css';
import danielaImage from '../assets/daniela-maleh.jpg';
import agustinaImage from '../assets/agustina-fernandez-capiet.jpeg';
import ludmilaImage from '../assets/ludmila-rodriguez.jpeg';

const StaffCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const staffMembers = [
    {
      title: "Directora Médica",
      name: "Dra. Daniela Maleh",
      specialty: "Dermatóloga (M.N 143.541)",
      image: danielaImage
    },
    {
      title: "Coordinadora Médica", 
      name: "Dra. Agustina Fernández Capiet",
      specialty: "Dermatóloga",
      image: agustinaImage
    },
    {
      title: "",
      name: "Dra. Ludmila Rodríguez",
      specialty: "Dermatóloga",
      image: ludmilaImage
    },
    {
      title: "",
      name: "Dra. Malena Colasanti",
      specialty: "Dermatóloga",
      image: null
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % staffMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + staffMembers.length) % staffMembers.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % staffMembers.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [staffMembers.length]);

  return (
    <div className="staff-carousel">
      <h2 className="section-title">Equipo Médico</h2>
      
      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Anterior">
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <div className="carousel-wrapper">
          <div 
            className="carousel-track" 
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            {staffMembers.map((member, index) => (
              <div key={index} className="carousel-slide">
                <div className="doctor-card">
                  <div className="doctor-image">
                    {member.image ? (
                      <img src={member.image} alt={member.name} />
                    ) : (
                      <div className="placeholder-image">Foto</div>
                    )}
                  </div>
                  <div className="doctor-info">
                    <h4 className="doctor-name">{member.name}</h4>
                    {member.title && <h3 className="doctor-title">{member.title}</h3>}
                    <p className="doctor-specialty">{member.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Siguiente">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <div className="carousel-dots">
        {staffMembers.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StaffCarousel;
