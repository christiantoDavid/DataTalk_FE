import { ReactNode } from 'react';
import styles from '../styles/Button.module.css';

interface ButtonProps {
  label?: string;
  onClick: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: ReactNode;
}

export const Button = ({
  label,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${className}`}
    >
      {children || label}
    </button>
  );
};