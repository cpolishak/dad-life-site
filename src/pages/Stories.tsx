import { Box, Grid, Typography } from "@mui/material";
import ToolBar from "../components/Toolbar";
import { Footer } from "../components/Footer";

export const Stories: React.FC = () => {
  return (
    <>
      <ToolBar />
      <Box
        sx={{ height: "100vh", backgroundColor: "rgba(236, 228, 228, 0.95)" }}
      >
        <Grid container p={4}>
          <Grid item xs={12}>
            <Typography variant="h3">Stories</Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};
