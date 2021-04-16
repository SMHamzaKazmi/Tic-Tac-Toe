import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {

  const[mark,setMark] = useState("0")
  const[player1,setPlayer1] = useState("0")
  const[player2,setPlayer2] = useState("X")
  const[box1,setBox1] = useState("1")
  const[box2,setBox2] = useState("2")
  const[box3,setBox3] = useState("3")
  const[box4,setBox4] = useState("4")
  const[box5,setBox5] = useState("5")
  const[box6,setBox6] = useState("6")
  const[box7,setBox7] = useState("7")
  const[box8,setBox8] = useState("8")
  const[box9,setBox9] = useState("9")

  const buttonClick = (box) => {

  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 30 }}>Player 2: X</Text>
      <View style={{ flexDirection: 'row', marginBottom: -20 }}>
        <Text style={{ fontSize: 40, marginRight: 59 }}>|</Text>
        <Text style={{ fontSize: 40 }}>|</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: -20 }}>
        <Pressable style={{ marginRight: 18, marginLeft: 18 }} onPress={buttonClick.bind(this,1)}><Text style={{ fontSize: 40 }}>{box1}</Text></Pressable>
        <Text style={{ fontSize: 40 }}>|</Text>
        <Pressable style={{ marginRight: 18, marginLeft: 18 }} onPress={buttonClick.bind(this,2)}><Text style={{ fontSize: 40 }}>{box2}</Text></Pressable>
        <Text style={{ fontSize: 40 }}>|</Text>
        <Pressable style={{ marginRight: 18, marginLeft: 18 }} onPress={buttonClick.bind(this,3)}><Text style={{ fontSize: 40 }}>{box3}</Text></Pressable>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: -30 }}>
        <Text style={{ fontSize: 40, marginRight: 59 }}>|</Text>
        <Text style={{ fontSize: 40 }}>|</Text>
      </View>
      <Text style={{ fontSize: 40 }}>--------------------</Text>
      <View style={{ flexDirection: 'row', marginTop: -30, marginBottom: -20 }}>
        <Text style={{ fontSize: 40, marginRight: 59 }}>|</Text>
        <Text style={{ fontSize: 40 }}>|</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: -20 }}>
        <Pressable style={{ marginRight: 18, marginLeft: 18 }} onPress={buttonClick.bind(this,4)}><Text style={{ fontSize: 40 }}>{box4}</Text></Pressable>
        <Text style={{ fontSize: 40 }}>|</Text>
        <Pressable style={{ marginRight: 18, marginLeft: 18 }} onPress={buttonClick.bind(this,5)}><Text style={{ fontSize: 40 }}>{box5}</Text></Pressable>
        <Text style={{ fontSize: 40 }}>|</Text>
        <Pressable style={{ marginRight: 18, marginLeft: 18 }} onPress={buttonClick.bind(this,6)}><Text style={{ fontSize: 40 }}>{box6}</Text></Pressable>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: -30 }}>
        <Text style={{ fontSize: 40, marginRight: 59 }}>|</Text>
        <Text style={{ fontSize: 40 }}>|</Text>
      </View>
      <Text style={{ fontSize: 40 }}>--------------------</Text>
      <View style={{ flexDirection: 'row', marginTop: -30, marginBottom: -20 }}>
        <Text style={{ fontSize: 40, marginRight: 59 }}>|</Text>
        <Text style={{ fontSize: 40 }}>|</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: -20 }}>
        <Pressable style={{ marginRight: 18, marginLeft: 18 }} onPress={buttonClick.bind(this,7)}><Text style={{ fontSize: 40 }}>{box7}</Text></Pressable>
        <Text style={{ fontSize: 40 }}>|</Text>
        <Pressable style={{ marginRight: 18, marginLeft: 18 }} onPress={buttonClick.bind(this,8)}><Text style={{ fontSize: 40 }}>{box8}</Text></Pressable>
        <Text style={{ fontSize: 40 }}>|</Text>
        <Pressable style={{ marginRight: 18, marginLeft: 18 }} onPress={buttonClick.bind(this,9)}><Text style={{ fontSize: 40 }}>{box9}</Text></Pressable>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 40, marginRight: 59 }}>|</Text>
        <Text style={{ fontSize: 40 }}>|</Text>
      </View>
      <Text style={{ fontSize: 30, marginTop: 30 }}>Player 1: 0</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
