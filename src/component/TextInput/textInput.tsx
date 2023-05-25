import React from 'react';
import {TextInput, StyleSheet, TextInputProps, View, Text} from 'react-native';
import colors from '../../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AlignJustify} from 'react-native-feather';
interface InputProps extends TextInputProps {
  title: string;
}

const InputBox: React.FC<InputProps> = ({title, ...rest}) => {
  console.log('rest', rest);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={title} size={30} color={'gray'} />
      </View>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: colors.drawerNavBackground,
    borderWidth: 1,
    paddingLeft: 40,

    backgroundColor: colors.drawerNavBackground,
    width: '88.5%',
    marginLeft: 40,
    fontSize: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
paddingVertical:20  },

  iconContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: 70,
    width: '20%',
    borderRadius: 50,
    borderColor: 'gray',
    zIndex: 1,
    borderWidth: 1,
  },
});

export default InputBox;
