import { Container, Step, StepLabel, Stepper } from '@mui/material';
import { Connector, CustomButton, CustomContainer, StepIcon } from '../../styles';
import React, { useState } from 'react';
import ConfirmBooking from './ConfirmBooking';
import MakePayment from './MakePayment';
import SubmitBooking from './SubmitBooking';
import BookingSuccess from './BookingSuccess';
import { useForm } from '../utils';

function BookProperty() {
  const [step, updateStep] = useState(0);
  const steps = ['Confirm Booking', 'Make Payment', 'Submit'];

  const handleNext = () => (updateStep((activeStep) => activeStep + 1))

  const [values, setValue] = useForm({
    User: '', 
  })

  return (
    <Container maxWidth="lg">
      <Container sx={{my:4}}>
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
              return <ConfirmBooking />;
            case 1:
              return <MakePayment />
            case 2:
              return <SubmitBooking />;
            case 3:
                return <BookingSuccess />
            default:
              <div></div>;
          }
        })()}
        <CustomButton onClick={handleNext}>{step === steps.length - 1 ? 'Submit' : 'Next'}</CustomButton>
      </Container>
    </Container>
  );
}

export default BookProperty;