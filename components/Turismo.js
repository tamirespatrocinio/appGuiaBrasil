import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  Dimensions,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const photo = require('../assets/rj.jpg');

const api = async (callback) => {
  const response = await fetch(
    'https://apiturismo-tamires.azurewebsites.net/v1/Api.php?apicall=getDicastb'
  );
  const parsed = await response.json();
  callback(parsed.dadoslista);
};

export default function Turismo(props) {
  const [registro, setRegistros] = useState([]);

  useEffect(() => {
    api(setRegistros);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={photo}
        blurRadius={0.4}>
        <FlatList
          horizontal
          data={registro}
          keyExtractor={(item) => item.uid.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={{ uri: item.imgPoTur01 }}
                style={styles.cardImage}
              />
              <Text style={styles.titleCard}>{item.pontosturisticos}</Text>
              <Text style={styles.subtitle}>
                <MaterialCommunityIcons
                  name="map-marker"
                  color={'#373737'}
                  size={14}
                />
                {item.cidade} - {item.estado}
              </Text>
            </View>
          )}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleCard: {
    marginTop: 5,
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    lineHeight: 25
  },
  subtitle: {
    marginTop: 2,
    fontSize: 14
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 20,
    resizeMode: 'cover'
  },
  card: {
    margin: 14,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height * 0.68
  },
  cardImage: {
    margin: 10,
    width: Dimensions.get('screen').width * 0.7,
    height: Dimensions.get('screen').height * 0.5,
    alignItems: 'center'
  }
});
