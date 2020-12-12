import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground} from 'react-native';
import estiloLogin from './estiloLogin';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
	        if (login == '' || senha == '') {
	            Alert.alert( 
	              'Preencimento obrigatório',
	              'Informe o login e a senha!',
	              [
	                { text: 'OK' },
	              ],
	            );
	        } else {
	
	            navigation.replace('Inicial');
	        }
	    }
    return (

	    <View style={estiloLogin.container}>
	        <ImageBackground source={require('../../../assets/Imagens/fundo.jpg')} style={estiloLogin.fundo}>
	      
	                <View style={estiloLogin.logoContainer}>
	                     <LinearGradient colors={['#17FFC1', '#0B785B', '#032119']} style={estiloLogin.logo}>
	                    <Entypo name="login" size={50} color='black'/>
	                    </LinearGradient>
	                </View>		                <View style={estiloLogin.campoContainer}>
	                <Entypo name="user" size={24} color="white" />
	                <TextInput
                    style={estiloLogin.campo}
	                    placeholder="Login"
	                    onChangeText={login => setLogin(login)}
	                    value={login}
	                />
	                </View>
	
	                <View style={estiloLogin.campoContainer}>
	                <Foundation name="key" size={24} color="white" />
	                <TextInput
	                    style={estiloLogin.campo}
	                    placeholder="Senha"
	                    onChangeText={senha => setSenha(senha)}
	                    value={senha}/>
                </View>

	                <TouchableOpacity onPress={entrar}>
	                <LinearGradient colors={['#17FFC1', '#0B785B', '#032119']} style={estiloLogin.botaoLinearGradient}>
	                    <MaterialCommunityIcons name="send" size={24} color="black" />
	                    <Text style={estiloLogin.botaoTexto}>Entrar</Text>
                </LinearGradient>
                </TouchableOpacity>
            </ImageBackground>
        </View>
	    )
	}
export default Login;
	
