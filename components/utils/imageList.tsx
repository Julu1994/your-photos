import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { imgData } from "./imageData";
import { Grid } from "@mui/material";
import Image from "next/image";
import { Photos } from "../../interfaces";
/**
 * AlbumImageList function component renders a list of images
 * @returns JSX.Element
 */
export const AlbumImageList: React.FC = (): JSX.Element => {
	return (
		<Box sx={{ width: "100%", height: 700, overflowY: "scroll" }}>
			<ImageList variant="masonry" cols={3} gap={8}>
				{imgData.map((item) => (
					<ImageListItem key={item.img}>
						<img
							src={`${item.img}?w=248&fit=crop&auto=format`}
							srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
							alt={item.title}
							loading="lazy"
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Box>
	);
};

interface StoryImageListProps {
	photos: Photos[];
}

/**
 * StoryImageList function component renders a grid of images
 * @param {StoryImageListProps} props
 * @returns JSX.Element
 */
export const StoryImageList: React.FC<StoryImageListProps> = ({
	photos
}): JSX.Element => {
	return (
		<Box sx={{ width: "100%", overflowX: "auto", display: "flex" }}>
			<Grid container spacing={2}>
				{photos.map((photo) => (
					<Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={photo.id}>
						<Box
							sx={{
								position: "relative",
								overflow: "hidden",
								borderRadius: "1rem",
								height: 500
							}}
						>
							<Image
								src={photo.url}
								alt={photo.title}
								layout="fill"
								objectFit="cover"
							/>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
