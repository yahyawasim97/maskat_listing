import React from 'react';
import {View,Text,ScrollView,Image}from 'react-native';
import { TEXT_DARK,COLOR_PRIMARY, TEXT_LIGHT } from '../../Theme/Colors';
import {Icon} from 'native-base';

const MenuReview =()=>{
    return(
        <ScrollView style={{flex:1,marginTop:10,backgroundColor:'white'}}>
            <View style={{flex:1,paddingHorizontal:25,paddingVertical:20}}>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Image style={styles.iconStyle} source={{uri:'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'}}/>
                </View>
                <View style={{flex:4,alignContent:'center'}}>
                    <View style={{flex:1,justifyContent:'flex-end'}}>
                    <Text style={{color:TEXT_DARK,fontSize:18}}>Abdul Shah</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',alignItems:'flex-start'}}>
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star-outline" style={{color:COLOR_PRIMARY,fontSize:20}}/>
                        <Icon name="star-outline" style={{color:COLOR_PRIMARY,fontSize:20}}/>
                    </View>
                </View>
                
            </View>
            <View style={{flex:1,paddingTop:10}}>
                <Text style={{color:TEXT_LIGHT}}>A Very Good Restaurant with perfect service, quality and price. Would visit again!</Text>
                </View>
            </View>
            




            <View style={{flex:1,paddingHorizontal:25,paddingVertical:20}}>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Image style={styles.iconStyle} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5s9k57Nd5TlClPRU_13nimqHCnt0J68q51T9aSz884X0raGi'}}/>
                </View>
                <View style={{flex:4,alignContent:'center'}}>
                    <View style={{flex:1,justifyContent:'flex-end'}}>
                    <Text style={{color:TEXT_DARK,fontSize:18}}>Hadiqa Khan</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',alignItems:'flex-start'}}>
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star-outline" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star-outline" style={{color:COLOR_PRIMARY,fontSize:20}}/>
                        <Icon name="star-outline" style={{color:COLOR_PRIMARY,fontSize:20}}/>
                    </View>
                </View>
                
            </View>
            <View style={{flex:1,paddingTop:10}}>
                <Text style={{color:TEXT_LIGHT}}>Quality is good but service is not that good!</Text>
                </View>
            </View>







            <View style={{flex:1,paddingHorizontal:25,paddingVertical:20}}>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Image style={styles.iconStyle} source={{uri:'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'}}/>
                </View>
                <View style={{flex:4,alignContent:'center'}}>
                    <View style={{flex:1,justifyContent:'flex-end'}}>
                    <Text style={{color:TEXT_DARK,fontSize:18}}>Abdul Shah</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',alignItems:'flex-start'}}>
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star-outline" style={{color:COLOR_PRIMARY,fontSize:20}}/>
                        <Icon name="star-outline" style={{color:COLOR_PRIMARY,fontSize:20}}/>
                    </View>
                </View>
                
            </View>
            <View style={{flex:1,paddingTop:10}}>
                <Text style={{color:TEXT_LIGHT}}>A Very Good Restaurant with perfect service, quality and price. Would visit again!</Text>
                </View>
            </View>





            <View style={{flex:1,paddingLeft:25,paddingRight:15,paddingVertical:20}}>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Image style={styles.iconStyle} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5s9k57Nd5TlClPRU_13nimqHCnt0J68q51T9aSz884X0raGi'}}/>
                </View>
                <View style={{flex:4,alignContent:'center'}}>
                    <View style={{flex:1,justifyContent:'flex-end'}}>
                    <Text style={{color:TEXT_DARK,fontSize:18}}>Hadiqa Khan</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',alignItems:'flex-start'}}>
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star-outline" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star-outline" style={{color:COLOR_PRIMARY,fontSize:20}}/>
                        <Icon name="star-outline" style={{color:COLOR_PRIMARY,fontSize:20}}/>
                    </View>
                </View>
                
            </View>
            <View style={{flex:1,paddingTop:10}}>
                <Text style={{color:TEXT_LIGHT}}>Quality is good enough but service is not that good!</Text>
                </View>
            </View>
            
        </ScrollView>
    )
}
const styles={
    iconStyle:{
        height:60,
        width:60,
        borderRadius:50
    }
}
export default MenuReview;