import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode';
import Barcode from 'react-native-barcode-builder';

class IdCard extends Component {
    state = {
        text: 'Hello!'
    };
    
    render() {
        return (
            <View style={styles.idCard}>
                <View style={styles.qrCode}>
                    <QRCode
                      value={this.state.text} 
                      size={285}
                      bgColor='black'
                      fgColor='white'>
                        <Image 
                          style={styles.blur}
                        //   resizeMode='cover'
                          blurRadius={5}>
                        </Image>
                    </QRCode>
                    
                </View>
                
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

                <View style={styles.barCode}>
                    <Barcode 
                      value="033901210" 
                      format="CODE128"
                      width={2.8}
                      height={41}/>
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
    idCard: {
        height: 467,
        backgroundColor: 'white',
        borderRadius: 40,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 25
    },
    qrCode: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    circle: {
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: '#D8D8D8'
    },
    circles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -18,
        marginLeft: 25,
        marginRight: 25
    },
    blackCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: 'black'
    },
    blackCircles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: -10,
        marginRight: -10,
        marginTop: 33
    },
    barCode: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 22,
        marginLeft: 30,
        marginRight: 30
    },
    blur: {
        flex: 1,
        width: 285,
        height: 285,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    setButton: {
        alignSelf: 'center',
        marginTop: 25,
    },
    setIcon: {
      height: 8,
      width: 70,
      borderRadius: 4,
      opacity: 0.5,
      backgroundColor: 'white',
    }
    
})

export default IdCard;