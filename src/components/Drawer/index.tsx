import {
  Drawer as MuiDrawer,
  List,
  Divider,
  ListItem,
  Typography,
} from "@mui/material";
import { IDrawer } from "../../types";
import { field_name } from "../../static";

export const Drawer = ({ propertyInfo = {}, isOpen }: IDrawer) => {
  return (
    <div>
      <MuiDrawer
        sx={{
          width: 500,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
        variant="persistent"
        anchor="right"
        open={isOpen}
      >
        <Divider />
        <List>
          {Object.entries(field_name).map(([key, label]) => (
            <ListItem key={key} disablePadding>
              <Typography sx={{ padding: "1rem" }}>{`${label}: ${
                (propertyInfo as Record<string, number | string | null>)[key] ??
                ""
              }`}</Typography>
            </ListItem>
          ))}
        </List>
      </MuiDrawer>
    </div>
  );
};
