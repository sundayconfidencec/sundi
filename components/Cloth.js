import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

function Cloth({image, name,rating,price, description}) {
  const navigation = useNavigation();
  return (
    
  <View style={styles.mainContainer}>
       <TouchableOpacity onPress={() => navigation.navigate("Preview", { image, name, description, rating, price })}>  
    <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.name} numberOfLines={1}>{name}</Text>
      <Text style={styles.rating} >{rating}</Text>
      <Text style={styles.price}>${price}</Text>
     
    </View>
  </View>
  </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: "#f1f1f2"
      },
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: "#f2f2f2"
       
        
       
      },
      imageContainer: {
        flex: 1,
        marginRight: 35,
      },
      image: {
        width: 150,
        height: 150,
        borderRadius: 5,
      },
      infoContainer: {
        flex: 6,
        justifyContent: "center",
        marginLeft: 100,
      },
      name: {
        fontWeight: "bold",
        fontSize: 15,
        color: "black",
        paddingBottom: 50,
        paddingLeft:15
      },

      
     rating:{
        position: "absolute",
        flexDirection: "row",
        top: 35,
        left: 15,
        // backgroundColor: "yellow"
     },
     price:{
        color:"#5100ad",
        marginLeft: 15,
        fontSize: 18,
        fontWeight:"bold"
     }
     
    });

export default  Cloth;

