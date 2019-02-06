import React,{Component} from 'react';
import {View,Text,ActivityIndicator,SectionList,ScrollView}from 'react-native';
import {connect} from 'react-redux';
import { COLOR_PRIMARY, TEXT_DARK, TEXT_LIGHT } from '../../Theme/Colors';
import { Item } from 'native-base';

class MenuItemList extends Component{
    state={
        formattedArray:[]
    };

    render(){
    if(!this.props.menuDetail) return(
        <View style={{flex:1,justifyContent:'center'}}>
            <ActivityIndicator size="large"/>
        </View>
    )
    else if(this.props.menuDetail.priceList===null){
        return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>No Menu Found!</Text>
        </View>)
    }
    return(
        <ScrollView style={{flex:1,backgroundColor:'white',marginTop:10}}>        
        {this.props.menuDetail.priceList && this.props.menuDetail.priceList.length>0 && this.props.menuDetail.priceList.map((priceList,i)=>{
            
            return (<View key={i} >
            <View style={{paddingVertical:10,backgroundColor:COLOR_PRIMARY,paddingTop:15,paddingLeft:15}}>
            <Text style={{color:'white',fontSize:20,fontFamily:'bold'}}>{priceList.name}</Text>
            </View>
            {priceList.categories && priceList.categories.length>0 && priceList.categories.map((category,i)=>{
                
            return(
                <SectionList
                key={i}
                renderItem={({ item,index, section }) => (<View key={index} style={{marginHorizontal:15,borderBottomWidth:1,borderBottomColor:'lightgray',paddingTop:10}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={{textAlign:'left',fontSize:16,color:TEXT_DARK}}>{item.name}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{textAlign:'right',fontSize:16,color:TEXT_DARK}}>{`PKR ${item.price}`}</Text>
                    </View>
                </View>
                <View style={{flex:1,paddingVertical:5}}>
                    <Text style={{color:TEXT_LIGHT}}>{item.description}</Text>
                </View>
                
                </View>)}
                sections={[
                    { title: category.name, data: category.items }
                ]}
                renderSectionFooter={()=><View style={{paddingTop:15}}></View>}
                renderSectionHeader={({ section })=> {
                    return(
                        <View style={{marginTop:10,paddingLeft:15}}>
                        <Text style={{color:TEXT_DARK,textDecorationLine:"underline",fontFamily:'bold',fontSize:20,textDecorationColor:COLOR_PRIMARY }}>{section.title}</Text>
                        </View>
                    )
                }}
            />
            );
        })}</View>)})}
        </ScrollView>

    )
}
}
const mapStateToProps=state=>{
    return{
        menuDetail:state.listing.menuDetail
    };
}
export default connect(mapStateToProps)(MenuItemList);