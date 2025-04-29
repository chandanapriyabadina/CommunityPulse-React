import React from "react";
import "./Community.css";

// Nutrition data
const nutritionData = [
  {
    name: "School Development",
    description: "School development enhances the quality of education, fostering a well-educated community. It also creates job opportunities, boosting local economic growth.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxi5sCrLHGU2uioYFrWa7pN89t8WkNOGCtkw&s",
  },
  {
    name: "Road Development",
    description: "Road development improves connectivity, reducing travel time and costs for the community. It also stimulates local businesses and economic activities.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3Wf_YhMoAog2CXKRQYharBYEaESWAkDdIw&s",
  },
  {
    name: "Local Offices",
    description: "Local office development enhances access to public services, benefiting the community. It also creates employment opportunities, driving economic growth.",
    image: "https://assets.thehansindia.com/h-upload/2021/12/03/1124826-panchayat-secretaries.webp", // Replaced with a valid image URL
  },
  {
    name: "Community offices",
    description: "Community office development strengthens local governance and service delivery. It also fosters community engagement and participation, promoting social cohesion.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ7_ZN2bA8oN2zepXNu3sz5Gae10FN_GmiBv8xTeDLIgYaLhMlMQKaHK3LAvYRhoOgRlg&usqp=CAU",
  },
  {
    name: "Farms",
    description: "Farm development increases agricultural productivity, ensuring food security for the community. It also boosts the local economy through job creation and trade opportunities.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQkpOEHYTPw6Z1iTptf7nWTD3-8HwlJwKEPA&s",
  },
  {
    name: "Farming",
    description: "Farm development increases agricultural productivity, ensuring food security for the community. It also boosts the local economy through job creation and trade opportunities.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQF_fmqPSMKGfg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679324759218?e=2147483647&v=beta&t=aoSA-FWDknFZElFA0xWkNKTQj1ZWhDdPJOLhbpLzeNI",
  },
  {
    name: "Organic Farming",
    description:
      "Organic farming development promotes sustainable agriculture, enriching soil health and biodiversity. It also provides healthier food options and supports local eco-friendly businesses.",
    image:
      "https://sc0.blr1.cdn.digitaloceanspaces.com/article/110964-kgximdrzih-1547894303.jpg",
  },
  {
    name: "Skill development",
    description:
      "Skill development enhances individual capabilities, making the community's workforce more competent and adaptable. It also drives economic growth by fostering innovation and productivity.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRedtT9gFUj5EXCvndsnWJnnIN7QE0DI0ZLKA&s",
  },
];

const Community= () => {
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

export default Community;
