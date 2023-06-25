import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: "1rem",
	backgroundColor: alpha("#D3D3D3", 0.15),
	"&:hover": {
		backgroundColor: alpha("#D3D3D3", 0.25)
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto"
	}
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch"
			}
		}
	}
}));

/**
 * SearchAppBar component displays a search bar in the app bar
 * @returns JSX.Element
 */
const SearchAppBar: React.FC = (): JSX.Element => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ bgcolor: "#FFFFFF" }}>
				<Toolbar>
					<Box sx={{ flexGrow: 1, display: { sm: "block" } }}>
						<Link href={"/"}>
							<Image src={logo} alt="Logo" width={100} height={20} />
						</Link>
					</Box>
					<Search sx={{ ml: "1rem" }}>
						<SearchIconWrapper>
							<SearchIcon sx={{ color: "#808080" }} />
						</SearchIconWrapper>
						<StyledInputBase
							sx={{ color: "#808080" }}
							placeholder="Search…"
							inputProps={{ "aria-label": "search" }}
						/>
					</Search>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default SearchAppBar;
