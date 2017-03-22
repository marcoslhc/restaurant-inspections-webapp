import React from 'react';
import Dropdown from '../Dropdown';
import '../../css/Select.css';

const Select = ({
    name,
    label,
    options,
    onSelectChange,
    selected
}) => {


    const handleChange = (value) => {
      onSelectChange(value);
    };

    options.unshift({
      value: 0,
      text: 'Select One',
      key: 0
    });

    return (
        <div className="form-control form-control__select">
            <label className="form-control form-control__select__label" htmlFor={ name }> { label }: </label>
            <Dropdown selected={ selected || 0 }
                      options={ options }
                      onChange={ handleChange }/>
        </div>
    );
};

Select.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    onSelectChange: React.PropTypes.func,
    selected: React.PropTypes.number
};

export default Select;
