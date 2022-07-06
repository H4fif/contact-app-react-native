import React, { Component } from 'react';
import { Image, Text, TextInput, View } from 'react-native';

const App = () => {
  return <StylingReactNativeComponent />;
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text>Styling Component</Text>
    </View>
  );
};

const SampleComponent = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: '#0abde3' }} />
      <Text>Prawito</Text>
      <Hudoro />
      <Text>Mila</Text>
      <Text>Azzamy</Text>
      <Photo />
      <TextInput style={{ borderWidth: 1 }} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Hudoro = () => {
  return <Text>Hudoro Mangku Negoro</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{ uri: 'http://placeimg.com/100/100/tech' }}
      style={{ width: 100, height: 100 }}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{ uri: 'http://placeimg.com/100/100/animals' }}
          style={{ height: 100, width: 100, borderRadius: 50 }}
        />

        <Text style={{ color: 'blue', fontSize: 24 }}>Ini Hewan</Text>
      </View>
    );
  }
}

export default App;
