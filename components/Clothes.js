import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
function Clothes({image, name,rating,price}) {
  return (
    
 
         
    <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.name} numberOfLines={1}>{name}</Text>
      <Text style={styles.rating} >Review: {rating}</Text>
      <View style={styles.hr}></View>
      <Text style={styles.description}>it is long established fast that readers will be distracted by readable content of a page.</Text>
      <View style={styles.material}>
        <Text style={styles.materialtext}>Material: 91% polyster, 9% elastane</Text>
      </View>
      <View style={styles.sizes}>
        <View style={styles.xs}>
            <Text style={styles.xstext}>XS</Text>
        </View>

        <View style={styles.s}>
             <Text style={styles.stext}>S</Text> 
        </View>
        <View style={styles.m}>
            <Text style={styles.mtext}>M</Text>
        </View>
        <View style={styles.l}>
            <Text style={styles.ltext}>L</Text>
        </View>
       <View style={styles.xl}> 
       <Text style={styles.xltext}>XL</Text>
       </View>
      </View>

      <View style={styles.btnContainer}>
        <View style={styles.pricecontainer}>
        <Text style={styles.total}>Total Amount</Text>
      <Text style={styles.price}>${price}</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntext}>Add to cart</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    
      imageContainer: {
        flex: 1,
        marginBottom: 30
      },
      image: {
        width: 250,
        height: 300,
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 37
      },
     container: {
      
      },
    
      name: {
        fontWeight: "bold",
        fontSize: 15,
        color: "black",
        paddingBottom: 20,
        paddingLeft:15
      },

      
     rating:{
        position: "absolute",
        flexDirection: "row",
        top: 25,
        left: 15,
     },
     price:{
        color:"#f1f1f1",
        marginLeft: 15,
        fontSize: 18,
        fontWeight:"bold"
     },
     hr:{
        height: 5,
        width: 45,
        backgroundColor: "#5100ad",
        borderRadius: 15,
        marginLeft: 17,
        marginTop: 20
     },
     sizes:{
        flexDirection:"row",
        justifyContent: "space-evenly",
     },
     btnContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#5100ad",
        marginTop: 40,
        borderRadius: 15,
        paddingHorizontal:12,
        paddingVertical: 12

     },
     material:{
        backgroundColor: "white",
        paddingVertical: 20,
        paddingLeft:20,
        shadowOpacity: 0.5,
        opacity: 0.4,
        marginVertical: 10
     },
    description:{
        marginLeft: 15,
        paddingTop: 10,
    },
    materialtext:{
        color: "#5100ad"
    },
    xs:{
        backgroundColor:"white",
        width: 40,
        textAlign:"center",
        padding: 5,
        borderRadius: 5
    },
    s:{
        backgroundColor:"white",
        width: 40,
        textAlign:"center",
        padding: 5,
        borderRadius: 5
    },
    m:{
        backgroundColor:"#5100ad",
        width: 40,
        padding: 5,
        borderRadius: 5
        
    },
    l:{
        backgroundColor:"white",
        width: 40,
        textAlign:"center",
        padding: 5,
        borderRadius: 5
    },
    xl:{
        backgroundColor:"white",
        width: 40,
        textAlign:"center",
        padding: 5,
        borderRadius: 5
       
    },
    ltext:{
        color: "black",
        textAlign: "center"
    },
    xstext:{
        color: "black",
        textAlign: "center"
    },
    stext:{
        color: "black",
        textAlign: "center"
    },
    mtext:{
        color: "white",
        textAlign: "center"
    },
    xltext:{
        color: "black",
        textAlign: "center"
    },
    total:{
        color: "white",
        fontWeight: "500"
    },
    btntext:{
        color: "white",
        fontWeight: "600"
    },
    btn:{
        backgroundColor: "#5211dd",
        padding: 11,
        borderRadius: 5
    }
     
    });

export default  Clothes;

