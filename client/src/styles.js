import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        },
    heading: {
        color: '#333333',
        fontFamily: 'Arial, sans-serif',
        fontSize: '32px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    image: {
        marginLeft: '15px',
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse',
        }
    }
}));
