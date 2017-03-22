import React from 'react';
import Option from './Option';
import ClassList from '../../utils/ClassList';

const OptionsList = ({
  dropdownOpen,
  options,
  onClick
}) => {
  const handleClick = value => () => onClick(value);

  const getClassName = () => {
    return ClassList.of([
      'dropdown__options',
      dropdownOpen 
        ? 'dropdown__options--visible'
        : 'dropdown__options--hidden'
    ]).getString();
  };

  return (
    <div className={ getClassName() }>
      { options.map(option => (<Option key={ option.value }
                                       value={ option.value }
                                       text={ option.text }
                                       onClick={ handleClick(option.value) }/>)) }
    </div>);
};

OptionsList.propTypes = {
  dropdownOpen:React.PropTypes.bool,
  options:React.PropTypes.array,
  onClick:React.PropTypes.func
};

export default OptionsList;
