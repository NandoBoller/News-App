import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#043685', }} hasTabs >
        <Left/>
          <Body>
            <Title style={{color:'white'}}>Simple News</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabsBarUnderlineStyle={{backgroundColor: 'white'}}>
          <Tab tabStyle={{backgroundColor:'#043685'}} activeTabStyle={{backgroundColor:'#043685'}} activeTextStyle={{color:'white'}} heading="Hauptseite">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#043685'}} activeTabStyle={{backgroundColor:'#043685'}} activeTextStyle={{color:'white'}} heading="Favorite">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#043685'}} activeTabStyle={{backgroundColor:'#043685'}} activeTextStyle={{color:'white'}} heading="Mehr">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}