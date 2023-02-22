import React, { Component } from 'react'
import { TouchableOpacity, View, StyleSheet, Text, ScrollView, Image} from 'react-native';
import online from "../assets/online.png";
export default class 
 extends Component {
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
        <Text style={styles.loginHead}>ONLINE SHOPPING</Text>
        </View>
        <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </View>

        <View style={styles.imagecontainer}>
        <Image source={online} style={styles.image}/>
        </View>

        <View>

      <TouchableOpacity style={styles.bottonContainer}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.noAccountCountainer}>
      </View>
       <View style={styles.dots}>
       <View style={styles.dot1}></View>
        <View style={styles.dot2}></View>
        <View style={styles.dot3}></View>
       </View>
        <Text style={styles.skipText}>Skip</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
container:{
    marginHorizontal:20,
    paddingHorizontal:20,
    paddingTop:20,
    marginTop: 80,
   
    borderRadius: 10,
    
},
image:{
    width:250, 
    height:250,
    borderRadius: 5,
    marginBottom:30,
    
},
imagecontainer:{
    marginHorizontal: 20
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
marginHorizontal: 50,
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
skipText:{
    fontSize: 15,
    color: "gray",
    alignSelf: "flex-end",
    paddingTop: 3
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
    left: 115
   
}
})