import React from 'react';

const Select = ({
    name,
    label,
    options,
    onChange
}) => (
    <div>
        <label for={name} />
        <select id={ name } name={name} onChange={ onChange }>
            <option value=''>Select one</option>
            {options.map(({value, text, key}) => <option key={ key } value={ value } >{ text }</option>)}
        </select>
    </div>
);

export default Select;
