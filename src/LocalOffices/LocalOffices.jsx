import React from "react";
import "./LocalOffices.css";

// Nutrition data
const nutritionData = [
  {
    name: "School Development",
    description: "Primary source of energy.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxi5sCrLHGU2uioYFrWa7pN89t8WkNOGCtkw&s",
  },
  {
    name: "Road Development",
    description: "Essential for building and repairing tissues.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3Wf_YhMoAog2CXKRQYharBYEaESWAkDdIw&s",
  },
  {
    name: "Local Offices",
    description: "Provide long-term energy and support cell function.",
    image: "https://assets.thehansindia.com/h-upload/2021/12/03/1124826-panchayat-secretaries.webp", // Replaced with a valid image URL
  },
  {
    name: "Community offices",
    description: "Essential for immune function and overall health.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ7_ZN2bA8oN2zepXNu3sz5Gae10FN_GmiBv8xTeDLIgYaLhMlMQKaHK3LAvYRhoOgRlg&usqp=CAU",
  },
  {
    name: "Farms",
    description: "Support various bodily functions, including bone health.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQkpOEHYTPw6Z1iTptf7nWTD3-8HwlJwKEPA&s",
  },
  {
    name: "Farming",
    description: "Important for digestive health and regulating blood sugar.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQF_fmqPSMKGfg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679324759218?e=2147483647&v=beta&t=aoSA-FWDknFZElFA0xWkNKTQj1ZWhDdPJOLhbpLzeNI",
  },
  {
    name: "Organic Farming",
    description:
      "Omega-3s support brain function, and promote heart health. Omega-6s are important for skin and hair growth.",
    image:
      "https://sc0.blr1.cdn.digitaloceanspaces.com/article/110964-kgximdrzih-1547894303.jpg",
  },
  {
    name: "Skill development",
    description:
      "Essential for hormone production and cell membrane structure.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRedtT9gFUj5EXCvndsnWJnnIN7QE0DI0ZLKA&s",
  },
];

const LocalOffices = () => {
  return (
    <div className="nutrition-container">
      <h1>Explore Community</h1>
      <div className="nutrition-list">
        {nutritionData.map((nutrient, index) => (
          <div className="nutrition-item" key={index}>
            <img
              src={nutrient.image}
              alt={nutrient.name}
              className="nutrition-image"
            />
            <h2>{nutrient.name}</h2>
            <p>{nutrient.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalOffices;
