import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    top: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentSlider: {
        flex: 2, 
        alignItems: 'stretch', 
        justifyContent: 'center',
        backgroundColor: 'red',
        height: '50%',
        borderRadius: 10,
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // backgroundColor: 'red',
    },
    textContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // bodySlider: {
    //     height: 50,
    // },
    customThumb: {
        width: 30,
        height: 30,
        shadowColor: 'green',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
    // trackStyle: {
    //     backgroundColor: '#303030',
    //     height: 15,
    //     borderRadius: 15,
    // }
});

export default styles;