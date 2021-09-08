import {
  Box,
  Hidden,
  Drawer,
  Toolbar,
  Divider,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home'
import Whatshot from '@material-ui/icons/Whatshot'
import Subscriptions from '@material-ui/icons/Subscriptions'
import VideoLibrary from '@material-ui/icons/VideoLibrary'
import History from '@material-ui/icons/History'
import AccountCircle from '@material-ui/icons/AccountCircle'
import AddCircle from '@material-ui/icons/AddCircle'

import { useAppbarItemStyles } from './styles'
import { useListStyles } from '../../styles/Global'

import VideoGrid from '../VideoGrid'
import TopicButton from '../TopicButton'

const Guide: React.FC = () => {
  const AppbarItemStyles = useAppbarItemStyles()
  const listStyles = useListStyles()

  return (
    <Box display='flex'>
      <Hidden mdDown>
        <Drawer
          variant='permanent'
          className={AppbarItemStyles.drawer}
          classes={{
            paper: AppbarItemStyles.drawerPaper,
          }}
        >
          <Toolbar />
          <List>
            <ListItem button classes={{ root: listStyles.listItem }}>
              <ListItemIcon classes={{ root: listStyles.listItemIcon }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: listStyles.listItemText,
                }}
                primary={'Início'}
              />
            </ListItem>
            <ListItem button classes={{ root: listStyles.listItem }}>
              <ListItemIcon classes={{ root: listStyles.listItemIcon }}>
                <Whatshot />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: listStyles.listItemText,
                }}
                primary={'Em alta'}
              />
            </ListItem>
            <ListItem button classes={{ root: listStyles.listItem }}>
              <ListItemIcon classes={{ root: listStyles.listItemIcon }}>
                <Subscriptions />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: listStyles.listItemText,
                }}
                primary={'Inscrições'}
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button classes={{ root: listStyles.listItem }}>
              <ListItemIcon classes={{ root: listStyles.listItemIcon }}>
                <VideoLibrary />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: listStyles.listItemText,
                }}
                primary={'Biblioteca'}
              />
            </ListItem>
            <ListItem button classes={{ root: listStyles.listItem }}>
              <ListItemIcon classes={{ root: listStyles.listItemIcon }}>
                <History />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: listStyles.listItemText,
                }}
                primary={'Histórico'}
              />
            </ListItem>
          </List>
          <Divider />
          <Box p={5}>
            <Typography variant='body2'>
              Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>
            <Box mt={2}>
              <Button
                variant='outlined'
                color='secondary'
                startIcon={<AccountCircle />}
              >
                Fazer login
              </Button>
            </Box>
          </Box>
          <Divider />
          <List
            component='nav'
            aria-labelledby='nested-list-subheader'
            subheader={
              <ListSubheader
                component='div'
                id='nested-list-subheader'
                className={AppbarItemStyles.subheader}
              >
                O Melhor do youtube
              </ListSubheader>
            }
          >
            <TopicButton buttonText='Música' />
            <TopicButton buttonText='Esportes' />
            <TopicButton buttonText='Jogos' />
            <TopicButton buttonText='Filmes' />
            <TopicButton buttonText='Notícias' />
            <TopicButton buttonText='Ao vivo' />
            <TopicButton buttonText='Destaques' />
            <TopicButton buttonText='Videos 360' />
          </List>
          <Divider />
          <ListItem button classes={{ root: listStyles.listItem }}>
            <ListItemIcon classes={{ root: listStyles.listItemIcon }}>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: listStyles.listItemText,
              }}
              primary={'Procurar mais'}
            />
          </ListItem>
          <Divider />
        </Drawer>
      </Hidden>
      <VideoGrid />
    </Box>
  )
}

export default Guide
