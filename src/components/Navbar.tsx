import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/images/logo.png'
import styles from '../styles/Navbar.module.css';
import { Button } from './Button';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <div className={styles.flexCenterContainer}>
            <img src={logo} alt="Data Talk Logo" className={styles.logo} />
            <span className={styles.logoText}>Data Talk</span>
          </div>
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <Button 
          label='Sign In'
          onClick={() => {}}
          className={`${styles.navbarButton} ${styles.signInButton}`}
          />
        <Button 
          label='Sign Up'
          onClick={() => {}}
          className={`${styles.navbarButton} ${styles.signUpButton}`}
        />
        <button
          onClick={toggleTheme}
          className={`${styles.navbarButton} ${styles.themeButton}`}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
};