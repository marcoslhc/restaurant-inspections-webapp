import React, { Component } from 'react';
import CountiesSelect from '../CountiesComponents';
import BusinessesSelect from '../BusinessesComponents';
import Inspections from '../InspectionsComponents/Inspections';
import { formatDate } from '../../utils';
import '../../css/Inspections.css';

export default class InspectionsApp extends Component {
  constructor(props, context) {
    super(props, context);

    const initialDate = '2013-01-01';

    this.state = {
      startDate: initialDate,
      endDate: formatDate(new Date())
    };

    this.handleCountySelect = this.handleCountySelect.bind(this);
    this.handleBusinessSelect = this.handleBusinessSelect.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleCountySelect(county) {
    this.setState({
      selectedCounty: county
    });
  }
  handleBusinessSelect(business) {
    this.setState({
      selectedBusiness: business
    });
  }

  render() {
    const { startDate, endDate, selectedCounty, selectedBusiness } = this.state;
    const onCountySelect = (countyId) => this.handleCountySelect(countyId);
    const onBusinessSelect = (businessId) => this.handleBusinessSelect(businessId);

    return (
      <div className="Inspections">
        <div className="controls">
          <CountiesSelect selectedCounty={ selectedCounty }
                          onCountySelect={ onCountySelect }/>
          <BusinessesSelect county={ selectedCounty }
                            selectedBusiness={ selectedBusiness }
                            onBusinessSelect={ onBusinessSelect }/>
        </div>
          <Inspections from={ startDate }
                       to={ endDate }
                       county={ selectedCounty }
                       business={ selectedBusiness }/>
      </div>
    );
  }
}
