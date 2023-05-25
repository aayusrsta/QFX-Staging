import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation, useRoute} from '@react-navigation/native';
import movieDetails from '../../services/nowMovieDetailsService';
import YoutubePlayer from 'react-native-youtube-iframe';
import convertMinsToTime from '../../utils/MinutesToHour/convertTime';
interface IProps {}

/**
 * @author Aayu
 * @function @
 **/

const Trailer = (props: any) => {
  const [movieData, setMovieData]: any = useState([]);
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const eventID: any = route.params.eventID;
  const movieLength: any = movieData.lengthInMinutes;

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

  const extractVideoId = (url: string) => {
    const regex = /\/embed\/([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match && match[1] ? match[1] : '';
  };

  const videoUrl = `${movieData.mediaPlayerTrailerURL}`;
  const videoId = extractVideoId(videoUrl);
  console.log(movieData.mediaPlayerTrailerURL);
  //console.log({movieData.medi})

  const {container, nameLine, movieName, icon, description, ticket, details} =
    styles;

  return (
    <View style={container}>
      <View>
        <YoutubePlayer height={250} play={false} videoId={videoId} />
      </View>
      <View style={description}>
        <View style={nameLine}>
          <View style={{width: '60%', flexDirection: 'row'}}>
            <Text style={movieName}>{movieData.name}</Text>
            <Text style={movieName}> ({movieData.eventRating})</Text>
          </View>

          <TouchableOpacity
            style={{width: '40%', flexDirection: 'row'}}
            onPress={() => navigation.navigate('TicketScreen')}>
            <View style={icon}>
              <Entypo name="ticket" size={20} />
            </View>
            <View>
              <Text style={ticket}>BUY/RESERVE TICKET</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={details}>Genre: {movieData.genre}</Text>
        <Text style={details}>Runtime: {convertMinsToTime(movieLength)}</Text>
        <Text style={details}>Director: {movieData.directorName}</Text>

        <Text style={details}>Cast: {movieData.cast}</Text>

        <Text style={details}>Language: {movieData.comments}</Text>
        <Text style={{marginTop: 15, color: colors.primary, fontWeight: '500'}}>
          SYNOPSIS: {movieData.annotation}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  nameLine: {
    flexDirection: 'row',
    marginTop: -9,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieName: {
    color: colors.primary,
    fontSize: 20,
  },
  icon: {
    borderRadius: 100,
    backgroundColor: colors.gray,
    borderColor: 'gray',
    borderWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 5,
    // marginLeft:80,
  },
  ticket: {
    color: colors.primary,
    fontSize: 12,
    marginTop: 8,
    marginHorizontal: 5,
  },
  details: {
    marginVertical: 5,
    color: colors.primary,
    fontWeight: '500',
  },
  description: {
    paddingHorizontal: 15,
    fontWeight: '500',
  },
});
export default Trailer;
