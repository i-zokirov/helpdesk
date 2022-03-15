import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ paddingTop: 5 }}>{children}</Box>}
		</div>
	);
};

const a11yProps = (index) => {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
};

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

const TabContent = ({ tabs, tabContents }) => {
	const [value, setValue] = React.useState(0);
	const theme = useTheme();
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<Box>
			<Tabs
				onChange={handleChange}
				value={value}
				aria-label='Tab content'
				selectionFollowsFocus
			>
				{tabs.map((tab, index) => (
					<Tab key={tab} label={tab} {...a11yProps(index)} />
				))}
			</Tabs>

			<SwipeableViews
				axis={theme.direction === "rtl" ? "x-reverse" : "x"}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				{tabContents.map((content, index) => (
					<TabPanel
						key={index}
						value={value}
						index={index}
						dir={theme.direction}
					>
						{content}
					</TabPanel>
				))}
			</SwipeableViews>
		</Box>
	);
};

export default TabContent;
