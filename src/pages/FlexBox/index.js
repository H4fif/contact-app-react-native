import React, { Component, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       subscriber: 0,
//     };

//     console.log('==> constructor here');
//   }

//   componentDidMount() {
//     console.log('==> component did mount');

//     setTimeout(() => {
//       this.setState({
//         subscriber: 100,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('==> component did update');
//   }

//   componentWillUnmount() {
//     console.log('==> component will unmount');
//   }

//   render() {
//     console.log('==> render');

//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#c8d6e5',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{ backgroundColor: '#ee5253', width: 50, height: 50 }} />
//           <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }} />
//           <View style={{ backgroundColor: '#1dd1a1', width: 50, height: 50 }} />
//           <View style={{ backgroundColor: '#5f27cd', width: 50, height: 50 }} />
//         </View>

//         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>

//         <View
//           style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//           <Image
//             source={{
//               uri: 'https://yt3.ggpht.com/yti/AJo0G0n7PWVvUuTK8l70kh7TdTZNJzBIQSSOkQkiDA=s88-c-k-c0x00ffffff-no-rj-mo',
//             }}
//             style={{
//               width: 100,
//               height: 100,
//               borderRadius: 50,
//               marginRight: 14,
//             }}
//           />

//           <View>
//             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
//               Hafif Imammuddyn
//             </Text>
//             <Text>{this.state.subscriber} subscriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, setSubscriber] = useState(0);

  useEffect(() => {
    console.log('did mount');

    setTimeout(() => setSubscriber(100), 2000);

    return () => {
      console.log('did update');
    };
  }, []);

  // useEffect(() => {
  //   console.log('did update');

  //   setTimeout(() => setSubscriber(100), 2000);
  // }, [subscriber]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#c8d6e5',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{ backgroundColor: '#ee5253', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#1dd1a1', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#5f27cd', width: 50, height: 50 }} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>

      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Image
          source={{
            uri: 'https://yt3.ggpht.com/yti/AJo0G0n7PWVvUuTK8l70kh7TdTZNJzBIQSSOkQkiDA=s88-c-k-c0x00ffffff-no-rj-mo',
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginRight: 14,
          }}
        />

        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Hafif Imammuddyn
          </Text>
          <Text>{subscriber} subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
