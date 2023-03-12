import { convertPriceToUAH, getTotal } from "../../utils/utils";

import AddIcon from '@material-ui/icons/Add';
import { IconButton } from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import Skeleton from '@material-ui/lab/Skeleton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import isEmpty from "lodash/isEmpty";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/components/cartStyle";
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

function ShopingCartTable({ cartItems, rate, removeFromCart, addToCart }) {
  const classes = useStyles();

  const StyledTableCell = withStyles(() => ({
    head: {
      color: "#3c4858",
      padding: "8px",
    },
    body: {
      color: "#55555",
      padding: "8px",
    },

  }))(TableCell);

  return (
    <TableContainer className={ classes.tableWrapper }>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell className={ classes.image } align="left">Фото</StyledTableCell>
            <StyledTableCell align="left">Артикул</StyledTableCell>
            <StyledTableCell align="left">Товар</StyledTableCell>
            <StyledTableCell align="left">Ціна</StyledTableCell>
            <StyledTableCell align="left">Кількість</StyledTableCell>
            <StyledTableCell align="left">Сума</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { cartItems.map((item) => (
            <TableRow key={ item.id }>
              <StyledTableCell className={ classes.image } component="td" scope="row">
                <div className={ classes.productWrapper }>
                  { isEmpty(item.images)
                    ? <Skeleton animation="wave" variant="rect" className={ classes.imageContainer } />
                    : <div className={ classes.imageContainer }>
                      <img className={ classes.img } src={ item.images[ 0 ].downloadURL } alt={ item.title } />
                    </div>
                  }
                </div>
              </StyledTableCell>
              <StyledTableCell  component="td" scope="row">{item.articleNumber}</StyledTableCell>
              <StyledTableCell component="td" scope="row">
                <Typography className={ classes.product } variant="body2">Кондиціонер { item.brand } { item.title }</Typography>
              </StyledTableCell>
              <StyledTableCell component="td" scope="row">
                { convertPriceToUAH(item.price, rate) }
              </StyledTableCell>
              <StyledTableCell component="td" scope="row">
                <div className={ classes.buttons }>
                  <IconButton
                    size="small"
                    variant="contained"
                    onClick={ () => removeFromCart(item.id) }
                  >
                    <RemoveIcon />
                  </IconButton>
                  <p className={ classes.amount }>{ item.amount }</p>
                  <IconButton
                    size="small"
                    variant="contained"
                    onClick={ () => addToCart(item) }
                  >
                    <AddIcon />
                  </IconButton>
                </div>
              </StyledTableCell>
              <StyledTableCell component="td" scope="row">
                { getTotal(item.price, rate, item.amount) }
              </StyledTableCell>
            </TableRow>
          )
          ) }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShopingCartTable;
