import { Mark } from "../../components/base/Typography";
import Lesson from "../../components/templates/Lesson";

export default function AulasDeDanca() {
  return (
    <Lesson
      title="SCD - Escola de Dança | Aulas de Dança"
      url="https://www.scdanca.com.br/aulas/aulas-de-danca"
      headingOne={
        <>
          Olá! Somos o <Mark>SCD</Mark>.<br></br> Te ensinamos a <br></br>
          <Mark>dançar do zero</Mark>
          <br></br> mesmo sendo duro.
        </>
      }
      messageOne="Olá! Gostaria de aprender a dançar."
      headingTwo={
        <>
          Aulas de dança feitas <br></br>
          <Mark>para pessoas normais</Mark>
        </>
      }
      messageTwo="Olá! Gostaria de saber mais sobre as aulas de dança."
    />
  );
}
