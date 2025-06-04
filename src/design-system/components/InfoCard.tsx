export enum InfoCardSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export enum InfoCardVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export interface InfoCardProps {
  /** Main title text of the card */
  title: string;
  /** Body content of the card */
  content: string;
  /** Optional button label - if provided, shows a button */
  buttonText?: string;
  /** Card size variant */
  size?: InfoCardSize;
  /** Visual style variant */
  variant?: InfoCardVariant;
  /** Disabled state */
  disabled?: boolean;
  /** Optional click handler for the button */
  onButtonClick?: () => void;
  /** Additional CSS class name */
  className?: string;
}