import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { ReactComponent as AddPlayerLogo } from '../assets/svgs/addplayer.svg';

import './PlayerManagerCard.css';

const textFieldOptions = {
  mt: '32px',
  mb: '32px',
};

const addPlayerOptions = {
  width: '84px',
  height: '84px',
  backgroundColor: '#11c21d',
};

export const PlayerManagerCard = ({ player, addPlayer }) => {
  if (player === 'Add player') {
    return (
      <div onClick={addPlayer}>
      <Box sx={addPlayerOptions} alignContent={'center'} justifyContent={'center'}>
          <AddPlayerLogo className='addPlayer'/>
        </Box>
      </div>
    );
  } else {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#1976d2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextField id="outlined-basic" label="Player Name" variant="outlined" sx={textFieldOptions}/>
        <br />
        {player}
      </Box>
    );
  }
};