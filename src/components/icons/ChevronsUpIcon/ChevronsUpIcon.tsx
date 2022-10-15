import { SharedProps } from '../../../lib/models';
import styles from '../Icons.module.scss';

interface ChevrosUpIconProps extends SharedProps {
  size: number;
  stroke?: string;
}

const ChevrosUpIcon = ({
  id,
  className,
  size,
  stroke,
  onClick,
}: ChevrosUpIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={styles.svg}
      stroke={stroke}>
      <path d="m6.293 11.293 1.414 1.414L12 8.414l4.293 4.293 1.414-1.414L12 5.586z"></path>
      <path d="m6.293 16.293 1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L12 10.586z"></path>
    </svg>
  );
};

export default ChevrosUpIcon;
