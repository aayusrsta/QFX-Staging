import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 20,
    height: "100%",
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'gray',
  },
  button:{
    height:45,
    width:"100%"
  }

});

export default Button;
