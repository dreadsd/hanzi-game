import React, { useState, useEffect } from 'react';

export default function Grid() {
  const [valuePath, setValuePath] = useState('');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [message, setMessage] = useState({
    className: 'message-normal',
    content: 'Select different hanzi',
  });
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
    [
      '声', '酒', '空', '芯', '白',
      '像', '奇', '体', '果', '知',
      '特', '是', '愛', '影', '波',
      '不', '笑', '目', '理', '塔',
      '殺', '蟹', '差', '鬼', '血',
    ],
  );

  const retrieveValue = (e) => {
    const newValue = e.target.textContent;
    if (valuePath.includes(newValue)) {
      setMessage({
        className: 'message-fail',
        content: 'You lost',
      });
      setScore(0);
      setValuePath('');
      setValues(shuffle);
    } else {
      setMessage({
        className: 'message-normal',
        content: 'Select different hanzi',
      });
      setScore((v) => {
        let newVal = v + 1;
        if (newVal > bestScore) setBestScore(newVal);
        if (newVal === 1) {
          setMessage({
            className: 'message-success',
            content: 'You won',
          });
          newVal = 0;
          setValuePath('');
          setValues(shuffle);
        }
        return newVal;
      });
      setValuePath((v) => v + e.target.textContent);
    }
  };
  useEffect(() => setValues(shuffle), [score]);

  return (
    <>
      <div id='status'>
        <div>
          <div>
            Score:
            {' '}
            {score}
          </div>
          <div className={bestScore === values.length ? 'message-success' : null}>
            Best Score:
            {' '}
            {bestScore}
          </div>
          <div className={message.className}>{message.content}</div>
        </div>
      </div>
      <div id='cards'>
        <button type='button' onClick={retrieveValue}>{values[0]}</button>
        <button type='button' onClick={retrieveValue}>{values[1]}</button>
        <button type='button' onClick={retrieveValue}>{values[2]}</button>
        <button type='button' onClick={retrieveValue}>{values[3]}</button>
        <button type='button' onClick={retrieveValue}>{values[4]}</button>
        <button type='button' onClick={retrieveValue}>{values[5]}</button>
        <button type='button' onClick={retrieveValue}>{values[6]}</button>
        <button type='button' onClick={retrieveValue}>{values[7]}</button>
        <button type='button' onClick={retrieveValue}>{values[8]}</button>
        <button type='button' onClick={retrieveValue}>{values[9]}</button>
        <button type='button' onClick={retrieveValue}>{values[10]}</button>
        <button type='button' onClick={retrieveValue}>{values[11]}</button>
        <button type='button' onClick={retrieveValue}>{values[12]}</button>
        <button type='button' onClick={retrieveValue}>{values[13]}</button>
        <button type='button' onClick={retrieveValue}>{values[14]}</button>
        <button type='button' onClick={retrieveValue}>{values[15]}</button>
        <button type='button' onClick={retrieveValue}>{values[16]}</button>
        <button type='button' onClick={retrieveValue}>{values[17]}</button>
        <button type='button' onClick={retrieveValue}>{values[18]}</button>
        <button type='button' onClick={retrieveValue}>{values[19]}</button>
        <button type='button' onClick={retrieveValue}>{values[20]}</button>
        <button type='button' onClick={retrieveValue}>{values[21]}</button>
        <button type='button' onClick={retrieveValue}>{values[22]}</button>
        <button type='button' onClick={retrieveValue}>{values[23]}</button>
        <button type='button' onClick={retrieveValue}>{values[24]}</button>
      </div>
    </>
  );
}
