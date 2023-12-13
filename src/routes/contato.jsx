import '../styles/contato.css';

export default function Contato() {
  return (
    <>
        <img src="/public/contact-img.png" />
        <form>
          <h3>Seu nome</h3>
          <input type="text" placeholder=" " />
          <h3> Seu e-mail</h3>
          <input type="email" placeholder="" />
          <h3>Fale um pouco da sua empresa</h3>
          <input type="text" placeholder="" className="comentario" />
          <input type="button" value="Enviar" className="button" />
        </form>
    </>
  );
}
