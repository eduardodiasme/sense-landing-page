import emailjs from "@emailjs/browser";
import "../styles/contato.css";

export default function Contato() {
  const handleEnviar = async () => {
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const comentario = document.querySelector(".comentario").value;
    const templateParams = {
      name: nome,
      email: email,
      comentario: comentario,
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_DB_SERVICE_ID,
        import.meta.env.VITE_DB_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_DB_PUBLIC_KEY
      );

      console.log("SUCCESS!", response.status, response.text);
    } catch (error) {
      console.log("FAILED...", error);
    }
  };

  return (
    <>
      <img src="/contact-img.png" alt="Imagem de Contato" />
      <form className="form">
        <h3>Seu nome</h3>
        <input type="text" name="nome" placeholder=" " />
        <h3>Seu e-mail</h3>
        <input type="email" name="email" placeholder="" />
        <h3>Fale um pouco da sua empresa</h3>
        <input type="text" placeholder="" className="comentario" />
        {/* Adicionando o manipulador de evento onClick para chamar a função handleEnviar */}
        <input
          type="button"
          value="Enviar"
          className="button"
          onClick={handleEnviar}
        />
      </form>
    </>
  );
}
