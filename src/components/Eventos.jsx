import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./globals.css";
import "./styleguide.css";
import "./eventos.css";
import ativoImage from './ativo-21-1.png';

const cards = [
  { id: 1, label: "Evento A", color: "#ED701F", textColor: "#000000" },
  { id: 2, label: "Evento B", color: "#135D9F", textColor: "#ffffff" },
  { id: 3, label: "Evento C", color: "#248BE5", textColor: "#ffffff" },
];

const Eventos = () => {
  const [centerIndexLeft, setCenterIndexLeft] = useState(0);
  const [centerIndexRight, setCenterIndexRight] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalLeft = setInterval(() => {
      setCenterIndexLeft((prev) => (prev - 1 + cards.length) % cards.length);
    }, 1800);

    const intervalRight = setInterval(() => {
      setCenterIndexRight((prev) => (prev - 1 + cards.length) % cards.length);
    }, 1800);

    return () => {
      clearInterval(intervalLeft);
      clearInterval(intervalRight);
    };
  }, []);

  const handleCarouselClick = () => {
    navigate("/selecionar-eventos");
  };

  return (
    <div className="eventos">
      <div className="div">
        <img className="ativo" src={ativoImage} alt="ativo" />
  
        <div className="component">
          {["Quem somos", "Projetos", "Ações", "Eventos"].map((text, i) => (
            <div className="wrapper" key={i}>
              <div className="div-wrapper">
                <div className="text-wrapper">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      <div className="overlap">
        <div className="carousel-wrapper" onClick={handleCarouselClick}>
          <div className="carousel">
            {cards.map((card, index) => {
              let className = "carousel-card";
              if (index === centerIndexLeft) className += " center";
              else if ((index + 1) % cards.length === centerIndexLeft) className += " left";
              else className += " right";
  
              return (
                <div
                  key={`left-${card.id}`}
                  className={className}
                  style={{ backgroundColor: card.color, color: card.textColor }}
                >
                  {card.label}
                </div>
              );
            })}
          </div>
          <div className="carousel-label">Eventos Realizados</div>
        </div>
  
        <div className="carousel-wrapper" onClick={handleCarouselClick}>
          <div className="carousel">
            {cards.map((card, index) => {
              let className = "carousel-card";
              if (index === centerIndexRight) className += " center";
              else if ((index + 1) % cards.length === centerIndexRight) className += " left";
              else className += " right";
  
              return (
                <div
                  key={`right-${card.id}`}
                  className={className}
                  style={{ backgroundColor: card.color, color: card.textColor }}
                >
                  {card.label}
                </div>
              );
            })}
          </div>
          <div className="carousel-label">Eventos Futuros</div>
        </div>
      </div>
    </div>
  );
};

export default Eventos;