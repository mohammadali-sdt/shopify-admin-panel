import React from "react";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import TocRoundedIcon from "@mui/icons-material/TocRounded";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function FeedbacksMenu() {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component={"nav"} sx={{ width: "100%" }}>
      <ListItemButton sx={{ gap: "5px", padding: "5px" }} onClick={handleClick}>
        <ListItemIcon
          sx={{
            minWidth: "fit-content",
          }}
        >
          <ChatRoundedIcon
            fontSize="medium"
            sx={{
              color: "textPrimary.main",
            }}
          />
        </ListItemIcon>
        <ListItemText
          disableTypography={true}
          sx={{ fontSize: "12px", minWidth: "fit-content" }}
          primary="بازخورد ها"
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ gap: 0.5 }}>
            <ListItemIcon
              sx={{
                minWidth: "fit-content",
              }}
            >
              <TocRoundedIcon
                fontSize="small"
                sx={{
                  color: "textPrimary.main",
                }}
              />
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              sx={{ fontSize: "11px", minWidth: "fit-content" }}
              primary="لیست نظرات"
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
