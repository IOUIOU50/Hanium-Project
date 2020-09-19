import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Modal from './Modal.js';
import { getDirFlowchart } from './DirCondition.js';
import TopView from './ExplanationTopView'

const ExplanationScreen = ({ route, navigation }) => {
  const { num } = route.params;
  const { currentRate } = route.params;
  const { title, description, dirRequire } = getDirFlowchart(num);

  return (
    <View style={styles.view}>
      <TopView num={num} correctRate={currentRate} />
      <ScrollView style={styles.container}>
        <Text style={styles.subTitle} >문제</Text>
        <Text style={styles.textBody}>{title}</Text>
        <Text style={styles.subTitle}>설명</Text>
        <Text style={styles.textBody}>{description}</Text>
        <Text style={styles.subTitle}>순서도</Text>
          <Image
            source={dirRequire}
            resizeMode='contain'
            style={
              {
                alignSelf: 'center',
                width: screenWidth,
                borderRadius: 10,
              }
            }
          ></Image>
      </ScrollView>
      <Modal num={num} navigation={navigation} currectRate={currentRate}/>
    </View>
  );
};

let screenWidth = Dimensions.get('window').width - 30;
let screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#36485f',
    flexDirection: 'column',
  },
  container: {
    flex: .92,
    flexDirection: 'column',
    paddingHorizontal: 10,
    backgroundColor: '#36485f'
  },
  subTitle: {
    color: '#33E9FF',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  textBody: {
    color: 'white',
    fontSize: 20,
    marginBottom: 40
  },
  // modal: {
  //   flex: .06,
  //   alignItems: "center",
  //   backgroundColor: "#33E9FF",
  //   margin: 10,
  //   height: 30,
  // },
  button: {
    flex: .06,
    alignItems: "center",
    backgroundColor: "#33E9FF",
    margin: 10,
    height: 30,
  },
  buttonText: {
    color: 'white',
    margin: 10,
  },
  image: {
    flex: 1,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  topView: {
    flex: .02,
  }
});
export default ExplanationScreen;
