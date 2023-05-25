import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import InputBox from '../component/TextInput/textInput';
import colors from '../assets/colors';
import Button from '../component/Button/button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const Login: React.FC = () => {
  // const {login}:any= useContext(AuthContext);
  const navigation: any = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useContext(AuthContext);


  // const onLogin=async()=>{

  // }
  const emailTextChange = (newEmail: string) => {
    setEmail(newEmail);
  };
  const passwordTextChange = (newPassword: string) => {
    setPassword(newPassword);
  };

  const loginPress = () => {
    // login();
    navigation.navigate('AuthWrapper');

    console.log('Button pressed!');
  };
  const registerPress = () => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../images/loginHeader.png')}
            />
          </View>
        </View>
        <View style={styles.Box}>
          <View style={styles.textField}>
            <InputBox
              title="person-outline"
              placeholder="Email/Mobile Number"
              value={email}
              onChangeText={emailTextChange}
            />
          </View>

          <View style={styles.textField}>
            <InputBox
              title="key-outline"
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={passwordTextChange}
            />
          </View>
        </View>
        <Button title="LOGIN" onPress={loginPress} />

        <View
          style={{
            marginTop: 14,
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Text style={styles.text1}>Forgot Password?</Text>
          </TouchableOpacity>
          <Text style={styles.text2}>Don't have QFX account?</Text>
        </View>
        <Button title="REGISTER HERE" onPress={registerPress} />
      </View>
    </ScrollView>
  );
};

export default Login;
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: colors.background,

    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  Box: {
    marginTop: 50,
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  text1: {
    color: 'black',
  },
  imageContainer: {
    width: 100,
    height: 100,
    marginTop: 40,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    position: 'absolute',
  },
  text2: {
    paddingVertical: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: '7%',
  },

  textField: {
    width: '100%',
  },
});
