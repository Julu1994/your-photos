import React, { ReactNode } from "react";
import Head from "next/head";
import SearchAppBar from "./appbar";
import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type Props = {
	children?: ReactNode;
	title?: string;
};

const theme = createTheme({
	typography: {
		fontFamily: "PT Serif, serif"
	},
	palette: {
		primary: {
			main: "#FFFFFF"
		},
		secondary: {
			main: "#000000"
		}
	}
});

/**
 * Layout component for the app layout
 * @param children - The content to be rendered inside the layout
 * @param title - The title of the page
 * @returns JSX.Element
 */
/** */
const Layout: React.FC<Props> = ({
	children,
	title = "This is the default title"
}: Props): JSX.Element => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link
				href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap"
				rel="stylesheet"
			/>
		</Head>
		<header>
			<SearchAppBar />
		</header>
		<Box component="main">{children}</Box>
	</ThemeProvider>
);

export default Layout;
