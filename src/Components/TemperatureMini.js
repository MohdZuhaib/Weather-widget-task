import React from "react";
import { Box, Typography } from "@mui/material";

const TemperatureMini = ({
  id,
  name,
  max,
  min,
  weather,
  day,
  setCurrentDay,
  currentDay,
  currentUnit,
  setCurrentUnit,
}) => {
  const setActive = (day) => {
    setCurrentUnit({ ...currentUnit, unit: "C", temp: day.currentTemp });
    setCurrentDay(day);
  };
  return (
    <Box
      ml={2}
      onClick={() => setActive(day)}
      className={currentDay === day ? "hover selected-day" : "hover"}
    >
      <Typography varoiant="h4">{name}</Typography>
      <img src={weather} alt="weather" />
      <Box display="flex">
        <Typography variant="body1">{max}&#176;</Typography>
        <Typography variant="body1" sx={{ ml: 1 }}>
          {min}&#176;
        </Typography>
      </Box>
    </Box>
  );
};

export default TemperatureMini;
