import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <View style={styles1.container1}>
      // <StatusBar style="auto" />
      <View style={{marginLeft: 5, marginRight: 5, marginTop: 50, borderWidth: 7, height: 700}}>
      <View>
        <View style={[styles2.container2, {marginTop: 150}]}>
          <Text>Column</Text>
          <View style={[styles2.box100Style, styles2.box1Style]}><Text>Child</Text></View>
          <View style={[styles2.box100Style, styles2.box2Style]}><Text>Child</Text></View>
          <View style={[styles2.box100Style, styles2.box3Style]}><Text>Child</Text></View>
        </View>
      <View style={[style4.adjustLeft, {marginTop: 10, paddingBottom: 30, paddingLeft: 30}]}>
      <Text>Row</Text>
        <View style={styles3.container3}>
          <View style={[styles3.box200Style, styles3.box4Style]}><Text>Child</Text></View>
          <View style={[styles3.box200Style, styles3.box5Style]}><Text>Child</Text></View>
          <View style={[styles3.box200Style, styles3.box6Style]}><Text>Child</Text></View>
        </View>
        </View>
      </View>
      </View>
  );
}

// const styles1 = StyleSheet.create({
//   container1: {
//     flex: 1,
//     borderColor: 'black',
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles2 = StyleSheet.create({
  container2: { 
    width: 100,
    height: 220,
    borderWidth: 6, 
    borderColor: 'black',
    // backgroundColor: 'red',
    paddingLeft: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 30,
  },

  box100Style: {
    width: 50, 
    height: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  box1Style: {
    backgroundColor: 'teal',
  },

  box2Style: {
    backgroundColor: 'cyan'
  },

  box3Style: {
    backgroundColor: 'blue'
  },
});

const styles3 = StyleSheet.create({
  container3: {
    // width: 220,
    // height: 100,
    // borderWidth: 6, 
    // borderColor: 'black',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  
  box200Style: {
    width: 50, 
    height: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  box4Style: {
    backgroundColor: 'beige',
  }, 

  box5Style: {
    backgroundColor: 'khaki',
  }, 

  box6Style: {
    backgroundColor: 'brown',
  }, 

});

const style4 = StyleSheet.create ({
  adjustLeft: {
    width: 220,
    height: 100,
    borderWidth: 6, 
    borderColor: 'black',
    marginLeft: 30,
  },
});
