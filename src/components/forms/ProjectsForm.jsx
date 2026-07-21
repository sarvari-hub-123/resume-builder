import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveProjects } from "../../redux/resumeSlice";

function ProjectsForm({ nextStep, prevStep }) {
  const dispatch = useDispatch();

  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      projects: [
        {
          title: "",
          techStack: "",
          github: "",
          liveDemo: "",
          description: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  const onSubmit = (data) => {
    dispatch(saveProjects(data.projects));
    nextStep();
  };

  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Projects
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Add your academic and personal projects.
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>

        {fields.map((field, index) => (
          <Box
            key={field.id}
            sx={{
              mb: 4,
              p: 3,
              border: "1px solid #ddd",
              borderRadius: 2,
            }}
          >

            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Project Title"
                  {...register(`projects.${index}.title`)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tech Stack"
                  placeholder="React, Redux, Node.js..."
                  {...register(`projects.${index}.techStack`)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="GitHub Link"
                  {...register(`projects.${index}.github`)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Live Demo"
                  {...register(`projects.${index}.liveDemo`)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Project Description"
                  {...register(`projects.${index}.description`)}
                />
              </Grid>

              {fields.length > 1 && (
                <Grid item xs={12}>
                  <Button
                    color="error"
                    onClick={() => remove(index)}
                  >
                    Remove Project
                  </Button>
                </Grid>
              )}

            </Grid>
          </Box>
        ))}

        <Button
          variant="outlined"
          onClick={() =>
            append({
              title: "",
              techStack: "",
              github: "",
              liveDemo: "",
              description: "",
            })
          }
          sx={{ mb: 3 }}
        >
          + Add Another Project
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

export default ProjectsForm;