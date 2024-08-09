import React from 'react';

import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const SelectScreen = ({
    data,
    playerNameToCaptain,
    playersSelected,
    nonSelectedPlayers,
    playerNameToDraft,
    readyForDraft,
    setDraftScreenReady,
}) => {
    return (
        <>
            <Box sx={{ width: "80%", margin: "0 10%", height: "50%", bgcolor: '#dce3de' }}>
                <Typography
                    variant="h4"
                    sx={{ textAlign: "center", margin: "2% 0" }}
                >
                    Select two captains
                </Typography>
                <Stack flexWrap="wrap" direction="row" justifyContent="center">
                    {Object.entries(data).map(([playerKey, playerName]) =>
                        playerNameToCaptain(playerName, playerKey),
                    )}
                </Stack>
            </Box>
            {playersSelected && (
                <Box
                    sx={{
                        width: "80%",
                        margin: "0 10%",
                        height: "50%",
                        bgcolor: "#dce3de",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ textAlign: "center", margin: "2% 0" }}
                    >
                        Select players to draft
                    </Typography>
                    <Stack flexWrap="wrap" direction="row" justifyContent="center">
                        {nonSelectedPlayers.map(([playerKey, playerName]) =>
                            playerNameToDraft(playerName, playerKey),
                        )}
                    </Stack>
                </Box>
            )}
            {readyForDraft && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        variant="outlined"
                        color="success"
                        sx={{ width: "40%", height: "30%", margin: "5% 0" }}
                        onClick={() => setDraftScreenReady(true)}
                    >
                        Draft players
                    </Button>
                </div>
            )}
        </>
    );
}

export default SelectScreen;