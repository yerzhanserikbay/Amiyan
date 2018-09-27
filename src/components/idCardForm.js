import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, AsyncStorage, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class IdCardForm extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props);
        this.state = { 
            firstName: String,
            lastName: String,
            fatherName: String,
            birthData: String,
            idCardNumber: String,
            inn: String,
        };
      }

      async getKey() {
        try {
            let objects = await AsyncStorage.getItem('idCard');
            let parsed = JSON.parse(objects);
            this.setState({
                firstName: parsed.firstName,
                lastName: parsed.lastName,
                fatherName: parsed.fatherName,
                birthData: parsed.birthData,
                idCardNumber: parsed.idCardNumber,
                inn: parsed.inn,
            });
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }

    async saveKey() {
        try {
            await AsyncStorage.setItem('idCard', JSON.stringify(this.state))
        } catch (error) {
            console.log("Error saving data" + error);
        }
    }

    async resetKey() {
        try {
            await AsyncStorage.removeItem('idCard');
            this.setState({
                firstName: null,
                lastName: null,
                fatherName: null,
                birthData: null,
                idCardNumber: null,
                inn: null,
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
                    <Text style={styles.title}>
                        ID Card
                    </Text>  

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
                          placeholder={'Father Name'}
                          value={this.state.fatherName}
                          onChangeText={(fatherName) => this.setState({fatherName})}
                          {...this.blank}>
                        </TextInput>
                        <View style={styles.longLine}>
                        </View>

                        <TextInput
                          style={styles.row}
                          placeholder={'Birth Data'}
                          value={this.state.birthData}
                          onChangeText={(birthData) => this.setState({birthData})}
                          {...this.blank}>
                        </TextInput>
                        <View style={styles.longLine}>
                        </View>

                        <TextInput
                          style={styles.row}
                          placeholder={'Id Card Number'}
                          value={this.state.idCardNumber}
                          onChangeText={(idCardNumber) => this.setState({idCardNumber})}
                          {...this.blank}>
                        </TextInput>
                        <View style={styles.longLine}>
                        </View>

                        <TextInput
                          style={styles.row}
                          placeholder={'IIN'}
                          value={this.state.inn}
                          onChangeText={(inn) => this.setState({inn})}
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
        color: '#9B9B9B',
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center',
        marginTop: 20,
    },
    resetButton: {
        alignSelf: 'center',
        fontSize: 13,
        marginTop: 550,
    }

})

export default IdCardForm;