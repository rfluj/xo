import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, withSafeAreaInsets } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
// import Navigation from './navigation';

import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/directory';
import React from 'react';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={style.body}>
        <View style={style.container}>
          <ImageBackground style={style.image} source={require('./assets/images/bg.png')}>
            <View style={style.appBar}>
              <View style={style.backIcon}>
                <Icon name="md-return-down-back" size={30} color="#6021F2" />
              </View>
              <View style={style.soundIcon}>
                {/* <Icon name='unmute' size={30} color='#6021F2' /> */}
                <Icon name='volume-mute-outline' size={30} color='#6021F2' />
              </View>
            </View>
            <View style={style.content}>
              <View style={{flexDirection: 'row'}}>
                <View style={style.playerInfo}>
                  <View>
                    <View style={style.playerName}>
                      <Text>Player Name</Text>
                    </View>
                    <View style={style.playerProfile}>
                      <View style={style.playerProfileTurmBlue}>
                        <Image style={style.playerProfileImage} source={require('./assets/images/profile_img.png')}/>
                        <View style={style.playerTypeBlue}>
                          <Text style={style.playerTypeTextBlue}>X</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={style.storeCounterBody}>
                    <View style={style.storeCounter}></View>
                    <View style={style.storeCounterDone}></View>
                    <View style={style.storeCounterDone}></View>
                  </View>
                </View>
                <View style={style.playerInfo}>
                  <View style={style.storeCounterBody}>
                    <View style={style.storeCounter}></View>
                    <View style={style.storeCounter}></View>
                    <View style={style.storeCounterDone}></View>
                  </View>
                  <View>
                    <View style={style.playerName}>
                      <Text>Player Name</Text>
                    </View>
                    <View style={style.playerProfile}>
                      <View style={style.playerProfileTurmRed}>
                        <Image style={style.playerProfileImage} source={require('./assets/images/profile_img.png')}/>
                        <View style={style.playerTypeRed}>
                          <Text style={style.playerTypeTextRed}>O</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={style.board}>

            </View>
            <View style={style.gameStatus}>

            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: 400,
    height: 600,
  },
  image: {
    flex: 1,
  },
  text: {
    color: '#E53009',
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    padding: 15,
    // margin: 100
  },
  soundIcon: {
    position: 'absolute',
    right: 0,
    padding: 15
  },
  appBar: {
    height: 50,
    // width: 100,
    backgroundColor: '#19034Daa'
  },
  content: {
    height: 200,
    alignItems: 'center',
  },
  playerInfo: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  playerName: {
    width: 100,
    height: 20,
    // alignItems: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
  },
  playerProfile: {
    padding: 10,
    width: 100,
  },
  playerProfileTurmBlue: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    // alignContent: 'center'
  },
  playerProfileTurmRed: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    // alignContent: 'center'
  },
  playerProfileImage: {
    margin: 7.5,
    width:65,
    height: 65,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  playerTypeBlue: {
    width: 20,
    height: 20,
    borderRadius: 100,
    borderColor: '#491CAB',
    borderWidth: 2,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: -3,
    alignItems: 'center'
  },
  playerTypeRed: {
    width: 20,
    height: 20,
    borderRadius: 100,
    borderColor: '#E11846',
    borderWidth: 2,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: -3,
    alignItems: 'center'
  },
  playerTypeTextBlue: {
    fontSize: 12,
    color: '#0000ff'
  },
  playerTypeTextRed: {
    fontSize: 12,
    color: '#ff0000'
  },
  storeCounterBody: {
    margin: 5,
  },
  storeCounter: {
    width: 12,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 5,
  },
  storeCounterDone: {
    width: 12,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#E6BC10',
    marginTop: 5,
  },
  board: {

  },
  gameStatus: {

  }
});

