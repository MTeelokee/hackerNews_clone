import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import "./card.css";
import Author from "../Author/Author";
import Link from "@mui/material/Link";
export default function Cards({ title, created_at, url, author, points,stateChanger }) {
  // Users

  const usersDataApi = "http://hn.algolia.com/api/v1/search?tags=front_page";
  const [usersData, setUsersData] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  let date = created_at.slice(0,10)
  let timeStamp = created_at.slice(11,19)

  return (
    <>
      <div>
        <Box
          sx={{
            width: "20em%",
            height: "9em",
            borderRadius: 5,
            margin: "0.5em",
            backgroundColor: "#41B3A3",
            "&:hover": {
              backgroundColor: "#41B3A3",
              opacity: [0.9, 0.9, 0.9],
              border:"solid 2px black"
            },
          }}
        >
          <div className="content">
            <div>
            <Link href={url}underline="hover">
                {title}
              </Link>
              <div>{date}</div>
              <Link href="#" underline="hover">
                {author}
              </Link>
<div>
{`Posted on ${date} at ${timeStamp}`}
  
</div>
              <div>{points} points</div>
            </div>
            <IconButton color="primary" aria-label="add to shopping cart">
              <CommentRoundedIcon />
            </IconButton>
          </div>
        </Box>
      </div>
    </>
  );
}
