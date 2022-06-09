import styled from "@emotion/styled";
import { Check } from "@mui/icons-material";
import { StepConnector, stepConnectorClasses, StepIconProps } from "@mui/material";

  export const Connector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  const StyledStepIcon = styled('div')<{ ownerState: { active?: boolean } }>(({ ownerState }) => ({
    display: 'flex',
    height: 30,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .StepIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 28,
      border: '1px solid grey',
      borderRadius: '50%',
    },
    '& .StepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }));

  export const StepIcon = (props: StepIconProps) => {
    const { active, completed, className } = props;

    return (
      <StyledStepIcon ownerState={{ active }} className={className}>
        {completed ? <Check className="StepIcon-completedIcon" /> : <div className="StepIcon-circle" />}
      </StyledStepIcon>
    );
  };