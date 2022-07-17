import { View, StyleSheet, Text, Button, Image } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Index = () => {
  const [dataGet, setDataGet] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataPost, setDataPost] = useState({
    name: '',
    job: '',
  });

  // Call API Method GET
  const getData = () => {
    axios
      .get('https://reqres.in/api/users/2')
      .then(response => setDataGet(response.data.data))
      .catch(error => console.log('get error : ', error));
  };

  // Call API Method POST
  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    axios
      .post('https://reqres.in/api/users', dataForAPI)
      .then(response => setDataPost(response.data))
      .catch(error => console.log('post error : ', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan Axios</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      {dataGet.avatar && (
        <Image source={{ uri: dataGet.avatar }} style={styles.avatar} />
      )}
      <Text>{`${dataGet.first_name} ${dataGet.last_name}`}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{dataPost.name}</Text>
      <Text>{dataPost.job}</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
  line: {
    height: 2,
    backgroundColor: '#000',
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
