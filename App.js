import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, FlatList,ScrollView,LogBox ,TouchableOpacity} from 'react-native';
import TextCompoent from './src/components/text';
import ButtonComponent from './src/components/button';
import List from './src/components/list';
import {SearchBar } from 'react-native-elements';
import CalendarComponent from './src/components/calendar/calendar';
import Section from './src/components/sectionlist';

export default function App() {
  const [current, setCurrent] = useState('2022-05-01');
  let DATA = [
    {
      id: "1",
      test: "First",
      text: "One"
    },
    {
      id: "2",
      test: "Second",
      text: "Two"
    },
    {
      id: "3",
      test: "Third",
      text: "Three"
    }
  ]


  
  const DATA1 = [
    {
      title: "Food",
      data: ["Bananas", "Suger", "Tune"]
    },
    {
      title: "Technology",
      data: ["Polystation"]
    }
  ];

  let [count, setCount] = useState(0);
  let [searchResult, setSearchResult] = useState(DATA);

  function increment() {
    setCount(count + 1)
  }


  const Item = ({ title, text }) => (
    <View style={{ flex:1,flexDirection: 'row', height: 50,width:"100%",marginLeft:10,borderWidth:1,borderColor:"rgb(246,245,245)" }}>
      <View style={{ height: 32, width: 32, backgroundColor: '#E8E8E8' }}></View>
      <View>
        <Text style={{marginLeft:20}}>{title}</Text>
        <Text style={{marginLeft:20}}>{text}</Text>
      </View>
    </View>
  );

  const Item1 = ({ title }) => (
    <View style={{ flexDirection: 'row',height:50,marginLeft:10 }}>
    <View style={{ height: 32, width: 32, backgroundColor: '#E8E8E8' }}></View>
    <View style={{marginLeft:10}}>
      <Text>{title}</Text>
    </View>
  </View>
  );

  const renderItem = ({ item }) => <Item title={item.test} text={item.text} />



  const onChange = (text) => {

    const search = DATA.filter(function (item) {
      return item.test.includes(text);
    })

    console.log("search",search);

    if(search === "") {
      setSearchResult(DATA);
    } else {
      setSearchResult(search);
    }

  }

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  },[])
  return (
    <ScrollView>
      <View style={styles.container}>
      <TextCompoent
        text="Click me"
        style={styles.clicktest}
      />
      <View style={{ width: "100%", padding: 10, backgroundColor: "#FFA978",borderRadius:10,marginTop:10 }}>
        <ButtonComponent
          title='Click me'
          onPress={increment}
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <View style={{ height: 32, width: 32, backgroundColor: "#E8E8E8",borderRadius:10 }}></View>
        <View style={{ flexDirection: 'column',marginLeft:10 }}>
          <TextCompoent
            text="Numbers of button clicks"
          />
          <TextCompoent
            text={count}
          />
        </View>
      </View>
      <TextCompoent
        text="Search test"
      />
      <SearchBar
        inputContainerStyle={{ backgroundColor: "white", borderColor: "#C2C2C2", borderWidth: 1, borderBottomWidth: 1,width:"100%" }}
        containerStyle={{ backgroundColor: "white", borderColor: "white", borderWidth: 1, borderTopWidth: 0, borderBottomWidth: 0, }}
        placeholder="search"
        onChangeText={(text) => onChange(text)}
      />
      {/* <TextInput
        style={{ height: 50, width: "100%", color: 'red' }}
        placeholder="Search"
        onChangeText={(text) => onChange}
      /> */}
      <List
        data={searchResult}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TextCompoent
        text="Message test"
      />
       <View style = {{backgroundColor:"rgb(227,243,206)",padding:20,borderRadius:5}}>
         <Text style = {{fontSize:16,fontWeight:"bold"}}>
         This is an empty state, to be used {'\n'}for messages and/or blog artticals
         </Text>
         <Text style = {{marginTop:10,fontSize:16,color:"rgb(126,125,125)",fontWeight:"600"}}>
         Four lines to describe the message/{'\n'}article to be highlighted. The text is {'\n'}accompained by an illustration in{'\n'}the top right-hand corner
         </Text>
         <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
         <Text style = {{marginTop:10,fontSize:16,color:"rgb(199,235,169)",fontWeight:"600",marginRight:20,marginLeft:20}}>
         Not now
         </Text>
         <TouchableOpacity style = {{ backgroundColor:"rgb(192,235,168)",marginRight:20,height:55,width:188,justifyContent:"center",alignItems:"center",borderRadius:8}} onPress={()=>setCurrent('2022-06-01')}>
        <Text style = {{color:"#FFFFFF",fontSize:18,fontWeight:"bold"}}>See message</Text>
        </TouchableOpacity>
         </View>
         </View>
      <View style={{ flexDirection: 'row' }}>
        <ButtonComponent
          title='"Not Now'
        />
        <ButtonComponent
          title='See message'
        />
      </View>
      <CalendarComponent currentMonth = {current}/>
      <View style = {{flexDirection:'row',marginTop:10}}>
        <TouchableOpacity style = {{ backgroundColor:"#FFA978",marginRight:20,height:55,width:188,justifyContent:"center",alignItems:"center",borderRadius:8}} onPress={()=>setCurrent('2022-04-01')}>
        <Text style = {{color:"#FFFFFF",fontSize:18,fontWeight:"bold"}}>Previous Week</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {{ backgroundColor:"#FFA978",marginRight:20,height:55,width:188,justifyContent:"center",alignItems:"center",borderRadius:8}} onPress={()=>setCurrent('2022-06-01')}>
        <Text style = {{color:"#FFFFFF",fontSize:18,fontWeight:"bold"}}>Next Week</Text>
        </TouchableOpacity>
        </View>
        <Section 
        data={DATA1}
        renderItem={({ item }) => <Item1 title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        keyExtractor={(item, index) => item + index}
        />
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  clicktest: {
    marginTop:30,
    fontSize: 16,
    fontWeight: "bold"
  },
  textfirst: {
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 18
  },
  textSecond: {
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 18
  }
});
