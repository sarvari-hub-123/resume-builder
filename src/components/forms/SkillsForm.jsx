import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveSkills } from "../../redux/resumeSlice";
import { useNavigate } from "react-router-dom";

function SkillsForm({ prevStep }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(saveSkills(data));
    navigate("/preview");
  };

  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Key Skills
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Add your technical and professional skills to showcase your abilities.
      </Typography>


      <form onSubmit={handleSubmit(onSubmit)}>

        <Grid container spacing={3}>

          <Grid item xs={12}>
            <TextField
              label="Skill 1"
              placeholder="Example: React.js"
              fullWidth
              {...register("skill1")}
            />
          </Grid>


          <Grid item xs={12}>
            <TextField
              label="Skill 2"
              placeholder="Example: JavaScript"
              fullWidth
              {...register("skill2")}
            />
          </Grid>


          <Grid item xs={12}>
            <TextField
              label="Skill 3"
              placeholder="Example: Node.js"
              fullWidth
              {...register("skill3")}
            />
          </Grid>


          <Grid item xs={12}>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
              }}
            >

              <Button
                variant="outlined"
                size="large"
                onClick={prevStep}
                sx={{
                  px: 4,
                  py: 1.2,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                ← Back
              </Button>


              <Button
                variant="contained"
                size="large"
                type="submit"
                sx={{
                  px: 5,
                  py: 1.2,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Preview →
              </Button>

            </Box>

          </Grid>

        </Grid>

      </form>

    </Box>
  );
}

export default SkillsForm;