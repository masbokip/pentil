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
import { AddCircleOutline, MoreHoriz } from '@mui/icons-material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
    'https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1702685169',
    'https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/bltff4d6ec7afd2e49a/63f695ff583a5b674fbcde69/CODVG_Reveal_Ultimate_Keyart_Textless-Bnet-Launcher_Content_UI_(Phoenix)-1920x1080_01a_FINAL.jpg',
    'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_MortalKombat11_image1600w.jpg',
    'https://cdn1-production-images-kly.akamaized.net/Z16VzuF6ALp5oIqr8S5ntEejdoA=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/23770/original/gta-130917b.jpg',
    'https://sm.ign.com/t/ign_me/review/r/red-dead-r/red-dead-redemption-2-review_1za8.1200.jpg',
    'https://assets-prd.ignimgs.com/2022/10/27/thewitcher-blogroll-1666891727186.jpg'
  ];
  const newsImage = [
    'https://yt3.googleusercontent.com/XhpqqMhTE-NkAPs1Zdyp_lkBfYC8VkKKpVxhHRhQUSiGsOIf-mCwR3q1rXuhdqjDNZYsWyuNCg=s900-c-k-c0x00ffffff-no-rj',
    'https://cdn.discordapp.com/attachments/1192316193198059581/1194264843344154725/Snapinsta.app_418358089_1125949285480152_7382008969568248037_n_1080.jpg?ex=65afb8cf&is=659d43cf&hm=927fe657a9d743e89d7135804de9b11fca4af3d9d1de86be6c4fa7800af0c84a&',
    'https://cdn.discordapp.com/attachments/1192316193198059581/1194268219658223616/Snapinsta.app_415497497_18050479804539069_4579906007496065419_n_1080.jpg?ex=65afbbf3&is=659d46f3&hm=43ced09db8533d64914f2f2d71e2a2cce9eec4cfc55bb59bebb5154d1ebac942&',
   'https://cdn.discordapp.com/attachments/1192316193198059581/1194266416631775323/Snapinsta.app_414435753_225199680628465_8767719088256654424_n_1080.jpg?ex=65afba46&is=659d4546&hm=65b773b88e7d0a35e4cf0f5f3d0057ff3c178b79faef10eb4acb19eff271cdcb&',
   'https://cdn.discordapp.com/attachments/1192316193198059581/1194266893503189014/Snapinsta.app_362659799_1359472528284660_2347007032448992169_n_1080.jpg?ex=65afbab7&is=659d45b7&hm=195d86b8110ebd201e10d7223bce80d745515d1b77f9841a1f67a3208a0ade14&', 
  'https://cdn.discordapp.com/attachments/1192316193198059581/1194267771266146456/Snapinsta.app_404330372_892266962487788_4939108249814439973_n_1080.jpg?ex=65afbb89&is=659d4689&hm=8c13b38e6ef66adf5d5e268f4f50b59ea808b401dd431dbd40442d2d95b4cbf5&'
  ];
  const testImage = [
    'https://game-guide.fr/wp-content/uploads/2023/04/the-finals-titre.jpg',
    'https://staticg.sportskeeda.com/editor/2023/10/efe7b-16972988051544-1920.jpg',
    'https://dotesports.com/wp-content/uploads/2023/11/Screenshot-2023-11-21-093654.png?w=1200',
    'https://www.limapagi.id/wp-content/uploads/2023/12/GTA-6-Resmi-Rilis-begini-trailer-pertamanya.webp',
    'https://i.ytimg.com/vi/heGHEkdQKsw/maxresdefault.jpg',
    'https://esports.id/img/article/754620201118074731.jpg'
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
        Home Page
        </Typography> 
        <Grid container spacing={2}>
        {imageUrls.map((imageUrl, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <img src={imageUrl} alt={`Image ${index}`} style={{ width: '100%', height: 'auto' }} />
              <CardContent>
              {index  == 0 && <Typography variant="h6" component="div">
                  Dota 2
                </Typography> 
              }
              {index  == 0 && <Typography variant="body2" color="text.secondary">
                  Action, Strategy & Multiplayer
                </Typography>
              }
              {index === 0 && (
                <IconButton color="primary" aria-label="subscribe">
                  <FavoriteIcon />
                </IconButton>
              )}
               <Link to="/detail">
               {index === 0 && (
                <IconButton color="primary" aria-label="subscribe">
                  <MoreHoriz />
                </IconButton>
              )}
                </Link>
              
              {index  == 1 && <Typography variant="h6" component="div">
              Call of Duty®: Vanguard
                </Typography> 
              }
              {index  == 1 && <Typography variant="body2" color="text.secondary">
              Action, Shooter, FPS & First-Person
                </Typography>
              }
              {index === 1 && (
                <IconButton color="primary" aria-label="subscribe">
                  <FavoriteIcon />
                </IconButton>
              )}
               <Link to="/detail">
               {index === 1 && (
                <IconButton color="primary" aria-label="subscribe">
                  <MoreHoriz />
                </IconButton>
              )}
                </Link>
              {index  == 2 && <Typography variant="h6" component="div">
                  Mortal Kombat 11
                </Typography> 
              }
              {index  == 2 && <Typography variant="body2" color="text.secondary">
              Action & Multiplayer
                </Typography>
              }
              {index === 2 && (
                <IconButton color="primary" aria-label="subscribe">
                  <FavoriteIcon />
                </IconButton>
              )}
               <Link to="/detail">
               {index === 2 && (
                <IconButton color="primary" aria-label="subscribe">
                  <MoreHoriz />
                </IconButton>
              )}
                </Link>
              {index  == 3 && <Typography variant="h6" component="div">
                  Grand Theft Auto V
                </Typography> 
              }
              {index  == 3 && <Typography variant="body2" color="text.secondary">
                  Adventure & Multiplayer
                </Typography>
              }
              {index === 3 && (
                <IconButton color="primary" aria-label="subscribe">
                  <FavoriteIcon />
                </IconButton>
              )}
               <Link to="/detail">
               {index === 3 && (
                <IconButton color="primary" aria-label="subscribe">
                  <MoreHoriz />
                </IconButton>
              )}
                </Link>
              {index  == 4 && <Typography variant="h6" component="div">
                  Red Dead Redemption 2
                </Typography> 
              }
              {index  == 4 && <Typography variant="body2" color="text.secondary">
              Adventure & Multiplayer
                </Typography>
              }
              {index === 4 && (
                <IconButton color="primary" aria-label="subscribe">
                  <FavoriteIcon />
                </IconButton>
              )}
               <Link to="/detail">
               {index === 4 && (
                <IconButton color="primary" aria-label="subscribe">
                  <MoreHoriz />
                </IconButton>
              )}
                </Link>
              {index  == 5 && <Typography variant="h6" component="div">
                  The Witcher III Wild Hunt
                </Typography> 
              }
              {index  == 5 && <Typography variant="body2" color="text.secondary">
                  Adventure & Multiplayer
                </Typography>
              }
              {index === 5 && (
                <IconButton color="primary" aria-label="subscribe">
                  <FavoriteIcon />
                </IconButton>
              )}
               <Link to="/detail">
               {index === 5 && (
                <IconButton color="primary" aria-label="subscribe">
                  <MoreHoriz />
                </IconButton>
              )}
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" component="div">
        GTA V Roleplay News
        </Typography> 
        <Grid container spacing={2}>
        {newsImage.map((imageUrl, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <img src={imageUrl} alt={`Image ${index}`} style={{ width: '100%', height: 'auto' }} />
              <CardContent>
              {index  == 0 && <Typography variant="h6" component="div">
              Indonesia GTA V Master Championship 2024
                </Typography> 
              }
              {index  == 0 && <Typography variant="body2" color="text.secondary">
                Lomba battle ground dengan basis game GTA V terbesar pertama di Indonesia.
                </Typography>
              }
              {index  == 1 && <Typography variant="h6" component="div">
                Hasil Leaderboard Sementara IGMC 2024 By Regency
                </Typography> 
              }
              {index  == 1 && <Typography variant="body2" color="text.secondary">
              Hasil leaderboard sementara dari beberapa tim yang ikut melalui kualifikasi di server regency.
                </Typography>
              }
              {index  == 2 && <Typography variant="h6" component="div">
                  Seiryu Esport Mengakuisisi RedZone & Caur
                </Typography> 
              }
              {index  == 2 && <Typography variant="body2" color="text.secondary">
              Seiryu Esport serius mengikuti IGMC 2024 dengan mengakuisisi tim dari RedZone dan Caur.
                </Typography>
              }
              {index  == 3 && <Typography variant="h6" component="div">
                  Darkside Satu Nusa Roleplay
                </Typography> 
              }
              {index  == 3 && <Typography variant="body2" color="text.secondary">
                  Berikut adalah beberapa fraksi yang akan berlabuh di kota Satu Nusa yang baru saja up awal Januari ini.
                </Typography>
              }
              {index  == 4 && <Typography variant="h6" component="div">
                  Merah Putih Roleplay V2
                </Typography> 
              }
              {index  == 4 && <Typography variant="body2" color="text.secondary">
              Kabar gembira merah putih roleplay V2 sudah rilis awal tahun ini. Bagi kalian player yang rindu dengan komunitas yang telah terbentuk waktunya kalian kembali.
                </Typography>
              }
              {index  == 5 && <Typography variant="h6" component="div">
                  Nusa V Roleplay
                </Typography> 
              }
              {index  == 5 && <Typography variant="body2" color="text.secondary">
                  Sebuah server baru yang rilis pada pertengahan tahun 2023, Server ini memiliki kultur Los Santos bagi kalian yang penasaran bagaimana kultur Los Santos dan ingin belajar server inilah yang cocok.
                </Typography>
              }
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" component="div">
        Game News
        </Typography> 
        <Grid container spacing={2}>
        {testImage.map((imageUrl, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <img src={imageUrl} alt={`Image ${index}`} style={{ width: '100%', height: 'auto' }} />
              <CardContent>
              {index  == 0 && <Typography variant="h6" component="div">
              The Finals
                </Typography> 
              }
              {index  == 0 && <Typography variant="body2" color="text.secondary">
                Game FPS terbaru yang dimana player memiliki misi untuk mengumpulkan uang terbanyak pada game tersebut.
                Game tersebut memiliki gerakan seperti Apex Legends.
                </Typography>
              }
              {index  == 1 && <Typography variant="h6" component="div">
                FiveM Dibeli Rockstar
                </Typography> 
              }
              {index  == 1 && <Typography variant="body2" color="text.secondary">
              Melihat berkembangnya server roleplay yang beredar dibeberapa negara. Rockstar melirik FiveM selaku perusahaan penghubung antara GTAV dan server roleplay yang rilis.
              Dengan keseriusannya Rockstar membeli FiveM untuk bekerja sama dalam membangun ekosistem roleplay yang ada.
                </Typography>
              }
              {index  == 2 && <Typography variant="h6" component="div">
                  Lethal Company
                </Typography> 
              }
              {index  == 2 && <Typography variant="body2" color="text.secondary">
              Lethal Company adalah video game survival horror kooperatif yang dibuat oleh Zeekerss. Ini dirilis dalam akses awal untuk Microsoft Windows pada tanggal 23 Oktober 2023. Game ini mendapatkan popularitas dalam bulan berikutnya di etalase Steam.
                </Typography>
              }
              {index  == 3 && <Typography variant="h6" component="div">
                  Teaser GTA 6
                </Typography> 
              }
              {index  == 3 && <Typography variant="body2" color="text.secondary">
                Rockstar merilis teaser GTA 6 pada 5 Desember 2023. Pada teaser tersebut GTA 6 akan rilis pada tahun 2025.
                </Typography>
              }
              {index  == 4 && <Typography variant="h6" component="div">
                  Raditya Dika Goes to Executive Roleplay
                </Typography> 
              }
              {index  == 4 && <Typography variant="body2" color="text.secondary">
              Raditya Dika sedang menjalankan hidup didua dunia yaitu dengan bermain roleplay di server Executive. Raditya dika bermain peran menjadi polisi didalam server tersebut.
                </Typography>
              }
              {index  == 5 && <Typography variant="h6" component="div">
                  Ryzen Bikin Server Roleplay
                </Typography> 
              }
              {index  == 5 && <Typography variant="body2" color="text.secondary">
                Ryzen dari divisi PUBG BTR membangun server roleplay GTA V bernama Satu Nusa bersama Mimin Helmet.
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
