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
import { v4 as uuidv4 } from 'uuid';

import { TeamCaptain } from './pages/TeamCaptain';
import { EloDraft } from './pages/EloDraft';
import { Graphs } from './pages/Graphs';
import { Settings } from './pages/Settings';
import { CoinFlip } from './pages/CoinFlip';
import { RouletteWheel } from './pages/RouletteWheel';
import { PlayerManagement } from './pages/PlayerManager';

import { ReactComponent as GraphLogo } from './assets/svgs/barchart.svg';
import { ReactComponent as CaptainLogo } from './assets/svgs/captain.svg';
import { ReactComponent as EloLogo } from './assets/svgs/elodraft.svg';
import { ReactComponent as OpenDrawerLogo } from './assets/svgs/opendrawer.svg';
import { ReactComponent as CoinFlipLogo } from './assets/svgs/coinflip.svg';
import { ReactComponent as RouletteWheelLogo } from './assets/svgs/roulette.svg';
import { ReactComponent as SettingsLogo } from './assets/svgs/settings.svg';
import { ReactComponent as PlayerManagementLogo } from './assets/svgs/playermanagement.svg';

import './PageManager.css';

const icons = {
  'Graphs': <GraphLogo className='drawerIcon'/>,
  'Team Captains': <CaptainLogo className='drawerIcon'/>,
  'Elo Draft': <EloLogo className='drawerIcon'/>,
  'Open Drawer': <OpenDrawerLogo className='drawerIcon'/>,
  'Coin Flip': <CoinFlipLogo className='drawerIcon'/>,
  'Roulette Wheel': <RouletteWheelLogo className='drawerIcon'/>,
  'Settings': <SettingsLogo className='drawerIcon'/>,
  'Player Management': <PlayerManagementLogo className='drawerIcon'/>
};

const defaultData = {
  [uuidv4()]: 'Enter a player name',
};

export const PageManager = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState('Player Management');
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || defaultData);
  const fullSetData = (newData) => {
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const renderPage = () => {
    switch(page) {
      case 'Graphs':
        return <Graphs data={data} />;
      case 'Team Captains':
        return <TeamCaptain />;
      case 'Elo Draft':
        return <EloDraft />;
      case 'Settings':
        return <Settings />;
      case 'Coin Flip':
        return <CoinFlip />;
      case 'Roulette Wheel':
        return <RouletteWheel />;
      case 'Player Management':
        return <PlayerManagement data={data} setData={fullSetData}/>;
      default:
        return <h1>Hewwo :3</h1>;
    }
  }

  const MiniDrawer = ({pageNames}) => {
    return (
    <List>
        {pageNames.map((text, index) => (
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
    <Box sx={{ width: 250, position: 'relative' }} role="presentation" onClick={toggleDrawer(false)}>
        <MiniDrawer pageNames={['Player Management', 'Graphs', 'Team Captains', 'Elo Draft']} />
        <Divider />
        <MiniDrawer pageNames={['Coin Flip', 'Roulette Wheel']} />
        <Divider />
        <MiniDrawer pageNames={['Settings']} />
    </Box>
  );

  return (
    <>
    <div>
      <Button onClick={toggleDrawer(true)} startIcon={icons['Open Drawer']}>Select Page</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
    <div>
      {
        renderPage()
      }
    </div>
    </>
  );
}