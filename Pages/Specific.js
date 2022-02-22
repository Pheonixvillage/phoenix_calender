import React, { useState } from "react";
import { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import getList from "./components/list";
import Collapsible from "react-native-collapsible";
import { add } from "react-native-reanimated";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Specific({ route, navigation }) {
  console.log(route.params);
  console.log(route.params.daylist);
  console.log("Wee");
  const [iscollapsed, setIscollapsed] = useState(
    10 ** (route.params.daylist.lists.length + 2)
  );
  const [showDatetimepicker, setShowDatetimepicker] = useState(false);
  const [newdate, setNewdate] = useState(new Date());
  const [newTitle, setNewTitle] = useState("");
  const [newSpecific, setNewspecific] = useState("");
  console.log(iscollapsed);
  //10100
  console.log(route.params.daydata);
  navigation.setOptions({ title: route.params.daydata.dateString });
  const lists = route.params.daylist.lists.map((spe, idx) => (
    <View>
      <Collapsible collapsed={!getCollapsed(idx)}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => changeCollapsed(idx)}
          style={styles.longlist}
        >
          <Text style={styles.titletext}>테스트</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={async () => await addFile(idx)}
          >
            <Text style={styles.titletext}>파일추가</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={async () =>
              console.log(await ImagePicker.launchImageLibraryAsync())
            }
          >
            <Text style={styles.titletext}>이미지추가</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Collapsible>
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => changeCollapsed(idx)}
          style={{
            height: 58 * !getCollapsed(idx),
            width: 338,
            backgroundColor: "white",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <View style={{ height: 58 * !getCollapsed(idx) }}>
            <Text style={styles.titletext}>{spe.title}</Text>
            <Text style={styles.titletext}>{spe.specific}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ));

  const addlists = (
    <View>
      <Collapsible collapsed={!getCollapsed(route.params.daylist.lists.length)}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => changeCollapsed(route.params.daylist.lists.length)}
          style={styles.longlist}
        >
          <Text>테스트</Text>
          <TextInput
            style={styles.titleinput}
            onChangeText={(title) => {
              setNewTitle(title);
            }}
          />
          {showDatetimepicker && (
            <DateTimePicker mode="time" value={newdate} onChange={setTime} />
          )}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setShowDatetimepicker(!showDatetimepicker);
            }}
          >
            <Text style={styles.titletext}>
              {newdate.getHours().toString() +
                "/" +
                newdate.getMinutes().toString()}
            </Text>
          </TouchableOpacity>
          <TextInput
            style={styles.titleinput}
            onChangeText={(specific) => {
              setNewspecific(specific);
            }}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={async () => {
              await addList();
            }}
          >
            <Text>OK</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </Collapsible>
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => changeCollapsed(route.params.daylist.lists.length)}
          style={{
            height: 58 * !getCollapsed(route.params.daylist.lists.length),
            width: 338,
            backgroundColor: "white",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <View
            style={{
              height: 58 * !getCollapsed(route.params.daylist.lists.length),
            }}
          >
            <Text style={styles.titletext}>일정 추가하기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  function getCollapsed(id) {
    //console.log("id"+ Boolean(Math.floor((iscollapsed / (10 ** (id+1))) % 10)).toString())
    return Boolean(Math.floor((iscollapsed / 10 ** (id + 1)) % 10));
  }

  function changeCollapsed(id) {
    if (getCollapsed(id) == false) {
      setIscollapsed(iscollapsed + 10 ** (id + 1));
    }
    if (getCollapsed(id) == true) {
      setIscollapsed(iscollapsed - 10 ** (id + 1));
    }
  }

  async function addFile(id) {
    let file = await DocumentPicker.getDocumentAsync();
    if (file.type == "success") {
      console.log(file.uri);
      let lis = route.params.daylist;
      lis.lists[id].files.push({
        file: file.uri,
        title: "test",
      });
      await route.params.savenewList(lis);
    } else {
      console.log("fail");
    }
  }
  async function addList() {
    console.log("WEEWEEWe");
    nlis = {
      files: [],
      specific: newSpecific,
      timestamp: Date.parse(newdate) / 1000,
      title: newTitle,
    };
    let lis = route.params.daylist;
    lis.lists.push(nlis);
    console.log("WEEWEE");
    console.log(lis);
    await route.params.savenewList(lis);
    console.log("WOKA");
  }
  function setTime(event, time) {
    setShowDatetimepicker(false);
    setNewdate(time);
    console.log(time.getHours());
    console.log(time.getMinutes());
  }
  return (
    <View style={styles.box}>
      <View style={styles.holder}>
        {lists}
        {addlists}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "center",
  },
  holder: {
    height: 692,
    width: 376,
    alignItems: "center",
    backgroundColor: "rgba(17, 66, 116, 0.16)",
  },
  list: {
    height: 58,
    width: 338,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
  },
  longlist: {
    height: 200,
    width: 338,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
  },
  titletext: {
    marginTop: 8,
    marginLeft: 12,
    color: "black",
  },
  titleinput: {
    height: 40,
    width: 338,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
  },
});
