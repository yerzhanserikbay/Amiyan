import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import RNFlash from 'react-native-flash';
import QRCodeScanner from 'react-native-qrcode-scanner';

class Scan extends Component {
    static navigationOptions = { header: null };

    constructor(props) {
        super(props);

        this.flash = this.flash.bind(this);

        this.state = {
            flash: false
         };
    }

    flash() {
        if (this.state.flash == false) {
            RNFlash.turnOnFlash();
            this.state.flash = true
            console.log(this.state.flash);
        } else {
            RNFlash.turnOffFlash();
            this.state.flash = false
            console.log(this.state.flash);
        }
    }

    onSuccess(e) {
        Linking
          .openURL(e.data)
          .catch(err => console.error('An error occured', err));
    }

    render() {
        return (
            <View>
                <QRCodeScanner
                  onRead={this.onSuccess.bind(this)}
                  cameraStyle={styles.cameraContainer}
                  topViewStyle={styles.zeroContainer}
                  bottomViewStyle={styles.zeroContainer}
                //   fadeIn={false} ?????
                  bottomContent={
                    <View style={styles.container}>
                        <TouchableOpacity
                          style={styles.closeButton}
                          onPress={() => {
                              this.props.navigation.goBack()
                              RNFlash.turnOffFlash()}}>
                            <Image source={require('./img/Cancel.png')} style={styles.closeIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.lampButton}
                          onPress={() => this.flash()}>
                            <Image source={require('./img/Lamp.png')} style={styles.lampIcon} />
                        </TouchableOpacity>
                    </View>
                  }>
                </QRCodeScanner>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    zeroContainer: {
        height: 0,
        flex: 0,
    },
    cameraContainer: {
        height: Dimensions.get('window').height,
    },
    container: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    closeButton: {
        height: 20,
        width: 20,
        marginTop: 64,
        marginRight: 20
    },
    closeIcon: {
        height: 20,
        width: 20,
    },
    lampButton: {
        height: 25,
        width: 25,
        marginTop: 600, //mistake!!!
        alignSelf: 'center',
    },
    lampIcon: {
        height: 25,
        width: 25,
    }
})

export default Scan;