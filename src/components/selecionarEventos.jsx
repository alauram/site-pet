import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ativoImage from './ativo-21-1.png';
import setaEsquerda from './setaEsquerda.svg';
import setaDireita from './setaDireita.svg';
import "./selecionarEventos.css";

export default function Eventos() {
  const eventos = ["Eventos 1", "Eventos 2", "Eventos 3", "Eventos 4", "Eventos 5"];
  const [eventoAtual, setEventoAtual] = useState(eventos[0]);

  return (
    <div className="eventos">
      <div className="div">
        <img className="ativo" src={ativoImage} alt="Ativo" />

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

        <Swiper
          effect={'coverflow'}
          slidesPerView={3}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          onSlideChange={(swiper) => {
            const realIndex = swiper.realIndex;
            setEventoAtual(eventos[realIndex]);
          }}
        >
          {eventos.map((evento, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">{evento}</div>
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev-custom slider-arrow">
              <img src={setaEsquerda} alt="Anterior" />
            </div>
            <div className="swiper-button-next-custom slider-arrow">
              <img src={setaDireita} alt="Próximo" />
            </div>
          </div>
        </Swiper>

        <div className="frame-3">
          <div className="text-wrapper-4">{eventoAtual}</div>
        </div>
      </div>
    </div>
  );
}