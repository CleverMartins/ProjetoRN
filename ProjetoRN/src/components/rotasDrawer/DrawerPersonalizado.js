import React from 'react';
import { Text, View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import estiloRotasDrawer from './estiloRotasDrawer';
import { MaterialIcons } from '@expo/vector-icons';

function DrawerPersonalizado(props) {
    return (
        <DrawerContentScrollView {...props}>

            <View style={estiloRotasDrawer.fotoContainer}>
                <Image
                style={estiloRotasDrawer.foto}
                source={require('../../../assets/Imagens/foto.jpg')}
                />

                <View style={estiloRotasDrawer.logo}>
                <MaterialIcons name="edit" size={20} color="black" />
                </View>

                <Text style={estiloRotasDrawer.nome}> Hasquermen </Text>
                </View>
            <DrawerItemList {...props}/>

        </DrawerContentScrollView>

    );
}
export default DrawerPersonalizado;
