import React, { useState } from "react";

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const TeamCaptain = ({ data }) => {
    const [selectedPlayers, setSelectedPlayers] = useState(['', '']);
    const playersSelected = selectedPlayers.filter((player) => player !== '').length === 2;
    const [lastIndex, setLastIndex] = useState(1);
    const nonSelectedPlayers = Object.entries(data).filter(([key, player]) => !selectedPlayers.includes(player));
    const [selectedDraftPlayers, setSelectedDraftPlayers] = useState([]);
    const readyForDraft = selectedDraftPlayers.length === 10;
    const [draftScreenReady, setDraftScreenReady] = useState(false);
    const [swapOrder, setSwapOrder] = useState(0);

    const isSelectedForCaptain = (player) => selectedPlayers.includes(player);
    const isSelectedForDraft = (player) => selectedDraftPlayers.includes(player);
    const updateSelectedPlayers = (player) => {
        if (isSelectedForCaptain(player)) {
            const newPlayers = selectedPlayers.map((name) => name === player ? '' : name);
            setSelectedPlayers(newPlayers);
        } else {
            const newPlayers = [...selectedPlayers];
            newPlayers[lastIndex] = player;
            setSelectedPlayers(newPlayers);
        }
        setLastIndex(lastIndex === 0 ? 1 : 0);
    };

    const updateSelectedDraftPlayers = (player) => {
        if (selectedDraftPlayers.includes(player)) {
            const newPlayers = selectedDraftPlayers.filter((name) => name !== player);
            setSelectedDraftPlayers(newPlayers);
        } else if (selectedDraftPlayers.length < 10) {
            setSelectedDraftPlayers([...selectedDraftPlayers, player]);
        } else {
            const newPlayers = [...selectedDraftPlayers];
            newPlayers.shift();
            setSelectedDraftPlayers([...newPlayers, player]);
        }
    };

    const playerNameToCaptain = (playerName, playerKey) => {
        const currentlySelectedForCaptain = isSelectedForCaptain(playerName);
        const bgColor = currentlySelectedForCaptain ? '#16dbd8' : '#ffffff';
        return (
        <Card
            key={playerKey}
            sx={{ width: '20%', height: '20%', margin: '8px', bgcolor: bgColor }}
            raised={currentlySelectedForCaptain}
            onClick={() => updateSelectedPlayers(playerName)}
        >
            <Typography variant='h6' sx={{ textAlign: 'center', padding: '8px', userSelect: 'none' }}>
                {playerName}
            </Typography>
        </Card>
    )};

    const playerNameToDraft = (playerName, playerKey) => {
        const currentlySelectedForDraft = isSelectedForDraft(playerName);
        const bgColor = currentlySelectedForDraft ? '#a615bf' : '#ffffff';
        return (
        <Card
            key={playerKey}
            sx={{ width: '20%', height: '20%', margin: '8px', bgcolor: bgColor }}
            raised={currentlySelectedForDraft}
            onClick={() => updateSelectedDraftPlayers(playerName)}
        >
            <Typography variant='h6' sx={{ textAlign: 'center', padding: '8px', userSelect: 'none' }}>
                {playerName}
            </Typography>
        </Card>
        );
    };

    return (
    <>
        {!draftScreenReady &&
        <>
            <Box sx={{ width: '80%', margin: '0 10%', height: '50%' }}>
                <Typography variant='h4' sx={{ textAlign: 'center', margin: '2% 0' }}>Select two captains</Typography>
                <Stack flexWrap='wrap' direction='row' justifyContent='center'>
                    {Object.entries(data).map(([playerKey, playerName]) => playerNameToCaptain(playerName, playerKey))}
                </Stack>
            </Box>
            {playersSelected &&
            <Box sx={{ width: '80%', margin: '0 10%', height: '50%' }}>
                <Typography variant='h4' sx={{ textAlign: 'center', margin: '2% 0' }}>Select players to draft</Typography>
                <Stack flexWrap='wrap' direction='row' justifyContent='center'>
                    {nonSelectedPlayers.map(([playerKey, playerName]) => playerNameToDraft(playerName, playerKey))}
                </Stack>
            </Box>}
            {readyForDraft &&
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant='outlined'
                    color='success'
                    sx={{ width: '40%', height: '30%', margin: '5% 0' }}
                    onClick={() => setDraftScreenReady(true)}
                >
                    Draft players
                </Button>
            </div>}
        </>}
        {draftScreenReady &&
        <>
            <Box sx={{ width: '80%', margin: '0 10%', height: '10%' }}>
                <Button onClick={() => setDraftScreenReady(false)}>
                    Go back
                </Button>
                <Button onClick={() => setSwapOrder(swapOrder ? 0 : 1)}>
                    Swap order
                </Button>
                <Typography>
                    {selectedPlayers[swapOrder]}'s pick
                </Typography>
            </Box>
        </>}
    </>
    );
};

export default TeamCaptain;