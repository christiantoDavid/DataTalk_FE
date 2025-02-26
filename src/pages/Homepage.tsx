import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';

const HomePage = () => {
  // State to manage the sidebar's collapsed status
  const [collapsed, setCollapsed] = useState(false);

  // Function to toggle the sidebar's collapsed state
  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Render the Sidebar */}
      <Sidebar collapsed={collapsed} onToggle={toggleSidebar} />
      {/* Empty main area that adjusts based on sidebar state */}
      <main
        style={{
          marginLeft: collapsed ? '60px' : '200px',
          flexGrow: 1,
          padding: '20px',
          
        }}
      >
        {/* Future content can be added here */}
      </main>
    </div>
  );
};

export default HomePage;