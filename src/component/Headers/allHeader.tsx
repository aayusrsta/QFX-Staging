import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextProps,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import colors from '../../assets/colors';

interface HeaderProps extends TextProps {
  title: string;
}

/**
 * @author
 * @function @Header
 **/

const AllHeader: React.FC<HeaderProps> = ({title}) => {
  const navigation: any = useNavigation();

  const {container, header, screenName} = styles;
  return (
    <View style={container}>
      <View style={styles.bar}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrowleft" size={30} color={colors.iconColor} />
        </TouchableOpacity>

        <View style={header}>
          <Text style={screenName} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  bar: {
    backgroundColor: 'black',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
  },
  screenName: {
    color: 'white',
    fontSize: 20,
  },
  icon: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});

export default AllHeader;
