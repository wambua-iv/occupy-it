import { Container, Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react';
import { Connector, CustomButton, StepIcon } from '../../styles';
import { CustomContainer } from '../../styles';
import ContactInfo from './ContactInfo';
import Details from './Details';
import PropertyInfo from './PropertyInfo';
import Success from './Success';

function CreateListing() {
  const [step, updateStep] = useState(0);

  const steps = ['Details', 'Property Infomation', 'Contact Information'];

  const handleNext = () => updateStep((prevActiveStep) => prevActiveStep + 1);

  return (
    <Container maxWidth="lg">
      <Container sx={{ my: 4 }}>
        <Stepper alternativeLabel activeStep={step} connector={<Connector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Container>

      <Container maxWidth="sm" sx={CustomContainer}>
        {(() => {
          switch (step) {
            case 0:
              return <Details />;
            case 1:
              return <PropertyInfo />;
            case 2:
              return <ContactInfo />;
            case 3:
              return <Success />;
            default:
              <div></div>;
          }
        })()}
        <CustomButton onClick={handleNext}>{step === steps.length - 1 ? 'Finish' : 'Next'}</CustomButton>
      </Container>
    </Container>
  );
}

export default CreateListing;
