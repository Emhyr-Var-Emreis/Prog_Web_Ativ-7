
import ButtonFatec from "../../components/ButtonFatec";
import InputFatec from "../../components/InputFatec";
import Topo from "../../components/Topo";

export default function Contatos() {//Precisa ter letra maiuscula no nome da function, se deixar minuscula pode quebrar htlm

  return (
    <>
      <Topo/>
      <InputFatec type='text' placeholder='Digite seu Nome' value='Wesley'/>
      <InputFatec type='text' placeholder='Digite seu E-mail' value='teste@email.com'/>
      <InputFatec type='text' placeholder='Digite seu Telefone' value='1234578910'/>
      <ButtonFatec type='submit' label='Enviar'/>
      <hr />
      
    </>
  )
}