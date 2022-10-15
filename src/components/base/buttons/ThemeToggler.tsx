import {setColorTheme} from '../../../lib/utils';
import MoonIcon from '../../icons/MoonIcon/MoonIcon';

const ThemeToggler = () => {
  return (
    <MoonIcon size={36} onClick={() => setColorTheme()}/>
  )
}

export default ThemeToggler;