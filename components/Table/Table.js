import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { nanoid } from 'nanoid'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  }
});

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: "rgba(32,32,32,.7)",
    color: "#FFFFFF",
  },
  body: {
    backgroundColor: "rgba(32,32,32,.6)",
    color: "#FFFFFF",
  },
}))(TableCell);

export default function BasicTable({ rows = [], header = [] }) {
  const classes = useStyles();

  return (
    <TableContainer component={ Paper }>
      <Table className={ classes.table } aria-label="simple table">
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
