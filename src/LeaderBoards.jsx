import React from "react";
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const renderListItems = (items) =>
  items.map((item, index) => (
    <li key={index} >
      {item}
    </li>
  ));

const LeaderBoard = ({ items, cardTitle}) => {

  return (
    <Card className={'card-leaderboard'} sx={{ bgcolor: '#cfe8fc', minHeight: 300, margin:'10px auto', padding:'10px', maxWidth: 800, overflow:'scroll'}}>
      <Typography style={{margin:'10px'}}>{cardTitle}</Typography>
      <CardContent style={{textAlign:'left', padding:0}}>
        <ol className={'card-list'} sx={{width: "100%"}}>
          {renderListItems(items)}
        </ol>
      </CardContent>
    </Card>
  );
};

export default LeaderBoard;