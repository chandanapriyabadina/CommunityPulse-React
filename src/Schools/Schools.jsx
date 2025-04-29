import React from 'react';
import StarRating from "../StarRating";

// Health Conditions Data (with images)
const healthConditions = [
  {
    title: 'ZP HIGH SCHOOL',
    image: 'https://content.jdmagicbox.com/comp/tuni/g2/9999p8854.8854.170210134534.h8g2/catalogue/andhra-pradesh-model-school-hamsavaram-tuni-schools-syt723h.jpg',
    description: 'MPL HS(G), NARASARAOPET is a cluster of schools in the MPL HS(G), NARASARAOPET block of the GUNTUR district in Andhra Pradesh.',
    dietRecommendations: 'Best Public School in Narasaraopet. When it comes to helping children and young adults advance forward in their lives.',
  },
  {
    title: 'SURYA SCHOOL',
    image: 'https://images.indianexpress.com/2020/02/andhra-pradesh-education-1200.jpg?w=389',
    description: 'It is located in NARASARAOPETA block of GUNTUR district of ANDHRA PRADESH. The school consists of Grades from 1 to 10.',
    dietRecommendations: 'Best Public School in Narasaraopet. When it comes to helping children and young adults advance forward in their lives.',
  },
  {
    title: 'BIRDS E.M.HIGH SCHOOL',
    image: 'https://apmstamadainformationtechnologystudents.wordpress.com/wp-content/uploads/2020/07/15-21-17-img_20191019_170137.jpg?w=1024',
    description: 'It is located in NARASARAOPETA block of GUNTUR district of ANDHRA PRADESH. The school consists of Grades from 1 to 10.',
    dietRecommendations: 'Best Public School in Narasaraopet. When it comes to helping children and young adults advance forward in their lives.',
  },
  {
    title: 'BHASYAM INST.',
    image: 'https://content.jdmagicbox.com/comp/tuni/y5/9999p8854.8854.180101084115.b6y5/catalogue/sri-chaitanya-school-tuni-ho-tuni-schools-tl1t6nemf4.jpg',
    description: 'It is located in NARASARAOPETA block of GUNTUR district of ANDHRA PRADESH. The school consists of Grades from 1 to 10.',
    dietRecommendations: 'Best Public School in Narasaraopet. When it comes to helping children and young adults advance forward in their lives.',
  },
  {
    title: 'SRI CHAITANYA',
    image: 'https://content.jdmagicbox.com/comp/vizianagaram/s4/9999p8922.8922.160308073721.e5s4/catalogue/sri-chaitanya-techno-school-dasannapet-vizianagaram-cbse-schools-Co7Jhblpgz.jpg',
    description: 'It is located in NARASARAOPETA block of GUNTUR district of ANDHRA PRADESH. The school consists of Grades from 1 to 10.',
    dietRecommendations: 'Best Public School in Narasaraopet. When it comes to helping children and young adults advance forward in their lives.',
  },
  {
    title: 'NARAYANA',
    image: 'https://schools.olympiadsuccess.com/assets/images/school_images/25625_building.jpg',
    description: 'It is located in NARASARAOPETA block of GUNTUR district of ANDHRA PRADESH. The school consists of Grades from 1 to 10.',
    dietRecommendations: 'Best Public School in Narasaraopet. When it comes to helping children and young adults advance forward in their lives.',
  },
];

const HealthConditions = () => {
  // Limit displayed cards to 6 (2 rows with 3 cards each)
  const displayedConditions = healthConditions.slice(0, 6);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Schools In Community  <i></i></h1>
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
              <h4 style={styles.dietHeader}>School Details:</h4>
              <p style={styles.dietDescription}>{condition.dietRecommendations}</p>
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
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(to right, #c289d0, #53a4e1, #ca6ba9)',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '30px',
    fontWeight: 'bold',
    color: '#333',
  },
  conditionsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 cards per row
    gap: '30px',
    justifyItems: 'center',
  },
  conditionCard: {
    width: '100%',
    backgroundColor: '#ffffff', // White background for each card
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
    border: '1px solid #d1d9e6', // Light border for the card
  },
  conditionCardHover: {
    transform: 'scale(1.05)',
  },
  conditionImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
  cardContent: {
    padding: '20px',
  },
  conditionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  conditionDescription: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '15px',
  },
  dietHeader: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: '5px',
  },
  dietDescription: {
    fontSize: '1rem',
    color: '#333',
  },
};

export default HealthConditions;
