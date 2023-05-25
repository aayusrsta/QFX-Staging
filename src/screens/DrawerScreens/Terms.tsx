import React, {Component} from 'react';
import WebView from 'react-native-webview';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import colors from '../../assets/colors';
const Terms = () => {
  const injectedJavaScript = `
  const articleContent = document.querySelector('article').innerHTML;
  document.body.innerHTML = articleContent;
`;
  return (
    <View style={styles.container}>
      <View style={styles.terms}>
        <Text style={{color: colors.cinemasNameText, fontSize: 25}}>
          TERMS AND CONDITIONS
        </Text>
      </View>
      <WebView
        source={{
          uri: 'https://www.qfxcinemas.com/tnc',
        }}
        injectedJavaScript={injectedJavaScript}
        style={{marginTop: 20}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 25,
  },
  terms: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    width: '100%',
    height: '6%',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
});
export default Terms;
