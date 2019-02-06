import React from 'react';
import {View,Text,Image,Dimensions,TouchableWithoutFeedback} from 'react-native';
import {Container,Header,Left,Icon,Body, Title,Item,Input} from 'native-base';
import { COLOR_PRIMARY, TEXT_LIGHT } from '../../Theme/Colors';
import  IconFilter from '../../assets/icons/Icon_Filter.png';
import { Actions } from 'react-native-router-flux';

const HEIGHT = Dimensions.get('window').height;

const HeaderApp =({title,inStack,category,onSearch})=>{
    return(
        
            <View style={[styles.headerStyle,{height:!category?HEIGHT*0.15:HEIGHT*0.075}]}>
                <View style={{flex:1,flexDirection:'row'}}>
                    {inStack?<View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                        <TouchableWithoutFeedback  onPress={()=>{Actions.pop()}}><Icon name="ios-arrow-back" style={{color:'white',paddingLeft:20}} /></TouchableWithoutFeedback>
                    </View>:<View style={{flex:1,justifyContent:'center'}}>
                        <TouchableWithoutFeedback  onPress={()=>{Actions.drawerOpen()}}><Image source={IconFilter} style={styles.iconStyle} /></TouchableWithoutFeedback>
                    </View>
                    
                }
                    <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                        <Title style={{fontFamily:'Montserrat-Bold',textAlign:'center'}}>{title?title:'Restaurant Listing'}</Title>
                    </View>
                    <View style={{flex:1}}/>
                </View>
                {!category && (<View style={{flex:1}}>
                    <View style={styles.searchViewStyle}>
                        <Item style={styles.inputBorderStyle}>
                            <Input onChangeText={(text)=>{onSearch(text)}} placeholder='Search' style={styles.inputStyle}/>
                            <Icon  name='search' style={{color:TEXT_LIGHT}} />
                        </Item>
                    </View>
                </View>)}
            </View>
        
    );
}

const styles ={
    headerStyle:{
        backgroundColor:COLOR_PRIMARY
    },
    iconStyle:{
        height:20,
        width:20,
        marginLeft:10,
        padding:10,
        paddingHorizontal:12
    },
    inputBorderStyle:{
        backgroundColor:'white',
        height:'80%',
        borderRadius:10
    },
    searchViewStyle:{
        width:'80%',
        alignSelf:'center',
        justifyContent:'center'
    },
    inputStyle:{
        paddingLeft:20,
        fontSize:12
    }
}
export default HeaderApp;