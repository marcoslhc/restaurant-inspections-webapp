import React from 'react';
import countiesRequest from '../../api/counties';
import Select from '../Select/index.jsx';

export default class CountiesSelect extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      counties: [],
      selectedCounty: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    countiesRequest.get().then(counties => this.setState({ counties }));
  }

  handleChange(value) {
    this.props.onCountySelect(value);
  }

  render() {
    const optionsProps = ({ name, id }) => ({ value: id, key: id, text: name });
    const { counties } = this.state;
    const { selectedCounty } = this.props;

    return ( <Select name="counties"
                     label="Counties"
                     options={ counties.map(optionsProps) }
                     selected={ selectedCounty || 0 }
                     onSelectChange={ this.handleChange } />);
  }
}
