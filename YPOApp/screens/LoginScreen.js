import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import {
  Image,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {Button} from 'react-native-elements';

import Colors from '../constants/Colors';

export default function LoginScreen({ navigation }) {

	const [imageUrl, setImageUrl] = useState("");

	const ref = firebase.storage().ref().child("images/white_icon.png");

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
		}else
    {
      setCode('');
      Alert.alert(
        'Incorrect Access Code',
        'Please try again',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
      );
    }
	};

	return (
		<View style={{flexDirection: 'column', flex:1}}>
			<View style={styles.container}>
				<Text style={styles.title}>
					Alliance to End Homelessness
				</Text>
				<TextInput clearTextOnFocus={true} style={styles.code} onChangeText={(text) => setCode(text)} value={code} placeholder="access code" secureTextEntry={true}/>
				<View style={styles.buttonContainer}>
					<Button title={"Submit"} onPress={onPress} buttonStyle={styles.button} titleStyle={styles.buttonTitle} />
				</View>
			</View>
			<View style={styles.logo}>
				{imageUrl.length == 0 ? 
					<ActivityIndicator size={"large"} color={Colors.YPOBlue}/> :
					<Image
						source={{ uri: imageUrl }}
						style={styles.image}
					/>
				}
			</View>
		</View>

	);
}

const styles = StyleSheet.create({
  container: {
  	flex: 3,
  	flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
  	marginTop: 100,
  	width: 100,
  	height: 100,
  },
  buttonContainer:{
  	display: 'flex',
  	flexDirection: 'row',
  	alignItems: 'flex-end',
    paddingBottom: 10,
  },
  title: {
  	fontSize: 36,
  	color: Colors.YPOBlue,
  	textAlign: 'center',
  	fontWeight: 'bold',
  },
  logo: {
  	flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
