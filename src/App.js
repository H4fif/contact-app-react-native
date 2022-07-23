import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import SampleComponent from './pages//SampleComponent';
import StylingComponent from './pages/StylingComponent';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
import LocalAPI from './pages/LocalAPI';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';

const App = () => {
  const [isShow, setIsShow] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShow(false);
  //   }, 6000);
  // }, []);

  return (
    <SafeAreaView>
      {/* <StylingComponent /> */}
      {/* <SampleComponent /> */}
      {/* {isShow && <FlexBox />} */}
      {/* <Position /> */}
      {/* <CallAPIVanilla /> */}
      {/* <CallAPIAxios /> */}
      <LocalAPI />
      {/* <PropsDinamis /> */}
      {/* <StateDinamis /> */}
      {/* <Communication /> */}
      {/* <PushNotif /> */}
    </SafeAreaView>
  );
};

export default App;
