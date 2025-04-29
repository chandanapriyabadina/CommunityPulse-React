import React, { useState } from "react";
import Slider from "react-slick";
import './About.css'; // Your custom styles

const AboutWithVideo = () => {
  // Carousel slides data
  const slides = [
    {
      text: "There are times that members of the community may not be all coming together For example, after the holidays are over, people typically stay in their houses. With this knowledge, use it to your advantage! Planning an event will bring people out of their houses and socialize with their friends and neighbors. Community events allow people to get out and meet people they may not otherwise know. These events may even turn into networking opportunities, which can help people in their personal and professional lives!",
      image: "https://students.1fbusa.com/hubfs/25%20Ways%20to%20Volunteer%20in%20Your%20Community.jpg",
      alt: "Diverse community gathering",
    },
    {
      text: "Social media collaboration is when two or more brands team up to create content shared on their respective social media channels. This could include sponsored posts, giveaways, or other content that leverages each partner’s audience. Social media collaborations can grow your reach and engagement, build brand awareness, create valuable partnerships, and drive sales. They are also a great way to foster relationships with other brands and expand your customer base.",
      image: "https://blog.contentstudio.io/wp-content/uploads/2023/04/Social-media-collaboration.jpg",
      alt: "Collaboration for social good",
    },
    {
      text: "A community event with people of all ages is a gathering or activity designed to bring together individuals of various age groups within a community. The goal of such an event is to promote unity, foster connections, and create a shared experience that everyone—children, teenagers, adults, and seniors—can enjoy.",
      image: "https://static.vecteezy.com/system/resources/previews/002/405/482/original/cartoon-characters-in-different-ages-vector.jpg",
      alt: "Community event with people of all ages",
    },
    {
      text: "Community service projects are vital because they have a profound impact on both the community and the individuals involved. They address local challenges, improve public spaces, and provide essential services, contributing to a stronger, more vibrant community. By bringing people together to work toward common goals, these projects foster unity and collaboration.",
      image: "https://uploads-ssl.webflow.com/601d9af1ac96921333a10827/607f27be23dde822a8bf01ab_specials-22.jpeg",
      alt: "Community project and volunteers",
    },
    {
      text: "Celebrating community achievements refers to recognizing and honoring the collective accomplishments of a group of individuals within a community. These achievements can vary widely but typically represent milestones, contributions, or successes that have positively impacted the community or its members.",
      image: "https://fastercapital.com/i/Community-involvement--The-Power-of-Community-Involvement--Making-a-Difference-Together--Celebrating-Community-Achievements.webp",
      alt: "Person celebrating a community achievement",
    },
    {
      text: "Community connection is vital because it fosters a sense of belonging and shared purpose among individuals. When people feel connected to their community, they thrive emotionally, socially, and even physically. This connection reduces feelings of loneliness and isolation, as relationships within the community provide emotional support during difficult times and enhance happiness.",
      image: "https://hotgoodwill.org/wp-content/uploads/2023/09/Community-Connect-Logo-File-small-1600x900.jpg",
      alt: "People laughing and connecting in a community",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide.image} alt={slide.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
      <div className="carousel-text">
        
        <h3>{slides[currentSlide].text}</h3>
      </div>

      {/* YouTube Video Embed without watermark */}
      <div className="video-container">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/DworMm9kiQc?modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Text about the video */}
      <div className="video-description">
        <h2>About our community pulse</h2>
        <p>
          we provides an insightful overview of community engagement strategies and 
          how individuals and groups can take part in making a difference within their localities. 
          It highlights the importance of coming together after events such as holidays when people 
          tend to stay indoors. The video emphasizes the value of organizing community events, 
          fostering social connections, and creating opportunities for networking, personal growth, 
          and emotional well-being. 
        </p>
        <p>
          Watching this video will give you ideas and motivation to participate in or organize 
          community activities that contribute to a stronger, more connected society. It’s a great 
          resource for anyone looking to get involved and make a positive impact!
        </p>
      </div>
    </div>
  );
};

export default AboutWithVideo;