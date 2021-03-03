import { useLinkProps } from '@react-navigation/native'
import React from 'react'
import {View,TextInput,Button,TouchableOpacity,Text } from 'react-native'
import { Icon } from 'react-native-elements'

function Post(props){
    return(
        <>
        <TouchableOpacity style={{borderWidth:2,top:6,flexDirection:'row',backgroundColor:'teal'}}>
        <View style={{textAlign:'center',marginRight:80,flexDirection:'row',color:"white"}}>


        <Icon name="arrow-left" type="fontawesome" color="white" size={35}onPress={() => props.navigation.navigate("Home")} />
        <Text style={{fontSize:30,marginLeft:80,color:"white"}}>Post</Text>
          </View>
      </TouchableOpacity>
      <TextInput type="file" placeholder="Browser"/>
      </>
    )
}
export default Post