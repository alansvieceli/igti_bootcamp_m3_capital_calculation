import React from 'react';
import {
  formatNumber,
  formatPercentage,
} from '../../../../helpers/formatHelper';

const Installment = ({ data }) => {
  const { index, valor, dif, perDif } = data;

  const styleValue = dif >= 0 ? styles.valueGreen : styles.valueRedBold;
  const stylePerc = dif >= 0 ? styles.valueBlue : styles.valueRed;
  const symbol = dif >= 0 ? '+' : '-';

  return (
    <div className="col s2" style={{ padding: '5px' }}>
      <div>
        <div style={styles.flexRow}>
          <div style={styles.position}>{index}</div>
          <div>
            <div style={styleValue}>{formatNumber(valor)}</div>
            <div style={styleValue}>
              {symbol} {formatNumber(Math.abs(dif.toFixed(2)))}
            </div>
            <div style={stylePerc}>{formatPercentage(perDif)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justfyContent: 'flex-start',
    border: '1px solid black',
    fontSize: '0.9rem',
  },

  position: {
    marginRight: '5px',
    marginLeft: '5px',
    fontWeight: 'bold',
  },

  valueGreen: {
    color: '#3CB371',
    fontWeight: 'bold',
  },

  valueBlue: {
    color: '#1E90FF',
  },

  valueRedBold: {
    color: '#FF0000',
    fontWeight: 'bold',
  },

  valueRed: {
    color: '#FF4500',
  },
};

export default Installment;
