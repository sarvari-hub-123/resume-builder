import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveEducation } from "../../redux/resumeSlice";

function EducationForm({ nextStep, prevStep }) {
  const dispatch = useDispatch();

  const {
    control,
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      education: [
        {
          degree: "",
          college: "",
          year: "",
          percentage: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const onSubmit = (data) => {
    dispatch(saveEducation(data.education));
    nextStep();
  };

  return (
    <Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        Education
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Add all your educational qualifications.
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
                  label="Degree / Qualification"
                  placeholder="SSC / Intermediate / B.Tech"
                  {...register(`education.${index}.degree`)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="School / College"
                  {...register(`education.${index}.college`)}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Passing Year"
                  {...register(`education.${index}.year`)}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Percentage / CGPA"
                  {...register(`education.${index}.percentage`)}
                />
              </Grid>

              {fields.length > 1 && (
                <Grid item xs={12}>
                  <Button
                    color="error"
                    onClick={() => remove(index)}
                  >
                    Remove Education
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
              degree: "",
              college: "",
              year: "",
              percentage: "",
            })
          }
        >
          + Add Education
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

export default EducationForm;