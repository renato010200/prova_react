import { useState } from 'react';
import axios from 'axios';
  
  const BotaoConselho = ({ palavraAleatoria }) => {
  const [conselho, setConselho] = useState('');
  

  const buscarConselho = async () => {
    try {
      const response = await axios.get(`https://api.adviceslip.com/advice/search/${palavraAleatoria}`);
      setConselho(response.data.slip.advice);
    } catch (error) {
      console.error('Erro ao buscar conselho:', error);
    }
  };

  return (
    <div>
      <button onClick={buscarConselho}> Dog ({palavraAleatoria})</button>
      {conselho && <p>{conselho}</p>}
      <button onClick={buscarConselho}> Cat ({palavraAleatoria})</button>
      {conselho && <p>{conselho}</p>}
      <button onClick={buscarConselho}> Study ({palavraAleatoria})</button>
      {conselho && <p>{conselho}</p>}
      <button onClick={buscarConselho}> Conselho aleatorio ({palavraAleatoria})</button>
      {conselho && <p>{conselho}</p>}
      
    </div>
  );
};

export default BotaoConselho;


