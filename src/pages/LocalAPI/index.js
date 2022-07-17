import { View, StyleSheet, Text, TextInput, Button, Image } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Item = () => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png',
        }}
        style={styles.avatar}
      />
      <View style={styles.desc}>
        <Text style={styles.descName}>Nama Lengkap</Text>
        <Text style={styles.descEmail}>Email</Text>
        <Text style={styles.descBidang}>Bidang</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  );
};

const Index = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [bidang, setBidang] = useState();

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };

    axios
      .post('http://localhost:3004/users', data)
      .then(response => {
        setName('');
        setEmail('');
        setBidang('');
      })
      .catch(error => console.log('post error: ', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
      <Text style={styles.label}>Masukkan Anggota Kabayan Coding</Text>

      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={name}
        onChangeText={value => setName(value)}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={value => setEmail(value)}
      />

      <TextInput
        placeholder="Bidang"
        style={styles.input}
        value={bidang}
        onChangeText={value => setBidang(value)}
      />

      <Button title="Simpan" onPress={submit} />
      <View style={styles.line} />
      <Item />
      <Item />
      <Item />
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
    marginBottom: 20,
  },
  line: {
    height: 2,
    backgroundColor: '#000',
    marginVertical: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  input: {
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 12,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  label: { marginBottom: 10 },
  itemContainer: { flexDirection: 'row', marginBottom: 20 },
  desc: { marginLeft: 18, flex: 1 },
  descName: { fontSize: 20, fontWeight: 'bold' },
  descEmail: { fontSize: 16 },
  descBidang: { fontSize: 12, marginTop: 8 },
  delete: { fontSize: 20, fontWeight: 'bold', color: 'red' },
});
