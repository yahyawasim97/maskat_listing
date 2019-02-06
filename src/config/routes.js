import React from 'react';
import {Image} from 'react-native';
import {Router,Scene, Actions,Tabs, Drawer } from 'react-native-router-flux';
import Login from '../components/Auth/Login';
import Menu from '../components/Menu/Menu';
import Category from '../components/Category/Category';
import {COLOR_PRIMARY, TEXT_LIGHT, BUTTON_TEXT, TEXT_DARK} from '../Theme/Colors'
import TokenVerification from '../components/Auth/TokenVerification';
import Sidebar from '../components/Common/Sidebar';
import MenuDetail from '../components/Menu/MenuDetail';
import MenuItemList from '../components/Menu/MenuItemList';
import MenuReview from '../components/Menu/MenuReview';
import HeaderApp from '../components/Common/Header';
import HeaderDetail from '../components/Common/HeaderDetail';



const AppRoutes = props => {
    console.log(props.name)
    return(
        <Router >
            <Scene key="root" duration={0} hideNavBar >

                 <Scene key="drawer" drawer  drawerPosition="left" contentComponent={Sidebar} drawerWidth={250} hideNavBar >
     
                <Scene 
                    key="tabbar"
                    tabs
                    hideNavBar
                    activeTintColor={COLOR_PRIMARY}
                    tabBarStyle={{height:60,paddingVertical:8}}
                    // tabBarPosition='top'
                    // tabBarComponent={() => null}
                    
                >
                    <Scene key="menu"  navBar={HeaderDetail} tabBarLabel="Near Me"  icon={({focused})=><Image source={require('../assets/icons/nearMe.png') } style={{tintColor:focused?COLOR_PRIMARY:TEXT_LIGHT,height:25,width:25}}/>} initial>
                        <Scene key="menuList" component={Menu}  hideNavBar initial/>
                        <Scene key="menuDetail" tabs tabBarPosition="top" swipeEnabled
                            activeTintColor='white'
                            inactiveTintColor={TEXT_DARK}
                            tabBarPosition="top"
                            tabBarStyle={{backgroundColor:'#F1F1F1'}}
                            indicatorStyle={{
                                borderRadius:20,
                                backgroundColor: COLOR_PRIMARY,
                                alignSelf:'center',
                                marginLeft:25,
                                height: 40,
                                margin:5,
                                width:90
                            }}
                        >
                            <Scene key="info" tabBarLabel='Info' 
                            titleStyle={{color:'white'}}
                            component={MenuDetail}  hideNavBar/>
                            <Scene key="menu"  tabBarLabel='Menu' component={MenuItemList} titleStyle={{color:'white'}} hideNavBar
                            />
                            <Scene key="review" tabBarLabel='Review' component={MenuReview} hideNavBar />
                        </Scene>
                    </Scene>
                    {/* <Scene key="promotions"  title="Promotions" icon={({focused})=><Image source={require('../assets/icons/promotion.png') } style={{tintColor:focused?COLOR_PRIMARY:TEXT_LIGHT,height:25,width:25}} hideNavBar/>} >
                        <Scene component={Menu} key="promotionListing" initial hideNavBar/>
                    </Scene> */}

                    <Scene key="category" title="Categories" icon={({focused})=><Image source={require('../assets/icons/category.png') } style={{tintColor:focused?COLOR_PRIMARY:TEXT_LIGHT,height:25,width:25}} hideNavBar/>} >
                        <Scene key="categoryList" component={Category} hideNavBar initial/>
                        <Scene key="menuCategoryList" component={Menu} hideNavBar />
                    </Scene>
                    
                </Scene>    
                </Scene>         
            </Scene> 


        </Router>
    )
}
const styles={
    navStyle:{
        backgroundColor: 'black'
    },
    titleStyle:{
        color:'white'
    }
}
export default AppRoutes;