import React, { useEffect, useState } from 'react';
import './App.css';
import Cep from './services/Cep';

function App() {
  const [cep, setCep] = useState('');
  const [dados, setDados] = useState([]);
  const [botao, setBotao] = useState(true);

  useEffect(() => {
    Cep.get(`${cep}/json/`).then((res) => {
      setDados(res.data);
    }).catch((err) => {
      console.log('erro' + err)
    })
  })

  return (
    <section className="App">
      <section className='Consulta'>
        <h1>Consultar <span className='tituloCep'>CEP</span></h1>
        <input type='number' name='cep' placeholder='"ex": 46400-000' onChange={(e) => setCep(e.target.value)}/>
        <button onClick={() =>{botao ? setBotao(false) : setBotao(true)}}><p className='botao'>→</p></button>
      </section>

      <section className='retorno'>
        <h1 className='retornoCep'>Cep {dados.cep}</h1>
        <p className='local'>{dados.localidade} - {dados.uf}</p>
        <aside>
          <div className='dadosEsquerda'>
            <p><span>Logradouro:</span> {dados.logradouro}</p>
            <p><span>CEP:</span> {dados.cep} </p>
            <p><span>Bairro:</span> {dados.bairro} </p>
          </div>
          <div className='dadosDireita'>
            <p><span>Cidade:</span> {dados.localidade} </p>
            <p><span>UF:</span> {dados.uf} </p>
            <p><span>DDD:</span> {dados.ddd} </p>
          </div>
        </aside>
      </section>

    </section>
  );
}

export default App;
