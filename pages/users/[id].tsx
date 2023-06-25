import {
	Avatar,
	Button,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography
} from "@mui/material";
import { Box } from "@mui/system";
import { GetStaticPaths, GetStaticProps } from "next";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";
import Layout from "../../components/Layout";
import { Photos, User } from "../../interfaces";
import Link from "next/link";
import ProfileTab from "../../components/tab";

type UserPageProps = {
	user: User;
	photos: Photos;
};
/**
 * UserPage function reners individual user profile
 * @returns JSX.Element
 */
export default function UserPage({ user, photos }: UserPageProps) {
	const [isFollow, setIsfollow] = React.useState<boolean>(false);
	const handleFollow = (): void => {
		setIsfollow(!isFollow);
	};
	const websiteUrlString = user.website as string;
	const websiteUrl =
		websiteUrlString.startsWith("http://") ||
		websiteUrlString.startsWith("https://")
			? websiteUrlString
			: `http://${websiteUrlString}`;
	return (
		<Layout>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<Box
					sx={{
						backgroundImage: `url('/userCover.jpg')`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "center",
						height: "60vh",
						"@media (max-width: 600px)": {
							height: "30vh",
							flexDirection: "column"
						},
						width: "98%",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center"
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							flexGrow: 1
						}}
					>
						<ListItem
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start"
							}}
						>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<ListItemAvatar>
									<Avatar
										alt={user.name}
										src="/userProfile.jpg"
										sx={{
											border: "2px solid #DAA520",
											width: 90,
											height: 90,
											mr: "1rem"
										}}
									/>
								</ListItemAvatar>
								<ListItemText
									sx={{ color: "#FFFFFF" }}
									primary={user.name}
									secondary={
										<Typography
											sx={{ display: "flex", alignItems: "center", mt: "1rem" }}
										>
											<Button
												variant="outlined"
												color="primary"
												size="small"
												sx={{
													fontSize: ".6rem",
													borderRadius: "1rem",
													width: "4.5rem"
												}}
												onClick={handleFollow}
											>
												{!isFollow ? "Follow" : "Followed"}
											</Button>
											<Link
												href={websiteUrl}
												target="_blank"
												rel="noopener noreferrer"
											>
												<LanguageIcon sx={{ color: "#FFFFFF", ml: "1rem" }} />
											</Link>
										</Typography>
									}
								/>
							</Box>
						</ListItem>
					</Box>
					<Box
						sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
					>
						<Box sx={{ margin: "1rem" }}>
							<Typography
								sx={{ color: "#FFFFFF", width: "4.5rem", textAlign: "center" }}
							>
								Follows
							</Typography>
							<Typography sx={{ color: "#FFFFFF", textAlign: "center" }}>
								300
							</Typography>
						</Box>
						<Box sx={{ margin: "1rem" }}>
							<Typography
								sx={{ color: "#FFFFFF", width: "4.5rem", textAlign: "center" }}
							>
								Followers
							</Typography>
							<Typography sx={{ color: "#FFFFFF", textAlign: "center" }}>
								560
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
			<ProfileTab photos={photos} />
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users: User[] = await res.json();

	const paths = users.map((user) => ({
		params: { id: user.id.toString() }
	}));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const userRes = await fetch(
		`https://jsonplaceholder.typicode.com/users/${params?.id}`
	);
	const user: User = await userRes.json();

	const photosRes = await fetch(
		"https://jsonplaceholder.typicode.com/albums/1/photos"
	);
	const photos = await photosRes.json();

	return {
		props: { user, photos }
	};
};
