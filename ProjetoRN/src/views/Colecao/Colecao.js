import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Colecao({ navigation }) {

        const [colecao, setColecao] = useState( [
            {
                id: '1',
                titulo: 'Uncharted 4: A Thief s End',
                descricao: 'É um jogo eletrônico de ação-aventura.',
                criador: 'Desenvolvido pela Naughty Dog,',
                anoPublicado: '2016',
                foto: require('../../../assets/itens/1.jpg'),
            },
            {
                id: '2',
                titulo: 'Rocket League',
                descricao: 'É um jogo eletrônico de futebol veicular.',
                criador: 'Desenvolvido e publicado pela Psyonix,',
                anoPublicado: '2015',
                foto:  require('../../../assets/itens/2.jpg'),
            },
            {
                id: '3',
                titulo: 'The Last of Us Part II',
                descricao: 'É um jogo eletrônico de ação-aventura.',
                criador: 'Desenvolvido pela Naughty Dog,',
                anoPublicado: '2020',
                foto:  require('../../../assets/itens/3.jpg'),
            },
            {
                id: '4',
                titulo: 'Call of Duty: Modern Warfare',
                descricao: 'É um jogo eletrônico de tiro em primeira pessoa.',
                criador: 'Produzido pela Infinity Ward,',
                anoPublicado: '2019',
                foto:  require('../../../assets/itens/4.jpg'),
            }
        ]);

    const voltar = () => {
        navigation.navigate('Inicial') 
    }
    
    return ( 
        <View style={estiloColecao.container}>

            <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloColecao.texto}>Coleção</Text>
                <MaterialIcons name="add" size={24} color="white" />
            </View>

        <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={colecao}
            renderItem={ ({item}) => <Lista data={item} />}
            />
        </View>
    )
}

export default Colecao;

