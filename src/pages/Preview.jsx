import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { changeTemplate } from "../redux/resumeSlice";

import Navbar from "../components/Navbar";

import ProfessionalTemplate from "../components/templates/ProfessionalTemplate";
import ModernTemplate from "../components/templates/ModernTemplate";
import SimpleTemplate from "../components/templates/SimpleTemplate";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Preview() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedTemplate = useSelector(
    (state) => state.resume.template
  );

  const [resumeName, setResumeName] = useState("");
  const [open, setOpen] = useState(false);

  const downloadPDF = async () => {
    const resume = document.getElementById("resume");

    const canvas = await html2canvas(resume, {
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const imgHeight =
      (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      imgWidth,
      imgHeight
    );

    pdf.save(`${resumeName || "Resume"}.pdf`);

    setOpen(true);
  };

  const renderTemplate = () => {
    if (selectedTemplate === "modern") {
      return <ModernTemplate />;
    }

    if (selectedTemplate === "simple") {
      return <SimpleTemplate />;
    }

    return <ProfessionalTemplate />;
  };

  return (
    <>
      <Navbar />

      <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
        >
          Resume Preview
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 5 }}
        >
          Choose a template and download your professional resume.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "flex-start",
          }}
        >
          <Paper
            elevation={8}
            sx={{
              flex: 2,
              p: 4,
              borderRadius: 4,
              background: "#fafafa",
            }}
          >
            {renderTemplate()}
          </Paper>

          <Paper
            elevation={8}
            sx={{
              width: 330,
              p: 4,
              borderRadius: 4,
              position: "sticky",
              top: 90,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
            >
              Controls
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Typography
              variant="subtitle1"
              fontWeight="bold"
              mb={2}
            >
              Choose Template
            </Typography>

            <Button
              fullWidth
              sx={{ mb: 2 }}
              variant={
                selectedTemplate === "professional"
                  ? "contained"
                  : "outlined"
              }
              onClick={() =>
                dispatch(changeTemplate("professional"))
              }
            >
              Professional
            </Button>

            <Button
              fullWidth
              sx={{ mb: 2 }}
              variant={
                selectedTemplate === "modern"
                  ? "contained"
                  : "outlined"
              }
              onClick={() =>
                dispatch(changeTemplate("modern"))
              }
            >
              Modern
            </Button>

            <Button
              fullWidth
              sx={{ mb: 4 }}
              variant={
                selectedTemplate === "simple"
                  ? "contained"
                  : "outlined"
              }
              onClick={() =>
                dispatch(changeTemplate("simple"))
              }
            >
              Simple
            </Button>

            <Typography
              variant="subtitle1"
              fontWeight="bold"
              mb={2}
            >
              PDF File Name
            </Typography>

            <TextField
              fullWidth
              label="Resume Name"
              value={resumeName}
              onChange={(e) =>
                setResumeName(e.target.value)
              }
              sx={{ mb: 4 }}
            />

            <Button
              fullWidth
              variant="outlined"
              size="large"
              sx={{ mb: 2 }}
              onClick={() => navigate("/details")}
            >
              ← Back
            </Button>

            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={downloadPDF}
            >
              Download PDF
            </Button>
          </Paper>
        </Box>
      </Container>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>
          Download Successful
        </DialogTitle>

        <DialogContent>
          <Typography>
            Your resume has been downloaded successfully.
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Preview;