import React, { Component } from 'react'
import { TextInput, TouchableOpacity, View, StyleSheet, Text, ScrollView} from 'react-native'

export default class 
 extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    }
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
        <Text style={styles.loginHead}>Sign Up</Text>
        </View>
        <View style={styles.loginTextContainer}>
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor={"#aaaaaa"}  
             autoCapitalize={false}
              autoCorrect={false}
              value={this.state.username}
              onChangeText={(username)=> {
                console.log(username)
                this.setState({username : username})}}/>

<TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={"#aaaaaa"}
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.email}
            onChangeText={(email) => {
              console.log(email)
              this.setState({ email: email })
            }}
          />

        <TextInput style={styles.input} placeholder="Password" placeholderTextColor={"#aaaaaa"} 
        secureTextEntry={true} 
        autoCapitalize="none"
              autoCorrect={false}
              value={this.state.password}
              onChangeText={(password)=> {
                console.log(password)
                this.setState({password:password})
              }}/>

<TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor={"#aaaaaa"}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.confirmPassword}
            onChangeText={(confirmPassword) => {
              console.log(confirmPassword)
              this.setState({ confirmPassword: confirmPassword })
            }}
          />


        
        </View>
        <View>
        
      </View>
      <TouchableOpacity style={styles.bottonContainer}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.noAccountCountainer}>
        <Text style={styles.noAccountText}>Already have an Account?</Text>
        <Text style={styles.signupText}>Log in</Text>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
container:{
    marginHorizontal:20,
    paddingHorizontal:30,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 50,
    marginBottom: 50,
},
loginHead:{
    fontSize: 50,
color: "#5100ad",
fontWeight: "400",
paddingTop: 100,
},
loginTextContainer:{
    marginBottom: 30,
},
input:{
borderBottomWidth: 2,
borderBottomColor:"#5100ad",
fontSize: 20,
height: 50,
marginTop:20

},

bottonContainer:{
height:50,
backgroundColor: "#5100ad",
justifyContent: "center",
alignItems: "center",
borderRadius: 10,
marginVertical: 50,
},
buttonText:{
    color:"white",
    fontSize: 25,
},
noAccountCountainer:{
    flexDirection: "row",
    justifyContent: "center",

},
noAccountText:{
    marginRight: 10,
    fontSize: 15,

},
signupText:{
    fontSize: 15,
    color: "#5100ad"
}
})