import {setColorTheme} from '../../../lib/utils';
import Moon from '../../icons/Moon';

const ThemeToggler = () => {
  return (
    <Moon size={36} onClick={() => setColorTheme()}/>
  )
}

export default ThemeToggler;