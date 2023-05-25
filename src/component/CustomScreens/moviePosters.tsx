import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import colors from '../../assets/colors';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  thumbnailUrl: string;
  name: string;
  genre: string;
  releaseDate?: string;
  eventID: string | number;
}

const MoviePoster: FC<IProps> = props => {
  const navigation: any = useNavigation();
  console.log('Props =>', props);
  const {genre, name, thumbnailUrl, releaseDate, eventID} = props;

  const shortedDate = moment(releaseDate).format('MMM D, YYYY');
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Trailer', {eventID: eventID})}>
        <Image source={{uri: thumbnailUrl}} style={styles.movieImage} />
      </TouchableOpacity>
      <View style={{width: 185}}>
        <Text style={styles.movieName}>{name}</Text>
        <Text style={styles.movieName}>({genre})</Text>
        <Text style={styles.movieDate}>{shortedDate}</Text>
      </View>
    </SafeAreaView>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  movieImage: {
    height: 210,
    width: 180,
    marginTop: 10,
    marginHorizontal: 10,
  },
  movieName: {
    fontSize: 17,
    color: colors.primary,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  movieDate: {
    fontSize: 17,
    color: colors.primary,
    fontWeight: '600',
    marginHorizontal: 10,
    marginBottom: 15,
  },
});
