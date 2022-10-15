import { SharedProps } from "../../../lib/models";
import './NavigationToggler.scss';
interface NavigationTogglerProps extends SharedProps {
  
}

const NavigationToggler = ({id, className, onClick, ...props}: NavigationTogglerProps) => {
  return (
  <div id="navigation-toggler" className="container">
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </div>)
}

export default NavigationToggler;