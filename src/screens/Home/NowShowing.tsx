import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../assets/colors';
import MoviePoster from '../../component/CustomScreens/moviePosters';
import {BASE_URL} from '../../constants/baseURL';
import {useSelector, useDispatch} from 'react-redux';
import {requestApiData} from '../../redux/action/NowShowingAction';

const NowShowing = () => {
  const dispatch = useDispatch();

  const result = useSelector((state: any) => {
    return state.nowShowing.nowShowingData;
  });
 console.log('result----->>>', result);

  useEffect(() => {
    dispatch(requestApiData());
  }, [dispatch]);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <FlatList
        data={result}
        keyExtractor={(item: any, index: any) => 'key' + index}
        numColumns={2}
        renderItem={item => (
          <>
            {console.log('item here is =>', item)}
            <MoviePoster
              thumbnailUrl={`${BASE_URL}${item.item.thumbnailUrl}`}
              name={item.item.name}
              genre={item.item.eventRating}
              eventID={item.item.eventID}
            />
          </>
        )}
      />
    </View>
  );
};

export default NowShowing;
