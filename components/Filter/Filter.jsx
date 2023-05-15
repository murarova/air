import Select, { components } from 'react-select'
import { infoColor, infoColor25, infoColor50, infoColor75 } from 'styles/default-styles';

import SortIcon from '@material-ui/icons/Sort';

const options = [
  { value: 'desc', label: "Від дешевих до дорогих" },
  { value: 'asc', label: 'Від дорогих до дешевих' }
]

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator { ...props }>
        <SortIcon />
      </components.DropdownIndicator>
    )
  );
};

export default function Filter({ handleFilter }) {
  return <Select components={ { DropdownIndicator } }
    styles={ {
      menu: (baseStyles) => ({
        ...baseStyles,
        zIndex: 2
      }),
      indicatorsContainer: (baseStyles) => ({
        ...baseStyles,
        cursor: "pointer"
      }),
      
    } }
    theme={(theme) => ({
      ...theme,
      colors: {
        ...theme.colors,
        primary: infoColor,
        primary25: infoColor25,
        primary50: infoColor50,
        primary75: infoColor75
      },
    })}
    onChange={handleFilter}
    placeholder="Відсортувати"
    options={ options } />
}
