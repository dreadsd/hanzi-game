import React, { useState, useEffect } from 'react';

export default function Grid() {
  const [lastValue, setLastValue] = useState(null);
  const shuffle = (array) => {
    const nAry = array;
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = nAry[currentIndex];
      nAry[currentIndex] = nAry[randomIndex];
      nAry[randomIndex] = temporaryValue;
    }
    return nAry;
  };
  const [values, setValues] = useState(
    shuffle(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']),
  );

  const retrieveLastValue = (e) => {
    const newValue = e.target.textContent;
    if (newValue === lastValue) {
      alert('You lost');
      setLastValue(null);
      setValues(shuffle);
    } else {
      setLastValue(e.target.textContent);
    }
  };
  useEffect(() => setValues(shuffle), [lastValue]);

  return (
    <>
      <div id='cards'>
        <button type='button' onClick={retrieveLastValue}>{values[0]}</button>
        <button type='button' onClick={retrieveLastValue}>{values[1]}</button>
        <button type='button' onClick={retrieveLastValue}>{values[2]}</button>
        <br />
        <button type='button' onClick={retrieveLastValue}>{values[3]}</button>
        <button type='button' onClick={retrieveLastValue}>{values[4]}</button>
        <button type='button' onClick={retrieveLastValue}>{values[5]}</button>
        <br />
        <button type='button' onClick={retrieveLastValue}>{values[6]}</button>
        <button type='button' onClick={retrieveLastValue}>{values[7]}</button>
        <button type='button' onClick={retrieveLastValue}>{values[8]}</button>
      </div>
    </>
  );
}
