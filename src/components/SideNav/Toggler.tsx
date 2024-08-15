import styles from './Toggler.module.scss';
type TogglerProps = {
  isToggled: boolean;
  onToggle: (toggled: boolean) => void;
};
export function Toggler({ isToggled, onToggle }: TogglerProps) {
  return (
    <div
      className={`${styles.toggle} ${isToggled ? styles.active : ''}`}
      onClick={() => onToggle(!isToggled)}
    ></div>
  );
}
