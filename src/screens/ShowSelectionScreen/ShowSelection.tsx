import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import colors from '../../assets/colors';
import showSelectionApi from '../../services/showSelectionService';

interface IProps {}

/**
 * @author
 * @function @
 **/

const ShowSelection = () => {
  const [movies, setMovies]:any = useState([]);

  useEffect(() => {
    showSelectionApi()
      .then((res: any) => {
        console.log(res.data.data);
        setMovies(res?.data?.data);
      })
      .catch((err: any) => {
        console.log('Error while fetching api =>', err);
      });
  }, []);

  const {container, imageView, movieNameView, movieNameFont} = styles;
  return (
    <View style={container}>
      <View style={imageView}>
              <Image
                source={{
                  uri:'https://imgs.search.brave.com/7i-MxJ4cfjcgd6zaSg4XtFStfwlT-a2I3YpqcG9IZ0c/rs:fit:1080:1200:1/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vdHJlbmRp/ZW5ld3ouY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzEx/L1NwaWRlci1NYW5f/LV9Ob19XYXlfSG9t/ZV9Qb3N0ZXJfMi5q/cGc_dz0xMDgwJnNz/bD0x'
                }}
                style={styles.movieImage}
              />
            </View>
            <View style={movieNameView}>
              <Text style={movieNameFont}>Spiderman</Text>
            </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieImage: {
    height: 140,
    width: 130,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 3,
  },
  movieNameView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.editButton,
  },
  movieNameFont: {
    color: colors.primary,
    fontSize: 20,
    paddingVertical: 8,
  },
});
export default ShowSelection;
