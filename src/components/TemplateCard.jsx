import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import TemplatePreview from "./TemplatePreview";

function TemplateCard({ template }) {
  const navigate = useNavigate();

  return (
    <Card
      elevation={5}
      sx={{
        width: 320,
        borderRadius: 4,
        overflow: "hidden",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: 12,
        },
      }}
    >
      {/* Top Color Bar */}
      <Box
        sx={{
          height: 8,
          backgroundColor: template.color,
        }}
      />

      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {template.name}
        </Typography>

        <Chip
          label={template.category}
          size="small"
          sx={{
            mt: 1,
            mb: 2,
            backgroundColor: template.color,
            color: "#fff",
          }}
        />

        {/* Resume Preview */}
        <Box sx={{ mb: 2 }}>
          <TemplatePreview color={template.color} />
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            minHeight: 70,
            mb: 3,
          }}
        >
          {template.description}
        </Typography>

        <Button
          fullWidth
          variant="contained"
          sx={{
            py: 1.2,
            borderRadius: 3,
            textTransform: "none",
            backgroundColor: template.color,
            "&:hover": {
              backgroundColor: template.color,
              opacity: 0.9,
            },
          }}
          onClick={() => navigate("/details")}
        >
          Use Template
        </Button>
      </CardContent>
    </Card>
  );
}

export default TemplateCard;