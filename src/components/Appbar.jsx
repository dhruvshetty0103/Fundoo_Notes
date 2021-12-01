import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import keepImage from "../assets/google_keep.png";
import {
  Toolbar,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  Button,
  Tooltip,
  Popover,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import SplitscreenOutlinedIcon from "@mui/icons-material/SplitscreenOutlined";
import "../styles/home.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilteredNotes } from "../actions/noteAction";
import { listView } from "../actions/noteAction";
import GridViewIcon from "@mui/icons-material/GridView";
import { Redirect } from "react-router";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  spacing: 2,
  backgroundColor: "white",
}));

const Appbar = ({ handleDrawerOpen }) => {
  const [search, setSearch] = useState("");
  const myNotes = useSelector((state) => state.allNotes.notes);
  const title = useSelector((state) => state.allNotes.title);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.allNotes.listView);
  const [logout, setLogout] = useState(false);
  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  useEffect(() => {
    dispatch(
      setFilteredNotes(
        myNotes.filter((item) => {
          // return item.title.toLowerCase().includes(search.toLowerCase())||item.content.toLowerCase().includes(search.toLowerCase());
          return (
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.content.toLowerCase().includes(search.toLowerCase())
          );
        })
      )
    );
  }, [search, myNotes]);

  const handleView = () => {
    dispatch(listView());
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogout(true);
  };
  return (
    <AppBar position="fixed">
      <Toolbar style={{ color: "rgba(0, 0, 0, 0.54)" }}>
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: "30px",
          }}
        >
          <MenuIcon />
        </IconButton>
        <img src={keepImage} alt="" style={{ width: "2em", height: "2.5em" }} />
        <Typography
          variant="h6"
          noWrap
          style={{ fontWeight: "bold", marginLeft: "10px" }}
          component="div"
        >
          {title}
        </Typography>
        <TextField
          placeholder="Search…"
          style={{ width: "50%", margin: "auto", backgroundColor: "#F5F5F5" }}
          variant="outlined"
          size="small"
          onChange={(e) => handleSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: { height: "44px" },
          }}
        />
        <RefreshOutlinedIcon fontSize="medium" style={{ marginLeft: "15px" }} />
        {!list ? (
          <SplitscreenOutlinedIcon
            fontSize="medium"
            onClick={handleView}
            style={{ marginLeft: "15px" }}
          />
        ) : (
          <GridViewIcon
            fontSize="medium"
            onClick={handleView}
            style={{ marginLeft: "15px" }}
          />
        )}

        <SettingsOutlinedIcon
          fontSize="medium"
          style={{ marginLeft: "15px" }}
        />
        <div className="appbar-div">
        <Tooltip title="Account">
            <IconButton onClick={handlePopClick}>
              <AccountCircleIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Button onClick={handleLogout}>Logout</Button>
          </Popover>
        </div>
      </Toolbar>
      {logout ? <Redirect to="/login" /> : null}
    </AppBar>
  );
};

export default Appbar;