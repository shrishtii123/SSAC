import React, { useState } from "react";
import "../css/card.css";

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} className="c-card-image" />;
};

const Card = ({ country, universities }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const renderUniversities = () => {
    if (!universities || universities.length === 0) {
      return <p>No universities found.</p>;
    }

    return universities.map((university, index) => (
      <div key={index} className="c-university">
        <img src={university.image} alt={university.name} className="c-university-image" />
        <div>
          <h3>{university.name}</h3>
          <p>Location: {university.location}</p>
          <p>Established: {university.established}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="c-card">
      <Image src={country.image} alt={country.name} />
      <div>
        <h2>{country.name}</h2>
        <p>Exams: {country.Exams}</p>
        <p>Region: {country.region}</p>
      </div>
      <button className="c-card-button" onClick={handleCardClick}>
        View Universities
      </button>
      {modalOpen && (
        <div className="c-modal">
          <div className="c-modal-content">
            <h2>Universities in {country.name}</h2>
            <button className="c-modal-close" onClick={handleCloseModal}>
              Close
            </button>
            <div className="c-universities">{renderUniversities()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
