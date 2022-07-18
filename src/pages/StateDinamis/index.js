import { StyleSheet, Text, View, Button } from 'react-native';
import React, { Component, useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class CounterClass extends Component {
  state = { number: 0 };

  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button
          title="Tambah"
          onPress={() => this.setState({ number: this.state.number + 1 })}
        />
      </View>
    );
  }
}

const Index = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>
        Materi Component Dinamis dengan State
      </Text>

      <Text style={styles.titleSection}>Functional Component (Hooks)</Text>
      <Counter />
      <Counter />

      <Text style={styles.titleSection}>Class Component</Text>
      <CounterClass />
      <CounterClass />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  wrapper: { padding: 20 },
  textTitle: { textAlign: 'center', fontSize: 16 },
  titleSection: { marginTop: 20 },
});
