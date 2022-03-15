import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
const CustomPinkSwitch = styled(Switch)(({ theme }) => ({
	"& .MuiSwitch-switchBase.Mui-checked": {
		color: pink[600],
		"&:hover": {
			backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
		},
	},
	"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
		backgroundColor: pink[600],
	},
}));

const PinkSwitch = ({ label, value, setValue }) => {
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	return (
		<FormControlLabel
			label={label}
			control={<CustomPinkSwitch value={value} onChange={handleChange} />}
		/>
	);
};

export default PinkSwitch;
