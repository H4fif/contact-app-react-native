import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import macbookPro from '../../assets/images/macbook-pro.jpg';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginVertical: 20,
        }}
      />

      <View
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image source={macbookPro} style={{ width: 188, height: 107 }} />

        <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 16 }}>
          Used Macbook Pro
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 12,
          }}>
          Rp. 25.000.000
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            marginTop: 12,
          }}>
          Bandung
        </Text>

        <View
          style={{
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
  },
});

export default StylingComponent;
