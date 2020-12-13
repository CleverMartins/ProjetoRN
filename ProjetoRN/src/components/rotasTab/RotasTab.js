import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import Colecao from '../../views/Colecao/Colecao';
import { Entypo } from '@expo/vector-icons';
import RotasDrawer from '../rotasDrawer/RotasDrawer';
import { LinearGradient } from 'expo-linear-gradient';
	
const Tab = createBottomTabNavigator();

    const icones = {
	    Inicial: { name: 'home' },
	    Colecao: { name: 'game-controller'},
	    Perfil: {name: 'user'},
	}
	
	const RotasTab = () => {
	  return (
	      
	    <Tab.Navigator 
	      tabBarOptions={
	      {
	        style: {backgroundColor: '#0B785B', borderTopColor: '#0B785B'},
	        activeTintColor: '#FFFFFF',
	        showLabel: false,
	        }
	      }
	          
	      screenOptions={ ({route}) => ({
	          tabBarIcon: ({color, size}) => {
	          const {name} = icones[route.name];
	          return <Entypo name={name} size={size} color={color} /> 
	          }
	        })
	      }
	    >
	    <Tab.Screen 
            name="Inicial" 
	        component={RotasDrawer}
	        options={{
	        unmountOnBlur: true,
	        }}
	      />
        <Tab.Screen name="Colecao" component={Colecao} />
        <Tab.Screen 
            name="Perfil" 
            component={RotasDrawer} 
	        options={{
	        unmountOnBlur: false,
	        }}
	      />
    </Tab.Navigator>
);
}
export default RotasTab;
