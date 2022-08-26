import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  appBar: {
    padding: '15px 30px',
    backgroundColor: '#684a98',
    position: 'sticky',
    [theme.breakpoints.down('xs')]: {
      padding: '15px 10px',
    },
  },
  heading: {
    color: 'white',
    textDecoration: 'none',
  },
  banner: {
    color: 'white'
  },
  button: {
    backgroundColor: 'white'
  },
  signInButton: {
    backgroundColor: 'white',
    [theme.breakpoints.up('md')]: {
      marginLeft: '115px'
    },
  },
  postButton: {
    backgroundColor: 'white',
    marginRight: '20px',
    [theme.breakpoints.down('xs')]: {
      marginRight: '0px',
      marginBottom: '10px',
    },
  },
  image: {
    marginLeft: '15px',
  },
  icon: {
    color: 'white',
    fontSize: '35px'
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex'
  },
  buttonGroup: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column'
    },
  }
}));