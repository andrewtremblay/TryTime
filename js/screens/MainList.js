/**
 * @flow
 */

import React from 'react';
import {ScrollView, View, Text, Button, TouchableOpacity, SafeAreaView} from 'react-native';

import { styles } from './styles';
import { FlatList } from 'react-native-gesture-handler';
import routes from '../Routes';

const iconOrder = ['brain', 'heart']; 
const ICON_MAP = {
   brain: {icon: '🧠', route: routes.CreateScreen },
   heart: {icon: '💔', route: routes.CreateAsEmotionScreen }
}
const icons = (icon) => ICON_MAP[icon] ? ICON_MAP[icon].icon : '😰';   
const route = (icon) => ICON_MAP[icon] ? ICON_MAP[icon].route : undefined; 

class IconButton extends React.Component<any> {
  onPress = () => {
    this.props.navigation.navigate({routeName: route(this.props.icon)});
  }
  render() {
    return (
      <View>
      <TouchableOpacity onPress={this.onPress}>
      <Text style={{fontSize: 48, textAlignVertical:'center', textAlign: 'center'}}>{icons(this.props.icon)}</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

class QuickFlow extends React.Component<any> {
  render() {
    const { enteredQuickflow, navigation } = this.props; 
    const transform = enteredQuickflow ? [{rotateZ: "45deg"}] : [];
    const otherViews = enteredQuickflow ? iconOrder.map(icn => <IconButton navigation={navigation} icon={icn}/>): []; 
    return (
      <View style={{ backgroundColor:'red', flexDirection:'column-reverse', width: 55, flex:-1, position: 'absolute', right: 30, bottom:30}} >
        <View>
        <TouchableOpacity onPress={this.props.onPress}>
        <Text style={{fontSize: 48, textAlignVertical:'center', textAlign: 'center', transform}}>⊕</Text>
        </TouchableOpacity>
        </View>
        {otherViews}
      </View>
    );
  }
}

export default class MainList extends React.Component<any> {
  constructor() {
    super();
    this.state = { enteredQuickflow: false };
  }


  onItemPress = (item) => console.log(item.key);
  renderItem = ({item}) => (
    <TouchableOpacity onPress={() => this.onItemPress(item)}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
  toggleQuickFlow = () => {
    this.setState({enteredQuickflow: !this.state.enteredQuickflow})
  }  

  render() {
    const { enteredQuickflow } = this.state;
    return (
      <SafeAreaView style={{width: '100%', height: '100%',  backgroundColor:'blue'}}>
        <FlatList style={{position: 'relative', width: '100%', height: '100%',  backgroundColor:'white'}} 
          data={[{title: 'Title Text', key: 'item1'}]}
          renderItem={this.renderItem} 
        />
        <QuickFlow onPress={this.toggleQuickFlow} navigation={this.props.navigation} enteredQuickflow={enteredQuickflow}/>
      </SafeAreaView>
    );
  }
}
