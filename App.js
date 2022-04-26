import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, FlatList, ScrollView, LogBox, TouchableOpacity } from 'react-native';
import TextCompoent from './src/components/text';
import ButtonComponent from './src/components/button';
import List from './src/components/list';
import { SearchBar } from 'react-native-elements';
import CalendarComponent from './src/components/calendar/calendar';
import Section from './src/components/sectionlist';

export default function App() {
  const [current, setCurrent] = useState('2022-05-01');

  const DATA1 = [
    {
      title: "Food",
      data: [
        {
          heading: "Bananas",
          text: "Grocery Ape",
          weight: "2Kg"
        },
        {
          heading: "Suger",
          text: "Candy Shop",
          weight: "0,5Kg"
        },
        {
          heading: "Tuna",
          text: "Temple of a catch",
          weight: "155Kg"
        }
      ]
    },
    {
      title: "Technology",
      data: [
        {
          heading: "Bananas",
          text: "Grocery Ape",
          weight: "2Kg"
        },
        {
          heading: "Suger",
          text: "Candy Shop",
          weight: "0,5Kg"
        },
        {
          heading: "Tuna",
          text: "Temple of a catch",
          weight: "155Kg"
        }
      ]
    },
  ];

  let [count, setCount] = useState(0);
  let [searchResult, setSearchResult] = useState("Text");

  function increment() {
    setCount(count + 1)
  }




  const Item1 = ({ title, text }) => (
    <View style={{ flexDirection: 'row', alignItems: "center", width: "100%", borderStyle: "dotted", borderBottomWidth: 1, borderColor: "rgb(246,245,245)", padding: 10 }}>
      <View style={{ height: 32, width: 32, backgroundColor: '#E8E8E8', borderRadius: 5 }}></View>
      <View style={{ marginLeft: 10 }}>
        <Text style={{ color: "rgb(75,74,74)", fontSize: 18, fontWeight: "600" }}>{title}</Text>
        <Text style={{ color: "rgb(194,194,194)", fontSize: 18, fontWeight: "600" }}>{text}</Text>
      </View>
    </View>
  );





  const onChange = (text) => {
    setSearchResult(text)
    // const search = DATA.filter(function (item) {
    //   return item.test.includes(text);
    // })

    // console.log("search", search);

    // if (search === "") {
    //   setSearchResult(DATA);
    // } else {
    //   setSearchResult(search);
    // }

  }

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])
  return (
    <ScrollView>
      <View style={styles.container}>
        <TextCompoent
          text="Click test"
          style={styles.clicktest}
        />
        <View style={{ width: "100%", padding: 10, backgroundColor: "#FFA978", borderRadius: 10, marginTop: 10 }}>
          <ButtonComponent
            title='Click me'
            onPress={increment}
          />
        </View>
        <View style={{ flexDirection: 'row', width: "100%", borderRadius: 10, borderWidth: 2, marginTop: 10, borderColor: "rgb(246,245,245)", paddingVertical: 10, paddingLeft: 10, borderBottomWidth: 5 }}>
          <View style={{ height: 32, width: 32, backgroundColor: "#E8E8E8", borderRadius: 10 }}></View>
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "rgb(74,73,73)" }}>
              Numbers of button clicks
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "rgb(175,175,175)" }}>
              {count}
            </Text>

          </View>
        </View>
        <TextCompoent
          text="Search test"
          style={styles.clicktest}
        />
        <SearchBar
          inputContainerStyle={{ backgroundColor: "white", borderColor: "#C2C2C2", borderWidth: 1, borderBottomWidth: 1, width: "100%" }}
          containerStyle={{ backgroundColor: "white", borderColor: "white", borderWidth: 1, borderTopWidth: 0, borderBottomWidth: 0, }}
          placeholder="search"
          value={searchResult}
          onChangeText={(text) => onChange(text)}
        />

        <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", height: 50, marginLeft: 10, width: "100%", marginLeft: 10, borderColor: "rgb(246,245,245)" }}>
          <View style={{ height: 32, width: 32, backgroundColor: '#E8E8E8', borderRadius: 5 }}></View>
          <View>
            <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: "600", color: "rgb(74,73,73)" }}>
              serached test
            </Text>
            <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: "600", color: "rgb(175,175,175)" }}>
              {searchResult}
            </Text>
          </View>
        </View>


        <TextCompoent
          text="Message test"
          style={styles.clicktest}

        />
        <View style={{ backgroundColor: "rgb(227,243,206)", padding: 20, borderRadius: 5, marginTop: 10, width: "100%" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            This is an empty state, to be used {'\n'}for messages and/or blog artticals
          </Text>
          <Text style={{ marginTop: 10, fontSize: 16, color: "rgb(126,125,125)", fontWeight: "600" }}>
            Four lines to describe the message/{'\n'}article to be highlighted. The text is {'\n'}accompained by an illustration in{'\n'}the top right-hand corner
          </Text>
          <View style={{ flexDirection: "row", }}>
            <Text style={{ marginTop: 10, fontSize: 16, color: "rgb(199,235,169)", fontWeight: "600", marginRight: 20, marginLeft: 20 }}>
              Not now
            </Text>
            <TouchableOpacity style={{ backgroundColor: "rgb(192,235,168)", alignSelf: "flex-end", height: 55, width: 188, justifyContent: "center", alignItems: "center", borderRadius: 8 }} onPress={() => setCurrent('2022-06-01')}>
              <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>See message</Text>
            </TouchableOpacity>
          </View>
        </View>
        <CalendarComponent currentMonth={current} />
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity style={{ backgroundColor: "#FFA978", marginRight: 20, height: 55, width: 170, justifyContent: "center", alignItems: "center", borderRadius: 8 }} onPress={() => setCurrent('2022-04-01')}>
            <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>Previous Week</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: "#FFA978", marginRight: 20, height: 55, width: 170, justifyContent: "center", alignItems: "center", borderRadius: 8 }} onPress={() => setCurrent('2022-06-01')}>
            <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>Next Week</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", borderRadius: 10, borderWidth: 2, marginTop: 10, borderColor: "rgb(246,245,245)", paddingVertical: 10 }}>
          <Section

            data={DATA1}
            renderItem={({ item }) => <Item1 title={item.heading} text={item.text} wieght={item.weight} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={{ paddingLeft: 10, fontSize: 18, fontWeight: "600", color: "rgb(128,128,128)" }}>{title}</Text>
            )}
            keyExtractor={(item, index) => item + index}
          />
        </View>
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
    marginTop: 30,
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
