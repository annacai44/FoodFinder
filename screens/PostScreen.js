import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';

const Field = ({label}) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.field} /> 
    </View>
  );
};

const PostScreen = () => {
  // const course = {
  //   "id": "F101",
  //   "title": "Computer Science: Concepts, Philosophy, and Connections",
  //   "meets": "MWF 11:00-11:50"
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Field label="Food description"/>
        <Field label="Location"/>
        <Text style={styles.label}>Photo</Text> 
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadText}>
            + Upload Photo
          </Text>
        </TouchableOpacity>  
      </ScrollView>
      <Footer/>
    </SafeAreaView>
  );
};

const PostButton = ({ user }) => (
  <TouchableOpacity style={styles.bannerButton}>
    <Text style={styles.courseText}>
      Post
    </Text>
  </TouchableOpacity>
);

const Footer = () => (
  // <Text style={styles.banner}>{ title }</Text>
  <SafeAreaView style={footerStyle}>
    <PostButton/>
    <TouchableOpacity style={styles.bannerButton}>
      <Text style={styles.courseText}>
        Back
      </Text>
  </TouchableOpacity>
  </SafeAreaView>
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
    justifyContent: 'center',
    backgroundColor: '#ccccb3'
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
    margin: 10,
    height: 60,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#66b0ff',
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
  }
});

export default PostScreen;