import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { PlayerManagerCard } from '../pagecomponents/PlayerManagerCard';

export const PlayerManagement = ({ data, setData }) => {
  const addPlayer = () => {
    setData(['test', ...data]);
  }

  const createGridItems = data.map((player, index) => {
    return (
      <Grid item xs='auto' key={index}>
        <PlayerManagerCard player={player} addPlayer={addPlayer}/>
      </Grid>
    );
  });

  return (
    <Box sx={{ padding: 2, backgroundColor: '#e0e0e0', display: 'flex', justifyContent: 'center' }}>
      <Grid container spacing={2} columns={5}>
        {createGridItems}
      </Grid>
    </Box>
  );
};