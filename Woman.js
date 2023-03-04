import React from 'react';
import {View, Text , FlatList, TextInput, StyleSheet,TouchableOpacity } from "react-native";
import { useState } from 'react';
import Cloth from './components/Cloth';
import { Ionicons } from '@expo/vector-icons';

function Woman({route, navigation}) {
  console.log(route.params);
    const [searchQuery, setSearchQuery] = useState('');

    const AllCloths = [
        {id:"1", name: "Black Jacket", rating: "⭐️⭐️⭐️⭐️⭐️", price: "99", image: require("./assets/j7.webp"), description: "Black long sleeve jacket with zipper. It's 89% cotton cozy and soft material."},
        {id:"2", name: "Purple Jacket", rating: "⭐️⭐️⭐️⭐️☆", price: "80", image: require("./assets/j8.webp"),  description: "Purple long sleeve jacket with button. It's 89% cotton cozy and soft material."},
        {id:"3", name: "Brown Jacket", rating: "⭐️⭐️⭐️⭐️⭐️", price: "140", image: require("./assets/j9.webp"), description: "Brown long sleeve jacket with ropes. It's 89% cotton cozy and soft material."},
        {id:"4", name: "White Jacket", rating: "⭐️⭐️☆☆☆", price: "115", image: require("./assets/j13.webp"), description: "White long sleeve jacket with belt. It's 89% cotton cozy and soft material."},
        {id:"5", name: "Red Jacket", rating: "⭐️☆☆☆☆", price: "60", image: require("./assets/j14.webp"), description: "red long sleeve jacket with zipper and button. It's 89% cotton cozy and soft material."},
        {id:"6", name: "Green Jacket ", rating: "⭐️⭐️⭐️☆☆", price: "59.99", image: require("./assets/j12.webp"), description: "green long sleeve jacket with belt. It's 89% cotton cozy and soft material."},
        ];

  const filterWomanJacket = (jackets, query) => {
    return jackets.filter(jacket => {
      const name = jacket.name.toLowerCase();
      const rating = jacket.rating.toLowerCase();
      const price = jacket.price.toString();
      const description = jacket.price.toString();
      const searchText = query.toLowerCase();
      return (
        name.includes(searchText) ||
        rating.includes(searchText) ||
        price.includes(searchText) ||
        description.includes(searchText)
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
        </View>
        <Text style={styles.headText}>Woman jacket</Text>
        <TextInput

        style={styles.searchInput}
        placeholder="Search jacket"
        placeholderTextColor="gray"
        value={searchQuery}
        onChangeText={setSearchQuery} />
         <TouchableOpacity style={styles.filter}  >
        <Text style={styles.filterText}>Filter</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate("Preview")}}>
        <FlatList
        data={filteredJackets}
        renderItem={({ item }) => (
          <Cloth
            image={item.image}
            name={item.name}
            rating={item.rating}
            price={item.price}
            description={item.description}
            
          />
        )}
        keyExtractor={item => item.id}
      />
        </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f2f2f2",
        paddingHorizontal: 30,
        paddingTop:50,
       paddingBottom: 370
        
       
      },
   
    searchInput: {
      height: 60,
      borderWidth: 1,
      borderColor: "white",
      borderRadius: 14,
      paddingHorizontal: 10,
      marginBottom: 20,
      backgroundColor: "white"
    },
    filter:{
        position: "absolute",
        top: 170,
        left: 300,
    },
    filterText:{
        color: "#5100ad",
    },
    filter2:{
        color: "#5100ad",
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
    }
  });
export default Woman;
