import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const AccordionList = () => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontWeight: 600 }}
        >
          Support resources for girl dads
        </AccordionSummary>
        <AccordionDetails>
          We have a network of resources to set up girl dads for success. From things like new parenting tips to managing mental health, girl dad life has got you covered. 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ fontWeight: 600 }}
        >
          Fun stories for ideas and inspiration
        </AccordionSummary>
        <AccordionDetails>
          See the stories page for ideas on loads of things that you can do as a girl dad. Stories can be shared as a way to inspire, inform or just for sheer bragging rights as a girl dad who is crushing it!
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ fontWeight: 600 }}
        >
          General questions
        </AccordionSummary>
        <AccordionDetails>
          Can I network with other girl dads to seek help or advice?
        </AccordionDetails>
        <AccordionDetails>
          What other dads are in my area?
        </AccordionDetails>
        <AccordionDetails>
          What's the best part about being a girl dad?
        </AccordionDetails>
        <AccordionDetails>
          ... and more!
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
