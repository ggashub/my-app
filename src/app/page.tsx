"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, Button, Grid, MobileStepper } from '@mui/material';

import BasicForm from '@/components/basicForm';

export default function Home() {
  let sliderRef;

  const maxSteps = 3;
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [slider1, setSlider1] = useState(null);
  const slideSettings = {
    infinite: false,
    speed: 500
  };
  const formSettings1 = {
    colNum: 3
  };
  const formSettings2 = {
    colNum: 6
  };
  const formSettings3 = {
    colNum: 9
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    sliderRef.slickNext();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    sliderRef.slickPrev();
  }

  return (
    <main>
      <Grid container sx={{ textAlign: 'center' }}>
        <Grid item xs>
          <Box>FlOW ONE</Box>
        </Grid>
        <Grid item xs={6}>
          <Box>FLOW TWO</Box>
        </Grid>
        <Grid item xs>
          <Box>FLOW THREE</Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <Box sx={{ mt: 8}}>
            <Slider ref={c => (sliderRef = c)} {...slideSettings}>
              <div>
                <BasicForm {...formSettings1} />
              </div>
              <div>
                <BasicForm {...formSettings2} />
              </div>
              <div>
                <BasicForm {...formSettings3} />
              </div>
            </Slider>
            <MobileStepper
              sx={{ mt: 8 }}
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </main>
  )
}
