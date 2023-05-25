import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import colors from '../../assets/colors';
import SendIntentAndroid from 'react-native-send-intent';

interface IProps {}

/**
 * @author Aayu
 * @function @Contact
 **/

const Contact = () => {
  const {container, contact, topic, topicText} = styles;
  const phoneNumber = '9843816795';

  return (
    <View style={container}>
      <View style={contact}>
        <Text style={{color: colors.cinemasNameText, fontSize: 25}}>
          CONTACT
        </Text>
      </View>
      <View style={topic}>
        <Text style={topicText}>ENQUIRY</Text>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 15}}>
        <Text style={{fontSize: 18, fontWeight: '400', color: colors.primary}}>
          Tel:{' '}
        </Text>
        <TouchableOpacity
          onPress={() => {
            SendIntentAndroid.sendPhoneCall('+97715522566');
          }}>
          <Text
            style={{
              color: colors.cinemasNameText,
              fontSize: 18,
              fontWeight: '400',
            }}>
            +977-1-5522566
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 20}}>
        <Text style={{fontSize: 18, color: colors.primary}}>
          (Sun-Fri, 10am-5pm)
        </Text>
        <Text style={{fontSize: 18, color: colors.primary}}>
          Email: support@qfxcinemas.com
        </Text>
      </View>
      <View style={topic}>
        <Text style={topicText}>SOCIAL</Text>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.image}
          onPress={() => {
            const viberUrl = `viber://chat?number=${phoneNumber}`;
            Linking.openURL(viberUrl);
          }}>
          <Image
            source={require('../../images/viber.png')}
            style={{height: '100%', width: '100%'}}
          />
          <Text style={styles.socialText}>Connect us on Viber</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image}
          onPress={() =>
            Linking.openURL('https://www.facebook.com/aayu.shrestha.33')
          }>
          <Image
            source={require('../../images/facebook.png')}
            style={{height: '100%', width: '100%'}}
          />
          <Text style={styles.socialText}>Like us on Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/aayu.srsta__')
          }>
          <Image
            source={require('../../images/instagram.png')}
            style={{height: '100%', width: '100%'}}
          />
          <Text style={styles.socialText}>Follow us on Instagram</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.image}
          onPress={() => {
            const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;
            Linking.openURL(whatsappUrl);
          }}>
          <Image
            source={require('../../images/whatsapp.png')}
            style={{height: '100%', width: '100%'}}
          />
          <Text style={styles.socialText}>Ping us on WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.image}
          onPress={() => {
            const packageName = 'com.qfxcinemas';
            Linking.openURL(`market://details?id=${packageName}`);
          }}>
          <Image
            source={require('../../images/appstore.png')}
            style={{height: '100%', width: '100%'}}
          />
          <Text style={styles.socialText}>Rate us on Play Store</Text>
        </TouchableOpacity>
        <View style={styles.image}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: 25,
  },
  contact: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    width: '100%',
    height: '6%',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
  topic: {
    borderBottomWidth: 2,
    marginTop: 10,
    borderBottomColor: 'gray',
  },
  topicText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '400',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 80,
  },
  image: {
    width: 70,
    height: 70,
  },
  socialText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});
export default Contact;
