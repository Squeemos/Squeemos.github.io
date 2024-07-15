import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import { ReactComponent as AddPlayerLogo } from '../assets/svgs/addplayer.svg';
import { ReactComponent as RemovePlayerLogo } from '../assets/svgs/removeplayer.svg';

import './PlayerManagerCard.css';

const textFieldOptions = {
  mt: '32px',
  mb: '32px',
};

const buttonOptions = {
  width: '64px',
  height: '64px',
  display: 'flex',
  justifyContent: 'center',
  margin: '4px 4px 12px 4px',
}

const addPlayerOptions = {
  ...buttonOptions,
  backgroundColor: '#11c21d',
};

const removePlayerOptions = {
  ...buttonOptions,
  backgroundColor: '#FF0000',
};

const playerOptions = {
  width: '300px',
  height: '200px',
  backgroundColor: '#1976d2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
};

export const PlayerManagerCard = ({ player, addPlayer, removePlayer, playerKey, canDelete, updatePlayer }) => {
  console.debug(player);
  const handleRemovePlayer = () => {
    removePlayer(playerKey);
  }

  return (
    <Box sx={playerOptions}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Player Name"
            variant="filled"
            fullWidth sx={textFieldOptions}
            value={player}
            onChange={(e) => updatePlayer(playerKey, e.target.value)}
            InputProps={{
              style: { color: '#ffffff' },
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <div onClick={handleRemovePlayer} style={{ display: canDelete ? 'flex' : 'none', justifyContent: 'left' }}>
            <Box sx={removePlayerOptions} alignContent={'center'} justifyContent={'center'}>
              <RemovePlayerLogo className='addPlayer'/>
            </Box>
          </div>
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'right'}}>
          <div onClick={addPlayer} style={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={addPlayerOptions} alignContent={'center'} justifyContent={'center'}>
              <AddPlayerLogo className='addPlayer'/>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};