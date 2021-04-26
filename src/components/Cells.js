import React from 'react';
import PropTypes from 'prop-types';

export default function Cells(props) {
  const { values, listener } = props;

  // Side note: (why there are so many buttons)
  // A dynamically added button that was focused keeps its outline after being
  // sorted again.

  return (
    <div id='cards'>
      <button type='button' onClick={listener}>{values[0][0]}</button>
      <button type='button' onClick={listener}>{values[1][0]}</button>
      <button type='button' onClick={listener}>{values[2][0]}</button>
      <button type='button' onClick={listener}>{values[3][0]}</button>
      <button type='button' onClick={listener}>{values[4][0]}</button>
      <button type='button' onClick={listener}>{values[5][0]}</button>
      <button type='button' onClick={listener}>{values[6][0]}</button>
      <button type='button' onClick={listener}>{values[7][0]}</button>
      <button type='button' onClick={listener}>{values[8][0]}</button>
      <button type='button' onClick={listener}>{values[9][0]}</button>
      <button type='button' onClick={listener}>{values[10][0]}</button>
      <button type='button' onClick={listener}>{values[11][0]}</button>
      <button type='button' onClick={listener}>{values[12][0]}</button>
      <button type='button' onClick={listener}>{values[13][0]}</button>
      <button type='button' onClick={listener}>{values[14][0]}</button>
      <button type='button' onClick={listener}>{values[15][0]}</button>
      <button type='button' onClick={listener}>{values[16][0]}</button>
      <button type='button' onClick={listener}>{values[17][0]}</button>
      <button type='button' onClick={listener}>{values[18][0]}</button>
      <button type='button' onClick={listener}>{values[19][0]}</button>
      <button type='button' onClick={listener}>{values[20][0]}</button>
      <button type='button' onClick={listener}>{values[21][0]}</button>
      <button type='button' onClick={listener}>{values[22][0]}</button>
      <button type='button' onClick={listener}>{values[23][0]}</button>
      <button type='button' onClick={listener}>{values[24][0]}</button>
    </div>
  );
}

Cells.propTypes = {
  values: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  listener: PropTypes.func.isRequired,
};
