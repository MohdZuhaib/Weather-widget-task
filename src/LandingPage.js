import React, { useState } from "react";
import Container from "@mui/material/Container";
import Header from "./Components/Header";
import Body from "./Components/Body";
import days from "./staticData";

const LandingPage = () => {
  const monday = days[0];
  const [currentDay, setCurrentDay] = useState(monday);
  const [currentUnit, setCurrentUnit] = useState({
    unit: "C",
    temp: currentDay.currentTemp,
  });
  console.log(currentDay);

  return (
    <Container maxWidth="xl" sx={{ pt: 2 }}>
      <Header
        currentDay={currentDay}
        currentUnit={currentUnit}
        setCurrentUnit={setCurrentUnit}
      />
      <Body
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        setCurrentUnit={setCurrentUnit}
        currentUnit={currentUnit}
      />
    </Container>
  );
};

export default LandingPage;
