import React, { useState } from "react";
import PaperBox from "../../components/PaperBox";
import { FormControl, TextField } from "@mui/material";
import PinkSwitch from "../../components/PinkSwich";
import { Button } from "@mui/material";
import CardBox from "../../components/CardBox";
const NotesSection = () => {
	const [note, setNote] = useState("");
	const [customerVisible, setCustomerVisible] = useState("");
	return (
		<div>
			<div className='new-note'>
				<PaperBox width='100%' minHeight='150px'>
					<div style={{ margin: "15px" }}>
						<FormControl sx={{ width: "100%" }}>
							<TextField
								required
								fullWidth
								name='description'
								label='Description'
								id='description'
								minRows={4}
								multiline
								value={note}
								onChange={(e) => setNote(e.target.value)}
							/>
							<div className='note-actions'>
								<PinkSwitch
									value={customerVisible}
									setValue={setCustomerVisible}
									label='Customer visible?'
								/>
								<Button
									className='action-buttons'
									color='error'
									variant='outlined'
									sx={{ mr: 1 }}
								>
									Post
								</Button>
							</div>
						</FormControl>
					</div>
				</PaperBox>
			</div>

			<div className='notes-list'>
				{/* TODO: Map over the list of notes to create a CardBox for each note */}
				<CardBox author='Tomas Edison' date='15/03/2022' body='Long text' />
			</div>
		</div>
	);
};

export default NotesSection;
