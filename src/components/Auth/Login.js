import React,{Component} from 'react';
import {View,Image,TextInput,BackHandler,Keyboard,ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import {connect} from 'react-redux';
import {Button,  Input, Item,Label, H1, H2,Icon,Form,Title, H3,Text} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { memberExists,saveLocation } from '../../actions/AuthActions';
import {COLOR_PRIMARY,BUTTON_TEXT,INPUT_UNDERLINE_COLOR} from '../../Theme/Colors'

class Login extends Component{
    state={
        onInput:false,
        visitorLogin:false,
        userNumber:'',
        error:false
    }
    componentWillMount(){
        Keyboard.addListener('keyboardDidHide',this.toggleButtonHide)
        Keyboard.addListener('keyboardDidShow',this.toggleButtonShow)
    }
    componentWillUnmount(){
        Keyboard.removeAllListeners('keyboardDidHide','keyboardDidShow');
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
        (position) => {
            this.props.saveLocation(position.coords.latitude,position.coords.longitude)
        });
    }
    componentWillReceiveProps(props){
        if(props.memberAuthorized && props.memberVerified){
            Actions.verification();
        }
    }
    toggleButtonHide=()=>{
        this.setState({
            onInput: false,
            visitorLogin:false
            
        })
    }

    toggleButtonShow=()=>{
        this.setState({
            onInput: true,
            error:false
        })
    }

    onBackPress=()=>{
        this.setState({
            visitorLogin:true
        })
    }
    renderButton(){
        if(this.state.visitorLogin){
            return(
                <H2
                onPress={()=>Actions.drawer()} 
                style={{fontWeight:'800',color:'black',textAlign:'center',color:COLOR_PRIMARY,marginTop:30}}>Skip for now</H2>
            );
        }else{
        return(
            <Button block style={{backgroundColor:COLOR_PRIMARY,marginTop:20,borderRadius:10}} 
            onPress={this.handleSubmit}
            >
                <Text style={{color:BUTTON_TEXT,display:this.props.loading?'none':'flex'}}>Next</Text>
                {this.props.loading && (<ActivityIndicator animating={this.props.loading} size="large"    />)}
            </Button>
        );
        }
    }

    handleSubmit=()=>{
        var regex = new RegExp("^[0-9]{10}$");
            
        if(!regex.test(this.state.userNumber)){
            this.setState({error:true,userNumber:''})  
        }else{
            this.props.memberExists(this.state.userNumber);
        }
    }

    render(){
        const {userNumber,error,visitorLogin} = this.state;
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={{flex:1,top:10,position:'absolute',zIndex:1,left:5,elevation:5}}>
                    <Button  
                    
                    transparent
                    onPress={this.onBackPress}
                    style={{display:visitorLogin?'none':'flex'}}
                    ><Icon name="arrow-back" style={{fontSize:30,color:'white',shadowOffset: { width: 50, height: 50 },
                    shadowColor: 'black',
                    shadowOpacity: 9,
                    elevation: 20}}
                
                    /></Button>
                </View> 
                <View style={{flex:2}}>
                   

                </View>              
                <View style={{flex:1,marginHorizontal:30,alignContent:'center',justifyContent:'center'}}>
                  
                        <H1 style={{fontWeight:'bold',color:COLOR_PRIMARY,textAlign:'center'}} >Login</H1>
                    
                        <Form>
                            <Item  floatingLabel >
                                <Label style={{textAlign:'center'}}>Phone Number</Label>
                            <Input
                                onChangeText={userNumber=>this.setState({userNumber})}
                                maxLength={10}
                                keyboardType="numeric"
                                onSubmitEditing={this.handleSubmit}
                                style={{textAlign:'center'}}
                            />
                            {this.state.error && (<Icon name="exclamation-triangle" type="FontAwesome" style={{color:"red"}}/>)}
                            
                            </Item>
                            {this.state.error && (<Text style={{color:"red",textAlign:'center'}}>Please enter a valid number!</Text>)}
                            <View style={{display:this.state.onInput?'none':'flex',alignContent:'center',justifyContent:'center'}}>
                                {this.renderButton()}
                            </View>
                        </Form>
                    </View>
                </View>
        )
    }
}

const mapStateToProps= state=>{
    return{
        memberAuthorized : state.auth.memberAuthorized,
        memberVerified: state.auth.memberVerified,
        loading: state.auth.loading
    }
}
export default connect(mapStateToProps,{memberExists,saveLocation})(Login);