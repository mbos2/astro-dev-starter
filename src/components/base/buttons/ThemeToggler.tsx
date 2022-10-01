import {setColorTheme} from '../../../lib/utils';
import Moon from '../../icons/Moon';

const ThemeToggler = () => {
  return (
    <Moon onClick={() => setColorTheme()}/>
  )
}

export default ThemeToggler;