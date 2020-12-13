import React, { useState } from 'react';
import { Text, View, TouchableOpacity , ImageBackground, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import estiloPerfil from './estiloPerfil';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
	
function Perfil({ navigation }) {

    const [nome, setnome] = useState('');
        
    const isDrawerOpen = useIsDrawerOpen();
	
    const exibirDrawer = () => {
        if(!isDrawerOpen){
            navigation.openDrawer();
        }
    }	

    return (
        <View style={estiloPerfil.container}>
            <View style={estiloPerfil.header}>
                <TouchableOpacity onPress={exibirDrawer}>
                    <AntDesign name="menu-fold" size={29} color="white" />
                    </TouchableOpacity>
            </View>
            <ImageBackground source={require('../../../assets/Imagens/fundoPerfil.jpg')} style={estiloPerfil.fundo}>
           
            <View style={estiloPerfil.fotoContainer}>
                <Image
                style={estiloPerfil.foto}
                source={require('../../../assets/Imagens/foto.jpg')}
                />

                <View style={estiloPerfil.logo}>
                <MaterialIcons name="edit" size={20} color="black" />
                </View>
                    <Text style={estiloPerfil.nome}>Hasquermen </Text>
                </View>

            </ImageBackground>
        </View>
    )
}		
export default Perfil;