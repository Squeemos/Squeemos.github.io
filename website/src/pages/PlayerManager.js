import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { v4 as uuidv4 } from 'uuid';

import PlayerManagerCard from '../pagecomponents/PlayerManagerCard';
import { Typography } from "@mui/material";

export const PlayerManagement = ({ data, setData }) => {
  const addPlayer = () => {
    const newId = uuidv4();
    const newData = {
      ...data,
      [newId]: '',
    };
    setData(newData);

    return newId;
  };

  const updatePlayer = (player, name) => {
    const newData = { ...data };
    newData[player] = name;
    setData(newData);
  }

  const removePlayer = (player) => {
    const newData = { ...data };
    delete newData[player];
    setData(newData);
  };

  const canDelete = Object.keys(data).length > 1;

  const createGridItems = Object.keys(data).map((key) => {
    return (
        <PlayerManagerCard
          key={key}
          player={data[key]}
          playerKey={key}
          addPlayer={addPlayer}
          removePlayer={removePlayer}
          canDelete={canDelete}
          updatePlayer={updatePlayer}
        />
    );
  });

  return (
    <>
      <Typography variant='h4' sx={{ textAlign: 'center', margin: '2% 0' }}>Player Management (yes ik the right side is phat, i'll fix it one day)</Typography>
      <Box sx={{ padding: 2, backgroundColor: '#e0e0e0', width: '80%', margin: '0 10%' }}>
        <Stack spacing={{ xs: 2 }} useFlexGap flexWrap="wrap" direction="row" justifyContent='flex-start'>
          {createGridItems}
        </Stack>
      </Box>
    </>
  );
};

export default PlayerManagement;