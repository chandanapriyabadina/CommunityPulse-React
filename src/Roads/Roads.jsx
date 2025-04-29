import React from "react";
import StarRating from "../StarRating";

// Health Conditions Data (with images)
const healthConditions = [
  {
    title: 'VJY-GNT HIGHWAY',
    image: "https://www.thehindubusinessline.com/migration_catalog/article17955177.ece/ALTERNATES/LANDSCAPE_615/BL14_AP_ROADS_.jpg",
    description: "It is the NH-365B located in NARASARAOPETA block of GUNTUR district of ANDHRA PRADESH.Best road in Narasaraopet. When it comes to travel for long journeys in this highway.",
  },
  {
    title: 'ELLAMANDA ROAD',
    image: "https://www.telugu360.com/wp-content/uploads/2021/04/AP-Roads.jpg",
    description: "It is located in NARASARAOPETA block of GUNTUR district of ANDHRA PRADESH.It is the NH-33B.It has ",
  },
  {
    title: 'CPT HIGHWAY ROAD',
    image: "https://tse3.mm.bing.net/th?id=OIP.SJtKyuHo9sySTNBGgnyIQgHaE7&pid=Api&P=0&h=180",
    description: "It is located in NARASARAOPETA block of GUNTUR district of ANDHRA PRADESH.It is the NH-15B",
  },
  {
    title: 'VJY-HYD ROAD',
    image: "https://media.istockphoto.com/id/1460177877/photo/city-bus-lane-public-transport-road-a.jpg?s=1024x1024&w=is&k=20&c=5_jGzXZQRnZDsX5cfrgOjZHqhJYzAYcCNe2J_RHDSfg=",
    description: "It is located in NARASARAOPETA block of GUNTUR district of ANDHRA PRADESH.It is the NH-255A",
  },
  {
    title: 'KONDAVEEDU ROAD',
    image: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/state-highway-ap.jpg",
    description: "It is located in NARASARAOPETA block of GUNTUR district of ANDHRA PRADESH.It is the NH-65B",
  },
  {
    title: 'GNT-ONGOLE HIGHWAY',
    image: "https://assets.thehansindia.com/h-upload/2023/01/24/1331593-ds.jpg",
    description: "It is located in NARASARAOPETA block of GUNTUR district of ANDHRA PRADESH.It is the NH-35D",
  },
];

const HealthConditions = () => {
  const displayedConditions = healthConditions.slice(0, 6);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>
        Roads In Community <i></i>
      </h1>
      <div style={styles.conditionsContainer}>
        {displayedConditions.map((condition, index) => (
          <div key={index} style={styles.conditionCard}>
            <img
              src={condition.image}
              alt={condition.title}
              style={styles.conditionImage}
            />
            <div style={styles.cardContent}>
              <h3 style={styles.conditionTitle}>{condition.title}</h3>
              <p style={styles.conditionDescription}>{condition.description}</p>
              <StarRating totalStars={5} /> {/* Add Star Rating here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(to right, #c289d0, #53a4e1, #ca6ba9)",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "30px",
    fontWeight: "bold",
    color: "#333",
  },
  conditionsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 cards per row
    gap: "30px",
    justifyItems: "center",
  },
  conditionCard: {
    width: "100%",
    backgroundColor: "#ffffff", // White background for each card
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
    border: "1px solid #d1d9e6", // Light border for the card
  },
  conditionImage: {
    width: "100%",
    height: "350px",
    objectFit: "cover",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  cardContent: {
    padding: "20px",
  },
  conditionTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  conditionDescription: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "15px",
  },
};

export default HealthConditions;
