import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Button = styled.button`
  background-color: #ff6f61;
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #ff4c39;
  }
`;

const Profile = styled.div`
  text-align: center;
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
  color: #333;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  font-family: "Playfair Display", serif;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #555;
`;

const Profession = styled.h2`
  font-size: 1.5rem;
  color: #2980b9;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 20px;
  border: 3px solid #2980b9;
`;

function App() {
  const [person] = useState({
    fullName: "Bisola Odusanwo",
    bio: "A passionate developer with a love for coding and innovation.",
    imgSrc: process.env.PUBLIC_URL + "/images/bisola_20240621-111152.jpg", // Using the public folder path
    profession: "Software Engineer",
  });

  const [shows, setShows] = useState(false);

  return (
    <Container>
      <h1>Akame profile with React State </h1>
      <Button onClick={() => setShows(!shows)}>
        {shows ? "Hide Profile" : "Show Profile"}
      </Button>
      {shows && (
        <Profile>
          <Image src={person.imgSrc} alt="Profile" />
          <Name>{person.fullName}</Name>
          <Bio>{person.bio}</Bio>
          <Profession>{person.profession}</Profession>
        </Profile>
      )}
    </Container>
  );
}

export default App;
