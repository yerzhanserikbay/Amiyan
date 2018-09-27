import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

class Settings extends Component {
    static navigationOptions = { header: null };
    render() {
        return(
            <ScrollView 
              contentContainerStyle={styles.container}
              endFillColor='black'
              bounces={false}>

                <TouchableOpacity
                  style={styles.sliderButton}
                  onPress={() => this.props.navigation.goBack()}>
                </TouchableOpacity>

                <Text style={styles.title}>
                    Settings
                </Text>

                <View style={styles.table}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.tableTitle}>
                            ID Card
                        </Text>
                        <Text style={styles.tableSubtitle}>
                            Description
                        </Text>
                        <View style={styles.blackCircles}>
                            <View style={styles.blackCircle}></View>
                            <View style={styles.blackCircle}></View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.tableTitle}>
                            1st Profile
                        </Text>
                        <Text style={styles.tableSubtitle}>
                            Description
                        </Text>
                        <View style={styles.blackCircles}>
                            <View style={styles.blackCircle}></View>
                            <View style={styles.blackCircle}></View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.tableTitle}>
                            2nd Profile
                        </Text>
                        <Text style={styles.tableSubtitle}>
                            Description
                        </Text>
                        <View style={styles.blackCircles}>
                            <View style={styles.blackCircle}></View>
                            <View style={styles.blackCircle}></View>
                        </View>
                    </TouchableOpacity>

                    <View style={{marginTop: 42}}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.tableTitle}>
                                Feedback & Rate
                            </Text>
                            <Text style={styles.tableSubtitle}>
                                Send us your problem and rate our app
                            </Text>
                            <View style={styles.blackCircles}>
                                <View style={styles.blackCircle}></View>
                                <View style={styles.blackCircle}></View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.tableTitle}>
                                Instructions
                            </Text>
                            <Text style={styles.tableSubtitle}>
                                Simple guide to use it
                            </Text>
                            <View style={styles.blackCircles}>
                                <View style={styles.blackCircle}></View>
                                <View style={styles.blackCircle}></View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </ScrollView>
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
        flexDirection: 'column',
        // justifyContent: 'space-around',
        backgroundColor: 'black',
    },
    title: {
        color: 'white',
        fontSize: 34,
        fontWeight: 'bold',
        marginTop: 42,
        marginLeft: 15,
    },
    table: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 15,
        // backgroundColor: 'black',
    },
    button: {
        height: 78,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 4,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    tableTitle: {
        color: 'black',
        fontSize: 22,
        marginLeft: 24,
        marginTop: 15,
    },
    tableSubtitle: {
        color: '#9B9B9B',
        fontSize: 13,
        marginLeft: 24,
        marginTop: 3,
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
        marginTop: -31
    },

})



export default Settings;