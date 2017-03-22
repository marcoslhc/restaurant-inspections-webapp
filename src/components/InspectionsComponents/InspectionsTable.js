import React from 'react';
import InspectionRow from './InspectionRow';
import '../../css/InspectionsTable.css';

InspectionRow.propTypes = {
  inspection: React.PropTypes.object.isRequired
};

const InspectionsTable = ({ from, to, inspections }) => (
    <div className="InspectionsTable">
        <h1>Inspections</h1>
        <h2>From: { from }, to: { to }</h2>
        <table>
            <thead>
                <tr>
                    <th className="inspections-table__cell--business-name">Business</th>
                    <th className="inspections-table__cell--inspection-type">Inspection Type</th>
                    <th className="inspections-table__cell--inspection-date ">Inspection Date</th>
                    <th className="inspections-table__cell--total-violations">Total Violations</th>
                </tr>
            </thead>
            <tbody>{ inspections.map(inspection => (<InspectionRow key={ inspection.id } inspection={ inspection } />)) }</tbody>
        </table>
    </div>
);

InspectionsTable.propTypes = {
  from: React.PropTypes.string.isRequired,
  to: React.PropTypes.string.isRequired,
  inspections: React.PropTypes.array.isRequired
};

export default InspectionsTable;
