import React from 'react';

import perfil from '../images/enio.jpg';
import './AboutMe.css';

const AboutMe = () => (
  <div className="container">
    <h3 className="sub-title">Sobre Mim</h3>
    <div className="bio">
      <img className="bio-image img-container" src={ perfil } alt="Foto de perfil Enio Nicael"/>
      <p>Sou apaixonado por tecnologias, desenvolvimento web/mobile, software livre, conhecer pessoas, lugares, fazer novas amizades.
        Sempre em busca de aperfeiçoamento pessoal/profissional e buscando participar de projetos que visam melhorar e facilitar a vida das pessoas.</p>
    </div>
  </div>
);

export default AboutMe;
