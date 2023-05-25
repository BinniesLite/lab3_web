import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// types
import { CustomTabsProps } from './types';

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient( 111.4deg,  rgba(238,113,113,1) 1%, rgba(246,215,148,1) 58% )',
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
  },
  tab: {
    color: 'var(--black-color)',
    marginRight: theme.spacing(1),
  },
  tabs: {
    justifyContent: 'space-between',
  },
}));



const CustomTabs: React.FC<CustomTabsProps> = ({ tabs, setActiveTab }) => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    // Get the value from the tabs object based on the new value
    
    setActiveTab(tabs[newValue].value);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="Custom tabs example"
      >
        {tabs.map((tab: any, index: number) => (
          <Tab
            className={classes.tab}
            label={tab?.label}
            key={index}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default CustomTabs;
