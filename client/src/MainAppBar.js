import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import SettingsIcon from "@mui/icons-material/Settings";

import DashboardIcon from "@mui/icons-material/Dashboard";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import LogoutIcon from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
		boxSizing: "border-box",
		...(open && {
			...openedMixin(theme),
			"& .MuiDrawer-paper": openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			"& .MuiDrawer-paper": closedMixin(theme),
		}),
	}),
);

const MainAppBar = ({ children }) => {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position='fixed' open={open}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={{
							marginRight: 5,
							...(open && { display: "none" }),
						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						Helpdesk Agent
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer variant='permanent' open={open}>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					<Tooltip title={!open ? "Dashboard" : ""} arrow placement='right'>
						<Link to='/app' className='router-links'>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<DashboardIcon />
								</ListItemIcon>
								<ListItemText
									primary={"Dashboard"}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</Link>
					</Tooltip>

					<Tooltip
						title={!open ? "Assigned to me" : ""}
						arrow
						placement='right'
					>
						<Link to='/app/assigned' className='router-links'>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<InboxIcon />
								</ListItemIcon>
								<ListItemText
									primary={"Assigned to me"}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</Link>
					</Tooltip>
				</List>
				<Divider />
				<List>
					<Tooltip title={!open ? "Incidents" : ""} arrow placement='right'>
						<Link to='/app/incidents' className='router-links'>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<GppMaybeIcon />
								</ListItemIcon>

								<ListItemText
									primary={"Incidents"}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</Link>
					</Tooltip>

					<Tooltip title={!open ? "Requests" : ""} arrow placement='right'>
						<Link to='/app/requests' className='router-links'>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<HelpCenterIcon />
								</ListItemIcon>
								<ListItemText
									primary={"Requests"}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</Link>
					</Tooltip>

					<Tooltip title={!open ? "Create new" : ""} arrow placement='right'>
						<Link to='/app/new' className='router-links'>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<AddBoxIcon />
								</ListItemIcon>
								<ListItemText
									primary={"Create new"}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</Link>
					</Tooltip>
				</List>
				<Divider />
				<List>
					<Tooltip title={!open ? "Settings" : ""} arrow placement='right'>
						<Link to='/app/settings' className='router-links'>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<SettingsIcon />
								</ListItemIcon>
								<ListItemText
									primary={"Settings"}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</Link>
					</Tooltip>

					<Tooltip title={!open ? "Logout" : ""} arrow placement='right'>
						<Link to='/app/logout' className='router-links'>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									<LogoutIcon />
								</ListItemIcon>
								<ListItemText
									primary={"Logout"}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</Link>
					</Tooltip>
				</List>
			</Drawer>
			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				{children}
			</Box>
		</Box>
	);
};

export default MainAppBar;
