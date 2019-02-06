import React,{Component} from 'react';
import {View,Text,ScrollView,Image,FlatList,Dimensions,ActivityIndicator,Animated,LayoutAnimation,UIManager} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { FlatGrid } from 'react-native-super-grid';
import CategoryItem from './CategoryItem';
import {anonymousCategoryList} from '../../services/category.services';
import {COLOR_PRIMARY} from '../../Theme/Colors';
import HeaderApp from '../../components/Common/Header';
import {connect} from 'react-redux';
import {onCategorySelect} from '../../actions/Index';
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
class Category extends Component{
    
    state={
        records:[],
        loading:true
    };
    
    componentDidMount(){
        this.makeRequest();
    }

    componentWillReceiveProps(props){
        if(props.selectedCategory.iD !== this.props.selectedCategory.iD){
            Actions.menuCategoryList();
        }
    }
    componentWillUpdate(){
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }
    makeRequest =()=>{
        anonymousCategoryList().then((res)=>{
            if(!res.data.error){
            this.setState({
                records:this.state.records.concat(res.data.data.records),
                loading:false
            })
        }
            
        }).catch(err=>{console.log(err)})
    }
    renderFooter = () => {
        if (!this.state.loading) return <View style={{paddingBottom: 20}}/>
    
        return (
          <View
            style={{
              paddingBottom: 20
            }}
          >
            <ActivityIndicator animating size="large" style={{color:COLOR_PRIMARY}}/>
          </View>
        );
    };
    handlePress=(category)=>{
        if(this.props.selectedCategory.iD === category.iD){
            Actions.menuCategoryList();
        }else{
        this.props.onCategorySelect(category);
    }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <HeaderApp
                    category={true}
                />
                <FlatGrid
                style={{paddingTop:20}}
                itemDimension={130}
                items={this.state.records}
                renderItem={({ item }) => (<CategoryItem item={item}
                handlePress={this.handlePress}
                />)}
                itemContainerStyle={{
                    width:WIDTH*0.45,
                    height: HEIGHT * 0.25}}
                ListFooterComponent={this.renderFooter}
                />
            </View>   
        );
    }
}
const mapStateToProps=state=>{
    return{
        selectedCategory: state.listing.selectedCategory
    }
}
export default connect(mapStateToProps,{onCategorySelect})(Category);