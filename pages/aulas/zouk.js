import { Mark } from "../../components/base/Typography";
import Lesson from "../../components/templates/Lesson";

export default function Zouk() {
  return (
    <Lesson
      title="SCD - Escola de Dança | Zouk"
      url="https://www.scdanca.com.br/aulas/zouk"
      headingOne={
        <>
          Olá! Somos o <Mark>SCD</Mark>.<br></br> Vem aprender a<br></br>
          <Mark>dançar Zouk</Mark>
          <br></br> com a gente.
        </>
      }
      messageOne="Olá! Gostaria de aprender a dançar Zouk."
      headingTwo={
        <>
          Aulas de Zouk feitas <br></br>
          <Mark>para pessoas normais</Mark>
        </>
      }
      messageTwo="Olá! Gostaria de saber mais sobre as aulas de Zouk."
    />
  );
}
