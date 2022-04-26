import React from 'react';
import { SectionList } from 'react-native';



const Section = ({
    data,
    keyExtractor,
    renderItem,
    renderSectionHeader
}) => {
return(
    <SectionList
      sections={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
)
}

export default Section;