import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, data) {
    let row = {name, data};
  return row;
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function getRows(n, data) {
    let rows = [];
    for (let i = 0; i < n; i++) {
        rows.push( createData('x' + (i + 1), data[i]),)
    }
    return rows;
}
export default function CustomizedTables(props) {
  const classes = useStyles();
 
  const rows = getRows(props.n, props.data);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> </StyledTableCell>
            {rows.map((row, index) => (
                <StyledTableCell align="right">x{index+1}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              {row.data.map((num) => (
                  <StyledTableCell align="right">{num}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
