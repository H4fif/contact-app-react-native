import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const androidUrl = 'http://10.0.2.2:3000/';  // for emulator
// const androidUrl = 'http://localhost:3000/';  //for real device
const iosUrl = 'http://localhost:3000/';
const url = Platform.OS === 'ios' ? iosUrl : androidUrl;

const Item = ({
  user: { id, name, email, bidang },
  handleEdit,
  toggleAlert,
  handleDelete,
}) => {
  return (
    <View key={id} style={styles.itemContainer}>
      <TouchableOpacity onPress={() => handleEdit({ id, name, email, bidang })}>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }} // use dynamic image generator
          style={styles.avatar}
        />
      </TouchableOpacity>

      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>

      <Text
        style={styles.delete}
        onPress={() =>
          toggleAlert(
            'Anda Yakin?',
            'Data yang dihapus tidak dapat dikembalikan.',
            [
              {
                text: 'Batal',
              },
              {
                text: 'Ya, hapus',
                onPress: () => handleDelete(id),
              },
            ],
          )
        }>
        X
      </Text>
    </View>
  );
};

const Index = () => {
  const [form, setForm] = useState();
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (field, value) =>
    setForm({ ...form, [field]: value });

  const handleResetForm = () => {
    setIsEdit(false);
    setForm();
  };

  const toggleAlert = (title, message, buttons = []) =>
    Alert.alert(title, message, buttons.length ? buttons : [{ text: 'OK' }]);

  const handleSave = () => {
    console.log('saving');

    axios
      .post(`${url}users`, form)
      .then(response => {
        handleResetForm();
        getData();
        toggleAlert('Sukses', 'Data berhasil disimpan');
      })
      .catch(error => {
        console.log('post error: ', error);
        toggleAlert('Gagal Simpan', 'Pastikan Anda memiliki koneksi internet');
      });
  };

  const handleUpdate = () => {
    axios
      .put(`${url}users/${form?.id}`, form)
      .then(response => {
        handleResetForm();
        getData();
        toggleAlert('Sukses', 'Perubahan berhasil disimpan');
      })
      .catch(error => {
        console.log('update error: ', error);
        toggleAlert('Gagal Ubah', 'Pastikan Anda memiliki koneksi internet');
      });
  };

  const handleEdit = data => {
    setForm(data);
    setIsEdit(true);
  };

  const handleDelete = id =>
    axios
      .delete(`${url}users/${id}`)
      .then(response => {
        getData();
        toggleAlert('Sukses', 'Data berhasil dihapus');
      })
      .catch(error => {
        console.log('delete error: ', error);
        toggleAlert('Gagal Hapus', 'Pastikan Anda memiliki koneksi internet');
      });

  const getData = () => {
    console.log('getting data from api');
    axios
      .get(`${url}users`)
      .then(response => setUsers(response.data))
      .catch(error => {
        console.log('get error: ', error);
        toggleAlert('Gagal Memuat Data');
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Local API (JSON Server)</Text>
        <Text style={styles.label}>Masukkan Anggota Kabayan Coding</Text>

        <TextInput
          placeholder="Nama Lengkap"
          style={styles.input}
          value={form?.name}
          onChangeText={value => handleInputChange('name', value)}
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
          value={form?.email}
          onChangeText={value => handleInputChange('email', value)}
        />

        <TextInput
          placeholder="Bidang"
          style={styles.input}
          value={form?.bidang}
          onChangeText={value => handleInputChange('bidang', value)}
        />

        {form && (
          <View style={styles.buttonContainer}>
            <Button title="Batalkan" onPress={handleResetForm} />
            <Button
              title={isEdit ? 'Ubah' : 'Simpan'}
              onPress={isEdit ? handleUpdate : handleSave}
            />
          </View>
        )}

        <View style={styles.line} />

        <ScrollView style={styles.itemWrapper}>
          {users.map(item => (
            <Item
              key={item.id}
              user={item}
              handleEdit={handleEdit}
              toggleAlert={toggleAlert}
              handleDelete={handleDelete}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
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
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-around' },
  itemWrapper: {
    flexGrow: 1,
    maxHeight: 300,
    padding: 10,
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 1,
  },
});
