import React,{Component} from 'react';
import {View,Text,Dimensions,Image,ImageBackground,ActivityIndicator,Linking} from 'react-native';
import { Icon } from 'native-base';
import { COLOR_PRIMARY ,TEXT_DARK,TEXT_LIGHT} from '../../Theme/Colors';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import {menuDetail} from '../../services/menu.services';
import {itemDetail} from '../../actions/ListingActions';


const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;


class HeaderDetail extends Component{

    state={loading:true,data:null}

    componentDidMount(){
        menuDetail(this.props.selectedMenu.iD)
        .then((response)=>{this.setState({data:response.data.data,loading:false},()=>{
            console.log(this.state.data,'state')
             this.props.itemDetail(this.state.data)
        })})
        .catch((err)=>{console.log(err)})   
    }
    render(){
    return(
        
        <View style={{height:HEIGHT*0.3,backgroundColor:'black',justifyContent:'center'}}>
            {this.state.data && (<View style={{flex:1}}>
            <ImageBackground source={{uri:this.state.data.websiteImageUri}} style={styles.backgroundImage} />
            <Icon name="arrow-back"  onPress={()=>{Actions.pop()}} style={{fontSize:30,color:'white',shadowOffset: { width: 50, height: 50 },
                position:'absolute',
                top:10,
                left:10,
                elevation: 20}}/>
            <View style={{position:'absolute',flex:1,width:WIDTH,flexDirection:'row',alignContent:'center',paddingHorizontal:20,height:HEIGHT*0.15,bottom:HEIGHT*0.04,zIndex:10}}>
            <View style={{flex:2,justifyContent:'center'}}>
                <Image source={{uri:this.state.data.logoUri}} style={styles.iconStyle} />
            </View>
            <View style={styles.cardContentStyle}>
                <View style={{flex:2,justifyContent:'flex-end'}}>
                    <Text style={{color:'white',textAlign:'left',fontSize:16,fontFamily:'Montserrat-SemiBold'}}>{this.state.data.title}</Text>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{color:'white',fontSize:12}}>{this.state.data.category.title}</Text>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                    
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star" style={{color:COLOR_PRIMARY,fontSize:20}} />
                        <Icon name="star-outline" style={{color:COLOR_PRIMARY,fontSize:20}}/>
                        <Icon name="star-outline" style={{color:COLOR_PRIMARY,fontSize:20}}/>
                    
                </View>
                <View style={{flex:1}}>
                <Text style={{color:'white',fontSize:12}}>0.3 Km</Text>
                </View>

            </View>
            <View style={{flex:3,justifyContent:'flex-end',height:'60%',alignSelf:'center'}}>
            <View style={{flex:2,backgroundColor:'white',justifyContent:'center',borderTopLeftRadius:10,borderTopRightRadius:10}}>
            <Text style={{color:COLOR_PRIMARY,textAlign:'center',fontSize:25}}>4.6<Text style={{fontSize:14}}>/5</Text></Text>
            </View>
            <View style={{flex:1,backgroundColor:COLOR_PRIMARY,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
            <Text style={{color:'white',textAlign:'center'}}>6 Reviews</Text>
            </View>    
            </View>
            

            </View>
            </View>)}
        </View>
    )}
}
let styles = {
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      opacity:0.3
    },
    iconStyle:{
        height:80,
        width:80,
        borderRadius:50
    },
    cardContentStyle:{
        flex:7,
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
};
const mapStateToProps=state=>{
    return{
        selectedMenu: state.listing.selectedMenu
    };
}
export default connect(mapStateToProps,{itemDetail})(HeaderDetail);