import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {Title, Icon, Item, H2} from 'native-base';
import {TEXT_LIGHT,TEXT_DARK, COLOR_PRIMARY} from '../../Theme/Colors';
import { Actions } from 'react-native-router-flux';

const MenuItem=({item,handlePress})=>{
    return(
        <TouchableOpacity style={{flex:1}} onPress={()=>{handlePress(item)}}>
            <View style={styles.cardStyle}>
                <View style={{flex:1}}>
                    <Image source={{uri:item.imageUri}} resizeMode="cover" style={{marginLeft:-30,height:150,width:175,borderRadius:10}}/>
                    {item.offer && item.offer.title && (<View style={{backgroundColor:COLOR_PRIMARY,borderTopLeftRadius:10,marginLeft:-30,borderBottomRightRadius:10,position:'absolute',right:0,marginRight:20,bottom:0,padding:10}}>
                        <Text style={{color:'white'}}>{item.offer && item.offer.title}</Text>
                    </View>)}
                </View>
                <View style={{flex:1}}>
                    <Image source={{uri:item.logoUri}} style={styles.iconStyle}/>
                    <View style={{flex:1}}>
                    <Text style={{color:TEXT_DARK,textAlign:'left',fontSize:16,fontFamily:'Montserrat-SemiBold'}}>{item.title}</Text>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{color:TEXT_LIGHT,fontSize:11}}>{item.category.title}</Text>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                    
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star-outline" style={{color:COLOR_PRIMARY,fontSize:20}}/>
                        <Icon name="star-outline" style={{color:COLOR_PRIMARY,fontSize:20}}/>
                    
                </View>
                <View style={{flex:1}}>
                <Text>{item.coordinates.distance? `${item.coordinates.distance} KM` :''}</Text>
                </View>
                </View>
            </View>
            
        </TouchableOpacity>
    );
}

const styles={
    cardStyle:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white', 
        color:TEXT_DARK,
        padding:10,
        paddingRight:0,
        marginBottom:15,
        marginHorizontal:20,
        marginLeft:40,
        borderRadius:10,
        elevation:4,
        shadowOpacity:0.2,
        shadowOffset:{width:5,height:5}
    },
    iconStyle:{
        height:60,
        width:60,
        borderRadius:10
    },
    cardContentStyle:{
        flex:3,
        justifyContent:'center',
        marginLeft:40
    },
    offerTitleStyle:{
        flex:2,
        backgroundColor:COLOR_PRIMARY,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:5 
    }
}
export default MenuItem;