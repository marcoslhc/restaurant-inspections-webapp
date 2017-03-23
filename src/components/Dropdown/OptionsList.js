import React from 'react';
import Option from './Option';
import ClassList, { initialClass } from '../../utils/ClassList';

const OptionsList = ({
  dropdownOpen,
  options,
  onClick
}) => {
  const handleClick = value => () => onClick(value);

  const getClassName = () => {
    const classes = initialClass(['dropdown__options']);
    const newClasses = ClassList.of([
      dropdownOpen
        ? 'dropdown__options--visible'
        : 'dropdown__options--hidden'
    ]);
    return classes(newClasses).getString();
  };

  return (
    <div className="group">
      <ul className={ getClassName() }>
        { options.map(option => (<Option key={ option.value }
                                         value={ option.value }
                                         text={ option.text }
                                         onClick={ handleClick(option.value) }/>)) }
      </ul>
    </div>);
};

OptionsList.propTypes = {
  dropdownOpen:React.PropTypes.bool,
  options:React.PropTypes.array,
  onClick:React.PropTypes.func
};

export default OptionsList;
