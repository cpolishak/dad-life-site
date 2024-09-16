import ToolBar from "./components/Toolbar";
import { Box, Button, Grid, Typography, Paper } from "@mui/material";
import girlDad from "./img/girl-dad.jpg";
import { AccordionList } from "./components/AccordionList";
import MasonryImageList from "./components/MasonryImageList";
import { Footer } from "./components/Footer";

const Main: React.FC = () => {

  const girlDadImgStyle = { 
    maxHeight: "65vh", 
    maxWidth: "65vw", 
    padding: 2,
  };

  const dropdownStyle = {
    p: 3,
    backgroundColor: "rgb(55, 56, 61)",
    color: "white",
  };

  const questionsSectionStyle = {
    height: "80vh",
    overflow: "auto",
    backgroundColor: "white",
    py: "4rem",
  };

  const joinStyle = {
    p: 4,
    alignContent: "center",
    textAlign: "center",
  };

  const joinBtnStyle = {
    color: "black",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "lightgray",
    },
  };

  return (
    <>
      <ToolBar />
      <Grid container sx={{ backgroundColor: "rgba(236, 228, 228, 0.95)" }}>
        <Grid item xs={12}>
          {/* Section 1 */}
          <Box
            p={3}
            sx={{
              display: "flex",
            }}
          >
            <Grid container sx={{ pt: "1rem" }}>
              <Grid item xs={12} sm={7}>
                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      pl: 1,
                      py: 3,
                    }}
                  >
                    Welcome to Girl Dad Life
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      pb: 4,
                      pl: 4,
                    }}
                  >
                    The smile of a daughter is the secret purpose of every
                    father. - Unknown
                  </Typography>
                  <Typography variant="body1" sx={{ px: 2, pb: 3, }}>
                    This is a fictional website that I designed to celebrate the
                    wonders, the joys, and the sillyness that is being a girl
                    dad. It will serve as an example of some website design and
                    software engineering skills to demonstrate for my portfolio.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={5} py={2}>
                <Box
                  sx={{
                    textAlign: "center",
                    px: 2,
                  }}
                >
                  <img
                    src={girlDad}
                    alt="dad raising daughter in air"
                    style={girlDadImgStyle}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Section 2 */}
          <Box
            p={3}
            sx={questionsSectionStyle}
          >
            <Grid container>
              <Grid item xs={12} sm={2}></Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="h6" pb={4} sx={{ textAlign: "center" }}>
                  Perhaps you stumbled across this site by accident. Or perhaps you came here
                  seeking some fun new ideas for you and your daughter to experience. Or maybe you are just wondering
                  how awesome it is to be a girl dad. No matter what brings you
                  here, we're glad that you stopped by!
                </Typography>
                <Paper
                  sx={dropdownStyle}
                >
                  <Typography variant="subtitle2" px={2} pb={1}>
                    Here are some common topics we cover:{" "}
                  </Typography>
                  <AccordionList />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={2}></Grid>
            </Grid>
          </Box>

          {/* Section 3 */}
          <Box p={3}>
            <Grid container>
              <Grid item xs={12} sm={8} p={4}>
                <MasonryImageList />
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={joinStyle}
              >
                <Typography variant="h4" py={4}>
                  Join in the fun!
                </Typography>
                <Typography variant="subtitle1" pb={2}>
                  There's loads of experiences to be had as a girl dad. It
                  doesn't matter if you are a newly minted girl dad, or a
                  veteran of many years. We would love to expand the community
                  to welcome all dads!
                </Typography>
                <Button
                  variant="contained"
                  sx={joinBtnStyle}
                >
                  Join the Dad Life Newsletter
                </Button>
              </Grid>
            </Grid>
            <hr />
          </Box>

          {/* Footer Menu */}
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
