import React,{useContext, useEffect, useState} from 'react'
import {View,Image,Text,Button,TouchableOpacity, FlatList,StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements'
import {AuthContext} from '../config/Auth'
// import FormButton from '../config/formbutton'
import FormButton from '../components/formbutton'
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database'
// import { Card } from 'react-native-paper';

// const  Card=()=>{
//     return(

        
//         )
// }
function Home(props){
    const {user,logout}=useContext(AuthContext)
    const [post ,setPost]=useState(null)
    const [loading ,setloading]=useState(true)
    
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const list=[]
                await firestore()
                .collection('Products')
                .get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach(doc=>{
                        const {itemName,prise,postimg}=doc.data()
                        list.push({
                            prise:prise,
                            itemName:itemName,
                            postimg:postimg
                        })
                    })
                })
                setPost(list)
                if(loading)[
                    setloading(false)
                ]
                console.log('product',list)
            }catch(e){
                console.log(e)
            }
        }
        fetchData();

    },[])
    const Card=()=>{
        
    }
    return(
        <>
        <View >

        <TouchableOpacity style={{borderWidth:1,felx:1,top:4,flexDirection:'row',backgroundColor:'teal'}}>
        <View style={{marginLeft:20,flexDirection:'row',color:"white"}}>
            <TouchableOpacity onPress={()=>props.navigation.openDrawer()}> 
            <Icon size={29} style={{top:5}} color="white" name='menu' />
            </TouchableOpacity>
       
            <Text style={{fontSize:30,marginLeft:20,color:"white"}}>KHAPALBAZAR</Text>
            <TouchableOpacity onPress={()=>props.navigation.navigate('Search')}> 
            <Icon size={29} color="white" style={{top:7,marginLeft:15}} name='search' />
            </TouchableOpacity>
            </View>
      </TouchableOpacity>
          </View>
          {/* <Text>{user.Name}</Text> */}
          {/* <FormButton
            buttonTitle="Logout"
            onPress={()=>logout()} /> */}
           
          

          <FlatList
          style={{top:8,flexDirection:"row",flexWrap:"wrap",marginLeft:10,}}
          data={post}
          renderItem={({item})=>{
              return ( 
              <TouchableOpacity  style={{borderWidth:1,marginBottom:5,borderRadius:1}}>
              <Image
        source={{ uri:item.postimg }}
        style={ { width: 150, height: 100,} }
      />
              <Text style={{backgroundColor:"grey",color:"white"}}>Name:   {item.itemName}</Text>
              <Text > RS: {item.prise}</Text>
      
          </TouchableOpacity>
              )
          }
        }
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator={false}
          />
          </>

    )
}
const styles=StyleSheet.create({
    // container:{
    //     backgroundColor:"white",
    //     flex:1,
    //     justifyContent:"center",
    //     alignItems:"center",
    //     padding:20
    // },
    
    // text:{
    //     fontFamily:"kufan-SemiBoldItalic",
    //     fontSize:20,
    //     marginBottom:10,
    //     color:"black"
    // },
    // navButton:{
    //     marginTop:2,
        

    // },
    
    // navButtonText:{
    //     fontSize:18,
    //     fontWeight:'500',
    //     color:"white",
    //     fontFamily:"lato-regular"
    // },
    textPrivate:{
        flexDirection:"row",
        flexWrap:"wrap",
        marginVertical:35,
        justifyContent:"center"
    },
    color_textPrivate:{
        fontSize:14,
        fontWeight:"400",
        fontFamily:"Lato-regular",
        color:"grey"
    }

})

export default Home