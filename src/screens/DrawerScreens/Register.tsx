import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import InputBox from '../../component/TextInput/textInput';
import colors from '../../assets/colors';
import Button from '../../component/Button/button';
import CheckBox from '@react-native-community/checkbox';
import {RadioButton} from 'react-native-paper';
const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [location, setLocaiton] = useState('');
  const [checked, setChecked] = useState('first');

  const fullNameChange = (newName: string) => {
    setName(newName);
  };
  const emailChange = (newEmail: string) => {
    setEmail(newEmail);
  };
  const mobileChange = (newMobile: string) => {
    setMobile(newMobile);
  };
  const passwordChange = (newPassword: string) => {
    setPass(newPassword);
  };
  const confirmPasswordChange = (newConfirmPassword: string) => {
    setConfirm(newConfirmPassword);
  };
  const preferredLocationChange = (newLocation: string) => {
    setLocaiton(newLocation);
  };

  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.register}>
          <Text style={{color: colors.cinemasNameText, fontSize: 25}}>
            REGISTER
          </Text>
        </View>
        <View style={styles.Box}>
          <InputBox
            title="person-outline"
            placeholder="Full Name"
            value={name}
            onChangeText={fullNameChange}
          />
          <InputBox
            title="at"
            placeholder="Email"
            value={email}
            onChangeText={emailChange}
          />
          <InputBox
            title="ios-call-outline"
            placeholder="Mobile"
            value={mobile}
            onChangeText={mobileChange}
          />
          <InputBox
            title="key-outline"
            placeholder="Password"
            value={password}
            onChangeText={passwordChange}
            secureTextEntry={true}
          />
          <InputBox
            title="key-outline"
            placeholder="Confirm Password"
            value={confirm}
            onChangeText={confirmPasswordChange}
            secureTextEntry={true}
          />
          <InputBox
            title="location-outline"
            placeholder="Prefered Location"
            value={location}
            onChangeText={preferredLocationChange}
          />
        </View>
        <View style={styles.terms}>
          <View style={{flexDirection: 'row'}}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'unchecked' : 'checked'}
              onPress={() => setChecked('')}
              color={colors.cinemasNameText}
            />

            <Text style={styles.privacyPolicy}>
              I have read and accepted the Terms of Use and Privacy Policy
            </Text>
          </View>
          <View style={styles.button}>
            <Button title="SIGN UP" onPress={handlePress} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  headers: {
    height: 50,
    backgroundColor: 'black',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 25,
    flex: 1,
  },
  Box: {
    justifyContent: 'space-between',
    height: '60%',
    marginBottom: 50,
  },
  terms: {
    marginVertical: 25,
    width: '100%',
    height: 70,
    marginTop: 25,
  },

  button: {
    height: '45%',
  },
  register: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    width: '100%',
    height: '6%',
    alignItems: 'center',

    justifyContent: 'center',
  },
  text: {
    color: colors.cinemasNameText,
  },
  privacyPolicy: {
    fontSize: 15,
    marginBottom: 15,
  },
});
