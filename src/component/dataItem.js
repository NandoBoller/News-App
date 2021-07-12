import React, { Component } from 'react';
import { Linking } from 'react-native';
import { ListItem, Left, Thumbnail, Body, Text, Button, Right, View } from 'native-base';
import TimeAgo from './time';

export default class DataItem extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress = () =>{
        const {url, title}= this.data;
        this.props.onPress({url,title});
    }

    handleClick = () => {
        Linking.openURL(this.data.url)
    }

    render() {
        return ( 
            <ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: this.data.urlToImage !=
                    null ? this.data.urlToImage : 'https://www.blog.heimgartner.com/wp-content/uploads/2019/05/schweizer-fahne.jpg'}} />
                </Left>
                <Body>
                    <Text numberOfLines={2}>{this.data.title}</Text>
                    <Text note numberOfLines={2}>{this.data.description}</Text>
                    <View style={{flex: 1,flexDirection: 'row', margin: 8, marginTop: 8, MarfinLeft: 0}}>
                        <Text note>{this.data.source.name}</Text>
                        
                    </View>
                </Body>
                <Right>
                    <Button transparent onPress={this.handleClick}>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>
        );
    }

}