import React from 'react';
import { Text } from 'react-native';


const TextCompoent = ({
    text,
    style
}) => {
    return (
        <Text style={style}>
            {text}
        </Text>
    )
}

export default TextCompoent;