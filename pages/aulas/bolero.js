import { Mark } from "../../components/base/Typography";
import Lesson from "../../components/templates/Lesson";

export default function Bolero() {
  return (
    <Lesson
      title="SCD - Escola de Dança | Bolero"
      url="https://www.scdanca.com.br/aulas/bolero"
      headingOne={
        <>
          Olá! Somos o <Mark>SCD</Mark>.<br></br> Vem fazer<br></br>
          <Mark>Aulas de Bolero</Mark>
          <br></br> com a gente.
        </>
      }
      messageOne="Olá! Gostaria de fazer aulas de Bolero."
      headingTwo={
        <>
          Aulas de Bolero feitas <br></br>
          <Mark>para pessoas normais</Mark>
        </>
      }
      messageTwo="Olá! Gostaria de saber mais sobre as aulas de Bolero."
    />
  );
}
