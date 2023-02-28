import React from 'react';
import {View, Text , FlatList, TextInput, StyleSheet,TouchableOpacity } from "react-native";
import { useState } from 'react';
import Clothes from './components/Clothes';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

function Preview() {
    const [searchQuery, setSearchQuery] = useState('');

    const AllCloths = [
        { name: "Black Jacket", rating: "⭐️⭐️⭐️⭐️⭐️", price: "99", image: require("./assets/j7.webp")},
        // { name: "Purple Jacket", rating: "⭐️⭐️⭐️⭐️☆", price: "80", image: require("./assets/j8.webp")},
        // { name: "Brown Jacket", rating: "⭐️⭐️⭐️⭐️⭐️", price: "140", image: require("./assets/j9.webp")},
        // { name: "White Jacket", rating: "⭐️⭐️☆☆☆", price: "115", image: require("./assets/j13.webp")},
        // { name: "Red Jacket", rating: "⭐️☆☆☆☆", price: "60", image: require("./assets/j14.webp")},
        // { name: "Green Jacket ", rating: "⭐️⭐️⭐️☆☆", price: "59.99", image: require("./assets/j12.webp")},
        ];

  const filterWomanJacket = (jackets, query) => {
    return jackets.filter(jacket => {
      const name = jacket.name.toLowerCase();
      const rating = jacket.rating.toLowerCase();
      const price = jacket.price.toString();
      const searchText = query.toLowerCase();
      return (
        name.includes(searchText) ||
        rating.includes(searchText) ||
        price.includes(searchText)
      );
    });
  };
  const filteredJackets = filterWomanJacket(AllCloths, searchQuery);
  return (
  
    
    <View style={styles.container} >
        <View style={styles.headicon}>
            <View style={styles.icon1}>
            <Ionicons   name="arrow-back-sharp" size={24} color="black" />
            </View>
            <View style={styles.icon2} >
            <Ionicons  name="md-cart-outline" size={24} color="#5100ad" />
            </View>
          <View style={styles.heart}>
          <EvilIcons name="heart" size={24} color="#5100ad" />
          </View>
        </View>
        
        <FlatList
        data={filteredJackets}
        renderItem={({ item }) => (
          <Clothes
            image={item.image}
            name={item.name}
            rating={item.rating}
            price={item.price}
            
          />
        )}
        keyExtractor={item => item.name}
      />
        
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f1f1f1",
        paddingTop: 50,
        paddingRight: 20,
        paddingLeft: 20,
        flex: 1
        
       
      },
   
    headicon:{
        justifyContent: "space-between",
        flexDirection: "row"
    },
    headText:{
        paddingVertical: 20,
        color:"black",
        fontWeight: "bold",
        fontSize: 20
    },
    icon1:{
        backgroundColor: "white",
        height:28,
        width: 28,
        borderRadius:50,
        paddingLeft: 2,
        paddingTop: 2
    },
    icon2:{
        backgroundColor: "white",
        height:33,
        width: 33,
        borderRadius:50,
        paddingLeft: 4,
        paddingTop: 4
    },
    heart:{
        position: "absolute",
        top: 50,
        left: 287,
        backgroundColor: "white",
        height:33,
        width: 33,
        borderRadius:50,
        paddingLeft: 4,
        paddingTop: 7,
       

    }
  });
export default Preview;
