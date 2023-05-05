import React from 'react';
import PropTypes from 'prop-types';
import { OptionsList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onClickBtn }) => {
  return (
    <OptionsList>
      {options.map(option => {
        return (
          <li key={option}>
            <Button
              type="button"
              value={option}
              onClick={() => onClickBtn(option)}
            >
              {option}
            </Button>
          </li>
        );
      })}
    </OptionsList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onClickBtn: PropTypes.func.isRequired,
};
