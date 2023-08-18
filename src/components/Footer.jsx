import React from 'react';
import '../style/global.css';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div>
          <p>Telefone: (84)99600-9908</p>
        </div>
        <div>
          <p>Siga-me nas redes sociais:</p>
          <a href="#" target="_blank">
            Instagram
          </a>
          |
          <a href="#" target="_blank">
            WhatsApp
          </a>
        </div>
        <p>
          Email: <a href="mailto:seuemail@example.com">seuemail@example.com</a>
        </p>
        <p>Desenvolvido por: Yago Matias</p>
      </div>
    </footer>
  );
};

export default Footer;
