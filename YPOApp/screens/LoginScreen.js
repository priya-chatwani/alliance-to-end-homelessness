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
				YPO Alliance to End Homelessness
			</Text>
			<TextInput clearTextOnFocus={true} style={styles.code} onChangeText={(text) => setCode(text)} value={code} placeholder="access code" secureTextEntry={true}/>
			<View style={styles.buttonContainer}>
				<Button title={"Submit"} onPress={onPress} buttonStyle={styles.button} titleStyle={styles.buttonTitle} />
			</View>
			<Image source={{uri:'https://custom.cvent.com/ECA7D751B15B4F01AD4A1E6FF113D8BA/pix/85010edf6c2f470c9343e816a8ede655.jpg'}} width={146} height={56}/>

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
  buttonContainer:{
  	display: 'flex',
  	flexDirection: 'row',
  	alignItems: 'flex-end',
  },
  title: {
  	fontSize: 36,
  	color: Colors.YPOBlue,
  	textAlign: 'center',
  	fontWeight: 'bold',
  },
  logo: {
  	width: 146,
  	height: 56,

  },
  code: {
  	height: 40,
  	width: 300,
  	borderColor: 'gray',
  	paddingLeft: 5,
  	marginTop: 40,
  	borderWidth: 1,
  	borderRadius: 20,
  },
  button: {
  	marginTop: 10,
  	paddingTop: 4,
  	paddingBottom: 4,
  	backgroundColor: Colors.YPOGold,
  	borderRadius: 20,
  },
  buttonTitle: {
  	fontSize: 14,
  }
});