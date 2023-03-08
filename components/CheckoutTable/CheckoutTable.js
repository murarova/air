import { convertPriceToUAH, getTotal } from "../../utils/utils";

import Skeleton from '@material-ui/lab/Skeleton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import isEmpty from "lodash/isEmpty";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/components/checkoutStyles";
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

function CheckoutTable({ cartItems, rate }) {
  const classes = useStyles();

  const StyledTableCell = withStyles(() => ({
    head: {
      backgroundColor: "#138086",
      color: "#ffffff",
      padding: "8px",
      borderColor: "#d1cfcf",
      fontSize: "1rem"
    },
    body: {
      color: "#55555",
      padding: "8px",
      borderColor: "#d1cfcf"
    },

  }))(TableCell);

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell className={ classes.image } align="left">Фото</StyledTableCell>
            <StyledTableCell align="left">Артикул</StyledTableCell>
            <StyledTableCell align="left">Найменування</StyledTableCell>
            <StyledTableCell align="left">Ціна</StyledTableCell>
            <StyledTableCell align="left">Кількість</StyledTableCell>
            <StyledTableCell align="left">Сума</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { cartItems.map(({ id, brand, title, images, price, amount, articleNumber }) => (
            <TableRow key={ id }>
              <StyledTableCell className={ classes.image } component="td" scope="row">
                { isEmpty(images)
                  ? <Skeleton animation="wave" variant="rect" className={ classes.imageContainer } />
                  : <div className={ classes.imageContainer }>
                    <img className={ classes.img } src={ images[ 0 ].downloadURL } alt={ title } />
                  </div>
                }
              </StyledTableCell>
              <StyledTableCell component="td" scope="row">
                { articleNumber }
              </StyledTableCell>
              <StyledTableCell component="td" scope="row">
                Кондиционер { brand } { title }
              </StyledTableCell>
              <StyledTableCell component="td" scope="row">
                { convertPriceToUAH(price, rate) }
              </StyledTableCell>
              <StyledTableCell component="td" scope="row">
                { amount }
              </StyledTableCell>
              <StyledTableCell component="td" scope="row">
                { getTotal(price, rate, amount) }
              </StyledTableCell>
            </TableRow>
          )
          ) }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CheckoutTable;
