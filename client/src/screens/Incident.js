import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicSelect from "../components/BasicSelect";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import AttachFileIcon from "@mui/icons-material/AttachFile";
function sleep(delay = 0) {
	return new Promise((resolve) => {
		setTimeout(resolve, delay);
	});
}
const Input = styled("input")({
	display: "none",
});

const theme = createTheme();
const Incident = () => {
	const statusOptions = ["New", "In Progress", "Pending", "Resolved"];
	const priorityOptions = ["Low", "Medium", "High", "Critical"];
	const groupOptions = ["ServiceDesk", "ServiceDesk2"];
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

	const [users, setUsers] = useState([]);
	const [type, setType] = useState("New");
	const [priority, setPriority] = useState("Low");
	const [assignedTo, setAssignedTo] = useState(null);
	const [assignmentGroup, setAssignmentGroup] = useState("ServiceDesk");

	const [user, setUser] = useState(null);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [shortDescription, setShortDescription] = useState("");
	const [description, setDescription] = useState("");

	const loading = open && users.length === 0;
	useEffect(() => {
		let active = true;

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
				{/* <CssBaseline /> */}
				<Box
					sx={{
						marginTop: 0,
						display: "flex",
						justifyContent: "right",
						alignItems: "center",
					}}
				>
					<label htmlFor='icon-button-file'>
						<Input accept='image/*' id='icon-button-file' type='file' />
						<IconButton
							color='primary'
							aria-label='upload picture'
							component='span'
							sx={{ mr: 4 }}
						>
							<AttachFileIcon />
						</IconButton>
					</label>
					<Button
						className='action-buttons'
						color='error'
						variant='outlined'
						sx={{ mr: 1 }}
					>
						Save
					</Button>
					<Button
						className='action-buttons'
						color='error'
						variant='outlined'
						sx={{ mr: 1 }}
					>
						Update
					</Button>

					<Button className='action-buttons' color='success' variant='outlined'>
						Resolve
					</Button>
				</Box>
				<Box
					sx={{
						marginTop: 0,
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
								<TextField
									name='incidentNumber'
									required
									fullWidth
									id='incidentNumber'
									label='Incident Number'
									value={"INC00001"}
									disabled
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									name='createdAt'
									required
									fullWidth
									id='createdAt'
									label='Created At'
									value={Date.now()}
									disabled
								/>
							</Grid>
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
									value={user}
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
											label='Requested for'
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
									options={statusOptions}
									value={type}
									setValue={setType}
									label='Type'
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
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
									id='createdBy'
									label='Created By'
									name='createdBy'
									value={"Tom Jerry"}
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

							<Grid item xs={12} sm={6}>
								<BasicSelect
									required
									options={groupOptions}
									value={assignmentGroup}
									setValue={setAssignmentGroup}
									label='Assignment group'
								/>
							</Grid>

							<Grid item xs={12} sm={6}>
								<BasicSelect
									required
									options={priorityOptions}
									value={priority}
									setValue={setPriority}
									label='Priority'
								/>
							</Grid>

							<Grid item xs={12} sm={6}>
								<Autocomplete
									disablePortal
									id='userId-list-2'
									open={open}
									onOpen={() => {
										setOpen(true);
									}}
									onClose={() => {
										setOpen(false);
									}}
									options={users}
									value={assignedTo}
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
										setAssignedTo(newValue);
									}}
									renderInput={(params) => (
										<TextField
											{...params}
											id='userId2'
											label='Assigned to'
											name='userId2'
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
									minRows={8}
									maxRows={8}
									multiline
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								/>
							</Grid>
						</Grid>
						{/* <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
							Conitnue
						</Button> */}
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};

export default Incident;
