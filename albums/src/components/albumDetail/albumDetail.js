import React from 'react';
import { Text, StyleSheet, View, Image, Linking } from 'react-native';
import Card from '../card/card';
import CardSection from '../cardSection/cardSection';
import Button from '../button/button';

const AlbumDetail = (props) => {
  const { album: { title, artist, thumbnail_image, image, url } } = props;
  const { headerContentStyle, thumbnailContainerStyle, headerTextStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={{width: 50, height: 50}} source={{uri: thumbnail_image}} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style= {{width: null, flex: 1, height: 300}} source={{ uri: image }}/>
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  headerTextStyle: {
    fontSize: 18,
  },
});

export default AlbumDetail;
