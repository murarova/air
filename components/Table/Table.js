import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { nanoid } from 'nanoid'

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

export default function BasicTable({ rows = [], header = [] }) {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            { header.map((name) => <StyledTableCell key={ name } align="left">{ name }</StyledTableCell>) }
          </TableRow>
        </TableHead>
        <TableBody>
          { rows.map(({ id, name, data }) => (
            <TableRow key={ id }>
              <StyledTableCell component="th" scope="row">
                { name }
              </StyledTableCell>
              { data.map((el) => {
                const id = nanoid();
                return <StyledTableCell key={ id } align="left">{ el }</StyledTableCell>
                })
              }
            </TableRow>
          )
          ) }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
