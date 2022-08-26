import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    padding: '50%'
  },
  border: {
    border: 'solid',
  },
  cardContent: {
    padding: '0',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '14px',
    marginBottom: '5px'
  },
  field: {
    padding: '0 30px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 14px 8px 20px'
  },
  likeButton: {
    color: 'purple',
    fontSize: '18px'
  },
  heartIcon: {
    color: 'purple'
  }
});