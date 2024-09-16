import { Box, Grid, Typography } from "@mui/material";
import ToolBar from "../components/Toolbar";
import { Footer } from "../components/Footer";

// Maybe redo this page later as a community page rather than a resources page

export const Resources: React.FC = () => {
  return (
    <>
      <ToolBar />
      <Box
        sx={{ height: "100vh", backgroundColor: "rgba(236, 228, 228, 0.95)" }}
      >
        <Grid container p={4}>
          <Grid item xs={12} py={3}>
            <Typography variant="h3">Resources</Typography>
            <Typography variant="subtitle1">Every girl dad needs some good resources. Find help in loads of different topics. Coming soon!</Typography>
          </Grid>
          {/* Maybe have a table on this page with links to other fun sites 
          or sites with helpful info / blogs / etc. */}
          <Grid item>
            {/* Have resources for things like: find other dads in your area, parenting tips blogs, mental health resources,  */}
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};
