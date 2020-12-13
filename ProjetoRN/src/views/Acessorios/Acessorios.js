import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estiloAcessorios from './estiloAcessorios';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Acessorios({ navigation }) {

        const [acessorios, setAcessorios] = useState( [
            {
                id: '1',
                titulo: 'Headset sem fio PS5 PULSE 3D',
                descricao: 'Preço: R$ 539,00',
                criador: 'Produzido por Sony Interactive Entertainment',
                anoPublicado: '8 de jan. 2020',
                foto: require('../../../assets/acessorios/1.jpg'),
            },
            {
                id: '2',
                titulo: 'Playstation 5 Ps5',
                descricao: '/preço: R$ 2.962,25',
                criador: 'Produzido por Sony Interactive Entertainment',
                anoPublicado: '19 de nov. 2020',
                foto:  require('../../../assets/acessorios/2.jpg'),
            },
            {
                id: '3',
                titulo: 'Câmera HD - PlayStation 5',
                descricao: 'Preço: R$ 419,00 ',
                criador: 'Produzido por Sony Interactive Entertainment',
                anoPublicado: '19 de nov. 2020',
                foto:  require('../../../assets/acessorios/3.jpg'),
            },
            {
                id: '4',
                titulo: 'Controle de Mídia PS5 - CFI-ZMR1',
                descricao: 'Preço: R$ 199,89',
                criador: 'Produzido por Sony Interactive Entertainment',
                anoPublicado: '19 de nov. 2020',
                foto:  require('../../../assets/acessorios/4.jpg'),
            }
        ]);

    const voltar = () => {
        navigation.navigate('Inicial') 
    }
    
    return ( 
        <View style={estiloAcessorios.container}>

            <View style={estiloAcessorios.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloAcessorios.texto}>Acessórios</Text>
                <MaterialIcons name="add" size={24} color="white" />
            </View>

        <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={acessorios}
            renderItem={ ({item}) => <Lista data={item} />}
            />
        </View>
    )
}

export default Acessorios;

