import { StyleSheet } from 'react-native';
	
const estiloAcessorios = StyleSheet.create({
   container: {   
    flex: 1,
},
header: {
    height: 40, 
    backgroundColor: "#0B785B",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
},
texto: {
    fontSize: 20,
    color: 'FFFFFF',
    fontWeight: 'bold',
}
});

export default estiloAcessorios;

