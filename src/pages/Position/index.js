import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import cart from '../../assets/icons/shopping-cart.png';

const Position = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Materi Position</Text>

      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
    padding: 20,
    alignItems: 'center',
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#439bd1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  iconCart: {
    width: 50,
    height: 50,
  },
  text: { fontSize: 12, color: '#777', fontWeight: '700', marginTop: 8 },
  notif: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#6fcf97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
