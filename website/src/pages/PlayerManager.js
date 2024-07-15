import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { v4 as uuidv4 } from 'uuid';

import { PlayerManagerCard } from '../pagecomponents/PlayerManagerCard';

export const PlayerManagement = ({ data, setData }) => {
  const addPlayer = () => {
    console.debug("Adding player");
    const newId = uuidv4();
    const newData = {
      ...data,
      [newId]: '',
    };
    setData(newData);

    return newId;
  };

  const updatePlayer = (player, name) => {
    console.debug("Updating player");
    console.debug(player);
    console.debug(name);
    const newData = { ...data };
    newData[player] = name;
    setData(newData);
  }

  const removePlayer = (player) => {
    console.debug("Removing player");
    console.debug(player);
    const newData = { ...data };
    delete newData[player];
    console.info(newData);
    setData(newData);
  };

  const canDelete = Object.keys(data).length > 1;

  const createGridItems = Object.keys(data).map((key) => {
    return (
      <Grid item xs='auto' key={key}>
        <PlayerManagerCard
          player={data[key]}
          playerKey={key}
          addPlayer={addPlayer}
          removePlayer={removePlayer}
          canDelete={canDelete}
          updatePlayer={updatePlayer}
        />
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