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
  height: 2.75vw;
  width: 2.75vw;
  font-size: 1.25vw;
  padding: 0;
  margin-bottom: -2.25vw;
`;

const Letras = styled.h3`
  color: #FFFFFF;
  font-size: 2vw;
`;

const UpIMG = styled.div`
  display: flexbox;
  justify-content: space-between;
  margin-top: -2.25vw;
  align-items: center;
`;

const BtnFAVcard = styled.button`
  height: 3vw;
  width: 3vw;
  font-size: 1.5vw;
  padding: 0;
`;

const DID = styled.div`
  color: #00ff00;
  height: 3vw;
  font-weight: bold;
  font-size: 2vw;
  padding-top: 3%;
  padding-right: 2px;
`;

const DIDfav = styled.div`
  color: #fff300;
  height: 3vw;
  font-weight: bold;
  font-size: 2vw;
  padding-top: 3%;
  padding-right: 2px;
  margin-left: auto;
`;

const Caricatura = styled.img`
  width: 100%;
`;

const Entrada = styled.input`
  height: 44.3px;
  width: 20vw;
  font-size: 2.25vw;
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

const Enlaces = styled.div`
  background-color:  #25c523;
  text-transform:  uppercase;
  display:  flex;
  justify-content:  center;
  align-items:  center;
  font-weight:  bold;
`;

const DetalleCard = styled.div`
  background-color:  #34B29F;
  padding:  0.10% 0.10%;
  width:  41%;
  margin:  auto;
`;

const Secc = styled.section`
    display: flex;
    flex-direction: column;
`;
const Face = styled.img`
    margin: auto;
    width: 50%;
    object-fit: contain;
`;

const Login = styled.form`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    font-weight: bold;
    color: #282c34;
`;

const Campos = styled.label`
    width: auto;
    margin-top: auto;
    margin-bottom: auto;
`;

const Ordenes = styled.section`
    display: flexbox;
    justify-content: space-between;
    font-weight: bold;
    font-size: 2vw;
`;


export {  FondoCard, Agrupador, UpIMG, BtnFAVcard, DID, DIDfav, Caricatura, Letras, Entrada, BtnAgregar,
          Menu, Actividad, BtnXcard, Enlaces, DetalleCard, Face, Secc, Login, Campos, Ordenes }

