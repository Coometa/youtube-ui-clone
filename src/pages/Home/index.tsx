import Appbar from '../../components/Appbar'
import Guide from '../../components/Guide'

import { useStyles } from './styles'

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Appbar />
      <Guide />
    </div>
  )
}

export default Home