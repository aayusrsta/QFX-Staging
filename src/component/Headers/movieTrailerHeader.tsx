import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import colors from '../../assets/colors';
import movieDetails from '../../services/nowMovieDetailsService';

interface IProps {}

/**
 * @author
 * @function @Header
 **/

const SecondHeader = (props: any) => {
  const [movieData, setMovieData]: any = useState([]);
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const eventID: any = route.params.eventID;
  useEffect(() => {
    movieDetails(eventID)
      .then((res: any) => {
        console.log(res.data.data);
        setMovieData(res.data.data);
      })
      .catch((err: any) => {
        console.log('Error is:', err);
      });
  }, []);

  const {container, header, movieName} = styles;
  return (
    <View style={container}>
      <View style={styles.bar}>
        <TouchableOpacity style={{width:'10%',
        alignContent:'flex-start' }}
        onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrowleft" size={30} color={colors.iconColor} />
        </TouchableOpacity>

        <View style={header}>
          <Text style={movieName} numberOfLines={1}>{movieData.name}</Text>
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
    alignItems:'center',
    justifyContent:'center'
  },
  header: {
    
    alignItems: 'center',
    alignContent: 'center',
    width:'90%',
    

  },
  movieName: {
    color: 'white',
    fontSize: 20,
  },
});

export default SecondHeader;
