import { useState } from "react";
import "./App.css";
import NamesContainer from "./components/namesContainer";
import Navbar from "./components/navBar";
import Timer from "./components/timer";
import InfoImage from "./components/infoImage";
import {
  Box,
  Divider,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import ubicacion from "./assets/ubicación.png";
import quinta from "./assets/quinta.png";
import mesaDeRegalos from "./assets/MesadeRegalos.png";

function App() {
  const [english, setEnglish] = useState(false);
  const [name, setName] = useState("");
  const [willAttend, setWillAttend] = useState("no");
  const [message, setMessage] = useState("");

  return (
    <>
      <Navbar
        onclick={() => setEnglish(!english)}
        label={english ? "Spanish" : "English"}
      />
      <NamesContainer
        label={english ? "Are getting married" : "Se van a casar"}
      />
      <Box marginTop={2} marginBottom={4}>
        <Divider />
        <Timer
          label={english ? "Time left" : "Tiempo restante"}
          days={english ? " Days " : " Dias "}
          hours={english ? " Hours " : " Horas "}
          minutes={english ? " Minutes " : " Minutos "}
          seconds={english ? " Seconds " : " Segundos "}
        />
      </Box>
      <Divider />
      <Box display={"flex"} justifyContent={"space-around"} margin={0}>
        <InfoImage
          icon={quinta}
          imgSrc={ubicacion}
          href="https://maps.app.goo.gl/AfGPz1DEC3SuBBAx7"
          text="Quinta La Ceiba"
          title={english ? "Let's Celebrate Together" : "Celebremos Juntos"}
        />
        <InfoImage
          icon={quinta}
          imgSrc={mesaDeRegalos}
          href="https://www.chapur.com.mx/detalle-mesa-regalos/89941"
          text="Chapur 89941"
          title={english ? "Gift Registry" : "Mesa de Regalos"}
        />
      </Box>
      <Divider />
      <Box
        px={3}
        py={2}
        width={"100%"}
        justifyContent={"center"}
        display={"flex"}
      >
        <Box width={"35%"}>
          <h2>
            {english ? "Send Your Congratulations" : "Envía tus felicitaciones"}
          </h2>
          <TextField
            fullWidth
            label={english ? "Your Name" : "Tu nombre"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h3>{english ? "Will you attend?" : "¿Asistirás?"}</h3>
          <Box
            display={"grid"}
            justifyContent={"center"}
            marginBottom={4}
            paddingLeft={2}
          >
            <RadioGroup
              row
              value={willAttend}
              onChange={(e) => setWillAttend(e.target.value)}
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    sx={{
                      color: "black",
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label={english ? "Yes" : "Sí"}
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    sx={{
                      color: "black",
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label="No"
              />
            </RadioGroup>
          </Box>
          <TextField
            fullWidth
            multiline
            rows={4}
            label={english ? "Your Message" : "Tu mensaje"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Box my={3}>
            <button>
              <a
                className="link"
                href={`mailto:sergioeloyespadas@gmail.com?subject=Felicitaciones para la boda&body=Nombre: ${name}%0D%0AAsistirá: ${
                  willAttend === "yes" ? "Sí" : "No"
                }%0D%0AMensaje: ${message}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {english
                  ? "Send Congratulations via Email"
                  : "Enviar felicitaciones vía correo electrónico"}
              </a>
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
