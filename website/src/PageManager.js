import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { TeamCaptain } from './pages/TeamCaptain';
import { EloDraft } from './pages/EloDraft';
import { Graphs } from './pages/Graphs';
import { ReactComponent as GraphLogo } from './assets/svgs/barchart.svg';
import { ReactComponent as CaptainLogo } from './assets/svgs/captain.svg';
import { ReactComponent as EloLogo } from './assets/svgs/elodraft.svg';
import { ReactComponent as OpenDrawerLogo } from './assets/svgs/opendrawer.svg';
import './PageManager.css';

const icons = {
  'Graphs': <GraphLogo className='drawerIcon'/>,
  'Team Captains': <CaptainLogo className='drawerIcon'/>,
  'Elo Draft': <EloLogo className='drawerIcon'/>,
  'Open Drawer': <OpenDrawerLogo className='drawerIcon'/>
};

export const PageManager = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState('Graphs');

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const renderPage = () => {
    switch(page) {
      case 'Graphs':
        return <Graphs />;
      case 'Team Captains':
        return <TeamCaptain />;
      case 'Elo Draft':
        return <EloDraft />;
      default:
        return <h1>Hewwo :3</h1>;
    }
  }

  const MiniDrawer = (props) => {
    console.info(props);

    return (
    <List>
        {props.pageNames.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {
                    icons[text]
                }
              </ListItemIcon>
              <ListItemText primary={text} onClick={() => setPage(text)}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <MiniDrawer pageNames={['Graphs', 'Team Captains', 'Elo Draft']} />
        <Divider />
        <MiniDrawer pageNames={['Coin Flip', 'Roulette Wheel']} />
    </Box>
  );

  return (
    <>
    <div>
      <Button onClick={toggleDrawer(true)} startIcon={icons['Open Drawer']}>Select Page</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
        {
            renderPage()
        }
    </div>
    </>
  );
}