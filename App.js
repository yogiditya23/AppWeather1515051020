import React, { Component } from 'react';

// Header from './src/Cuaca/Header';
//import PrakiraanCuaca from './src/Cuaca/PrakiraanCuaca';
import PerkiraanCuaca from './src/Cuaca/PerkiraanCuaca';
//import VolumeBalok from './src/serahcai/VolumeBalok';
//import BelajarLayoutFix from './src/Layout/BelajarLayoutFix';


export default class App extends Component {
  render() {
    return (
    //  <View style={styles.containerMain}>
      //  <Header headerText= {'Pendidikan Teknik Informatika'}/>
        <PerkiraanCuaca />

    //  </View>
    );
  }
}
