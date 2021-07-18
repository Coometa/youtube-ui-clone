import { useStyles } from './../../atoms/styles';

const Container: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default Container;