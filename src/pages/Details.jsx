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
import ProjectsForm from "../components/forms/ProjectsForm";
import SkillsForm from "../components/forms/SkillsForm";
import CertificationsForm from "../components/forms/CertificationsForm";

function Details() {
  const [step, setStep] = useState(0);

  const menu = [
    "Personal Information",
    "Experience",
    "Education",
    "Projects",
    "Skills",
    "Certifications",
  ];

  return (
    <>
      <Navbar />

      <Box
        sx={{
          maxWidth: "1300px",
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
            align="center"
            mb={2}
          >
            Resume Builder
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

        {/* Forms */}

        <Paper
          elevation={3}
          sx={{
            flex: 1,
            borderRadius: 3,
            p: 4,
          }}
        >
          {step === 0 && (
            <PersonalForm
              nextStep={() => setStep(1)}
            />
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
            <ProjectsForm
              prevStep={() => setStep(2)}
              nextStep={() => setStep(4)}
            />
          )}

          {step === 4 && (
            <SkillsForm
              prevStep={() => setStep(3)}
              nextStep={() => setStep(5)}
            />
          )}

          {step === 5 && (
            <CertificationsForm
              prevStep={() => setStep(4)}
            />
          )}
        </Paper>
      </Box>
    </>
  );
}

export default Details;