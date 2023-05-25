import {FlatList, Text, View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../assets/colors';
import MoviePoster from '../../component/CustomScreens/moviePosters';
import {BASE_URL} from '../../constants/baseURL';
import {requestCinemasApi} from '../../redux/action/CinemasAction';
import {useSelector, useDispatch} from 'react-redux';

const NextChange = () => {
  const dispatch = useDispatch();
  const result = useSelector((state: any) => {
    return state.cinemas.cinemasData;
  });
  console.log('RESULTforCinemas===>', result);
  useEffect(() => {
    dispatch(requestCinemasApi());
  }, [dispatch]);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <FlatList
        data={result}
        keyExtractor={(item: any, index: any) => 'key' + index}
        renderItem={item => (
          <>
            <Text
              style={{
                color: colors.cinemasNameText,
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              {item.item.theatreName}
            </Text>
            <FlatList
              data={item.item.events}
              keyExtractor={(show: any, index: any) => 'key' + index}
              numColumns={2}
              renderItem={show => (
                <>
                  <MoviePoster
                    thumbnailUrl={`${BASE_URL}${show.item.thumbnailUrl}`}
                    name={show.item.name}
                    genre={show.item.eventRating}
                    releaseDate={show.item.dtLocalRelease}
                    eventID={show.item.eventID}
                  />
                </>
              )}
            />
          </>
        )}
      />
    </View>
  );
};

export default NextChange;
