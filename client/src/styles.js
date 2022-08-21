import {makeStyles} from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     entireBody: {
//         backgroundColor: '#CBC3E3'
//     },
//     container: {
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing(8, 0, 6)
//     },
//     icon: {
//         marginRight: '10px',
//     },
//     logo: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     toolbar: {
//         backgroundColor: '#684a98',
//         align: 'center',
//         justifyContent: 'space-between'
//     },
//     buttons: {
//         marginTop: '40px'
//     },
//     cardGrid: {
//         padding: '20px 0'
//     },
//     card: {
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column'
//     },
//     cardMedia: {
//         padding: '50%' // 16:9
//     },
//     cardContent: {
//         flexGrow: '1',
//         paddingBottom: '0'
//     },
//     footer: {
//         backgroundColor: theme.palette.background.paper,
//         padding: '50px 0'
//     }
// }));

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