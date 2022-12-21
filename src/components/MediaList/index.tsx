import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { UseQueryResult } from "react-query/types/react";
import { exmpImage } from "./exampleImage";

interface DataProps {
  title: string;
  description: string;
}

interface MediaListProps {
  options: UseQueryResult;
  data: DataProps;
}

export default function MediaList(props: MediaListProps) {
  const {
    options: { isLoading, isSuccess },
    data: { title, description },
  } = props;

  return (
    <Card sx={{ width: "100%", height: 300 }}>
      <CardActionArea sx={{ height: "100%" }}>
        <Box height={150}>
          {isLoading && (
            <Skeleton variant="rectangular" width={"100%"} height={150} />
          )}
          {isSuccess && (
            <CardMedia
              component="img"
              height="100%"
              image={exmpImage}
              alt="green iguana"
            />
          )}
        </Box>
        <Box height={150}>
          <CardContent>
            {isLoading && (
              <Box display={'flex'} flexDirection='column' gap={20}>
                <Skeleton variant="rectangular" width={"80%"} height={30} />
                <Skeleton variant="rectangular" width={"100%"} height={20} />
              </Box>
            )}
            {isSuccess && (
              <>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  noWrap
                  sx={{ textOverflow: "ellipsis" }}
                >
                  {description}
                </Typography>
              </>
            )}
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}
