import React, { useState, useEffect } from 'react';

export default function Grid() {
  const [valuePath, setValuePath] = useState('');
  const [score, setScore] = useState(0);
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

  const retrieveValue = (e) => {
    const newValue = e.target.textContent;
    if (valuePath.includes(newValue)) {
      alert('You lost');
      setScore(0);
      setValuePath('');
      setValues(shuffle);
    } else {
      setScore((v) => v + 1);
      setValuePath((v) => v + e.target.textContent);
    }
  };
  useEffect(() => setValues(shuffle), [score]);

  return (
    <>
      <div id='status'>
        <span>{score}</span>
      </div>
      <div id='cards'>
        <button type='button' onClick={retrieveValue}>{values[0]}</button>
        <button type='button' onClick={retrieveValue}>{values[1]}</button>
        <button type='button' onClick={retrieveValue}>{values[2]}</button>
        <br />
        <button type='button' onClick={retrieveValue}>{values[3]}</button>
        <button type='button' onClick={retrieveValue}>{values[4]}</button>
        <button type='button' onClick={retrieveValue}>{values[5]}</button>
        <br />
        <button type='button' onClick={retrieveValue}>{values[6]}</button>
        <button type='button' onClick={retrieveValue}>{values[7]}</button>
        <button type='button' onClick={retrieveValue}>{values[8]}</button>
      </div>
    </>
  );
}
