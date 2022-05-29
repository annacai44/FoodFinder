import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, Platform, Button } from 'react-native';

import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'

const Field = ({label}) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.field} /> 
    </View>
  );
};

const PostScreen = ({navigation}) => {
  const view = (post) => {
    navigation.navigate('ScheduleScreen2');
  };
  const [image, setImage] = useState(null)
  useEffect( () => {
      async function fetchData() {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
            if (status !== 'granted') {
              alert('Permission denied') 
            }
          }
      }
      fetchData();
  }, [])

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowEditing: true,
      aspect:[4,3],
      quality:1
    })
    console.log(result)
    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.fieldContainer}>
        <Field label="Food Description"/>
        <Field label="Location"/>
        <Field label="Posted By"/>
        <Text style={styles.label}>Photo</Text> 
        <Button title="Choose image" onPress={PickImage} />
        {image && <Image source={{uri:image}} style={{ 
          width:200,
          height:200,
          marginLeft: 50
         }}/>}
      </ScrollView>
      <PostButton view={view}/>
    </SafeAreaView>
  );
};

const PostButton = ({ photo, view }) => (
  <TouchableOpacity style={styles.bannerButton} onPress={() => view(photo)}>
    <Text style={styles.postText}>
      Post
    </Text>
  </TouchableOpacity>
);

const footerStyle = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: "20 pt",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  position: "fixed",
  width: "100%",
  height: '35%',
  justifyContent: 'center'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  field: {
    height: 40,
    width: 300,
    padding: 5,
    backgroundColor: 'white',
  },
  bannerButton: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: 45,
    width: 80,
    backgroundColor: '#89CFF0'

  },
  postButton: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: '100%',
    borderColor: 'black',
    borderWidth: '100%'
  },
  uploadButton:{
    borderColor: 'white',
    borderWidth: 10
  },
  uploadText:{
    backgroundColor: 'white',
    color: 'blue'
  },
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  label: {
    fontWeight: 'bold'
  },
  postText:{
      fontSize: 20
  }
});

export default PostScreen;