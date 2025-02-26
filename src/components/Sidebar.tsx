import React from 'react';
import styles from '../styles/Sidebar.module.css';
import { BsFillBarChartFill, BsSearch } from 'react-icons/bs';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  return (
    <nav className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.logoContainer}>
        <div className={styles.logoInnerContainer}>
          <div className={styles.leftGroup}>
            {/* Barchart icon always appears and shrinks when collapsed */}
            <BsFillBarChartFill
              className={`${styles.logo} ${collapsed ? styles.logoCollapsed : ''}`}
            />
          </div>
          <div className={styles.rightGroup}>
            {/* Render search icon only when sidebar is expanded */}
            {!collapsed && (
              <button 
                className={styles.searchButton} 
                onClick={() => console.log('Search icon clicked')}
                aria-label="Search"
              >
                <BsSearch className={styles.searchIcon} />
              </button>
            )}
            {/* Toggle collapse/expand button */}
            <button
              onClick={onToggle}
              className={styles.toggleButton}
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {collapsed ? '>' : '<'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
