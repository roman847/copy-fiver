import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from "./style.module.scss";

interface ICustomSelectProps {
  children: React.ReactNode;
  title: string;
}

const CustomSelect: React.FC<ICustomSelectProps> = ({ children, title }) => {
  return (
    <div className={style.container}>
      <Accordion className={style.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={style.title}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomSelect;
