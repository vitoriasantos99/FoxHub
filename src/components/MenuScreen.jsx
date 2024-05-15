import { Button } from "@rneui/base";
import React from "react";
import { Image, Pressable, Text, TextInput, View, StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';



export default props => {

    return(

        <View style={{alignItems:"center"}}>

            <Pressable style={{flexDirection:"row",marginRight:250}}>
                <Text style={estilo.titulo}>FOX</Text>
                    <Text style={estilo.titulo2}>HUB</Text>
            </Pressable>
                
            
            <Pressable style={estilo.alinhamentoText}>
                <Text style={estilo.fonteG}>Welcome Back,</Text>
                    <Text>Sing up continue</Text>
            </Pressable>

            <Pressable style={estilo.containerAlinhamento}>
                <Icon name="person-outline" size={20} color="#B3C8CF"/>
                    <TextInput
                    //autoFocus
                    label = "name"
                    maxLength={50}
                    placeholder="Name"
                    keyboardType="name-phone-pad"
                    margin={7}
                    />
            </Pressable>

            <Pressable style={estilo.containerAlinhamento}>
                <Icon name="mail-outline" size={20} color="#B3C8CF"/>
                    <TextInput
                    label = "email"
                    maxLength={100}
                    placeholder="Email"
                    keyboardType="email-address"
                    margin={7}
                    />
            </Pressable>

            <Pressable style={estilo.containerAlinhamento}>
                <Icon name="lock-closed-outline" size={20} color="#B3C8CF"/>
                    <TextInput
                    label = "password"
                    maxLength={12}
                    placeholder="Password"
                    keyboardType="name-phone-pad"
                    margin={7}
                    />
            </Pressable>

            <Pressable style={estilo.btn}>
                <Text style={estilo.textBtn}>Sign Up</Text>
            </Pressable>

            <View>
                <Text style={estilo.textOR}>OR</Text>
            </View>
            
            <Pressable style={estilo.containerFlexRow}>

                <Pressable style={estilo.containerAlinhamentoIcone}>
                    <Text style={estilo.textBtnRedes}>Sign up with</Text>
                        <Image source={require('../images/facebook.png')} style={estilo.img}/>
                </Pressable>

                <Pressable  style={estilo.containerAlinhamentoIcone}>
                    <Text style={estilo.textBtnRedes}>Sign up with</Text>
                        <Image source={require('../images/google.png')} style={estilo.img}/>
                </Pressable>

            </Pressable>

            <Pressable style={{flexDirection:"row"}} onPress={()=> props.navigation.navigate('Home')}>
                <Text style={estilo.textRodape}>Don't have an account ? </Text>
                    <Text style={estilo.textRodape2}>Sing in</Text>
            </Pressable>

        </View>
    )
}

const estilo = StyleSheet.create({

    titulo:{
        marginTop: 40,
        fontSize:35,
        color:"black",
        fontFamily:"Pixelify Sans",
        fontWeight:"bold",
    },
    titulo2:{
        marginTop:40,
        fontSize:35,
        color:"#80ADCA",
        fontFamily:"Pixelify Sans",
        fontWeight: "bold",
    },
    alinhamentoText:{
        justifyContent:"center",
        alignContent:"center",
        marginTop:70,
        marginRight:165,
    },
    fonteG:{
        fontSize:30,
        color:"black",
        fontFamily:"Anton",
        fontWeight: "bold",
    },
    img:{
        width:25,
        height:25,
    },
    btn:{
        width:350,
        height:50,
        backgroundColor:"#283B8F",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        marginTop:70,
        
    },
    textBtn:{
        color:"#FFF",
        fontFamily:"Pixelify Sans",
        fontWeight:"bold",
        fontSize:15
    },  
    textOR:{
        color:"black",
        fontFamily:"Pixelify Sans",
        fontWeight:"bold",
        fontSize:15,
        textAlign:"center",
        margin:20
    },
    containerFlexRow:{
        flexDirection:"row",
    
    },
    containerAlinhamentoIcone:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        borderColor:"black",
        borderWidth:1,
        width:160,
        height:50,
        margin:25
    },
    textBtnRedes:{
        color:"black",
        fontSize:16,
        fontFamily:"Pixelify Sans",
        fontWeight:"bold",
        margin:10
    },
    textRodape:{
        color:"#B3C8CF",
        fontSize:16,
        fontFamily:"Pixelify Sans",
        fontWeight:"bold",

    },
    textRodape2:{
        color:"#283B8F",
        fontSize:16,
        fontFamily:"Pixelify Sans",
        fontWeight:"bold",

    },
    containerAlinhamentoText:{
        flexDirection:"row",
        justifyContent:"space-around",
        margin:35 , 
    },
    containerAlinhamento:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,    
        borderColor:"#B3C8CF",
        height:50,
        width:400,
        marginTop:15
    },


})