import AddIcon from '@material-ui/icons/Add';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { IconButton } from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';
import { convertPriceToUAH } from "utils/utils.js";
import { getTotal } from "../../utils/utils";
import isEmpty from "lodash/isEmpty";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/components/cartItemStyle";

const useStyles = makeStyles(styles);

export const CartItem = ({ item, addToCart, removeFromCart, rate }) => {
  const classes = useStyles();
  const itemPrice = convertPriceToUAH(item.price, rate);
  return (
    <div className={ classes.wrapper }>
      <div className={ classes.item }>
        <GridContainer justifyContent="space-between">
          <GridItem xs={ 12 } md={ 4 }>
            { isEmpty(item?.images)
              ? <Skeleton animation="wave" variant="rect" className={ classes.imageContainer } />
              : <div className={ classes.imageContainer }>
                <img className={ classes.img } src={ item.images[ 0 ].downloadURL } alt={ item.title } />
              </div>
            }
          </GridItem>
          <GridItem xs={ 12 } md={ 8 }>
            <h3>Кондиционер { item.brand } { item.title }</h3>
            <div className={ classes.information }>
              <Typography>Ціна: { itemPrice } грн</Typography>
              <div className={ classes.buttons }>
                <IconButton
                  size="small"
                  disableElevation
                  variant="contained"
                  onClick={ () => removeFromCart(item.id) }
                >
                  <RemoveIcon />
                </IconButton>
                <p className={ classes.quantity }>{ item.amount }</p>
                <IconButton
                  size="small"
                  disableElevation
                  variant="contained"
                  onClick={ () => addToCart(item) }
                >
                  <AddIcon />
                </IconButton>
              </div>
              <Typography>Разом: { getTotal(item.price, rate, item.amount) } грн.</Typography>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

