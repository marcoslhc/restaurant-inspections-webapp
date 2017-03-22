import React from 'react';
import businessesRequest from '../../api/businesses';
import Select from '../Select/index.jsx';

export default class BusinessSelect extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { businesses: [] };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
   businessesRequest.get().then(businesses => this.setState({ businesses }));
  }

  componentWillReceiveProps(nextProps) {
    businessesRequest.get( {
      countyNumber: nextProps.countyId,
      perPage: 1000
    }).then(businesses => this.setState((state )=> Object.assign({}, state, { businesses })));
  }

  handleChange(value) {
    this.props.onBusinessSelect(value);
  }

  render() {
    const optionsProps = ({ name, license }) => ({ value: license, key: license, text: name });
    const { selectedBusiness } = this.props;
    const { businesses } = this.state;

    return (<Select name="businesses"
                    label="Businesses"
                    selected={ selectedBusiness }
                    options={ businesses.map(optionsProps) }
                    onSelectChange={ this.handleChange } />);
  }
}

BusinessSelect.propTypes = {
  countyId: React.PropTypes.string,
  onBusinessSelect: React.PropTypes.func,
  selectedBusiness: React.PropTypes.number
};
