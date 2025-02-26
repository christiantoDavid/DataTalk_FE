import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/images/logo.png'
import styles from '../styles/Navbar.module.css';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <div className={styles.logoInnerContainer}>
            <img src={logo} alt="Data Talk Logo" className={styles.logo} />
            <span className={styles.logoText}>Data Talk</span>
          </div>
        </Link>
      </div>
      <button
        onClick={toggleTheme}
        className={styles.themeButton}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};