import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';

import { useStyles } from '../../atoms/styles';

import { IButtonText } from './../../atoms/interfaces'

const TopicButton: React.FC<IButtonText> = ({ buttonText }) => {
  const classes = useStyles();

  return (
    <ListItem button classes={{ root: classes.listItem }}>
      <ListItemIcon classes={{ root: classes.listItemIcon }}>
        <AddCircle />
      </ListItemIcon>
      <ListItemText
        classes={{
          primary: classes.listItemText,
        }}
        primary={buttonText}
      />
    </ListItem>
  );
};

export default TopicButton;