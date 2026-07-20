import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
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


  const downloadPDF = async () => {

    const resume = document.getElementById("resume");

    const canvas = await html2canvas(resume, {
      scale: 2,
    });


    const imgData = canvas.toDataURL("image/png");


    const pdf = new jsPDF(
      "p",
      "mm",
      "a4"
    );


    const imgWidth = 210;

    const imgHeight =
      (canvas.height * imgWidth) /
      canvas.width;


    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      imgWidth,
      imgHeight
    );


    pdf.save(
      `${resumeName || "Resume"}.pdf`
    );

  };



  const renderTemplate = () => {

    if(selectedTemplate === "modern"){
      return <ModernTemplate />;
    }


    if(selectedTemplate === "simple"){
      return <SimpleTemplate />;
    }


    return <ProfessionalTemplate />;

  };



  return (
    <>
      <Navbar />


      <Container sx={{ mt:4 }}>


        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
        >
          Resume Preview
        </Typography>



        <Box
          sx={{
            display:"flex",
            gap:4,
            mt:4
          }}
        >



          {/* Resume */}

          <Paper
            elevation={3}
            sx={{
              flex:2,
              p:3
            }}
          >

            {renderTemplate()}

          </Paper>




          {/* Controls */}

          <Paper
            elevation={3}
            sx={{
              flex:1,
              p:3
            }}
          >


            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
            >
              Choose Template
            </Typography>



            <Button
              fullWidth
              variant="outlined"
              sx={{mb:1}}
              onClick={() =>
                dispatch(
                  changeTemplate("professional")
                )
              }
            >
              Professional
            </Button>



            <Button
              fullWidth
              variant="outlined"
              sx={{mb:1}}
              onClick={() =>
                dispatch(
                  changeTemplate("modern")
                )
              }
            >
              Modern
            </Button>



            <Button
              fullWidth
              variant="outlined"
              sx={{mb:3}}
              onClick={() =>
                dispatch(
                  changeTemplate("simple")
                )
              }
            >
              Simple
            </Button>



            <Typography
              variant="h6"
              mb={2}
            >
              Resume Name
            </Typography>



            <TextField
              fullWidth
              label="File Name"
              value={resumeName}
              onChange={(e)=>
                setResumeName(e.target.value)
              }
              sx={{mb:3}}
            />



            <Button
              fullWidth
              variant="outlined"
              sx={{mb:2}}
              onClick={() =>
                navigate("/details")
              }
            >
              Back
            </Button>



            <Button
              fullWidth
              variant="contained"
              onClick={downloadPDF}
            >
              Download PDF
            </Button>


          </Paper>


        </Box>


      </Container>

    </>
  );
}


export default Preview;