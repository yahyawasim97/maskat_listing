import React from 'react';
import {View,Image,Text} from 'react-native';
import {List,ListItem, Icon} from 'native-base';
import {COLOR_PRIMARY, TEXT_DARK} from '../../Theme/Colors';
import Profile from '../../assets/images/profile.jpg';

const Sidebar =()=>{
    return(
        <React.Fragment>
            <View style={{flex:3,backgroundColor:COLOR_PRIMARY,justifyContent:'center',alignContent:'center'}}>
                <Image source={Profile} style={{borderRadius:125, height:125,width:125,alignSelf:'center'}}/>
                <Text style={{fontSize:20, paddingTop:10,color:TEXT_DARK,textAlign:'center',fontFamily:'Montserrat-SemiBold'}}>Hi James!</Text>
            </View>
            <View style={{flex:3}}>                
                <ListItem>
                    <Icon name="person" type="MaterialIcons"/>
                    <Text style={{paddingLeft:10,textAlign:'center',fontSize:15,color:'black'}}>Profile</Text>
                </ListItem>
            </View>
            <View style={{flex:3,justifyContent:'flex-end'}}>
               
                <ListItem > 
                    <Icon name="poweroff" type="AntDesign"/>
                    <Text style={{paddingLeft:10,textAlign:'center',fontSize:15,color:'black'}}>Logout</Text>
                </ListItem>
            </View>
                
        </React.Fragment>
    );

}
export default Sidebar;