import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Avatar, ListItemAvatar } from '@mui/material';

export default function NestedList({data,icon,title,menuCollapse}) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton sx={{ pl: menuCollapse? 3:2 }} onClick={handleClick}>
        <ListItemIcon>
          <ChatBubbleOutlineIcon />
        </ListItemIcon>
        {
          !menuCollapse&&
          <>
            <ListItemText primary="Chats" />
            {open? <ExpandLess /> : <ExpandMore />}
          </>
        }
        
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data.map((user,i) =>{
            return(
              <ListItemButton sx={{ pl:menuCollapse?2:4 }}>
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src={`../../public/avtar${i+1}.jpg`} />
                </ListItemAvatar>
                {!menuCollapse&& <ListItemText primary={user.name} />}
              </ListItemButton>
            )
          })}
        </List>
      </Collapse>
    </List>
  );
}
