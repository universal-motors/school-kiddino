import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion() {
  const accordion = [
    {
      heading: "First Little Readers (Levels A-C)",
      para: (
        <p>
          Enrolment Events are like open days or open weeks at Busy Bees. It's a
          chance <br /> for you to visit your local nursery, take a look around,
          and see some of <br />
          exciting activities in action.
        </p>
      ),
    },
    {
      heading: "What Age Do Start Preschool?",
      para: (
        <p>
          Enrolment Events are like open days or open weeks at Busy Bees. It's a
          chance <br /> for you to visit your local nursery, take a look around,
          and see some of <br />
          exciting activities in action.
        </p>
      ),
    },
    {
      heading: "Is My Child Ready For Preschool?",
      para: (
        <p>
          Enrolment Events are like open days or open weeks at Busy Bees. It's a
          chance <br /> for you to visit your local nursery, take a look around,
          and see some of <br />
          exciting activities in action.
        </p>
      ),
    },
    {
      heading: "Can Your Child Separate from you?",
      para: (
        <p>
          Enrolment Events are like open days or open weeks at Busy Bees. It's a
          chance <br /> for you to visit your local nursery, take a look around,
          and see some of <br />
          exciting activities in action.
        </p>
      ),
    },
    {
      heading: "Can Your Child Play With Others?",
      para: (
        <p>
          Enrolment Events are like open days or open weeks at Busy Bees. It's a
          chance <br /> for you to visit your local nursery, take a look around,
          and see some of <br />
          exciting activities in action.
        </p>
      ),
    },
  ];

  return (
    <div className="mr-3">
      {accordion.map((itm, i) => {
        return (
          <Accordion
            sx={{ "&.MuiPaper-root": { boxShadow: "none" }, marginTop: "10px" }}
          >
            <AccordionSummary
              sx={{
                backgroundColor: "#FAF6F0",
                borderTopLeftRadius: "50px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                borderBottomRightRadius: "30px",
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "22px" },
                  fontWeight: "bold",
                }}
                className="  group-hover:text-[#ffffff]"
              >
                {itm.heading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{ fontSize: { xs: "12px", sm: "16px" }, color: "#444444" }}
              >
                {itm.para}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
