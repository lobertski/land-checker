import {
  Drawer as MuiDrawer,
  List,
  Divider,
  ListItem,
  Typography,
  IconButton,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { IDrawer } from "../../types";
import { field_name } from "../../static";

export const Drawer = ({
  propertyInfo = {},
  isOpen,
  handleDrawer,
}: IDrawer) => {
  return (
    <div>
      <MuiDrawer
        sx={{
          width: 500,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 300,
          },
        }}
        variant="persistent"
        anchor="right"
        open={isOpen}
      >
        <div
          style={{
            marginLeft: "auto",
          }}
        >
          <IconButton
            size="small"
            sx={{ float: "left" }}
            onClick={() => handleDrawer(false)}
          >
            <CloseOutlinedIcon fontSize="small" />
          </IconButton>
        </div>

        <List>
          <Typography sx={{ padding: "1rem" }} variant="h5">
            Property Details
          </Typography>
          <Divider />
          {Object.entries(field_name).map(([key, label]) => (
            <ListItem key={key} disablePadding>
              <Typography sx={{ padding: "0.8rem", color: "#6A6C6E" }}>
                {`${label}: ${
                  (propertyInfo as Record<string, number | string | null>)[
                    key
                  ] ?? ""
                }`}
              </Typography>
            </ListItem>
          ))}
        </List>
      </MuiDrawer>
    </div>
  );
};
