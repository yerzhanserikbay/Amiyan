import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, AsyncStorage, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class ContactForm extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const card = navigation.getParam('card', 'none');
        this.state = { 
            title: String,
            subtitle: String,
            firstName: String,
            lastName: String,
            company: String,
            phone: String,
            fax: String,
            email: String,
            card: card
        };
    }

    async getKey() {
        try {
            let objects = await AsyncStorage.getItem(this.state.card);
            let parsed = JSON.parse(objects);
            this.setState({
                title: parsed.title,
                subtitle: parsed.subtitle,
                firstName: parsed.firstName,
                lastName: parsed.lastName,
                company: parsed.company,
                phone: parsed.phone,
                fax: parsed.fax,
                email: parsed.email
            });
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }

    async saveKey() {
        try {
            await AsyncStorage.setItem(this.state.card, JSON.stringify(this.state))
        } catch (error) {
            console.log("Error saving data" + error);
        }
    }

    async resetKey() {
        try {
            await AsyncStorage.removeItem(this.state.card);
            this.setState({
                title: null,
                subtitle: null,
                firstName: null,
                lastName: null,
                company: null,
                phone: null,
                fax: null,
                email: null
            });
        } catch (error) {
            console.log("Error resetting data" + error);
        }
    }
      
    componentWillMount() {
        this.getKey()
    }
    
    componentWillUnmount() {
        this.saveKey()

    }

    render() {
        return (
            <LinearGradient
              colors={['#FF4646', '#D672EA']}
              style={styles.container}
              start={{x: 0.0, y: 0.0}}
              end={{x: 1.0, y: 1.0}}>
                <TouchableOpacity
                  style={styles.sliderButton}
                  onPress={() => this.props.navigation.goBack()}>
                </TouchableOpacity>

                <View style={styles.blank}>
                    <TextInput
                      style={styles.title}
                      placeholder={'Profile 1'}
                      value={this.state.title}
                      onChangeText={(title) => this.setState({title})}
                      {...this.blank}>
                    </TextInput>

                    <TextInput
                      style={styles.subtitle}
                      placeholder={'Description'}
                      value={this.state.subtitle}
                      onChangeText={(subtitle) => this.setState({subtitle})}
                      {...this.blank}>
                    </TextInput>
                        
                    <View style={styles.textInput}>
                        
                        <TextInput
                          style={styles.row}
                          placeholder={'First Name'}
                          value={this.state.firstName}
                          onChangeText={(firstName) => this.setState({firstName})}
                          {...this.blank}>
                        </TextInput>
                        <View style={styles.shortLine}>
                        </View>

                        <TextInput
                          style={styles.row}
                          placeholder={'Last Name'}
                          value={this.state.lastName}
                          onChangeText={(lastName) => this.setState({lastName})}
                          {...this.blank}>
                        </TextInput>
                        <View style={styles.shortLine}>
                        </View>

                        <TextInput
                          style={styles.row}
                          placeholder={'Company'}
                          value={this.state.company}
                          onChangeText={(company) => this.setState({company})}
                          {...this.blank}>
                        </TextInput>
                        <View style={styles.longLine}>
                        </View>

                        <TextInput
                          style={styles.row}
                          placeholder={'Phone'}
                          value={this.state.phone}
                          onChangeText={(phone) => this.setState({phone})}
                          {...this.blank}>
                        </TextInput>
                        <View style={styles.longLine}>
                        </View>

                        <TextInput
                          style={styles.row}
                          placeholder={'Fax'}
                          value={this.state.fax}
                          onChangeText={(fax) => this.setState({fax})}
                          {...this.blank}>
                        </TextInput>
                        <View style={styles.longLine}>
                        </View>

                        <TextInput
                          style={styles.row}
                          placeholder={'Email'}
                          value={this.state.email}
                          onChangeText={(email) => this.setState({email})}
                          {...this.blank}>
                        </TextInput>
                        <View style={styles.longLine}>
                        </View>
                    </View>
                    <Button 
                      title={'Reset'}
                      color={'red'}
                      style={styles.resetButton}
                      onPress={() => this.resetKey()}>
                    </Button>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    blank: {
        position: 'absolute',
        left: 15,
        top: 80,
        right: 15,
        bottom: 70,
        borderRadius: 40,
        backgroundColor: 'white',
    },
    textInput: {
        justifyContent: 'space-around',
        flexDirection: 'column',
        marginTop: 10,
    },
    sliderButton: {
        height: 8,
        width: 70,
        borderRadius: 4,
        opacity: 0.5,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 65,
    },
    row: {
        marginTop: 15,
        marginLeft: 15,
        height: 20,
        width: 220,
        color: '#696969',
    },
    shortLine: {
        height: 1,
        width: 120,
        backgroundColor: '#696969',
        marginLeft: 15,
        marginTop: 0
    },
    longLine: {
        height: 1,
        width: 220,
        backgroundColor: '#696969',
        marginLeft: 15,
        marginTop: 0
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center',
        marginTop: 20,

    },
    subtitle: {
        color: '#9B9B9B',
        fontSize: 13,
        alignSelf: 'center',
        marginTop: 5,
    },
    resetButton: {
        alignSelf: 'center',
        fontSize: 13,
        marginTop: 550,
    }

})

export default ContactForm;