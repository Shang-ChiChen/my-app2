import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const AlbumDetail = (props) => {
  const { thumbnail_image, title, artist, image } = props.album;
  return (
    <View style={styles.cardContainerStyle}>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: thumbnail_image
          }}
        />
        <View style={styles.headerContentStyle}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.artistStyle}>{artist}</Text>
        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",

  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5,
    borderRadius: 25,
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 10
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#333",
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,

  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#111",
    borderColor: "#333",
    borderBottomWidth: 1
  },
  imageStyle: {
    borderRadius: 5,
    height: 400,
    width: null
  },
  titleStyle: {
    fontSize: 24,
    color: "#fff",
  },
  artistStyle: {
    color: "#aaa",
  },
});

export default AlbumDetail;