import React, { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Installments from './components/Installments';

const App = () => {
  const [parcelas, setParcelas] = useState([]);

  const handleCalcular = (capitalInicial, taxaJuros, periodo) => {
    const parcelasCalc = [];
    let totalAcc = capitalInicial;
    let jurosAcc = 0;

    for (let index = 1; index <= periodo; index++) {
      let vlrAcc = (totalAcc * taxaJuros) / 100;
      let parcela = Number(totalAcc + vlrAcc);
      totalAcc = Number(parcela.toFixed(2));
      jurosAcc += vlrAcc;
      let percDif = (jurosAcc * 100) / capitalInicial;
      //console.log(percDif.toFixed(2));
      // console.log(
      //   `${index} = ${totalAcc} / ${jurosAcc.toFixed(2)} / ${percDif.toFixed(
      //     2
      //   )}`
      // );
      parcelasCalc.push({
        index: index,
        valor: totalAcc,
        dif: jurosAcc,
        perDif: percDif,
      });
      setParcelas(parcelasCalc);
    }
  };

  return (
    <div className="container">
      <Header />
      <Form onCalcular={handleCalcular} />
      <Installments data={parcelas} />
    </div>
  );
};

export default App;
