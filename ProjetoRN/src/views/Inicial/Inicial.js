import React, { useState } from 'react';
import { Text, View, TouchableOpacity , ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';
	
function Inicial({ navigation }) {
	
    const isDrawerOpen = useIsDrawerOpen();
	
    const exibirDrawer = () => {
        if(!isDrawerOpen){
            navigation.openDrawer();
        }
    }	
    const abrirColecao = () => {
        navigation.navigate('Colecao')
    } 
	    const abrirAcessorios = () => {
        navigation.navigate('Acessorios')
    }
	    
    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.header}>
                <TouchableOpacity onPress={exibirDrawer}>
                    <AntDesign name="menu-fold" size={29} color="white" />
                    </TouchableOpacity>
            </View>
	
            <ImageBackground source={require('../../../assets/Imagens/fundo2.jpg')} style={estiloInicial.fundo}>
	
                <TouchableOpacity onPress={abrirColecao}>
                     <ImageBackground source={require('../../../assets/Imagens/colecao.jpg')} style={estiloInicial.BotaoBackground}>
                    <Text style={estiloInicial.botaoTexto}>Coleção</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirAcessorios}>
                     <ImageBackground source={require('../../../assets/Imagens/item.png')} style={estiloInicial.BotaoBackground}>
                    <Text style={estiloInicial.botaoTexto}>Acessorios</Text>
                    </ImageBackground>
                </TouchableOpacity>
	
            </ImageBackground>
        </View>
    )
}		
export default Inicial;
