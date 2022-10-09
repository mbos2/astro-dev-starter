import {SharedProps} from '../../../lib/models';

interface LinkProps extends SharedProps {
  text: string;
  href: string;
  target?: string;
}

const Link = ({href, target, text, id, className, onClick} : LinkProps) => {
  return (
    <a href={href} target={target} id={id} className={className} onClick={onClick}>
      {text}
    </a>
  )
}

export default Link;