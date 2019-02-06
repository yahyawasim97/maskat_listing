import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import { TEXT_DARK } from '../../Theme/Colors';

const CategoryItem =({item,handlePress})=>{

    return(
        <TouchableOpacity
            style={{flex:1}}
            onPress={()=>{handlePress(item)}}
        >
        <View style={{flex:1,
            backgroundColor:'white', 
            color:'black',
            borderRadius:10,
            paddingBottom:10,
            marginLeft:10,
            marginBottom:10,
            elevation:4,
            shadowOpacity:0.2,
            shadowOffset:{width:5,height:5}}}
            
            >
            <View style={{flex:10}}>
                <Image source={{uri:item.iconUri}} style={{width:'100%',height:'100%',borderTopRightRadius:10,borderTopLeftRadius:10}}/>
            </View>
            <View style={{flex:2,alignContent:'center',justifyContent:'center',padding:10,paddingBottom:0,color:TEXT_DARK}}>
                <Text>{item.title}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
}
export default CategoryItem;