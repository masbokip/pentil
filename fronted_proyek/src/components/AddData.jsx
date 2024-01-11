import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home'; //tambahan
import CampaignIcon from '@mui/icons-material/Campaign'; //tambahan
import FolderCopyIcon from '@mui/icons-material/FolderCopy'; //tambahan2
import FavoriteIcon from '@mui/icons-material/Favorite';//tambahan2
import UploadIcon from '@mui/icons-material/Upload'; //tambahan2
import TextField from '@mui/material/TextField';//tambahan2
import InputAdornment from '@mui/material/InputAdornment';//tambahan2
import SearchIcon from '@mui/icons-material/Search';//tambahan2
import ExitToAppIcon from '@mui/icons-material/ExitToApp';//tambahan2
import Grid from '@mui/material/Grid';//tambahan2
import Card from '@mui/material/Card';//tambahan2
import CardContent from '@mui/material/CardContent';//tambahan2
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import axios from 'axios';

import { Buffer } from 'buffer';

import FileBase64 from 'react-file-base64';

const drawerWidth = 240;



const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const imageUrls = [
    'https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/bltff4d6ec7afd2e49a/63f695ff583a5b674fbcde69/CODVG_Reveal_Ultimate_Keyart_Textless-Bnet-Launcher_Content_UI_(Phoenix)-1920x1080_01a_FINAL.jpg',
    'https://store-images.s-microsoft.com/image/apps.27631.65664549497403424.83d4eaf7-af3c-4010-92c1-94e32f4c2cd9.8c821ceb-2ae3-46cb-bd98-c19fde60d6fd?q=90&w=480&h=270',
    'https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/bltff4d6ec7afd2e49a/63f695ff583a5b674fbcde69/CODVG_Reveal_Ultimate_Keyart_Textless-Bnet-Launcher_Content_UI_(Phoenix)-1920x1080_01a_FINAL.jpg',
    'https://cdn.akamai.steamstatic.com/steam/apps/1063730/capsule_616x353.jpg?t=1702483749',
    'https://cdn.akamai.steamstatic.com/steam/apps/1222670/capsule_616x353.jpg?t=1701972583',
    'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt674314efe488e9a4/64b13f0acc7487ee6e3bea1c/fc24.jpg?auto=webp&format=pjpg&width=3840&quality=60'
  ];
 
  const [textValue, setTextValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [file, setFile] = useState(null);
  const [listingData, setListingData] = useState();
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  });

  const checkboxLabels = [
    "Action",
    "Role-Playing",
    "Strategy",
    "Adventure",
    "Simulation",
    "Sport & Racing",
  ];

  const handleCheckboxChange = (name) => (event) => {
    setCheckboxValues({ ...checkboxValues, [name]: event.target.checked });
  };

  // const handleFileChange = (event) => {
  //   const selectedFile  = event.target.files[0];
  //   let base64_to_imgsrc = Buffer.to(selectedFile, "base64")

  //   // Set the selected file and generate a preview
  //   setFile(base64_to_imgsrc);

  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      textValue,
      descriptionValue,
      checkboxValues,
    });

    // for each check box value add to an array the coresponding labels
    const values = [];
    if (checkboxValues.checkbox1){
      values.push(checkboxLabels[0]);
    }
    if (checkboxValues.checkbox2){
      values.push(checkboxLabels[1]);
    }
    if (checkboxValues.checkbox3){
      values.push(checkboxLabels[2]);
    }
    if (checkboxValues.checkbox4){
      values.push(checkboxLabels[3]);
    }
    if (checkboxValues.checkbox5){
      values.push(checkboxLabels[4]);
    }
    if (checkboxValues.checkbox6){
      values.push(checkboxLabels[5]);
    }
    
    
    console.log(values);
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user);
    if (user == null){
      alert("Please login first")
      return
    }
    if (listingData == null){
      alert("Please upload an image")
      return
    }
    try{
      await axios.post('http://localhost:3000/api/review/add',{
        user_id: user._id,
        title: textValue,
        review: descriptionValue,
        genres: values,
        image: listingData.selectedFile
      })
    }catch(e){
      console.log(e)
      alert("failed")
    }


  };

  useEffect(() => {
    console.log(listingData);
  }, [listingData]);
  
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Birdy
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>

          {/* kalau mau taro logo di navbar nya disini tempatnya*/}
          
        </DrawerHeader>
        <Divider />
        <List>
        {['Search', 'Home', 'Category', 'Subscribe', 'Upload'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center', 
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    //pengaturan Icon
                  }}
                >
                  {/* Pasang Icon Navbar */}
                  <Link to="/pagesearch"> {index  == 0 && <SearchIcon /> }  </Link>
                 <Link to="/home"> {index  == 1 && <HomeIcon /> }  </Link> 
                 <Link to="/category"> {index  == 2 && <FolderCopyIcon /> }   </Link> 
                 <Link to="/subcribe"> {index  == 3 && <FavoriteIcon /> }   </Link> 
                 <Link to="/adddata"> {index  == 4 && <UploadIcon /> }   </Link> 
          
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Logout'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Link to="/"> {index  == 0 && <ExitToAppIcon /> }  </Link> 
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <form onSubmit={handleSubmit}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" component="div">
          Add Post
        </Typography>

        {/* Textbox */}
        <TextField
          label="Title"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          fullWidth
          margin="normal"
        />

        {/* Description box */}
        <TextField
          label="Description"
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />

         {/* Image Upload */}
         <FileBase64 type="file" multiple={false} onDone={({base64}) => setListingData({selectedFile: base64})}/>
        {listingData && <img src={`${listingData.selectedFile}`} alt="catt" />}

        {/* Checkboxes */}
        {Array.from({ length: 6 }).map((_, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={checkboxValues[`checkbox${index + 1}`]}
                onChange={handleCheckboxChange(`checkbox${index + 1}`)}
              />
            }
            label={checkboxLabels[index]}  
          />
        ))}
        {/* Submit button */}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </form>
      </Box>
    </Box>
  );
}
