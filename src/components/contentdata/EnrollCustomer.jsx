import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Box } from '@mui/material';

function getSteps() {
  return ['Account Details', 'Personal Information', 'Upload Documents & Submit'];
}

function AccountDetails({ formData, handleChange }) {
  return (
    <div>
      <label>Username:</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
    </div>
  );
}

function PersonalInformation({ formData, handleChange }) {
  return (
    <div>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label>Phone Number:</label>
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
    </div>
  );
}

function UploadDocuments({ formData, handleChange, handleFileChange }) {
  return (
    <div>
      <Typography>Review your details:</Typography>
      <Typography>Username: {formData.username}</Typography>
      <Typography>Email: {formData.email}</Typography>
      <Typography>Phone Number: {formData.phoneNumber}</Typography>
      <label>Upload Documents (ZIP only):</label>
      <input
        type="file"
        name="documents"
        accept=".zip"
        onChange={handleFileChange}
        required
      />
    </div>
  );
}

export default function EnrollmentStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
    documents: null, // To store the uploaded file
  });

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      documents: e.target.files[0],
    });
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append('username', formData.username);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phoneNumber', formData.phoneNumber);
    formDataToSend.append('documents', formData.documents);

    const response = await fetch('/enrollment-servlet', {
      method: 'POST',
      body: formDataToSend,
    });

    const result = await response.json();

    if (result.success) {
      alert("Enrollment successful!");
    } else {
      alert("Enrollment failed, please try again.");
    }
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <AccountDetails formData={formData} handleChange={handleChange} />;
      case 1:
        return <PersonalInformation formData={formData} handleChange={handleChange} />;
      case 2:
        return <UploadDocuments formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} />;
      default:
        return 'Unknown stepIndex';
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed</Typography>
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        )}
      </div>
    </Box>
  );
}
