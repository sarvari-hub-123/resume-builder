import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function SimpleTemplate(){

const {
personal,
education,
skills
}=useSelector((state)=>state.resume);


return(

<Box
id="resume"
sx={{
padding:5,
minHeight:"1050px",
background:"#fff"
}}
>


<Typography variant="h4">
{personal.fullName || "Your Name"}
</Typography>


<Typography>
{personal.email}
</Typography>


<Typography sx={{mt:3}}>
Education
</Typography>


<Typography>
{education.degree}
</Typography>


<Typography>
{education.college}
</Typography>


<Typography sx={{mt:3}}>
Skills
</Typography>


<Typography>
{skills.skill1}
</Typography>

<Typography>
{skills.skill2}
</Typography>

<Typography>
{skills.skill3}
</Typography>


</Box>

);

}

export default SimpleTemplate;