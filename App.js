import React from 'react';
import { View, ScrollView } from 'react-native';
import MateriFlexBox from './MateriFlexBox';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        <StylingReactNativeComponent />
        <SampleComponent />
        <MateriFlexBox />
      </ScrollView>
    </View>
  );
};

export default App;
