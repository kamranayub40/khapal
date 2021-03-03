import React, { useContext } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator,drawerLabel } from '@react-navigation/drawer';
// import Sidebar from '../components/sidebar'
// import Sidebar from '../components/sidebar'
// import Sidebar from '../components/Sidebar'
import Sidebar from '../components/Sidebar'
// import {AuthContext} from './Auth'
import Home from '../components/Home'
// import { Icon } from 'react-native-vector-icons/Icon';
import { Icon } from 'react-native-elements'
import { color } from 'react-native-reanimated';
// import Product from '../components/product'
import Product from '../components/product'
// const Stack=createStackNavigator()
const Drawer = createDrawerNavigator();
const navigationhandel=()=>({
  
  headerShown: false
}
)
const AppStack=()=>{
  // const {logout}=useContext(AuthContext)
  // const {user}=useContext(AuthContext)

    return(

    // <Stack.Navigator>
    //     <Stack.Screen options={navigationhandel} name="Home" component={Home}/>
    // </Stack.Navigator>
    <Drawer.Navigator drawerContent={props=><Sidebar {...props}/>}>
         
       
    <Drawer.Screen name="Home" options={{drawerLabel:"HOME", drawerIcon: ({ name, size,color }) => (
    <Icon name="home" color="black" size={24}
    />)}} component={Home}  />
    
    <Drawer.Screen name="Product" component={Product}  />

    
   






  </Drawer.Navigator>
    )

}
export default AppStack  