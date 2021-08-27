import { Mark } from "../../components/base/Typography";
import Lesson from "../../components/templates/Lesson";

export default function Forro() {
  return (
    <Lesson
      title="SCD - Escola de Dança | Forró"
      url="https://www.scdanca.com.br/aulas/forró"
      headingOne={
        <>
          Olá! Somos o <Mark>SCD</Mark>.<br></br> Vem aprender a<br></br>
          <Mark>dançar Forró</Mark>
          <br></br> com a gente.
        </>
      }
      messageOne="Olá! Gostaria de aprender a dançar Forró."
      headingTwo={
        <>
          Aulas de Forró feitas <br></br>
          <Mark>para pessoas normais</Mark>
        </>
      }
      messageTwo="Olá! Gostaria de saber mais sobre as aulas de Forró."
    />
  );
}
