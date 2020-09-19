import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Answer from './Problem/Problem.json';

const App = ({ num, navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [modalVisible, setModalVisible] = useState(false);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');
  const [num5, setNum5] = useState('');
  const [textColor1, setTextColor1] = useState('black');
  const [textColor2, setTextColor2] = useState('black');
  const [textColor3, setTextColor3] = useState('black');
  const [textColor4, setTextColor4] = useState('black');
  const [textColor5, setTextColor5] = useState('black');
  const [rsColor, setRsColor] = useState('dimgray');
  const [reset, setReset] = useState('다지우기');
  const [edit, setEdit] = useState(true);
  const [enable, setEnable] = useState(true);
  const answer = Answer[num].answer;
  var cnt = 0;
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={{ ...styles.inputStyle, color: textColor1, height: windowHeight * 0.07, width: windowWidth * 0.9, marginTop: windowHeight * 0.02 }}
              placeholder="1번"
              onChangeText={num1 => setNum1(num1)}
              defaultValue={num1}
              editable={edit}
            />
            <TextInput
              style={{ ...styles.inputStyle, color: textColor2, height: windowHeight * 0.07, width: windowWidth * 0.9, marginTop: windowHeight * 0.02 }}
              placeholder="2번"
              onChangeText={num2 => setNum2(num2)}
              defaultValue={num2}
              editable={edit}
            />
            <TextInput
              style={{ ...styles.inputStyle, color: textColor3, height: windowHeight * 0.07, width: windowWidth * 0.9, marginTop: windowHeight * 0.02 }}
              placeholder="3번"
              onChangeText={num3 => setNum3(num3)}
              defaultValue={num3}
              editable={edit}
            />
            <TextInput
              style={{ ...styles.inputStyle, color: textColor4, height: windowHeight * 0.07, width: windowWidth * 0.9, marginTop: windowHeight * 0.02 }}
              placeholder="4번"
              onChangeText={num4 => setNum4(num4)}
              defaultValue={num4}
              editable={edit}
            />
            <TextInput
              style={{ ...styles.inputStyle, color: textColor5, height: windowHeight * 0.07, width: windowWidth * 0.9, marginTop: windowHeight * 0.02 }}
              placeholder="5번"
              onChangeText={num5 => setNum5(num5)}
              defaultValue={num5}
              editable={edit}
            />
            <View style={styles.btn}>
              <TouchableOpacity style={{ ...styles.loginBtn, backgroundColor: 'darkred' }} onPress={() => { setModalVisible(!modalVisible); }}>
                <Text style={styles.textStyle}>닫기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ ...styles.loginBtn, backgroundColor: rsColor }} onPress={() => {
                if (reset === '다음문제') {
                  navigation.navigate('Problem', { num: num + 1 });
                  setRsColor('dimgray');
                  setModalVisible(!modalVisible);
                }
                setReset('다지우기'),
                  setEdit(true);
                setNum1(''), setNum2(''), setNum3(''), setNum4(''), setNum5(''),
                  setTextColor1('black'), setTextColor2('black'), setTextColor3('black'), setTextColor4('black'), setTextColor5('black')
              }}>
                <Text style={styles.textStyle}>{reset}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ ...styles.loginBtn, backgroundColor: 'darkslateblue' }} disabled={!edit} onPress={() => {

                if (num1 === answer['num1']) {
                  setTextColor1('lawngreen');
                  cnt++;
                } else {
                  setTextColor1('red');
                }
                if (num2 === answer['num2']) {
                  setTextColor2('lawngreen');
                  cnt++;
                } else {
                  setTextColor2('red');
                }
                if (num3 === answer['num3']) {
                  setTextColor3('lawngreen');
                  cnt++;
                } else {
                  setTextColor3('red');
                }
                if (num4 === answer['num4']) {
                  setTextColor4('lawngreen');
                  cnt++;
                } else {
                  setTextColor4('red');
                }
                if (num5 === answer['num5']) {
                  setTextColor5('lawngreen');
                  cnt++;
                } else {
                  setTextColor5('red');
                }
                if (cnt == 5) {
                  setReset('다음문제');
                  setRsColor('green');
                  setEdit(false);
                }
                else setReset('다시풀기');
              }}>
                <Text style={styles.textStyle}>제출하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
          // console.log(num);
        }}
      >
        <Text style={styles.textStyle}>답안 제출</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 20,
    padding: 10,
    backgroundColor: 'lightsteelblue',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "lightsteelblue",
    borderRadius: 20,
    padding: 5,
    elevation: 2
  },
  textStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  loginBtn: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    width: 90,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 15,
    color: 'white',
    opacity: 0.7
  },
  loginTextBtn: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default App;