import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import React from 'react';

const Story = props => {
  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: props.gambar }} style={styles.gambar} />
      <Text style={styles.judul}>{props.judul}</Text>
    </View>
  );
};

const Index = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>

      <ScrollView horizontal>
        <View style={styles.storyContainer}>
          <Story
            judul="Youtube Channel"
            gambar="https://cdn.pixabay.com/photo/2021/09/26/09/55/seal-6656983__340.jpg"
          />
          <Story
            judul="Kelas Online"
            gambar="https://cdn.pixabay.com/photo/2019/12/29/19/40/online-4727942__340.jpg"
          />
          <Story
            judul="Kabayan Coding"
            gambar="https://cdn.pixabay.com/photo/2018/03/17/10/51/post-it-notes-3233653__340.jpg"
          />
          <Story
            judul="Desk Set Up"
            gambar="https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761__340.jpg"
          />
          <Story
            judul="Gadgets"
            gambar="https://cdn.pixabay.com/photo/2014/04/05/09/30/tablet-314153__340.png"
          />
          <Story
            judul="Hobby"
            gambar="https://cdn.pixabay.com/photo/2017/01/13/09/23/magic-cube-1976725__340.jpg"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  gambar: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
  },
  judul: { maxWidth: 70, textAlign: 'center' },
  wrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  storyContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
