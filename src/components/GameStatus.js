import React from 'react';
import PropTypes from 'prop-types';

export default function GameStatus(props) {
  const {
    score, bestScore, message, lastSymbol,
  } = props;
  return (
    <div id='status'>
      <div>
        <div>
          Score:
          {' '}
          {score}
        </div>
        <div className={bestScore.successClassName}>
          Best Score:
          {' '}
          {bestScore.content}
        </div>
        <div className={message.className}>{message.content}</div>
        <div>
          Last word:
          {' '}
          {lastSymbol}
        </div>
      </div>
    </div>
  );
}

GameStatus.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.shape({
    content: PropTypes.number.isRequired,
    successClassName: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  }).isRequired,
  lastSymbol: PropTypes.string.isRequired,
};
