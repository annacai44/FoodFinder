import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
  
const schedule = {
  "photos": [
    {
      "id": 1,
      "photoPath": require('../assets/cookies.png'),
      "food": 'Insomnia cookies',
      "location": 'Norris Louis room',
      "time": '5/27/22 2:23 PM',
      "username": 'Dillo'
    },
    {
      "id": 2,
      "photoPath": require('../assets/pizza.png'),
      "food": 'Pizza',
      "location": 'the Lakefill',
      "time": '5/27/22 8:34 PM',
      "username": 'Newton'
    },
    {
      "id": 3,
      "photoPath": require('../assets/burger.png'),
      "food": 'Burgers',
      "location": 'the Lake',
      "time": '5/27/22 10:53 PM',
      "username": 'Julie Payne Kirschmier'
    },
    {
      "id": 4,
      "photoPath": require('../assets/boba.png'),
      "food": 'Boba',
      "location": 'Lincoln',
      "time": '5/28/22 10:00 AM',
      "username": 'Morty'
    },
    {
      "id": 5,
      "photoPath": require('../assets/sandwiches.png'),
      "food": 'Sandwiches',
      "location": 'Hinman room 332',
      "time": '5/28/22 5:00 PM',
      "username": 'Willie'
    }
  ]
};

// const getCourseNumber = course => (
//   course.id.slice(1)
// );

const Photo = ({ photo }) => (
  <TouchableOpacity style={styles.postButton}>
    <Image source={photo.photoPath} style={styles.image}/>
    <Text style={styles.caption}>
      {`Food: ${photo.food}\nLocation: ${photo.location}\nTime Posted: ${photo.time}\nPosted By: ${photo.username}`}
    </Text>    
  </TouchableOpacity>
);

const User = ({ user }) => (
  <TouchableOpacity style={styles.bannerButton}>
    <Text style={styles.courseText}>
      username
    </Text>
  </TouchableOpacity>
);

const Home = ({ user }) => (
  <TouchableOpacity style={styles.bannerButton}>
    <Text style={styles.courseText}>
      Home
    </Text>
  </TouchableOpacity>
);

const Login = ({ user }) => (
  <TouchableOpacity style={styles.bannerButton}>
    <Text style={styles.courseText}>
      Login
    </Text>
  </TouchableOpacity>
);

const PostButton = ({ user }) => (
  <TouchableOpacity style={styles.bannerButton}>
    <Text style={styles.courseText}>
      Post
    </Text>
  </TouchableOpacity>
);

const PhotoList = ({ photos }) => (
  <ScrollView>
    <View style={styles.photoList}>
      { photos.map(photo => <Photo key={photo.id} photo={photo} />) }
    </View>
  </ScrollView>
);

const Banner = () => (
  // <Text style={styles.banner}>{ title }</Text>
  <SafeAreaView style={styles.container}>
    <User/>
    <Text>Extra Food?</Text>
    <Login/>
  </SafeAreaView>
);

const Footer = () => (
  // <Text style={styles.banner}>{ title }</Text>
  <SafeAreaView style={footerStyle}>
    <PostButton/>
  </SafeAreaView>
);

const App = () => {
  return (
    <SafeAreaView>
      <Banner />
      <PhotoList photos={schedule.photos} />     
      <Footer/> 
    </SafeAreaView>
  );
};
  
const footerStyle = {
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: "lightgrey",
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  // banner: {
  //   // flexDirection: 'row',
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   color: '#fff',
  //   fontSize: 90,
  // },
  photoList: {
    flex: 1,
    flexDirection: 'column',
    // flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start'
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
  courseText:{
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  image:{
    width: 400,
    height: 400
  },
  caption:{
    fontSize: 20,
    textAlign: 'left',
    margin: 5
  }
});

export default App;