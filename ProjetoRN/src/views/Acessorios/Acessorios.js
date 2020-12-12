import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloAcessorios from './estiloAcessorios';

function Acessorios({ navigation }) {

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloAcessorios.container}>
            <View style={estiloAcessorios.borda}>

                <Text style={estiloAcessorios.texto}>Item</Text>

                <TouchableOpacity style={estiloAcessorios.botaoContainer} onPress={voltar}>
                    <Text style={estiloAcessorios.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default estiloAcessorios;