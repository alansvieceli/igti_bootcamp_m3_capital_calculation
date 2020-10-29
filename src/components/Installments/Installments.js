import React from 'react';
import Installment from './components/Installment';

const Installments = ({ data }) => {
  return (
    <div className="row" style={styles.container}>
      {data.map(item => {
        return <Installment data={item} key={item.index} />;
      })}
    </div>
  );
};

const styles = {
  container: {
    padding: '5px',
  },
};

export default Installments;
