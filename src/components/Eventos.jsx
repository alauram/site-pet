import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./globals.css";
import "./styleguide.css";
import "./eventos.css";
import ativoImage from './ativo-21-1.png';

const cards = [
  { id: 1, label: "Evento A" },
  { id: 2, label: "Evento B" },
  { id: 3, label: "Evento C" },
];

const Eventos = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [centerIndexRight, setCenterIndexRight] = useState(0);
  const navigate = useNavigate();

  const rotate = () => {
    setCenterIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setCenterIndexRight((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rotate();
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const handleCarouselClick = () => {
    navigate("/selecionar-eventos");
  };

  return (
    <div className="eventos">
      <div className="div">
        <img className="ativo" src={ativoImage} alt="ativo" />

        <div className="component">
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">Eventos</div>
            </div>
          </div>
          <div className="aes-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Ações</div>
            </div>
          </div>
          <div className="quem-somos-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-3">Quem somos</div>
            </div>
          </div>
          <div className="projetos-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-3">Projetos</div>
            </div>
          </div>
        </div>

        <div className="overlap">
          <div className="carousel-wrapper" onClick={handleCarouselClick} style={{ cursor: "pointer" }}>
            <div className="carousel">
              {cards.map((card, index) => {
                let className = "carousel-card";
                if (index === centerIndex) className += " center";
                else if ((index + 1) % cards.length === centerIndex) className += " left";
                else className += " right";

                return (
                  <div key={`left-${card.id}`} className={className}>
                    {card.label}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="overlap-wrapper" onClick={handleCarouselClick} style={{ cursor: "pointer" }}>
            <div className="carousel-right">
              {cards.map((card, index) => {
                let className = "carousel-rectangle";
                if (index === centerIndexRight) className += " center-rectangle";
                else if ((index + 1) % cards.length === centerIndexRight) className += " left-rectangle";
                else className += " right-rectangle";

                return (
                  <div key={`right-${card.id}`} className={className}>
                    {card.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-wrapper-4">Eventos realizados</div>
        <div className="text-wrapper-5">Eventos futuros</div>
      </div>
    </div>
  );
};

export default Eventos;
