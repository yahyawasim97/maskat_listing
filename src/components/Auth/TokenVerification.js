import React,{Component} from 'react';
import {View,TextInput,Text} from 'react-native';
import { Label, Form, H2 ,Button} from 'native-base';
import {INPUT_UNDERLINE_COLOR} from '../../Theme/Colors';
import Timer from '../Common/Timer';

class TokenVerification extends Component{
    
    state={
        code:''
    }
    
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                <Form>
                    <H2 style={styles.headerText}>Enter Your 5 Digit Pin!</H2>
                    
                    <View style={styles.formStyle}>
                        <View style={styles.inputStyle}>
                            <TextInput
                            underlineColorAndroid={INPUT_UNDERLINE_COLOR}
                            keyboardType="numeric"
                            maxLength={1}
                            returnKeyType = { "next" }
                            onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            style={styles.inputTextStyle}
                            placeholder="X"
                            blurOnSubmit={false}
                            />
                        </View>
                        <View style={styles.inputStyle}>
                            <TextInput
                            placeholder="X"
                            underlineColorAndroid={INPUT_UNDERLINE_COLOR}
                            keyboardType="numeric"
                            maxLength={1}
                            style={styles.inputTextStyle}
                            returnKeyType = { "next" }
                            blurOnSubmit={false}
                            ref={(input) => { this.secondTextInput = input; }}
                            onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                            />
                        </View>
                        <View style={styles.inputStyle}>
                            <TextInput
                            placeholder="X"
                            underlineColorAndroid={INPUT_UNDERLINE_COLOR}
                            keyboardType="numeric"
                            maxLength={1}
                            returnKeyType = { "next" }
                            blurOnSubmit={false}
                            style={styles.inputTextStyle}
                            ref={(input) => { this.thirdTextInput = input; }}
                            onSubmitEditing={() => { this.fourthTextInput.focus(); }}

                            />
                        </View>
                        <View style={styles.inputStyle}>
                            <TextInput
                            placeholder="X"
                            underlineColorAndroid={INPUT_UNDERLINE_COLOR}
                            keyboardType="numeric"
                            maxLength={1}
                            style={styles.inputTextStyle}
                            returnKeyType = { "next" }
                            blurOnSubmit={false}
                            ref={(input) => { this.fourthTextInput = input; }}
                            onSubmitEditing={() => { this.fifthTextInput.focus(); }}
                            />
                        </View>
                        <View style={styles.inputStyle}>
                            <TextInput
                            placeholder="X"
                            underlineColorAndroid={INPUT_UNDERLINE_COLOR}
                            keyboardType="numeric"
                            maxLength={1}
                            style={styles.inputTextStyle}
                            ref={(input) => { this.fifthTextInput = input; }}
                            />
                        </View>
                    </View>
                    <Button rounded style={{width:'90%',alignSelf:'center',marginTop:'15%',justifyContent:'center',backgroundColor:'black',padding:30,margin:15,textAlign:'center'}}
                    >
                        <Text 
                        style={{fontSize:24,color:'white'}}>Next</Text>
                    </Button>
                </Form>
                </View>
                <View style={{flex:1,alignSelf:'center',marginTop:0}}>
                    <Timer/>
                </View>
            </View>
        );
    }
}

const styles={
    headerText:{
        textAlign:'center',
        padding:'15%'
    },
    formStyle:{
        flex:1,
        flexDirection:'row',
        width:'80%',
        alignSelf:"center"
    },
    inputStyle:{
        flex:1,
        alignContent:"space-between",
        minHeight:60
    },
    inputTextStyle:{
        textAlign: 'center',
        fontSize:24
    }
}
export default TokenVerification;