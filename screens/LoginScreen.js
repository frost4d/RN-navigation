import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, SafeAreaView } from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

const logoImg = require("../assets/AQUARIZZ.png");
const logoImg1 = require("../assets/imgperson.png");
const logoImg2 = require("../assets/imgLoginperson.png");

export default function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0; 
  };

  const handleSubmit = () => {
    if(validateForm()) {
      console.log("Submitted", username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <ScrollView>
        <View style={styles.headerImg}>
          <Image source={logoImg} style={{width: 150, height: 100}} />
        </View>
        <View style= {[styles.box, styles.contactUsBtn]}>
          <Text style={styles.contactUsBtn}>Contact Us</Text>
          <StatusBar style="auto" />
        </View>
        <View style={[styles.hero, styles.heroText]}>
          <Text style={styles.heroHeader}>Connecting for the Love of Healthy Fish</Text>
        </View>
        <View style={[styles.hero, styles.heroText]}>
          <Text style={styles.heroFooter}>A Social media community to connect and sell your items.</Text>
        </View>
        <View>
          {/* <Button
            title='Join Now'
            onPress={() => console.log("Button pressed")}
          /> */}

          <Text style={styles.signUpBtn}>Join Now</Text>
        </View>
        <View style={styles.img1}>
        <Image source={logoImg1} style={{width: 500, height: 500}} />
        </View>

        <View style={styles.heroForm}>
          <View style={[styles.form]}>
            <Image source={logoImg2} style={styles.img2} />

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder='Email' 
            value={username} onChangeText={setUsername}/>
            {
              errors.username ? (<Text style={styles.errorText}>{errors.username}</Text>) : null
            }
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder='Password' secureTextEntry 
              value={password} onChangeText={setPassword}/>
            {
              errors.password ? (<Text style={styles.errorText}>{errors.password}</Text>) : null
            }
            <Text>Remember me</Text>

            <View style={styles.forgotBox}>
              <Button title='Login' onPress={() =>{handleSubmit}} color={'black'} />
              <Text style={{margin: 20, left: 90, fontSize: 14}}>----- or ------</Text>
              <Button title='Forgot Password' onPress={() =>{}} color={'black'} />
            </View>
            
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5d99dd',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 0,
  },

  a: {
    margin: 0,
    padding: 0,
    fontStyle: "poppins",
  },

  box: {
    width: 150,
    height: 35,
    padding: 10,
    paddingHorizontal: 37,
    paddingVertical: 6,
    borderRadius: 50,
    marginHorizontal: 230,
    marginVertical: -50,
  },

  contactUsBtnContainer: {
    backgroundColor: "#ffc947",
  },

  contactUsBtn: {
    backgroundColor: "#ffc947",
    fontWeight: 'bold',
    fontSize: 15,
  },

  header: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerImg: {
    margin: 1,
    marginHorizontal: 5,
    bottom: -15,
  },

  img1: {
    left: '5%',
    top: -280,
  },

  img2: {
    left: 5,
    width: 300,
    height: 400,
    bottom: 60,
    marginBottom: -85,
  },

  hero: {
    flex: 1,
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -100,
  },

  heroText: {
    width: 300,
    height: 280,
    flexDirection: 'column',
    padding: 0,
    marginHorizontal: -5,
  },

  heroHeader: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
  },

  heroFooter: {
    color: '#fff',
    fontWeight: 'normal',
    fontSize: 15,
    bottom: 170,
    marginHorizontal: 20,
  },

  heroForm: {
    height: 1000,
    width: 350,
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: 20,
    bottom: 50,
  },

  signUpBtn: {
    backgroundColor: '#ffc947',
    fontWeight: 'bold',
    paddingHorizontal: 30,
    paddingVertical: 10,
    width: 150,
    height: 45,
    top: 300,
    justifyContent: 'center',
    flex: 1,
    left: 115,
    fontSize: 20,
  },

  italic: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  card: {
    height: '80%',
    backgroundColor: '#ffffff54',
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 24,
    shadowOffset: 10,
    shadowColor: '#3a3a3a4b',
  },

  inputBoxes: {
    margin: 1,
    position: 'relative',
  },

  icon: {
    position: 'absolute',
    right: 0,
    top: '50%',
    
  }, 

  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
      elevation: 5,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,

  },
  
  label: {
    fontSize: 17,
    marginBottom: 15,
    fontWeight: 'bold',
  },

  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 25,
    padding: 10,
    borderRadius: 15,
  },

  forgotBox: {
    margin: 15,
    marginBottom: 25,
  },

  errorText: {
    color: 'red',
    marginBottom: 10,
  },

});
