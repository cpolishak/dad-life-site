import { Box, Grid, Typography } from "@mui/material";
import ToolBar from "../components/Toolbar";
import { Footer } from "../components/Footer";

export const Resources: React.FC = () => {
  return (
    <>
      <ToolBar />
      <Box
        sx={{ height: "100vh", backgroundColor: "rgba(236, 228, 228, 0.95)" }}
      >
        <Grid container p={4}>
          <Grid item xs={12}>
            <Typography variant="h3">Resources</Typography>
          </Grid>
          {/* Maybe have a table on this page with links to other fun sites 
          or sites with helpful info / blogs / etc. */}
          <Grid item></Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};
