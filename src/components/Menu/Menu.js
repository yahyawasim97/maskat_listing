import React,{Component} from 'react';
import {View,Text,ScrollView,Image,FlatList,ActivityIndicator,LayoutAnimation,
    UIManager} from 'react-native';
import {List, H1, H3,} from 'native-base';
import {connect} from 'react-redux';
import MenuItem from './MenuItem';
import {onMenuSelect,saveLocation} from '../../actions/Index';
import {anonymousMenuList} from '../../services/menu.services'
import { COLOR_PRIMARY } from '../../Theme/Colors';
import HeaderApp from '../../components/Common/Header';
import Axios from "axios";
import { Actions } from 'react-native-router-flux';

class Menu extends Component{
    state={
        page:1,
        records:[],
        loading:true,
        searchParam:'',
        categoryId:'',
        count:0
    };
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.props.saveLocation(position.coords.latitude,position.coords.longitude)
            });
        if(this.props.name !== 'menuList'){
            if(this.props.selectedCategory){
                this.setState({
                    categoryId:this.props.selectedCategory.iD
                },()=>{this.makeRequest()});
                
            }
        }else{
            this.makeRequest();
        }
        
        
    }
    componentWillReceiveProps(props){
        if(this.props.name !== 'menuList'){
            if(this.props.selectedCategory.iD !== props.selectedCategory.iD){
                this.setState({
                    categoryId:props.selectedCategory.iD
                },()=>{this.makeRequest()});
            }
        }
        if(this.props.lat !== props.lat  || this.props.long !== props.long ){
            this.makeRequest();
        }
        if(props.selectedMenu.iD !== this.props.selectedMenu.iD){
            Actions.menuDetail();
        }
        
    }

    componentWillUpdate(){
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();
    }

    makeRequest =(categoryId =  this.state.categoryId,searchParam=this.state.searchParam,concat=true)=>{
       
        console.log(categoryId,'category');
        console.log(searchParam,'search Param');
        console.log(this.state.page,'page number')
        console.log(this.state.records)
    
        anonymousMenuList(this.props.lat,this.props.long,this.state.page,categoryId,searchParam).then((res)=>{
            if(!res.data.error){
                if(concat){
                    this.setState({
                        records:this.state.records.concat(res.data.data.records),
                        count:res.data.data.total
                    })
                }else{
                    this.setState({
                        records:res.data.data.records,
                        count:res.data.data.total
                    })

                }
    
            }
            else{
                this.setState({
                    loading:false
                })
            }
        }).catch((thrown)=>{
            if (Axios.isCancel(thrown)) {
                console.log('Request canceled', thrown.message);
              } else {
                console.error('Hello')
              }
        })
    }

    renderHeader=()=>{
        return (
            <View
              style={{
                paddingTop: 20
              }}
            >
            </View>
          );
    }
    renderFooter = () => {
        if (!this.state.loading) return <View style={{paddingVertical: 20,marginBottom:10}}/>
    
        return (
          <View
            style={{
              paddingVertical: 20,
              marginBottom:10
            }}
          >
            <ActivityIndicator animating size="large" style={{color:COLOR_PRIMARY}}/>
          </View>
        );
    };
    handleLoadMore=()=>{
        console.log(this.state.count)
        if(this.state.records.length < this.state.count){
        this.setState({
            page:this.state.page+1,
            loading:true
        },()=>{
            this.makeRequest();
        })
        }else{
            this.setState({
                loading:false
            })
        }
    }
    renderTitle=()=>{
        if(this.props.name ==='menuCategoryList'){
            if(this.props.selectedCategory){
                return this.props.selectedCategory.title
            }
        }
        
    }
    onSearch = searchParam=>{
        this.setState({
            records:[],
            searchParam,
            loading:true,
            page:1
        },()=>{
            this.makeRequest(categoryId =  this.state.categoryId,searchParam=this.state.searchParam,false);     
        })
        
    }
    handlePress=(menu)=>{
        console.log(menu)
        if(this.props.selectedMenu.iD === menu.iD){
            Actions.menuDetail();
        }else{
        this.props.onMenuSelect(menu);
        }
    }
    render(){
        
        return(
            <View style={{flex:1}}>
            <HeaderApp
                title={this.renderTitle()}
                inStack={this.props.name==='menuList'?false:true}
                onSearch={this.onSearch}
                
            />
            {!this.state.loading && this.state.records.length===0 ?  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>No Record Found!</Text></View>:
            <FlatList
                data={this.state.records}
                renderItem={({ item }) => (<MenuItem key={item.iD} item={item} handlePress={this.handlePress}/>)}
                ListHeaderComponent={this.renderHeader}
                ListFooterComponent={this.renderFooter}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={1}
            />}
            </View>  
        );
    }
}
const mapStateToProps=state=>{
    return{
        memberAuthorized : state.auth.memberAuthorized,
        memberVerified: state.auth.memberVerified,
        lat: state.auth.lat,
        long: state.auth.long,
        selectedCategory: state.listing.selectedCategory,
        selectedMenu: state.listing.selectedMenu
    }
}
export default connect(mapStateToProps,{onMenuSelect,saveLocation})(Menu);