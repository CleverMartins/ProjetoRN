import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';

const Lista = ({data}) => {

    const [item, setItem] = useState(data);

    return (
        <View style={estiloLista.areaItens}>

            <LinearGradient colors={['#0B785B', '#17FFC1', '#17FFC1']}>
                <Text style={estiloLista.itemTitulo}> {item.titulo} </Text>
            </LinearGradient>

            <LinearGradient colors={['#17FFC1', '#17FFC1', '#0B785B']}>
                <Text style={estiloLista.itemSubTitulo}> {item.criador} ({item.anoPublicado}) </Text>
                <Image  
                    style={estiloLista.itemFoto} 
                    source={item.foto} 
                    resizeMode='contain'
                    />
<       Text>-{item.descricao} </Text> 
            </LinearGradient>   
        </View>
    );
}

export default Lista;
