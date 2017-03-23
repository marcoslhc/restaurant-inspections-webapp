import React from 'react';
import ClassList from '../../utils/ClassList';

const OptionSelection = ({
  text,
  dropdownOpen,
  onOpenOptions,
  onClearOption
}) => {
  const getClassName = () => {
    return ClassList.of([
      'dropdown__options',
      'option-selection',
      'option-selection__root',
      dropdownOpen
        ? 'option-selection__root--open'
        : 'option-selection__root--closed'
    ]).getString();
  };

  return (
    <div className={ getClassName() }>
      <div className="option-selection option-selection__text"
           onClick={ onOpenOptions }>{ text }</div>
      <div className="option-selection option-selection__clear-btn"
           onClick={ onClearOption }>&times;</div>
    </div>
  );
};

OptionSelection.propTypes = {
  text: React.PropTypes.string,
  dropdownOpen: React.PropTypes.bool,
  onOpenOptions: React.PropTypes.func,
  onClearOption: React.PropTypes.func
};

export default OptionSelection;
