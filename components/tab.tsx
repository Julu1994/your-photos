import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { AlbumImageList, StoryImageList } from "./utils/imageList";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`
	};
}

export default function ProfileTab({ photos }) {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			<Box sx={{ width: "98%", mt: "1.5rem" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						textColor="secondary"
						value={value}
						onChange={handleChange}
						indicatorColor="secondary"
						aria-label="secondary tabs example"
					>
						<Tab label="Story" {...a11yProps(0)} />
						<Tab label="Album" {...a11yProps(1)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<StoryImageList photos={photos} />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<AlbumImageList />
				</TabPanel>
			</Box>
		</Box>
	);
}
