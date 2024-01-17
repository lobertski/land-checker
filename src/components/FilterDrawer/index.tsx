import {
  Drawer as MuiDrawer,
  List,
  Divider,
  ListItem,
  Typography,
  IconButton,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TuneIcon from "@mui/icons-material/Tune";

import { IFilterDrawer } from "../../types";

export const FilterDrawer = ({
  handleFilterDrawer,
  handleCheckCouncil,
  handleClearAll,
  isFilterOpen,
  councils,
}: IFilterDrawer) => {
  return (
    <>
      <div
        style={{
          marginLeft: "auto",
        }}
      >
        <IconButton
          size="small"
          sx={{ float: "left" }}
          onClick={() => handleFilterDrawer(true)}
        >
          <TuneIcon fontSize="small" />
        </IconButton>
      </div>

      <MuiDrawer
        sx={{
          width: 500,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 400,
          },
        }}
        variant="persistent"
        anchor="left"
        open={isFilterOpen}
      >
        <div
          style={{
            marginLeft: "auto",
          }}
        >
          <IconButton
            size="small"
            sx={{ float: "right" }}
            onClick={() => handleFilterDrawer(false)}
            data-testid="close-button"
          >
            <CloseOutlinedIcon fontSize="small" />
          </IconButton>
        </div>

        <List>
          <Typography
            sx={{
              paddingLeft: "1rem",
              paddingTop: "0rem",
              paddingBottom: "0.8rem",
            }}
            variant="h5"
          >
            Filter
          </Typography>
          <Divider />
          <Typography sx={{ padding: "1rem", fontWeight: "600" }}>
            Council Property
          </Typography>
          {councils.map(({ councilName, isCheck }, index) => (
            <ListItem key={councilName} disablePadding>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isCheck}
                    onClick={() => handleCheckCouncil(index)}
                    data-testid="checkbox"
                  />
                }
                label={
                  <Typography sx={{ fontWeight: "600" }}>
                    {councilName}
                  </Typography>
                }
                sx={{ padding: "0.8rem", fontWeight: "600" }}
              />
            </ListItem>
          ))}
        </List>
        <Button
          sx={{ marginTop: "auto", borderRadius: "0px" }}
          variant="contained"
          onClick={handleClearAll}
          data-testid="clearall-button"
        >
          Clear All
        </Button>
      </MuiDrawer>
    </>
  );
};
