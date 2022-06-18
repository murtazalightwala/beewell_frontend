
import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({


    signInInput: {
        width: '75%',
        backgroundColor: '#f9f9f9',
        borderRadius: 25,
        margin: 5,
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },

    container: { 
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    SignInContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
    },

    SignInButton: {
        width: '75%',
        margin: 5,
        paddingHorizontal: 20,
        backgroundColor: 'grey',
        borderRadius: 25,
        margin: 20,
    },
    SignInButtonText: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
    },


    SignInText: {
        padding: 20,
        marginLeft: 20,
        paddingLeft: 25,
    },

    SignUpText: {
        color: 'darkslategrey',
        fontWeight:'100',
    },
    
    SignUpTextClickable: {
        color: 'darkslategrey',
        fontWeight: 'bold',
    },

    SignUpTextContainer: {
        position: 'absolute',
        bottom: '5%',
        flexDirection:'row',
    },
    SignUpFormTextInput: {
        width: '100%',
        backgroundColor: '#f9f9f9',
        borderRadius: 2,
        margin: 5,
        justifyContent: 'center',
        paddingHorizontal: 20,

    },
    SignUpFormText: {
        color: 'darkslategrey',
        margin: 5,
        justifyContent: 'center',
        paddingHorizontal: 20,
        fontWeight: '700',

    },
    NextButton: {
        width: '60%',
        marginTop: 40,
        margin: 20,
        backgroundColor: 'grey',
        borderRadius: 25,
    },
    PreviousButton: {
        width: '60%',
        marginTop: 40,
        margin: 20,
        backgroundColor: 'grey',
        borderRadius: 25,
        

    },
    SignUpNavigationContainer: {
        height:'25%',
        width: '100%',
        borderRadius: 25,
        flexDirection: 'row-reverse',
    },
    SignUpFormContainer: {
        paddingTop: 10,
        height: '75%',
        width: '100%',
    },
    DateInput: {
        marginTop: 50,
        paddingTop: 25,
        width: 200,
        height: 100,
        alignSelf: 'center',
    },
    DatePicker: {
        paddingTop: 10,
        marginTop: 50,
        width: 125,
        height: 800,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    GenderPicker: {
        backgroundColor: 'white',
        opacity: 0.8,
    },
    DatePickerClose: {
        width: '40%',
        marginTop: 40,
        flexDirection:'column',
        backgroundColor: 'grey',
        borderRadius: 25,
        alignContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
    },
    DatePickerCloseText: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
    },
    HomeContainer: {
        borderColor: 'black',
        flexDirection: 'column',
        backgroundColor: 'blue',

    
    },
    HomeTopTab: {
        backgroundColor: 'blue',

    },
    HomeBody: {
    },
    HomeBottomTab: {
        
    },
    Header: {
        borderStyle: 'solid',
        borderColor: 'black',
        flexDirection: 'row',
        backgroundColor: 'black',

    },
    Logo: {
        height: 60,
        width: 60,
        borderRadius: 25,
    },

   
    Ham: {
        height: 60,
        width: 60,
        padding:8,
        borderRadius: 25,
    },
    SearchText: {
        marginLeft: 20,
        paddingLeft: 25,
    },
    SearchInput: {
        width: '70%',
        height: 60,
        backgroundColor: '#f9f9f9',
        borderRadius: 25,
        margin: 5,
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    DoctorTile: {
        margin: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    DoctorPhoto: {
        height: 100,
        width: 100,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    PrescriptionTile: {
        height: 200,
        flexDirection:'row',
        backgroundColor: 'white',
        shadowColor: 'lightgrey',
        padding: 5,
    },
    PrescriptionTileFieldNames: {
        padding: 5,
        fontSize: 12,
        fontWeight: 'bold',
    },
    PrescriptionTileValues: {
        padding: 5,
        fontSize: 12,
    },
    DoctorInfo: {
        maxWidth:"50%",
        flexDirection: 'column',
    },


});

export default styles;