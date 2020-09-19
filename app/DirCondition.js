import Problem from './Problem/Problem.json';
import { url } from './config.js';
import { useState } from 'react';

/**From this file, 'ExplanationScreen' componenent calls description about problem
 * such as title, flowchart(png file), detail descriptions, and sort of things.
 */
export function getDirFlowchart(num) {
    //get Description from amazon aws by using php
    const [description, setDescription] = useState('');
    fetch(`http://${url}/Hanium/Description.php/?num=${num}`)
        .then((response) => response.text())
        .then((text) => {
            setDescription(text);
        }).catch((error) => {
            console.log(error);
        });

    const rqr = {
        1: require('./Problem/1/Flowchart.png'),
        2: require('./Problem/2/Flowchart.png'),
        3: require('./Problem/3/Flowchart.png'),
        4: require('./Problem/4/Flowchart.png'),
        5: require('./Problem/5/Flowchart.png'),
        6: require('./Problem/6/Flowchart.png'),
        7: require('./Problem/7/Flowchart.png'),
        8: require('./Problem/8/Flowchart.png'),
        9: require('./Problem/9/Flowchart.png'),
        10: require('./Problem/10/Flowchart.png'),
        11: require('./Problem/11/Flowchart.png'),
        12: require('./Problem/12/Flowchart.png'),
        13: require('./Problem/13/Flowchart.png'),
        // 14: require('./Problem/14/Flowchart.png'),
    };
    const title = Problem[num].title;

    return {
        description: description,
        title: title,
        dirRequire: rqr[num],
    };
};