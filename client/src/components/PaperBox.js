import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const PaperBox = ({ width, minHeight, children }) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				"& > :not(style)": {
					m: 1,
					width,
					minHeight,
				},
			}}
		>
			<Paper>{children}</Paper>
		</Box>
	);
};

export default PaperBox;
