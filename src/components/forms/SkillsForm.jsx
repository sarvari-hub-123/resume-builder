import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveSkills } from "../../redux/resumeSlice";

function SkillsForm({ nextStep, prevStep }) {
  const dispatch = useDispatch();

  const {
    control,
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      skills: [
        {
          name: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit = (data) => {
    const skillsArray = data.skills.map((skill) => skill.name);
    dispatch(saveSkills(skillsArray));
    nextStep();
  };

  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Skills
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Add your technical and professional skills.
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>

        {fields.map((field, index) => (
          <Box
            key={field.id}
            sx={{
              mb: 3,
              p: 3,
              border: "1px solid #ddd",
              borderRadius: 2,
            }}
          >

            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={`Skill ${index + 1}`}
                  placeholder="React.js"
                  {...register(`skills.${index}.name`)}
                />
              </Grid>

              {fields.length > 1 && (
                <Grid item xs={12}>
                  <Button
                    color="error"
                    onClick={() => remove(index)}
                  >
                    Remove Skill
                  </Button>
                </Grid>
              )}

            </Grid>

          </Box>
        ))}

        <Button
          variant="outlined"
          sx={{ mb: 3 }}
          onClick={() =>
            append({
              name: "",
            })
          }
        >
          + Add Skill
        </Button>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            onClick={prevStep}
          >
            ← Back
          </Button>

          <Button
            variant="contained"
            type="submit"
          >
            Next →
          </Button>
        </Box>

      </form>

    </Box>
  );
}

export default SkillsForm;