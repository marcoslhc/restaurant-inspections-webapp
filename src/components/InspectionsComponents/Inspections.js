import React from 'react';
import InspectionsAPI from '../../api/inspections';
import InspectionsTable from './InspectionsTable';

export default class Inspections extends React.Component {
  constructor(props, context) {
    super(props, context);
    const {from, to, county, business} = props;
    const now = new Date();
    const oneMonthAgo = new Date((new Date()).setMonth(now.getMonth() - 1));

    this.state = {
      from: from || oneMonthAgo.getTime(),
      to: to || now.getTime(),
      county,
      business,
      inspections: [],
      selected: void 0
    };
  }
  componentDidMount() {
    InspectionsAPI.getBetween(this.state.from, this.state.to).then(inspections => this.setState({inspections}));
  }
  componentWillReceiveProps(nextProps) {
    let params = {
      startDate: nextProps.from,
      endDate: nextProps.to,
      countyNumber: nextProps.county,
      licenseNumber: nextProps.business
    };

    params = Object.keys(params).filter((key) => params[key]).reduce((obj, key) => {
      obj[key] = params[key];
      return obj;
    }, {});

    InspectionsAPI.get(params).then(inspections => this.setState({inspections}));
  }
  render() {
    const {from, to, inspections} = this.state;
    return (<InspectionsTable from={ from } to={ to } inspections={ inspections }/>);
  }
}

Inspections.propTypes = {
  from: React.PropTypes.string,
  to: React.PropTypes.string,
  county: React.PropTypes.number,
  business: React.PropTypes.string
};
