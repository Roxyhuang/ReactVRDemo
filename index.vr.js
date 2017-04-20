import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  VrButton,
  Image,
  Video,
  Sphere,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  _onViewClicked() {
    console.log(123);
  }
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        {/*<VrButton*/}
          {/*style={{width: 0.7}}*/}
          {/*onClick={()=>this._onViewClicked()}>*/}
          {/*<Text*/}
            {/*style={{*/}
            {/*backgroundColor: '#777879',*/}
            {/*fontSize: 0.9,*/}
            {/*fontWeight: '400',*/}
            {/*layoutOrigin: [0.5, 0.5],*/}
            {/*paddingLeft: 0.2,*/}
            {/*paddingRight: 0.2,*/}
            {/*textAlign: 'center',*/}
            {/*textAlignVertical: 'center',*/}
            {/*transform: [{translate: [0, 0, -4]}],*/}
          {/*}}*/}
          {/*>123</Text>*/}
          {/*<Image style={{width:1, height:1}}*/}
                 {/*source={{uri:'../../Assets/Images/gaze_cursor_cross_hi.png'}}*/}
                 {/*inset={[0.2,0.2,0.2,0.2]}*/}
                 {/*insetSize={[0.05,0.45,0.55,0.15]} >*/}
          {/*</Image>*/}
        {/*</VrButton>*/}
        <Sphere
          radius={0.5}
          widthSegments={20}
          heightSegments={12}
        />
        <Video style={{width: 10.0, height:2.0}} source={{uri: 'http://v.pptv.com/show/pibjpZs40pOJFww8.html?vfm=bdvtx&frp=v.baidu.com%2Fv'}} />
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.9,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          hello Cnny
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
