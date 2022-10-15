import { SharedProps } from '../../../lib/models';

interface LinkProps extends SharedProps {
  text?: string;
  href: string;
  target?: string;
}

const Link = ({
  href,
  target,
  text,
  id,
  className,
  onClick,
  ...props
}: LinkProps) => {
  const { children } = props;
  return (
    <>
      <a
        href={href}
        target={target}
        id={id}
        className={className}
        onClick={onClick}>
        {/* {text ? text : <slot></slot>} */}
        {children}
      </a>
    </>
  );
};

export default Link;
