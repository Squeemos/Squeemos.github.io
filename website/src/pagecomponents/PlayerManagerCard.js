import React, { useState } from 'react';

import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';


import { ReactComponent as AddPlayerLogo } from '../assets/svgs/addplayer.svg';
import { ReactComponent as RemovePlayerLogo } from '../assets/svgs/removeplayer.svg';

import './PlayerManagerCard.css';

export const PlayerManagerCard = ({ player, addPlayer, removePlayer, playerKey, canDelete, updatePlayer }) => {
  const handleRemovePlayer = () => {
    removePlayer(playerKey);
  }

  return (
    <Card className='playerCard' key={playerKey}>
      <CardContent key={playerKey + 'content'}>
        <TextField
          label='Player name'
          variant='filled'
          value={player}
          onChange={(e) => updatePlayer(playerKey, e.target.value)}
        />
      </CardContent>
      <CardActions key={playerKey + 'actions'}>
        <div
          key={playerKey + 'remove'}
          className='buttonContainer removePlayer'
          style={{ visibility: canDelete ? 'visible' : 'hidden' }}
          children={<RemovePlayerLogo className='buttonOptions removePlayer' />}
          onClick={handleRemovePlayer}
        />
        <div
          key={playerKey + 'add'}
          className='buttonContainer addPlayer'
          children={<AddPlayerLogo className='buttonOptions addPlayer' />}
          onClick={addPlayer}
        />
      </CardActions>
    </Card>
  );
};

export default PlayerManagerCard;