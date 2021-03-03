import React, {createContext,useState,Children } from 'react'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
export const AuthContext=createContext();
 const AuthProvider=({children})=>{
    const[user,setUser]=useState()
    const[name,setName]=useState()
    return(
        <AuthContext.Provider
            value={{
                user,
                setUser,
                name,
                setName,
                login:async(email,password)=>{
                    try{
                      await  auth().signInWithEmailAndPassword(email,password)
                    } catch(e){
                        console.log(e);
                    }
                },
                 register:async(email,password,Name)=>{
                    try{
                        await auth().createUserWithEmailAndPassword(email, password);
                        await database().ref('user').child('UserName').push(Name)
                    }catch(e){
                        console.log(e)

                    }
                },
                logout:async()=>{
                    try{
                        await auth().signOut();
                    }catch(e){
                        console.log(e)
                    }
                }

            }}
            >
                {children}
            

            

        </AuthContext.Provider>
    )
}
export default AuthProvider