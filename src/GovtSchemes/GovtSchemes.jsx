import React from "react";
import StarRating from "../StarRating";

// Health Conditions Data (with images)
const healthConditions = [
  {
    title: 'AP GOVT.SCHEMES',
    image: "https://pbs.twimg.com/media/DflAIEfVQAMEBSy?format=jpg&name=4096x4096",
    description: "To provide financial assistance and various other benefits to all the permanent residents of Andhra Pradesh state the Andhra Pradesh State government launched various welfare schemes.",
  },
  {
    title: 'GOVT.SHEMES',
    image: "https://www.studyiq.com/articles/wp-content/uploads/2022/11/24173027/Schemes-of-Indian-Government.jpg",
    description: "To provide financial assistance and various other benefits to all the permanent residents of Indian government launched various welfare schemes. ",
  },
  {
    title: 'GOVT.SHEMES OF INDIA',
    image: "https://blogmedia.testbook.com/blog/wp-content/uploads/2023/10/government-schemes-44a890fa.png",
    description: "To provide financial assistance and various other benefits to all the permanent residents of Indian government launched various welfare schemes.",
  },
  {
    title: 'AP SCHEMES',
    image: "https://namasteandhra.com/wp-content/uploads/2023/05/TDP-promises.jpg",
    description: "To provide financial assistance and various other benefits to all the permanent residents of Indian government launched various welfare schemes.",
  },
  {
    title: 'SCHEMES OF AP',
    image: "https://studybizz.com/schemes/wp-content/uploads/2024/04/1000024615-1024x580.jpg",
    description: "To provide financial assistance and various other benefits to all the permanent residents of Indian government launched various welfare schemes.",
  },
  {
    title: 'GOVERNMENT SCHEMES',
    image: "https://tse4.mm.bing.net/th?id=OIP.3bdYTHqU9vk_klrR8EvEtAHaFm&pid=Api&P=0&h=180",
    description: "To provide financial assistance and various other benefits to all the permanent residents of Indian government launched various welfare schemes.",
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
