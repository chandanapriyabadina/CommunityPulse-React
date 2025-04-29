import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
  // Array of image URLs and button labels
  const imageItems = [
    {
      url: 'https://content.jdmagicbox.com/comp/vizianagaram/s4/9999p8922.8922.160308073721.e5s4/catalogue/sri-chaitanya-techno-school-dasannapet-vizianagaram-cbse-schools-Co7Jhblpgz.jpg',
      buttonLabel: 'Schools',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhxw2WNa51aFZTGJ0LgweD9EGvYwJ23G7uw&s',
      buttonLabel: 'Roads',
    },
    {
      url: 'https://cdn.zeebiz.com/sites/default/files/2022/05/29/184147-govt-schemes.jpg',
      buttonLabel: 'GovtSchemes',
    },
    {
      url: 'https://www.agrifarming.in/wp-content/uploads/2020/09/field-5416600_1920.jpg',
      buttonLabel: 'Farms',
    },
    {
      url: 'https://www.bizzbuzz.news/h-upload/2024/07/13/1927491-climate-crisis.webp',
      buttonLabel: 'Community',
    },
    {
      url: 'https://assets.thehansindia.com/h-upload/2021/12/03/1124826-panchayat-secretaries.webp',
      buttonLabel: 'Local Offices',
    },
  ];

  const navigate = useNavigate();

  // Function to generate navigation path from button label
  const generatePathFromLabel = (label) => {
    // Convert button label to lowercase, replace spaces with hyphens, and trim it
    return `/${label.toLowerCase().replace(/\s+/g, '-')}`;
  };

  // Function to handle button click and navigate to the generated path
  const handleButtonClick = (label) => {
    const path = generatePathFromLabel(label); // Generate path dynamically
    navigate(path); // Navigate to the generated path
  };

  return (
    <div>
      {/* Add heading */}
      <h1 className="heading">Community Pulse Services</h1>
      <div className="grid-container">
        {imageItems.map((item, index) => (
          <div className="grid-item" key={index}>
            <img
              src={item.url}
              alt={`Grid item ${index + 1}`}
              className="grid-image"
            />
            <button
              className="grid-button"
              onClick={() => handleButtonClick(item.buttonLabel)} // Pass button label to click handler
            >
              {item.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
