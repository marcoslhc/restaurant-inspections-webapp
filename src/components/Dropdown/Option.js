import React from 'react';

const Option = ({
  value,
  text,
  onClick
}) => {
  return (<li className="dropdown__options__option"
              data-value={ value }
              onClick={ onClick }>
            <span className="dropdown__option__text">{ text }</span>
          </li>);
};

Option.propTypes = {
  value:React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  text:React.PropTypes.string,
  onClick:React.PropTypes.func
};

export default Option;
