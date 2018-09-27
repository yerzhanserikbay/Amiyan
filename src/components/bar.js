import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Bar extends Component {
    constructor(props) {
        super(props)
    }

    onPress = () => {
    }

    render() {
        return (
            <LinearGradient
              colors={['#FF4646', '#D672EA']}
              style={styles.container}
              start={{x: 0.0, y: 0.0}}
              end={{x: 1.0, y: 1.0}}>
                <View style={styles.buttons}>
                    <TouchableOpacity
                      onPress={this.onPress}>
                        <View>
                            <Image source={require('./img/Hide.png')} style={styles.iconImage} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.iconButton}
                      onPress={() => this.props.toScan()}>
                        <View>
                            <Image source={require('./img/Scan.png')} style={styles.iconImage} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.iconButton}
                      onPress={() => this.props.toSettings()}>
                        <View>
                            <Image source={require('./img/Settings.png')} style={styles.iconImage} />
                        </View>
                    </TouchableOpacity>
                    
                </View>
           </LinearGradient>
        );
    } 
}
const styles = StyleSheet.create({
    container: { 
        height: 85,
        backgroundColor: 'white',
        borderRadius: 40,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 88,
        
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        marginLeft: 53,
        marginRight: 53,
    },
    iconImage: {
        height: 37,
        width: 37,
    },
    iconText: {
        fontSize: 14,
        color: 'white',
        marginTop: 5
    }
});

export default Bar;