import React, { useState, useEffect } from 'react';
import InputValue from './components/InputValue';

const Form = ({ onCalcular }) => {
  const [capitalInicial, setCapitalInicial] = useState(100);
  const [taxaJuros, setTaxaJuros] = useState(0);
  const [periodo, setPeriodo] = useState(1);

  useEffect(() => {
    doCalcular();
  }, [capitalInicial, taxaJuros, periodo]);

  const doCalcular = () => {
    if (onCalcular) {
      onCalcular(capitalInicial, taxaJuros, periodo);
    }
  };

  const handleInputChangeCapitalInicial = event => {
    setCapitalInicial(+event.target.value);
  };

  const handleInputChangeTaxaJuros = event => {
    setTaxaJuros(+event.target.value);
  };

  const handleInputChangePeriodo = event => {
    setPeriodo(+event.target.value);
  };

  return (
    <div className="row">
      <div className="col s4">
        <InputValue
          label="Capital Inicial"
          value={capitalInicial}
          onInputChange={handleInputChangeCapitalInicial}
          step={100}
          min={100}
        />
      </div>
      <div className="col s4">
        <InputValue
          label="Taxa de juros mensal"
          value={taxaJuros}
          onInputChange={handleInputChangeTaxaJuros}
          min={-12}
          max={12}
          step={0.1}
        />
      </div>
      <div className="col s4">
        <InputValue
          label="Período (meses)"
          value={periodo}
          onInputChange={handleInputChangePeriodo}
          min={1}
          max={60}
          step={1}
        />
      </div>
    </div>
  );
};

export default Form;
