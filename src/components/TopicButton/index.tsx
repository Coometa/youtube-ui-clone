import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import AddCircle from '@material-ui/icons/AddCircle'

import { useListStyles } from '../../styles/Global'

interface ButtonTextProps {
  buttonText: string
}

const TopicButton: React.FC<ButtonTextProps> = ({ buttonText }) => {
  const listStyles = useListStyles()

  return (
    <ListItem button classes={{ root: listStyles.listItem }}>
      <ListItemIcon classes={{ root: listStyles.listItemIcon }}>
        <AddCircle />
      </ListItemIcon>
      <ListItemText
        classes={{
          primary: listStyles.listItemText,
        }}
        primary={buttonText}
      />
    </ListItem>
  )
}

export default TopicButton