import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Lora_400Regular,
  Lora_700Bold_Italic,
} from '@expo-google-fonts/lora';

export default () => {
  let [fontsLoaded] = useFonts({
    Lora_400Regular,
    Lora_700Bold_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.img}
          source={require('../assets/noronha.jpg')}>
          <View style={styles.containerTitle}>
            <View style={styles.card}>
              <Text style={styles.title}>Guia de Viagem </Text>
              <Text style={styles.subtitle}>Brasil</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
  containerTitle: {
    width: 260,
    height: 200,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 12,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 4,
    padding: 20
  },
  card: {
    flex: 1,
    width: 200,
    paddingTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 4
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Lora_400Regular'
  },
  subtitle: {
    fontSize: 42,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Lora_700Bold_Italic'
  },
  img: {
    flex: 1,
    resizeMode: 'cover',
    width: Dimensions.get('screen').width
  }
});
