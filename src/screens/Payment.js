import React, { Component } from 'react'
import { TouchableOpacity, View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import online from "../assets/3.png";

export default function Payment({navigation}) {
  return (
    
<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
  <View>
  <Text style={styles.loginHead}>PAYMENT SUCCESSFUL</Text>
  </View>
  <View style={styles.loginTextContainer}>
      <Text style={styles.loginText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
  </View>

  <View style={styles.imagecontainer}>
  <Image source={online} style={styles.image}/>
  </View>

  <View>

<TouchableOpacity style={styles.bottonContainer}>
  <Text style={styles.buttonText}>Get Started</Text>
</TouchableOpacity>
</View>

<View style={styles.noAccountCountainer}>
</View>
 <View style={styles.dots}>
 <View style={styles.dot2}></View>
  <View style={styles.dot3}></View>
  <View style={styles.dot1}></View>
 </View>
 <TouchableOpacity onPress={()=>{
    navigation.navigate("AddToCart")
}}>

  <Text style={styles.previousText}>Previous</Text>
</TouchableOpacity>
</ScrollView>
  )
}



const styles = StyleSheet.create({
container:{
    paddingHorizontal:20,
    paddingTop:50,
   backgroundColor:"white",
   
   
    
},
image:{
    width:250, 
    height:250,
    borderRadius: 5,
    marginBottom:30,
    
},
imagecontainer:{
    marginHorizontal: 50
},
loginHead:{
    fontSize: 15,
    color: "BLACK",
    fontWeight: "900",
    paddingBottom: 10,
},
loginTextContainer:{
    marginBottom: 30,
},
loginText:{
    fontSize: 15,
    
},


bottonContainer:{
height:50,
width: 150,
backgroundColor: "#8C52FF",
justifyContent: "center",
alignItems: "center",
marginVertical: 50,
marginHorizontal: 100,
borderRadius: 30
},
buttonText:{
    color:"white",
    fontSize: 20,
    fontWeight: "500",
},
noAccountCountainer:{
    flexDirection: "row",
    justifyContent: "space-between",

},
noAccountText:{
    marginRight: 10,
    fontSize: 15,
    alignSelf: "center",

},
// skipText:{
//     fontSize: 15,
//     color: "gray",
//     alignSelf: "flex-end",
//     paddingTop: 3
// },
previousText:{
    fontSize: 15,
    color: "gray",

},
dot1:{
    backgroundColor: "#5100ad",
    height:5,
    width:10,
    margin: 1,
    borderRadius: 7
},
dot2:{
    backgroundColor: "gray",
    height:5,
    width:5,
    margin: 1,
    borderRadius: 15
},
dot3:{
    backgroundColor: "gray",
    height:5,
    width:5,
    margin: 1,
    borderRadius: 15
},
dots:{
    flexDirection: "row",
    position: "absolute",
    top: 610,
    left: 160
   
}
})