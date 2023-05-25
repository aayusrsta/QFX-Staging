import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../assets/colors';
import MoviePoster from '../../component/CustomScreens/moviePosters';
import {BASE_URL} from '../../constants/baseURL';
import {useSelector, useDispatch} from 'react-redux';
import {requestComingSoonApi} from '../../redux/action/ComingSoonAction';
const ComingSoon = () => {
  const dispatch = useDispatch();
  const result = useSelector((state: any) => {
    return state.comingSoon.comingSoonData;
  });
  //console.log('RESULT===>', result);
  useEffect(() => {
    dispatch(requestComingSoonApi());
  }, [dispatch]);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <FlatList
        data={result}
        keyExtractor={(item: any, index: any) => 'key' + index}
        numColumns={2}
        renderItem={item => (
          <>
            <MoviePoster
              thumbnailUrl={`${BASE_URL}${item.item.thumbnailUrl}`}
              name={item.item.name}
              genre={item.item.eventRating}
              releaseDate={item.item.dtLocalRelease}
              eventID={item.item.id}
            />
          </>
        )}
      />
    </View>
  );
};

export default ComingSoon;
