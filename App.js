import { StyleSheet,View} from 'react-native';
import React, { Component } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Online from './components/Online';
import Add from './Add';
import Payment from "./Payment";
import Woman from './Woman';
import Preview from "./Preview"

class App extends Component {
  render() {
    return (
          <View style={styles.container}>
        
            {/* <Login/> */}
            {/* <Signup /> */}
            {/* <Online /> */}
            {/* <Add/> */}
            {/* <Payment /> */}
            {/* <Woman /> */}
            <Preview />
          

            
          </View>
    )
  }
}
export default App;


const styles = StyleSheet.create({
  container: {
    flex:1,
   
   
   
  }
  
});
