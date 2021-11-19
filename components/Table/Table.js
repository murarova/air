import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: "rgba(200, 200, 200, 0.2)"
  },
});

export default function BasicTable({ rows = [], header = [] }) {
  const classes = useStyles();

  return (
    <TableContainer component={ Paper }>
      <Table className={ classes.table } aria-label="simple table">
        <TableHead>
          <TableRow>
            { header.map((name) => <TableCell key={ name } align="left">{ name }</TableCell>) }
          </TableRow>
        </TableHead>
        <TableBody>
          { rows.map(({ id, name, data }) => (
            <TableRow key={ id }>
              <TableCell component="th" scope="row">
                { name }
              </TableCell>
              { data.map((el) =>
                <TableCell align="left">{ el }</TableCell>)
              }
            </TableRow>
          )
          ) }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
