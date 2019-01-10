import React, { Component } from 'react';
import { 
  View, 
  StyleSheet, 
  StatusBar, 
  TouchableOpacity,
  AsyncStorage
 } from 'react-native';
// import Header from './src/components/header';
// import Footer from './src/components/footer';
import Bar from './src/components/bar';
import IdCard from './src/components/idCard';
import ContactCard from './src/components/contactCard';
import Scan from './src/components/scan';
import ContactForm from './src/components/contactForm';
import IdCardForm from './src/components/idCardForm';
import Settings from './src/components/settings';
import { Pages } from 'react-native-pages';
import { createStackNavigator } from 'react-navigation';

class App extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

  }

  data = {
    title: String,
    subtitle: String,
    firstName: String,
    lastName: String,
    company: String,
    phone: String,
    fax: String,
    email: String,    
  }

  openScanViewController = () => {
    this.props.navigation.navigate('Scan')
  }

  openFirstContactBlankViewController = () => {
    this.props.navigation.navigate('ContactForm', { card: 'firstProfile'})
  }

  openSecondContactBlankViewController = () => {
    this.props.navigation.navigate('ContactForm', { card: 'secondProfile'})
  }

  openIdCardBlankViewController = () => {
    this.props.navigation.navigate('IdCardForm')
  }

  openSettingsViewController = () => {
    this.props.navigation.navigate('Settings')
  }

  async profilesData(profile) {
    try {
      let objects = await AsyncStorage.getItem(profile);
      let parsed = JSON.parse(objects);
      newData = {
        title: parsed.title,
        subtitle: parsed.subtitle,
        firstName: parsed.firstName,
        lastName: parsed.lastName,
        company: parsed.company,
        phone: parsed.phone,
        fax: parsed.fax,
        email: parsed.email
      }
      return objects
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  componentWillMount() {
    console.log(this.profilesData('firstProfile'))
  }



  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.container]}>

        <StatusBar
          barStyle="light-content"
        />
        
        <Pages 
          indicatorPosition={'top'} 
          containerStyle={styles.cards}
          onScrollEnd={() => console.log('Hello!')}> 
          <IdCard
            setBlank={this.openIdCardBlankViewController}/> 
            {/* setBlank={() => this.openIdCardBlankViewController}/>  */}
          <ContactCard
            setBlank={this.openFirstContactBlankViewController}
            card={'firstProfile'}
            // title={this.profilesData('firstProfile').title}
            subtitle={'Description'}
            data={this.profilesData('firstProfile')}/>
          <ContactCard
            setBlank={this.openSecondContactBlankViewController}
            card={'secondProfile'}
            title={'Profile'}
            subtitle={'Description'}
            data={this.profilesData('secondProfile')}/>
        </Pages>  
      
        <Bar
          toScan={this.openScanViewController}
          toSettings={this.openSettingsViewController}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  cards: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#000000',
    marginTop: 88,
  },
})

export default createStackNavigator({
  Home: {
    screen: App,
  },
  Scan: {
    screen: Scan,
  }, 
  ContactForm: {
    screen: ContactForm,
  },
  IdCardForm: {
    screen: IdCardForm,
  },
  Settings: {
    screen: Settings,
  }
}, {
  mode: 'modal'
});