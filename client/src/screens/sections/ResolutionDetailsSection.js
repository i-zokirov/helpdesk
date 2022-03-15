import React from "react";
import PaperBox from "../../components/PaperBox";
import { Grid, TextField, Button } from "@mui/material";

const ResolutionDetailsSection = ({ resolutionNote, setresolutionNote }) => {
	return (
		<div>
			<PaperBox width='100%' minHeight='150px'>
				<div className='resolution-notes-container'>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='resolutionNotes'
								label='Enter resolution notes ...'
								id='resolutionNotes'
								minRows={8}
								maxRows={8}
								multiline
								value={resolutionNote}
								onChange={(e) => setresolutionNote(e.target.value)}
							/>
						</Grid>

						<Grid item xs={12} sm={6}>
							<TextField
								name='resolvedBy'
								required
								fullWidth
								id='resolvedBy'
								label='Incident Number'
								value={"Tom Jerry"}
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
					</Grid>

					<div className='note-actions'>
						<Button
							className='action-buttons'
							color='success'
							variant='outlined'
							sx={{ mr: 1 }}
						>
							Resolve
						</Button>
					</div>
				</div>
			</PaperBox>
		</div>
	);
};

export default ResolutionDetailsSection;
