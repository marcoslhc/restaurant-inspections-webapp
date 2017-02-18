import React from 'react';
import countiesRequest from '../../api/counties';
import Select from '../Select';

export default class Counties extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            counties: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
       countiesRequest.get().then(counties => this.setState({ counties }));
    }

    handleChange(evt) {
        console.log(evt);
    }

    render() {
        const optionsProps = ({ name, id }) => ({ value: id, key: id, text: name })
        return (<Select name="counties"
                        label="Counties"
                        options={ this.state.counties.map(optionsProps)}
                        onChange={ this.handleChange }/>);
    }
}
