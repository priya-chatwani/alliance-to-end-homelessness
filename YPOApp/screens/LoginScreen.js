import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {Button} from 'react-native-elements';

import Colors from '../constants/Colors';


export default function LoginScreen({ navigation }){
	const [code, setCode] = React.useState('');
	const [access, setAccess] = React.useState(false);

	const onPress = () => {
		if(code == 'alliance'){
			navigation.navigate('Main');
		}
	};



	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				YPO Alliance to end Homelessness
			</Text>
			<TextInput clearTextOnFocus={true} style={styles.code} onChangeText={(text) => setCode(text)} value={code} placeholder="Text Input For Password" secureTextEntry={true}/>
			<Button title={"Submit"} onPress={onPress} buttonStyle={styles.button} titleStyle={styles.buttonTitle} />
			<Image source={'../assets/images/ypo_icon.jpg'}/>
		</View>

	);
}

const styles = StyleSheet.create({
  container: {
  	display: 'flex',
  	flex: 1,
  	flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
  	fontSize: 32,
  	color: Colors.YPOBlue,
  },
  logo: {
  	width: 146,
  	height: 56,

  },
  code: {
  	height: 28,
  	width: 308,
  	borderColor: 'gray',
  	paddingLeft: 5,
  	marginTop: 50,
  	borderWidth: 1,
  	borderRadius: 20,
  },
  button: {
  	marginTop: 10,
  	paddingTop: 2,
  	paddingBottom: 2,
  	backgroundColor: Colors.YPOGold,
  	borderRadius: 20,
  	alignItems: 'center', 
  	justifyContent: 'center',
  },
  buttonTitle: {
  	fontSize: 12,
  }
});