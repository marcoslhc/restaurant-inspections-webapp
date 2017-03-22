import React from 'react';

const InspectionRow = ({ inspection }) => (<tr>
                        <td className="inspections-table inspections-table__cell inspections-table__cell--business-name">{ inspection.businessName }</td>
                        <td className="inspections-table inspections-table__cell inspections-table__cell--inspection-type">{ inspection.inspectionType}</td>
                        <td className="inspections-table inspections-table__cell inspections-table__cell--inspection-date">{ inspection.inspectionDate }</td>
                        <td className="inspections-table inspections-table__cell inspections-table__cell--total-violations">{ inspection.totalViolations }</td>
                    </tr>);

InspectionRow.propTypes = {
  inspection: React.PropTypes.object
};

export default InspectionRow;
