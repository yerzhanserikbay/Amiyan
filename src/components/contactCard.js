import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import QRCode from 'react-native-qrcode';

class ContactCard extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('here' + this.props.data)
    }
    
    render() {
        return (
            <View style={styles.contactCard}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.subtitle}>{this.props.subtitle}</Text>

                <View style={styles.blackCircles}>
                    <View style={styles.blackCircle}></View>
                    <View style={styles.blackCircle}></View>
                </View>
                
                <View style={styles.circles}>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                    <View style={styles.circle}></View>
                </View>

                <View style={styles.qrCode}>
                    <QRCode
                          value={this.props.data} 
                          size={285}
                          bgColor='black'
                          fgColor='white'/>
                </View>

                <TouchableOpacity
                  style={styles.setButton}
                  onPress={() => this.props.setBlank()}>
                    <View style={styles.setIcon}/>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    contactCard: {
        height: 442,
        backgroundColor: 'white',
        borderRadius: 40,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 25
    },
    title: {
        fontSize: 22,
        color: 'black',
        marginTop: 18,
        marginLeft: 30,
    },
    subtitle: {
        fontSize: 13,
        color: '#9B9B9B',
        marginTop: 5,
        marginLeft: 30,
    },
    circle: {
        height: 13,
        width: 13,
        borderRadius: 6.5,
        backgroundColor: '#D8D8D8'
    },
    circles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -14,
        marginLeft: 28,
        marginRight: 28
    },
    blackCircle: {
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: 'black'
    },
    blackCircles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: -8,
        marginRight: -8,
        marginTop: 20
    },
    qrCode: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25
    },
    setButton: {
        alignSelf: 'center',
        marginTop: 40,
    },
    setIcon: {
        height: 8,
        width: 70,
        borderRadius: 4,
        opacity: 0.5,
        backgroundColor: 'white',
    }
})

export default ContactCard;