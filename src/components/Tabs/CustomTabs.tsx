import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// types
import { CustomTabsProps } from './types';


const CustomTabs: React.FC<CustomTabsProps> = ({ tabs, setActiveTab }) => {
  
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    // Get the value from the tabs object based on the new value
    
    setActiveTab(tabs[newValue].value);
  };

  return (
    <div >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="Custom tabs example"
      >
        {tabs.map((tab: any, index: number) => (
          <Tab
            
            label={tab?.label}
            key={index}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default CustomTabs;
