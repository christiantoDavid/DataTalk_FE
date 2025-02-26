import { useTheme } from '../context/ThemeContext';
import styles from '../styles/Landing.module.css';

import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';

const Landing = () => {
  const { theme } = useTheme();

  return (
    <div>
      <Navbar />
      <div className={styles.landing}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.highlight}>Data Talk</span>
          </h1>
          <p className={styles.subtitle}>
            A modern experience tailored just for you. Ready to get started?
          </p>
          <Button
            label="Join Now"
            onClick={() => console.log('Join clicked')}
            className={styles.ctaButton} // Optional extra styling
          />
          <p className={styles.themeNote}>Currently in {theme} mode</p>
        </section>
      </div>
    </div>
  );
};

export default Landing;