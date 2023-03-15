import styled from 'styled-components';

const Agrupador = styled.div`
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FondoCard = styled.div`
  background-color: #DB8A0E;
  padding: 0.10% 0.10%;
  width: 32.6%;
  margin: 0.25%;
`;

const BtnXcard = styled.button`
  display: flexbox;
  justify-content: center;
  height: 2.5vw;
  width: 2.5vw;
  font-size: 1vw;
  padding: 0;
  margin-bottom: -2.25vw;
`;

const Letras = styled.h3`
  color: #FFFFFF;
  font-size: 2vw;
`;

const Caricatura = styled.img`
  width: 100%;
`;

const Entrada = styled.input`
  height: 44.4px;
  width: 20vw;
`;

const BtnAgregar = styled.button`
  height: 50px;
  width: 15vw;
  font-size: 2.25vw;
  font-weight: bold;
`;

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  padding: 10px;
  background-color: #25c523;
`;

const Actividad = styled.div`
  display: contents;
  background-color: aqua;
  margin-top: 2px;
  vertical-align: center;
`;


export {  FondoCard, Agrupador, Caricatura, Letras, Entrada, BtnAgregar,
          Menu, Actividad, BtnXcard  }

