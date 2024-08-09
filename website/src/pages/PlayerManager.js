import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { v4 as uuidv4 } from "uuid";

import PlayerManagerCard from "../pagecomponents/PlayerManagerCard";
import { Typography } from "@mui/material";

export const PlayerManagement = ({ data, setData }) => {
	const addPlayer = () => {
		const newId = uuidv4();
		const newData = {
			...data,
			[newId]: "",
		};
		setData(newData);

		return newId;
	};

	const updatePlayer = (player, name) => {
		const newData = { ...data };
		newData[player] = name;
		setData(newData);
	};

	const removePlayer = (player) => {
		const newData = { ...data };
		delete newData[player];
		setData(newData);
	};

	const canDelete = Object.keys(data).length > 1;

	const gridItems = Object.keys(data).map((key) => {
		return (
			<Grid item md={2} key={key}>
				<PlayerManagerCard
					key={key}
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
		<>
			<Typography variant="h4" sx={{ textAlign: "center", margin: "2% 0" }}>
				Player Management
			</Typography>
			<Box
				sx={{
					padding: 2,
					backgroundColor: "#e0e0e0",
					width: "80%",
					margin: "0 10%",
				}}
			>
				<Grid container spacing={2}>
					{gridItems}
				</Grid>
			</Box>
		</>
	);
};

export default PlayerManagement;
