import React, { Fragment } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { forEach } from "lodash";
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: "#138086",
    color: "#ffffff",
    padding: "8px",
    borderColor: "#d1cfcf"
  },
  body: {
    backgroundColor: "#f9f9f9",
    color: "#55555",
    padding: "8px",
    borderColor: "#d1cfcf"
  },
}))(TableCell);

export default function SpecificationTable({ data }) {
  function mapDataToTable(data) {
    return data.inner ? data.inner : data
  }
  return (
    <TableContainer>
      <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell colSpan={ 2 } align="left">Характеристики</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { mapDataToTable(data).map(({ label, value }) => (
              <TableRow key={ label }>
                <StyledTableCell align="left">{ label }</StyledTableCell>
                <StyledTableCell align="left">{ value }</StyledTableCell>
              </TableRow>
            )
            ) }
          </TableBody>
      </Table>
    </TableContainer>
  );
}
