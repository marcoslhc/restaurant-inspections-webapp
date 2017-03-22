import React from 'react';

const Option = ({
  value,
  text,
  onClick
}) => {
  return (<div data-value={ value }
               onClick={ onClick }>{ text }</div>);
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
