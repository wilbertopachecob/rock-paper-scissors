import { GameChoice } from '@/types/game';
import { cx } from '@/utils/classNames';
import styles from '@/styles/ChoiceIcon.module.scss';

type ChoiceIconProps = {
  choice: GameChoice;
  size?: number;
  /**
   * The scissors icon is directional (fingers extend to one side). Player and
   * computer sit on opposite sides of the "VS" divider, so the computer's
   * copy is mirrored to point back toward the player instead of away from it.
   */
  mirrored?: boolean;
  className?: string;
};

const ChoiceIcon: React.FC<ChoiceIconProps> = ({ choice, size = 32, mirrored = false, className }) => {
  const svgProps = {
    width: size,
    height: size,
    viewBox: '0 0 32 32',
    fill: 'currentColor',
    'aria-hidden': true,
    focusable: false,
    className: cx(className, mirrored && styles.mirrored),
  };

  switch (choice) {
    case GameChoice.ROCK:
      return (
        <svg {...svgProps}>
          <rect x="9" y="12" width="17" height="15" rx="7" />
          <circle cx="7.5" cy="18" r="4.5" />
        </svg>
      );
    case GameChoice.PAPER:
      return (
        <svg {...svgProps}>
          <rect x="9" y="17" width="16" height="11" rx="5" />
          <rect x="9" y="4" width="3.2" height="14" rx="1.6" />
          <rect x="13.3" y="2" width="3.2" height="16" rx="1.6" />
          <rect x="17.6" y="2" width="3.2" height="16" rx="1.6" />
          <rect x="21.9" y="5" width="3.2" height="13" rx="1.6" />
          <circle cx="6.5" cy="21" r="3.6" />
        </svg>
      );
    case GameChoice.SCISSORS:
      // Drawn pointing right by default (palm on the left, blades opening to
      // the right) so `mirrored` can flip it to point left.
      return (
        <svg {...svgProps}>
          <rect x="4" y="12" width="10" height="8" rx="4" />
          <rect x="11" y="14.3" width="18" height="3.4" rx="1.7" transform="rotate(-10 11 16)" />
          <rect x="11" y="14.3" width="18" height="3.4" rx="1.7" transform="rotate(10 11 16)" />
          <circle cx="7" cy="10" r="3" />
        </svg>
      );
    default:
      return null;
  }
};

export default ChoiceIcon;
