import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function ModernTemplate() {

  const {
    personal,
    experience,
    education,
    skills,
  } = useSelector((state) => state.resume);


  return (

    <Box
      id="resume"
      sx={{
        minHeight:"1050px",
        padding:5,
        background:"#f7f9fc",
      }}
    >

      <Typography
        variant="h3"
        fontWeight="bold"
      >
        {personal.fullName || "Your Name"}
      </Typography>


      <Typography>
        {personal.email} | {personal.phone}
      </Typography>


      <Box sx={{mt:4}}>

        <Typography variant="h5">
          Career Experience
        </Typography>


        <Typography fontWeight="bold">
          {experience.role}
        </Typography>

        <Typography>
          {experience.company}
        </Typography>

        <Typography>
          {experience.description}
        </Typography>

      </Box>


      <Box sx={{mt:4}}>

        <Typography variant="h5">
          Education
        </Typography>

        <Typography>
          {education.degree}
        </Typography>

        <Typography>
          {education.college}
        </Typography>

      </Box>


      <Box sx={{mt:4}}>

        <Typography variant="h5">
          Skills
        </Typography>


        <Typography>
          {skills.skill1}, {skills.skill2}, {skills.skill3}
        </Typography>


      </Box>


    </Box>

  );
}

export default ModernTemplate;