import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GlobalData from './GlobalData';
import CountryWiseData from './CountryWiseData';
import PrecautionsCovid from './PrecautionsCovid-19';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  redColor:{
      color: 'red'
  },
  blueColor:{
      color: 'blue'
  },
  greenColor:{
      color: 'green'
  }
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Global data" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Country Wise Data" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Precautions Covid-19" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h2 className={classes.redColor}>Global data</h2 >
        <GlobalData />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2 className={classes.blueColor}>Effected Countries</h2>
        <CountryWiseData />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h2 className={classes.greenColor}>Precautions Covid-19</h2>
      <PrecautionsCovid />
      </TabPanel>
    </div>
  );
}
