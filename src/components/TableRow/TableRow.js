// src/components/TableRow/TableRow.js

import React from 'react';
import './TableRow.css';

const TableRow = ({ student }) => {
  return (
    <tr className="table-row">
      <td>{student.name}</td>
      <td>{student.parents}</td>
      <td>{student.address}</td>
      <td>{student.teacher}</td>
      <td>{student.grade}</td>
      <td>{student.course}</td> {/* Added course field */}
      <td>{student.email}</td>
      <td>{student.phone}</td>
    </tr>
  );
};

export default TableRow;
