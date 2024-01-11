import React, { useState } from 'react';
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
import { AddCircleOutline } from '@mui/icons-material';
import Button from '@mui/material/Button';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
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

export default function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let params = useParams();
  const [review, setReview] = useState({});

  const { register, handleSubmit } = useForm();
  
  const submitHandler = (data) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = params.id;
    const comment = data.comment;

    console.log(data);
    axios.post(`http://localhost:3000/api/review/comment/add`, {
      user: user.name,
      review_id: id,
      comment: comment,
    }).then((res) => {
      console.log(res.data);
      setPostedComment(postedComment + 1);
    });
  };

  const [postedComment, setPostedComment] = useState(0);


  useEffect(() => {
    axios.get(`http://localhost:3000/api/review/${params.id}`).then((res) => {
      setReview(res.data);
      console.log(res.data);
      console.log(`http://localhost:3000/api/review/${params.id}`)
    });
  }, [postedComment]);

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
                 <Link to="/"> {index  == 0 && <ExitToAppIcon onClick={()=>localStorage.removeItem('user')} /> }  </Link> 
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Typography variant="h4" component="div">
        {review && review.title}
      </Typography>
        <Card>
          {/* Larger Image */}
          <img src={review.image} style={{ width: '100%', height: 'auto' }} />

          <CardContent>
            {/* Title */}
            <Typography variant="h6" component="div">
              
            </Typography>

            {/* Description */}
            <Typography variant="body2" color="textSecondary" component="div">
              {review && review.description}
            </Typography>

            {/* Dummy Comments */}
            {review.comments && review.comments.map((comment, commentIndex) => (
              <Box>
              <Typography key={commentIndex} variant="body3" color="blue" component="div">
                {comment.user}
              </Typography>
              <Typography key={commentIndex} variant="body2" color="textSecondary" component="div">
                {comment.comment}
              </Typography>
              </Box>
            ))}

            <form onSubmit={handleSubmit(submitHandler)}>
              {/* Text Box for Adding Comment */}
            <TextField
              label="Add a comment"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('comment')}
            />

            {/* Button to Submit Comment */}
            <Button
              variant="contained"
              color="primary"
              endIcon={<AddCircleOutline />}
              type="submit"
              {...register('submit')}
            >
              Add Comment
            </Button>
            </form>
          </CardContent>
        </Card>
      
        
        </Box>
        
    </Box>
  );
}
