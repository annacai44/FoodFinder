import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },
      // MUI offers breakpoints, which are media queries. below means run the CSS after this only for devices that are small or smaller
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: 'column-reverse'
        }
      }
}));

export default useStyles;