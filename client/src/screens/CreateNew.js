import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicSelect from "../components/BasicSelect";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

function sleep(delay = 0) {
	return new Promise((resolve) => {
		setTimeout(resolve, delay);
	});
}

const theme = createTheme();
const CreateNew = () => {
	const options = ["Incident", "Service request"];

	const usersList = [
		{
			userId: "123",
			firstName: "Jon",
			lastName: "Snow",
			email: "jon.snow@email.com",
		},
		{
			userId: "124",
			firstName: "Cercei",
			lastName: "Lannister",
			email: "cercei.lannister@email.com",
		},
		{
			userId: "125",
			firstName: "Tom",
			lastName: "Hanks",
			email: "tom.hanks@email.com",
		},
	];
	const [open, setOpen] = React.useState(false);
	const loading = open && options.length === 0;
	const [users, setUsers] = useState([]);
	const [type, setType] = useState("Incident");
	const [user, setUser] = useState(null);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [shortDescription, setShortDescription] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		let active = true;
		// if (!loading) {
		// 	return undefined;
		// }
		(async () => {
			await sleep(1e3); // For demo purposes.

			if (active) {
				setUsers([...usersList]);
			}
		})();
		if (user) {
			setFirstName(user.firstName);
			setLastName(user.lastName);
		}
		return () => {
			active = false;
		};
	}, [user, loading]);

	useEffect(() => {
		if (!open) {
			setUsers([]);
		}
	}, [open]);
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component='main'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Box
						component='form'
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<Autocomplete
									disablePortal
									id='userId-list'
									open={open}
									onOpen={() => {
										setOpen(true);
									}}
									onClose={() => {
										setOpen(false);
									}}
									options={users}
									getOptionLabel={(option) =>
										`${option.firstName} ${option.lastName}`
									}
									isOptionEqualToValue={(option, value) =>
										`${option.firstName} ${option.lastName}` ===
										`${value.firstName} ${value.lastName}`
									}
									loading={loading}
									fullWidth
									clearOnEscape
									onChange={(event, newValue) => {
										setUser(newValue);
									}}
									renderInput={(params) => (
										<TextField
											{...params}
											id='userId'
											label='UserId'
											name='userId'
											InputProps={{
												...params.InputProps,
												endAdornment: (
													<React.Fragment>
														{loading ? (
															<CircularProgress
																color='inherit'
																size={20}
															/>
														) : null}
														{params.InputProps.endAdornment}
													</React.Fragment>
												),
											}}
										/>
									)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<BasicSelect
									required
									options={options}
									value={type}
									setValue={setType}
									label='Type'
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete='given-name'
									name='firstName'
									required
									fullWidth
									id='firstName'
									label='First Name'
									value={firstName}
									disabled
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id='lastName'
									label='Last Name'
									name='lastName'
									value={lastName}
									disabled
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='shortDescription'
									label='Short Description'
									id='shortDescription'
									value={shortDescription}
									onChange={(e) => setShortDescription(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='description'
									label='Description'
									id='description'
									autoComplete='new-description'
									minRows={4}
									maxRows={8}
									multiline
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								/>
							</Grid>
						</Grid>
						<Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
							Conitnue
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default CreateNew;
