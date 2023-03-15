// - Channel Card — /channel/${channelDetail?.id?.channelId}
//     - Channel Icon — channelDetail?.snippet?.thumbnails?.high?.url
//     - Channel Name — channelDetail?.snippet?.title
//     - Channel Subscribers — channelDetail?.statistics?.subscriberCount

import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    // <div>ChannelCard</div>
    <Box
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
        mt: marginTop,
      }}
    >
            <Link to={" /channel/${channelDetail?.id?.channelId}"}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <CardMedia
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{" "}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString("en-US")}{" "}
            Subscribers
          </Typography>
        )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
