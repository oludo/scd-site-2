import { Mark } from "../../components/base/Typography";
import Lesson from "../../components/templates/Lesson";

export default function Samba() {
  return (
    <Lesson
      title="SCD - Escola de Dança | Samba"
      url="https://www.scdanca.com.br/aulas/samba"
      headingOne={
        <>
          Olá! Somos o <Mark>SCD</Mark>.<br></br> Vem fazer<br></br>
          <Mark>Aulas de Samba</Mark>
          <br></br> com a gente.
        </>
      }
      messageOne="Olá! Gostaria de fazer aulas de Samba."
      headingTwo={
        <>
          Aulas de Samba feitas <br></br>
          <Mark>para pessoas normais</Mark>
        </>
      }
      messageTwo="Olá! Gostaria de saber mais sobre as aulas de Samba."
    />
  );
}
