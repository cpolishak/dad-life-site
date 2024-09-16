import { Box, Grid, Typography } from "@mui/material";
import ToolBar from "../components/Toolbar";
import { Footer } from "../components/Footer";
import Card from "../components/Card";

// Maybe change this page in the future to be a blog page 

export const Stories: React.FC = () => {
  const pageStyle = {
    height: "100vh",
    backgroundColor: "rgba(236, 228, 228, 0.95)",
    overflow: "auto",
  };

  return (
    <>
      <ToolBar />
      <Box sx={pageStyle}>
        <Grid container p={4}>
          <Grid item xs={12} py={3}>
            <Typography variant="h3">Stories</Typography>
            <Typography variant="subtitle1">
              This is the place to share some fun/creative ideas, great experiences, or
              other general dadding tips and advice.
            </Typography>
          </Grid>

          {/* TO DO: make a mapping function to go through and put all cards info in
          rather than having each Card loaded into the jsx */}
          <Grid item xs={12} sm={4} py={3}>
            <Card
              img="https://images.unsplash.com/photo-1616430284384-62ba9ce6c11d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              header="Hiking"
              imgTitle="Dad and daughter walking"
              body="A fun way to get exercise and build a stronger bond"
            />
          </Grid>
          <Grid item xs={12} sm={4} py={3}>
            <Card
              img="https://images.unsplash.com/photo-1452369692417-d4d77d95bf7f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imgTitle="Kid with sparkler"
              header="Fireworks"
              body="Who doesn't love fireworks? Of course, be safe and have fun!"
            />
          </Grid>
          <Grid item xs={12} sm={4} py={3}>
            <Card
              img="https://images.unsplash.com/photo-1623702663097-cb5bac9683a5?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imgTitle="Dad and daughter sharing ice cream"
              header="Daddy-Daughter Date"
              body="Try going out for a daddy daughter date. Pick a favorite restaurant and go, just you and your girl, and enjoy some one-on-one time"
            />
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </>
  );
};
