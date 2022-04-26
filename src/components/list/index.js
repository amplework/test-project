import React from 'react';
import { FlatList } from 'react-native';



const List = ({
    data,
    renderItem,
    keyExtractor
}) => {
    return (
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        />
    )
}

export default List;