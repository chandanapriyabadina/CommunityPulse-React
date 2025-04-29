import React from "react";
import "./Farms.css";

// Nutrition data
const nutritionData = [
  {
    name: "School Development",
    description: "Primary source of energy.",
    image:
      "https://thumbs.dreamstime.com/b/male-farmer-showcases-healthy-soil-his-field-sunset-emphasizing-importance-organic-farming-male-farmer-330555795.jpg",
  },
  {
    name: "Road Development",
    description: "Essential for building and repairing tissues.",
    image:
      "https://media.licdn.com/dms/image/v2/C5612AQGLXjoH441cHQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1603297496181?e=2147483647&v=beta&t=TWQFtoPSQ_HlgtLgK70R1NhLt8qQW9T9o4zEjO5VN04",
  },
  {
    name: "Local Offices",
    description: "Provide long-term energy and support cell function.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXlREUoCkZYntgtqt0w9Gt9sTf1NEahzj1Kg&s",
  },
  {
    name: "Community offices",
    description: "Essential for immune function and overall health.",
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/30/full/1722336945-8642.jpg?im=FitAndFill=(826,465)",
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
    image: "https://sc0.blr1.cdn.digitaloceanspaces.com/article/110964-kgximdrzih-1547894303.jpg",
  },
  {
    name: "Skill development",
    description: "Essential for hormone production and cell membrane structure.",
    image:
      "https://i.natgeofe.com/n/748f1c42-0d8b-498e-85fd-88151c6f863b/01_organic_farming_i8860_20181003_11260_16x9.jpg?w=1200",
  },
];

const Farms = () => {
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Farms;
