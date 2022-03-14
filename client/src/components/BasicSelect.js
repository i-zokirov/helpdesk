import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const BasicSelect = ({ options, value, setValue, label }) => {
	return (
		<FormControl fullWidth>
			<InputLabel id={`${label.toLowerCase()}-select-label`}>{label}</InputLabel>
			<Select
				labelId={`${label.toLowerCase()}-select-label`}
				id='select'
				value={value}
				label={label}
				onChange={(e) => setValue(e.target.value)}
			>
				{options.map((option) => (
					<MenuItem key={option} value={option}>
						{option}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default BasicSelect;
