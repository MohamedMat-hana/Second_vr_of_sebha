// import React, { Component } from 'react';
// import { Image, ImageBackground, StyleSheet, Text, View,Platform, PermissionsAndroid , AsyncStorage } from 'react-native';
// import CompassHeading from 'react-native-compass-heading';
// import Geolocation from 'react-native-geolocation-service';

// class Compess extends Component {
//     state = {
//         compassHeading: 0,
//         qiblad: 0,
//     };

//     componentDidMount() {
//         this.getLocation();
//         const degree_update_rate = 3;

//         CompassHeading.start(degree_update_rate, degree => {
//             this.setState({ compassHeading: degree });
//         });

//         return () => {
//             CompassHeading.stop();
//         };
//     }

//     calculate = (latitude, longitude) => {
//         const PI = Math.PI;
//         let latk = (21.4225 * PI) / 180.0;
//         let longk = (39.8264 * PI) / 180.0;
//         let phi = (latitude * PI) / 180.0;
//         let lambda = (longitude * PI) / 180.0;
//         let qiblad =
//             (180.0 / PI) *
//             Math.atan2(
//                 Math.sin(longk - lambda),
//                 Math.cos(phi) * Math.tan(latk) -
//                 Math.sin(phi) * Math.cos(longk - lambda),
//             );
//         this.setState({ qiblad });
//     };

//     getLocation = () => {
//         Geolocation.getCurrentPosition(
//             position => {
//                 const { latitude, longitude } = position.coords;
//                 console.log(latitude, longitude);
//                 this.calculate(latitude, longitude);
//             },
//             error => {
//                 // See error code charts below.
//                 console.log(error.code, error.message);
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
//         );
//     };
//     async requestPermissions() {
//         if (Platform.OS === 'ios') {
//           const auth = await Geolocation.requestAuthorization('whenInUse');
//           if (auth === 'granted') {
//             _getCourts();
//           }
//         }

//         if (Platform.OS === 'android') {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           );
//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             _getCourts();
//           }
//         }
//         }


//     render() {
//         return (
//             <View style={styles.container}>
//                 <ImageBackground
//                     source={require('../img/Compas.png')}
//                     style={[
//                         styles.image,
//                         { transform: [{ rotate: `${360 - this.state.compassHeading}deg` }] },
//                     ]}>
//                     <View
//                         style={{
//                             flex: 1,
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             transform: [{ rotate: `${this.state.qiblad}deg` }],
//                         }}>
//                         <Image
//                             source={require('../img/kakbah.png')}
//                             style={{ marginBottom: '45%', resizeMode: 'contain', flex: 0.7 }}
//                         />
//                     </View>
//                 </ImageBackground>
//             </View>
//         );
//     }
// }

// export default Compess;

// const styles = StyleSheet.create({
//     image: {
//         width: '90%',
//         flex: 0.5,
//         resizeMode: 'contain',
//         alignSelf: 'center'
//     },
//     container: {
//         backgroundColor: '#fff',
//         flex: 1
//     },
// });

/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View , PermissionsAndroid} from 'react-native';
import CompassHeading from 'react-native-compass-heading';
import Geolocation from 'react-native-geolocation-service';

class Compess extends Component {
    state = {
        compassHeading: 0,
        // qiblad: 0,
    };

    componentDidMount() {
        // this.getLocation();
        const degree_update_rate = 3;

        CompassHeading.start(degree_update_rate, degree => {
            this.setState({ compassHeading: degree });
        });

        return () => {
            CompassHeading.stop();
        };
    }

    // calculate = (latitude, longitude) => {
    //     const PI = Math.PI;
    //     let latk = (21.4225 * PI) / 180.0;
    //     let longk = (39.8264 * PI) / 180.0;
    //     let phi = (latitude * PI) / 180.0;
    //     let lambda = (longitude * PI) / 180.0;
    //     let qiblad =
    //         (180.0 / PI) *
    //         Math.atan2(
    //             Math.sin(longk - lambda),
    //             Math.cos(phi) * Math.tan(latk) -
    //             Math.sin(phi) * Math.cos(longk - lambda),
    //         );
    //     this.setState({ qiblad });
    // };

    // getLocation = () => {
    //     Geolocation.getCurrentPosition(
    //         position => {
    //             const { latitude, longitude } = position.coords;
    //             console.log(latitude, longitude);
    //             this.calculate(latitude, longitude);
    //         },
    //         error => {
    //             // See error code charts below.
    //             console.log(error.code, error.message);
    //         },
    //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    //     );
    // };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../img/Compas.png')}
                    style={[
                        styles.image,
                        { transform: [{ rotate: `${360 - this.state.compassHeading}deg` }] },
                    ]}>
                    {/* <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: [{ rotate: `${this.state.qiblad}deg` }],
                        }}>
                        <Image
                            source={require('../img/kakbah.png')}
                            style={{ marginBottom: '45%', resizeMode: 'contain', flex: 0.7 }}
                        />
                    </View> */}
                </ImageBackground>
            </View>
        );
    }
}

export default Compess;

const styles = StyleSheet.create({
    image: { width: '90%', flex: 0.5, resizeMode: 'contain', alignSelf: 'center' },
    container: { backgroundColor: '#fff', flex: 1 },
});