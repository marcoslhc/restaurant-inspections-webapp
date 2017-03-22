import React from 'react';

const OptionSelection = ({
  text,
  onOpenOptions,
  onClearOption
}) => {
  return (
    <div className="option-selection option-selection__root">
      <div className="option-selection option-selection__text"
           onClick={ onOpenOptions }>{ text }</div>
      <div className="option-selection option-selection__clear-btn"
           onClick={ onClearOption }>&times;</div>
    </div>
  );
};

OptionSelection.propTypes = {
  text: React.PropTypes.string,
  onOpenOptions: React.PropTypes.func,
  onClearOption: React.PropTypes.func
};

export default OptionSelection;
