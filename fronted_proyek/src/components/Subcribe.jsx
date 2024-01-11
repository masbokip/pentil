import * as React from 'react';
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
        Subcribe
        </Typography> 
        <Grid container spacing={2}>
        {imageUrls.map((imageUrl, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <img src={imageUrl} alt={`Image ${index}`} style={{ width: '100%', height: 'auto' }} />
              <CardContent>
              {index  == 0 && <Typography variant="h6" component="div">
              Action
                </Typography> 
              }
              
              {index  == 1 && <Typography variant="h6" component="div">
              Role-Playing
                </Typography> 
              }
              {index  == 2 && <Typography variant="h6" component="div">
              Strategy
                </Typography> 
              }
              {index  == 3 && <Typography variant="h6" component="div">
              Adventure
                </Typography> 
              }
              {index  == 4 && <Typography variant="h6" component="div">
                  Simulation
                </Typography> 
              }
              {index  == 5 && <Typography variant="h6" component="div">
                  Sports & Racing
                </Typography> 
              }
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
  );
}
