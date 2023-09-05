import { FC } from "react";
import NamesAsTitle from "./namesAsTitle";
import { Box } from "@mui/material";
import anillo from "../assets/anillo.png";

interface NamesContainerProps {
  label: string;
}

const NamesContainer: FC<NamesContainerProps> = ({ label }) => {
  return (
    <Box
      className="nameBackground"
      sx={{
        backgroundImage: `url(${anillo})`,
        backgroundSize: "cover",
        backgroundPosition: "center 16px",
        height: "50vh",
      }}
      marginTop={-2}
      display={"grid"}
      alignContent={"center"}
      paddingTop={2}
    >
      <NamesAsTitle label={label} />
    </Box>
  );
};

export default NamesContainer;
