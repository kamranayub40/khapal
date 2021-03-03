import React from 'react'
import {View,Text,StyleSheet,useContext} from 'react-native'
import {DrawerItem, DrawerNavigationItem} from '@react-navigation/drawer'
// import Navigation from './Navigation'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import { Avatar, Drawer } from 'react-native-paper';
// import { Icon } from 'react-native-vector-icons/Icon';
import { Icon } from 'react-native-elements'
// import {AuthContext} from '../config/Auth'


function Sidebar(props){
    // const {user,logout}=useContext(AuthContext)

    return(
<>
        <DrawerContentScrollView {...props}>
            <View>
            {/* <Avatar.Image size={100} style={{marginLeft:30}} source={require('../config/avtar.png')} /> */}
            <Text style={{color:"blue",marginLeft:30}}>KAMRAN AYOUB</Text>
            </View>
           
           <DrawerItemList {...props}/>

        </DrawerContentScrollView> 
        {/* <Drawer.Section style={{marginTop:60}}>
            <DrawerItem 
            icon={({color,size})=>(
                <Icon
                name="home"
                color="black"
                size={24}
                
                />
            )}
            label="Home"
            
            
            
            >

            </DrawerItem>

        </Drawer.Section> */}
        <Drawer.Section >
            <DrawerItem 
            icon={({color,size})=>(
                <Icon
                name="exit-to-app"
                color="black"
                size={24}
                
                />
            )}
            label="sign Out"
        onPress={()=>alert("Clicked")} 
            
            
            
            >

            </DrawerItem>

        </Drawer.Section>
</>
    )

   
    
}
const styles=StyleSheet.create({
    DrawerSection:{
        marginTop:15,
        
    },
    bottomDrawer:{
        marginBottom:15,
        
    },
})
export default Sidebar