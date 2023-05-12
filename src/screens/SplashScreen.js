import React, { useEffect } from 'react';
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  AsyncStorage
} from 'react-native';
import { COLORS } from '../constants';
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');
function SplashScreen({ navigation }) {
  useEffect(() => {
    let login = 0;
    setTimeout(() => {
      if (login == 1) {
        navigation.navigate('HomeStack');
      }
      else {
        navigation.navigate('HomeStack');
      }
    }, 3000);
  }, []);

  return (
    <>
      <StatusBar backgroundColor={COLORS.background} />




      <Animatable.View

        style={{
          flex: 1,
          backgroundColor: "#0c0c0c",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Animatable.Image source={require('../img/Splash1.png')}
          animation='bounceInRight'
          easing="ease-in-out"
          resizeMode={"contain"}
        />
        <Animatable.Image source={require('../img/Splash2.png')}
          animation='bounceIn'
          easing="ease-in-out"
          resizeMode={"contain"}
        />
        <Animatable.Image source={require('../img/Splash3.png')}
          animation='bounceInLeft'
          easing="ease-in-out"
          resizeMode={"contain"}
        />

      </Animatable.View>
    </>
  );
}
const styles = StyleSheet.create({ });

export default SplashScreen;
