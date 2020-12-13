import { StyleSheet } from 'react-native';
	
const estiloPerfil = StyleSheet.create({
container: {   
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',     
},
header: {
    height: 60,
    width: '100%',
    backgroundColor: '#0B785B',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
},
fundo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '100%'
},
fotoContainer: {
    width: 'center',
    height: 500,
},
foto: {
    width: 100,
    height:100,
    borderRadius: 50,
},
logo:{
    height: 9,
    left: '80%',
    top: -10,
},
nome: {
    color: '#000000',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 25,
},
texto: {
    width: 'center',
    height: 'center',
},
});
export default estiloPerfil;
