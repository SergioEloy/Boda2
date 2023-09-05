import { FC } from "react";
import { Box } from "@mui/material";

export interface InfoImageProps {
  imgSrc: string;
  text: string;
  title: string;
  href: string;
}

export const InfoImage: FC<InfoImageProps> = ({
  imgSrc,
  text,
  title,
  href,
}) => {
  return (
    <Box width={"33%"} textAlign={"center"} justifyContent={"center"}>
      <h2>{title}</h2>
      <h3>
        <a href={href} target="_blank">
          {text}
        </a>
      </h3>
      <img src={imgSrc} alt={imgSrc} width="60%" />
    </Box>
  );
};

export default InfoImage;
