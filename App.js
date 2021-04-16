import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
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
  const[winner,setWinner] = useState("")

  const buttonClick = (box) => {

    if(box == 1 && box1 == "1") {
      setBox1(mark)
      setMark((mark == player1) ? player2 : player1)
    }
    else if(box == 2 && box2 == "2") {
      setBox2(mark)
      setMark((mark == player1) ? player2 : player1)
    }
    else if(box == 3 && box3 == "3") {
      setBox3(mark)
      setMark((mark == player1) ? player2 : player1)
    }
    else if(box == 4 && box4 == "4") {
      setBox4(mark)
      setMark((mark == player1) ? player2 : player1)
    }
    else if(box == 5 && box5 == "5") {
      setBox5(mark)
      setMark((mark == player1) ? player2 : player1)
    }
    else if(box == 6 && box6 == "6") {
      setBox6(mark)
      setMark((mark == player1) ? player2 : player1)
    }
    else if(box == 7 && box7 == "7") {
      setBox7(mark)
      setMark((mark == player1) ? player2 : player1)
    }
    else if(box == 8 && box8 == "8") {
      setBox8(mark)
      setMark((mark == player1) ? player2 : player1)
    }
    else if(box == 9 && box9 == "9") {
      setBox9(mark)
      setMark((mark == player1) ? player2 : player1)
    }
  }

  useEffect(() => {
    if((box1 == box2 && box2 == box3) || (box4 == box5 && box5 == box6) || (box7 == box8 && box8 == box9) || (box1 == box4 && box4 == box7) || (box2 == box5 && box5 == box8) || (box3 == box6 && box6 == box9) || (box1 == box5 && box5 == box9) || (box3 == box5 && box5 == box7)) {
      if(mark == player1) {
        setWinner("Player 2 wins")
      }
      else {
        setWinner("Player 1 wins")
      }
    }
    else if(box1 != "1" && box2 != "2" && box3 != "3" && box4 != "4" && box5 != "5" && box6 != "6" && box7 != "7" && box8 != "8" && box9 != "9"){
      setWinner("Game is drawn")
    }
  })

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
