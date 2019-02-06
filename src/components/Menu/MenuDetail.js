import React,{Component} from 'react';
import {View,Text,ActivityIndicator,TouchableOpacity,UIManager,LayoutAnimation,Linking,Platform}from 'react-native';
import {connect} from 'react-redux';
import {List,ListItem, Icon, Title} from 'native-base';
import { COLOR_PRIMARY, TEXT_DARK, TEXT_LIGHT } from '../../Theme/Colors';
import call from 'react-native-phone-call'

class MenuDetail extends Component{
    
    state={
        showTiming:false
    };
    componentWillUpdate(){
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }
    callMerchant=()=>{
        call({number:this.props.menuDetail.detail.phone})
    }
    navigate=()=>{
        if(Platform.OS==="android"){
            Linking.openURL(`google.navigation:q=${this.props.menuDetail.coordinates.latitude}+${this.props.menuDetail.coordinates.longitude}`);
        }else if(Platform.OS==="ios"){
            Linking.openURL(`maps://app?saddr=${this.state.lat}+${this.state.long}&daddr=${this.props.menuDetail.coordinates.latitude}+${this.props.menuDetail.coordinates.longitude}`)
        }
    }
    render(){
        console.log(this.props.menuDetail,'here')
        if(!this.props.menuDetail) return(
            <View style={{flex:1,justifyContent:'center'}}>
                <ActivityIndicator size="large"/>
            </View>
        )
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
            {this.props.menuDetail && (<List style={{paddingTop:10}}>
                <ListItem>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Icon name="location-pin" type="Entypo" onPress={this.navigate} style={{color:COLOR_PRIMARY}}/>
                    </View>
                    <View style={{flex:8}}>
                        <TouchableOpacity onPress={this.navigate}>
                        <Text style={{color:TEXT_DARK}}>Address</Text>
                        <Text style={{color:TEXT_LIGHT}}>{`${this.props.menuDetail.detail.address}, ${this.props.menuDetail.detail.city}`}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                        <Icon onPress={this.navigate}  name="ios-arrow-forward" type="Ionicons"  style={{color:COLOR_PRIMARY}}/>
                    </View>
                </View>
                </ListItem>
                <ListItem>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Icon name="phone" type="FontAwesome" onPress={this.callMerchant} style={{color:COLOR_PRIMARY}}/>
                    </View>
                    <View style={{flex:8}}>
                        <TouchableOpacity onPress={this.callMerchant}>
                        <Text style={{color:TEXT_DARK}}>Contact</Text>
                        <Text style={{color:TEXT_LIGHT}}>{this.props.menuDetail.detail.phone}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                        <Icon onPress={this.callMerchant} name="ios-arrow-forward" type="Ionicons"  style={{color:COLOR_PRIMARY}}/>
                    </View>
                </View>
                </ListItem>
                <ListItem>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Icon name="clock" type="FontAwesome5" style={{color:COLOR_PRIMARY}}
                        onPress={()=>this.setState({showTiming:!this.state.showTiming})}
                        />
                    </View>
                    <View style={{flex:8,justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>this.setState({showTiming:!this.state.showTiming})}>
                            <Text style={{color:TEXT_DARK}}>Timings</Text>
                        </TouchableOpacity>
                        <View style={{display:this.state.showTiming?'flex':'none'}}>
                        {this.props.menuDetail.timings &&this.props.menuDetail.timings.map((day)=>{
                            console.log(day)
                            if(day.timings.length>0){
                            return(
                                <View key={day.dayId} style={{flexDirection:'row'}}>
                                    
                                    <View style={{flex:1}}>
                                    <Text>{day.dayName}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                    <Text>{`${day.timings[0].timeStart} - ${day.timings[0].timeEnd}`}</Text>
                                    </View>
                                </View>
                            );
                        }})}
                        </View>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end',justifyContent:'flex-start'}}>
                        <Icon name={this.state.showTiming?'ios-arrow-up':'ios-arrow-down'} type="Ionicons"  style={{color:COLOR_PRIMARY}} onPress={()=>this.setState({showTiming:!this.state.showTiming})}/>
                    </View>
                </View>
                </ListItem>
            </List>)}
            </View>
        );
    }
    
}
const mapStateTopProps =state=>{
    return{
        menuDetail:state.listing.menuDetail,
        lat: state.auth.lat,
        long: state.auth.long,
    };
}
export default connect(mapStateTopProps)(MenuDetail);