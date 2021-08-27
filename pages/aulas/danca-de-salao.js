import { Mark } from "../../components/base/Typography";
import Lesson from "../../components/templates/Lesson";

export default function DancaDeSalao() {
  return (
    <Lesson
      title="SCD - Escola de Dança | Dança de Salão"
      url="https://www.scdanca.com.br/aulas/danca-de-salao"
      headingOne={
        <>
          Olá! Somos o <Mark>SCD</Mark>.<br></br> Vem aprender<br></br>
          <Mark>Dança de Salão</Mark>
          <br></br> do zero ao avançado.
        </>
      }
      messageOne="Olá! Gostaria de aprender Dança de Salão."
      headingTwo={
        <>
          Aulas de Dança de Salão feitas <br></br>
          <Mark>para pessoas normais</Mark>
        </>
      }
      messageTwo="Olá! Gostaria de saber mais sobre as aulas de Dança de Salão."
    />
  );
}
