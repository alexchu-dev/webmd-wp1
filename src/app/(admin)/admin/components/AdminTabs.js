"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DestinationsList from './DestinationList';

export default function AdminTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Destinations" value="1" />
            <Tab label="Packages" value="2" />
            <Tab label="Journals" value="3" />
            <Tab label="Users" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1"><DestinationsList/></TabPanel>
        <TabPanel value="2">Under construction</TabPanel>
        <TabPanel value="3">Under construction</TabPanel>
        <TabPanel value="4">Under construction</TabPanel>
      </TabContext>
    </Box>
  );
}