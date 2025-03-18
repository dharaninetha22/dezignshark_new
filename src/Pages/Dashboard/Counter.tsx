import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

// Styled Counter Section
const CounterSection = styled(Box)({
  position: "relative",
  zIndex: 1,
  marginTop: "100px",
});

// Styled Counter Item
const CounterItem = styled(Box)({
  textAlign: "center",
  justifyContent: "center",
  marginBottom: "10px",
});

// Counter Value
const CounterValue = styled(Box)({
  fontFamily: "var(--font-family-three)",
  fontSize: "50px",
  fontWeight: "bold",
  lineHeight: "96px",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "5px",
});

// Counter Text
const CounterText = styled(Typography)({
  fontSize: "32px",
  fontFamily: "var(--font-family-heading)",
  fontWeight: 700,
  lineHeight: "42px",
  color: "white",
});

// Counter Data
const counterData = [
  { count: 100, suffix: "%", text: "Customer Satisfaction" },
  { count: 200, suffix: "K", text: "Service Provided" },
  { count: 345, suffix: ".", text: "Creative Employees" },
  { count: 50, suffix: "M", text: "Hours Of Work" },
];

const WptbCounter = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    setTimeout(() => {
      setCounts([100, 200, 345, 50]);
    }, 500);
  }, []);

  return (
    <CounterSection className="wptb-counter5 style-studio pt-0" pb={8}>
      <Container maxWidth='xl'>
        <Box className="wptb-counter--box">
          <Grid container spacing={4} alignItems="center">
            {counterData.map((item, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <CounterItem>
                  <CounterValue>
                    <Odometer value={counts[index]} format="d" />
                    <span style={{ marginLeft: "5px" }}>{item.suffix}</span>
                  </CounterValue>
                  <CounterText>
                    <Typography variant="h4">

                        {item.text}
                    </Typography>
                    </CounterText>
                </CounterItem>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </CounterSection>
  );
};

export default WptbCounter;
