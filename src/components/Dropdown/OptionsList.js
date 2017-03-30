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
    const classes = ClassList.of(['dropdown__options']);
    const hiddenOrVisible = ClassList.of([
      dropdownOpen ? 'dropdown__options--visible'
      : 'dropdown__options--hidden'
    ]);
    const combine = list1 => list2 => list1.concat(list2);
    return combine(classes)(hiddenOrVisible).getString();
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
