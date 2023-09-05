import React from 'react';
import PropTypes from 'prop-types';

const FeedbackButtons = ({ options, onLeaveFeedback }) => {
  return options.map(buttonName => {
    return (
      <button
        key={buttonName}
        onClick={onLeaveFeedback}
        name={buttonName}
        type="button"
      >
        {buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}
      </button>
    );
  });
};

export default FeedbackButtons;

FeedbackButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
