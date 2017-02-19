import React from 'react';

const InspectionRow = ({ inspection }) => (<tr key={inspection.id}>
                        <td>{ inspection.businessName}</td>
                        <td>{ inspection.inspectionType}</td>
                        <td>{ inspection.inspectionDate }</td>
                        <td>{ inspection.totalViolations }</td>
                    </tr>);

const InspectionsTable = ({ from, to, inspections }) => (
    <div>
        <h1>Inspections</h1>
        <h2>From: from, to: from</h2>
        <table>
            <thead>
                <tr>
                    <th>Business</th>
                    <th>Inspection Type</th>
                    <th>Inspection Date</th>
                    <th>Total Violations</th>
                </tr>
            </thead>
            <tbody>{ inspections.map(inspection => (<InspectionRow inspection={inspection} />)) }</tbody>
        </table>
    </div>
);

export default InspectionsTable
