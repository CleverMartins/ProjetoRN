import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Inicial from '../../views/Inicial/Inicial';
import Colecao from '../../views/Colecao/Colecao';
import Acessorios from '../../views/Acessorios/Acessorios';
import Perfil from '../../views/Perfil/Perfil';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import DrawerPersonalizado from "./DrawerPersonalizado";

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
  return (
    <Drawer.Navigator
        drawerContent={DrawerPersonalizado}
    >
      <Drawer.Screen 
      name="Inicial" 
      component={Inicial}
      options={{
          drawerIcon: ({color, size}) => (
             <FontAwesome name="home" size={size} color={color} />
          )
  }}
      />
      <Drawer.Screen 
      name="Colecao" 
      component={Colecao}
      options={{
          drawerIcon: ({color, size}) => (
              <MaterialIcons name="games" size={size} color={color} />
          )
      }}
      />

      <Drawer.Screen 
      name="Acessorios" 
      component={Acessorios}
            options={{
          drawerIcon: ({color, size}) => (
              <Entypo name="game-controller" size={size} color={color} />
          )
      }}
      />

      <Drawer.Screen 
      name="Perfil" 
      component={Perfil}
            options={{
          drawerIcon: ({color, size}) => (
              <Entypo name="user" size={size} color={color} />
          )
      }}
      />
    </Drawer.Navigator>
  );
}

export default RotasDrawer;
