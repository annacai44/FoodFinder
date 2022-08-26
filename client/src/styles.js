import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
      footer: {
        marginTop: '20px',
        backgroundColor: theme.palette.background.paper,
        padding: '10px 0',
        alignItems: 'center'
      },
      // MUI offers breakpoints, which are media queries. below means run the CSS after this only for devices that are small or smaller
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: 'column-reverse'
        }
      }
}));

export default useStyles;