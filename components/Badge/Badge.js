import Badge from '@material-ui/core/Badge';
import { accentColor } from "styles/default-styles.js";
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles(() => ({
  badge: {
    right: -10,
    top: -5,
    backgroundColor: accentColor
  },
}))(Badge);

export default StyledBadge;
