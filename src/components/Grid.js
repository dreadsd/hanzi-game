import React, { useState, useEffect } from 'react';

import GameStatus from './GameStatus';
import Cells from './Cells';

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
      ['声', 'sound'], ['酒', 'wine'], ['空', 'air'], ['芯', 'core'], ['白', 'white'],
      ['像', 'image'], ['奇', 'odd'], ['体', 'body'], ['果', 'fruit'], ['冷', 'cold'],
      ['特', 'special'], ['危', 'danger'], ['愛', 'love'], ['影', 'shadow'], ['波', 'wave'],
      ['神', 'god'], ['笑', 'laugh'], ['目', 'eye'], ['打', 'fight'], ['塔', 'tower'],
      ['殺', 'kill'], ['蟹', 'crab'], ['黑', 'black'], ['鬼', 'ghost'], ['血', 'blood'],
    ],
  );

  const finishGame = () => {
    setScore(0);
    setValuePath('');
    setValues(shuffle);
  };
  const failGame = () => {
    setMessage({
      className: 'message-fail',
      content: 'You lost',
    });
    finishGame();
  };
  const checkScore = (v) => {
    const newScore = v + 1;
    if (newScore > bestScore) setBestScore(newScore);
    if (newScore === values.length) {
      setMessage({
        className: 'message-success',
        content: 'You won',
      });
      finishGame();
      return 0;
    }
    return newScore;
  };
  const checkSymbol = (value) => {
    const newScore = checkScore(score);
    if (newScore !== 0) {
      setMessage({
        className: 'message-normal',
        content: 'Select different hanzi',
      });
      setValuePath((v) => v + value);
      setScore(newScore);
    }
  };
  const retrieveValue = (e) => {
    const newValue = e.target.textContent;
    if (valuePath.includes(newValue)) {
      failGame();
    } else {
      checkSymbol(newValue);
    }
  };
  useEffect(() => setValues(shuffle), [score]);

  return (
    <>
      <GameStatus
        score={score}
        bestScore={{
          content: bestScore,
          successClassName: bestScore === values.length ? 'message-success' : '',
        }}
        message={message}
        lastSymbol={
          valuePath
            ? values.find((v) => v[0] === valuePath[valuePath.length - 1])[1]
            : 'none'
        }
      />
      <Cells values={values} listener={retrieveValue} />
    </>
  );
}
