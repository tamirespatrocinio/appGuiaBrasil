import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const photo = require('../assets/sp.jpg');
const largura = Dimensions.get('screen').width;

const api = async (callback) => {
  const response = await fetch(
    'https://apiturismo-tamires.azurewebsites.net/v1/Api.php?apicall=getDicastb'
  );
  const parsed = await response.json();
  callback(parsed.dadoslista);
};

export default function Restaurantes(props) {
  const [registro, setRegistros] = useState([]);

  useEffect(() => {
    api(setRegistros);
  }, []);

  return (
    <View style={styles.container} source={photo}>
      <ImageBackground
        style={styles.backgroundImage}
        source={photo}
        blurRadius={0.4}>
        <Text style={styles.title}>
          <MaterialCommunityIcons name="silverware-fork-knife" size={22} />{' '}
          Restaurantes{' '}
        </Text>

        <FlatList
          data={registro}
          keyExtractor={(item) => item.uid.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.imgGast }} style={styles.img} />

              <View>
                <View style={styles.containerTxt}>
                  <Text style={styles.titleCard}>{item.gastronomialocal}</Text>
                </View>

                <Text style={styles.txtEndereco}>{item.endereco}</Text>
                <Text style={styles.textotituloinfo}>
                  <MaterialCommunityIcons
                    name="map-marker"
                    color={'#373737'}
                    size={14}
                  />
                  {item.cidade} - {item.estado}
                </Text>
              </View>
            </View>
          )}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    marginTop: 22,
    marginBottom: 10,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: '45%',
    height: '5%',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
    paddingTop: 5,
    lineHeight: 17
  },
  card: {
    flex: 1,
    width: 328,
    height: 140,
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
    flexDirection: 'row'
  },
  titleCard: {
    width: 180,
    color: '#373737',
    marginHorizontal: 14,
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center'
  },
  containerTxt: {
    width: 220,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  img: {
    width: 110,
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    resizeMode: 'cover'
  },
  txtEndereco: {
    width: 200,
    color: '#373737',
    fontSize: 14,
    marginHorizontal: 10,
    marginTop: 15
  },
  textotituloinfo: {
    width: 190,
    color: '#373737',
    fontSize: 14,
    paddingBottom: 15,
    marginLeft: 8,
    fontWeight: 'bold'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  }
});
