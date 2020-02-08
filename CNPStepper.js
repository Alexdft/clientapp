import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import StepContent from "@material-ui/core/StepButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return [
    "Create project",
    "Connect Git project",
    "Select repositories",
    "Select period",
    "Ignor files",
    "Group authors"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Create project";
    case 1:
      return "Connect Git project";
    case 2:
      return "Select repositories";
    case 3:
      return "Select period";
    case 4:
      return "Ignor files";
    case 5:
      return "Group authors";
    default:
      return "Unknown step";
  }
}

const CNPStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();
  
  const handleStep = step => () => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              onClick={handleStep(index)}
              completed={completed[index]}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
export default CNPStepper;