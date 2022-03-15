import * as React from "react";
import Typography from "@mui/material/Typography";
import PaperBox from "./PaperBox";
const CardBox = ({ author, date, body, customerVisible }) => {
	let hrStyle = "2px solid #1976d2";
	if (customerVisible) {
		hrStyle = "2px solid #d81b60";
	}
	return (
		<PaperBox width='100%' minHeight='50px'>
			<div style={{ margin: "15px" }}>
				<div className='note-header'>
					<Typography gutterBottom color='text.secondary' component='p'>
						{author}
					</Typography>
					<Typography gutterBottom color='text.secondary' component='p'>
						{date}
					</Typography>
				</div>
				<hr style={{ borderTop: hrStyle }} />
				<Typography variant='body1'>{body}</Typography>
			</div>
		</PaperBox>
	);
};

export default CardBox;
