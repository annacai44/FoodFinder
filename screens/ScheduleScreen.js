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

const Photo = ({ photo }) => (
  <SafeAreaView style={styles.photoContainer}>
    <Image source={photo.photoPath} style={styles.image}/>
    <Text style={styles.caption}>
      {`Food: ${photo.food}\nLocation: ${photo.location}\nTime Posted: ${photo.time}\nPosted By: ${photo.username}`}
    </Text>
  </SafeAreaView>
);

const PostButton = ({photo, view}) => (
  <TouchableOpacity style={styles.postButton} onPress={() => view(photo)}>
    <Text style={styles.postText}>
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

const Banner = ({view}) => (
  // <Text style={styles.banner}>{ title }</Text>
  <SafeAreaView style={styles.container}>
    <Text style={styles.extraFoodText}>Extra Food?</Text>
    <PostButton view={view}/>
  </SafeAreaView>
);

const ScheduleScreen = ({navigation}) => {

    const view = (post) => {
        navigation.navigate('PostScreen');
    };
    return (
    <SafeAreaView>
        <Banner view={view}/>
        <PhotoList photos={schedule.photos} />     
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#CBC3E3'
  },
  photoList: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: '#CBC3zE3'
  },
  postButton: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: 45,
    width: 80,
    backgroundColor: '#89CFF0'
  },
  postText:{
    fontSize: 20,
    textAlign: 'center'
  },
  image:{
    width: 400,
    height: 400,
    borderRadius: 22
  },
  caption:{
    fontSize: 20,
    textAlign: 'left',
    margin: 5
  },
  extraFoodText:{
    marginLeft: 155,
    fontSize: 20
  },
  photoContainer:{
    borderColor: 'black',
    borderWidth: '2px',
    borderRadius: 25,
    marginBottom: 10
  }
});

export default ScheduleScreen;