import { SharedProps } from '../../../lib/models';
import styles from './MoonIcon.module.scss';
interface MoonIconProps extends SharedProps {
  size: number;
}

const MoonIcon = ({ id, className, size, onClick }: MoonIconProps) => {
  return (
    <svg
      className={className + ' ' + styles.moon}
      id={id}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none">
      <rect
        x="2.5"
        y="2.5"
        width="115"
        height="115"
        rx="12.5"
        stroke="black"
        strokeWidth="5"
      />
      <path
        d="M60.3893 59.612C55.3072 54.5278 51.8463 48.0513 50.4437 41.0008C49.0411 33.9502 49.7599 26.6422 52.5091 20C44.6704 21.5432 37.4702 25.3895 31.8293 31.0471C16.0569 46.82 16.0569 72.3959 31.8293 88.1688C47.6057 103.946 73.1768 103.942 88.9533 88.1688C94.6092 82.5282 98.4552 75.3295 100 67.4924C93.358 70.2412 86.0502 70.9597 79.0001 69.5571C71.9499 68.1545 65.4736 64.6937 60.3893 59.612V59.612Z"
        fill="black"
      />
    </svg>
  );
};

export default MoonIcon;
