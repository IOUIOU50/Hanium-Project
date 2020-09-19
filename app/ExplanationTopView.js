import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { url } from './config.js';

const ExplanationTopView = ({ num, correctRate }) => {
    const [currectRate, setCurrectRate] = useState('');

    fetch(`http://${url}/Hanium/correctRate.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "num=" + num
    })
        .then((response) => response.text())
        .then((text) => {
            setCurrectRate(text);
        }).catch((error) => {
            console.log(error);
        });

    return (
        <View style={styles.containor}>
            <Text style={styles.text}>{num}번문제{`
            `}</Text>
            <Text style={styles.text}>정답률 : {currectRate}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    containor: {
        flex: .04,
        backgroundColor: 'black',
        flexDirection: 'row',
        opacity: 0.5,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginTop: 25
    }
});
export default ExplanationTopView;