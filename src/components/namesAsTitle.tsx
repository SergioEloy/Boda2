import { FC } from "react";

interface NamesAsTitleProps {
  label: string;
}

const NamesAsTitle: FC<NamesAsTitleProps> = ({ label }) => {
  return (
    <>
      <h1 className="scriptLetters">Lizzeth Andrea & Sergio Eloy</h1>
      <h2 className="scriptLetters">{label}</h2>
    </>
  );
};

export default NamesAsTitle;
