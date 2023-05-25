import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../assets/colors';
import Button from '../../component/Button/button';
import QRCode from 'react-native-qrcode-svg';
import data from '../../Mock/data.json';
interface IProps {}

/**
 * @author Aayu
 * @function @
 **/

const MyProfile = () => {
  const [detail, setDetails]: any = useState([]);
  const info: any = data.detail;

  const jsonStr = JSON.stringify(data);

  console.log('DETAILSS === ', info.name);
  const handlePress = () => {
    console.log('profile edit');
  };

  const {container, body, header, details, imageContainer} = styles;
  return (
    <View style={styles.container}>
      <View style={body}>
        <View style={header}>
          <Text style={{color: colors.cinemasNameText, fontSize: 25}}>
            MY PROFILE{' '}
          </Text>
        </View>
        <View style={details}>
          <Text
            style={{fontSize: 30, fontWeight: '500', color: colors.primary}}>
            {info.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: colors.primary,
            }}>
            {info.phone}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: colors.primary,
            }}>
            {info.email}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: colors.primary,
            }}>
            {info.location}
          </Text>
        </View>
        <View style={imageContainer}>
          <QRCode size={200} value={jsonStr} />
        </View>
        <View style={{marginTop: -20, marginBottom: 15}}>
          <Text
            style={{
              color: colors.primary,
            }}>
            Note: This QR Code contains your QFX account identity.
          </Text>
        </View>
        <View style={styles.button}>
          <Button title="EDIT PROFILE" onPress={handlePress} />
        </View>
      </View>
    </View>
  );
  // };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imageContainer: {
    height: '35%',
    width: '55%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 25,
  },

  button: {
    height: '8%',
    width: '100%',
  },
  header: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    width: '100%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '20%',
  },
});

export default MyProfile;
