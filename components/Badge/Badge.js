import Badge from '@material-ui/core/Badge';
import { accentColor } from "styles/default-styles.js";
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles(() => ({
  badge: {
    right: -10,
    top: -5,
    backgroundColor: accentColor,
    "@media (max-width: 959px)": {
      right: 5,
      top: 5,
    },
  },
}))(Badge);

export default StyledBadge;
