import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
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

export default function LoginScreen({ navigation }) {

	const [imageUrl, setImageUrl] = useState("");

	const ref = firebase.storage().ref().child("images/YPOLogo.jpg");

	useEffect(() => {
		ref.getDownloadURL().then(data => {
			setImageUrl(data);
		}).catch(error => {
			console.log(error);
		})
	}, []);

	const [code, setCode] = React.useState('');
	const [access, setAccess] = React.useState(false);

	const onPress = () => {
		if (code == 'alliance'){
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
			<Image
				source={{ uri: imageUrl }}
				style={styles.image}
			/>
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
  image: {
	marginTop: 50,
	width: 146,
	height: 56,
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
