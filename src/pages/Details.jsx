import { useState } from "react";
import {
  Box,
  Paper,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import Navbar from "../components/Navbar";

import PersonalForm from "../components/forms/PersonalForm";
import ExperienceForm from "../components/forms/ExperienceForm";
import EducationForm from "../components/forms/EducationForm";
import SkillsForm from "../components/forms/SkillsForm";

function Details() {
  const [step, setStep] = useState(0);

  const menu = [
    "Personal Info",
    "Work Experience",
    "Education",
    "Key Skills",
  ];

  return (
    <>
      <Navbar />

      <Box
        sx={{
          maxWidth: "1200px",
          margin: "40px auto",
          display: "flex",
          gap: 4,
          px: 2,
        }}
      >
        {/* Sidebar */}
        <Paper
          elevation={3}
          sx={{
            width: 280,
            borderRadius: 3,
            p: 2,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={2}
            align="center"
          >
            Resume Sections
          </Typography>

          <List>
            {menu.map((item, index) => (
              <ListItemButton
                key={index}
                selected={step === index}
                onClick={() => setStep(index)}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>
        </Paper>

        {/* Form */}
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            borderRadius: 3,
            p: 4,
          }}
        >
          {step === 0 && (
            <PersonalForm nextStep={() => setStep(1)} />
          )}

          {step === 1 && (
            <ExperienceForm
              prevStep={() => setStep(0)}
              nextStep={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <EducationForm
              prevStep={() => setStep(1)}
              nextStep={() => setStep(3)}
            />
          )}

          {step === 3 && (
            <SkillsForm
              prevStep={() => setStep(2)}
            />
          )}
        </Paper>
      </Box>
    </>
  );
}

export default Details;