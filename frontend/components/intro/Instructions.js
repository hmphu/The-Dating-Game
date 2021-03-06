import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ImageBackground
} from 'react-native';

export default class Instructions extends Component {

  componentDidMount() {
    //at this point we need to query the databasy for all the potential
    // matches for this user
    // this.props.fetchProspectMatch();
  }
  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/splash5.jpg")}
        style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            theDatingGame,
          </Text>
          <Text style={styles.secondHeaderText}>
            lets have fun!
          </Text>
        </View>

        <View style={styles.instructions}>
          <View style={styles.instructionsline}>
            <View style={styles.instructionsNumberContainer}>
              <Text style={styles.instructionsNumber}>
                1
              </Text>
            </View>
            <Text style={styles.instructionsText}>
              Two people like each other & its a match...
            </Text>
          </View>
          <View style={styles.instructionsline}>
            <View style={styles.instructionsNumberContainer}>
              <Text style={styles.instructionsNumber}>
                2
              </Text>
            </View>
            <Text style={styles.instructionsText}>
              They start playing the game,
            </Text>
          </View>
          <View style={styles.instructionsline}>
            <View style={styles.instructionsNumberContainer}>
              <Text style={styles.instructionsNumber}>
                3
              </Text>
            </View>
            <Text style={styles.instructionsText}>
              they start chatting,
            </Text>
          </View>
          <View style={styles.instructionsline}>
            <View style={styles.instructionsNumberContainer}>
              <Text style={styles.instructionsNumber}>
                4
              </Text>
            </View>
            <Text style={styles.instructionsText}>
              then shit gets real!
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: undefined,
    height: undefined,
    justifyContent: 'center'
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'AvenirNext-Medium'
  },
  secondHeaderText: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'GillSans-Italic',
    fontWeight: 'bold'
  },

  instructions: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginTop: 70
  },
  instructionsText: {
    fontSize: 16,
    color: 'white',
    flexWrap: 'wrap',
    width: 300,
    fontFamily: 'AvenirNext-Medium',
  },
  instructionsline: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 15,
    paddingRight: 10,
    paddingLeft: 15,
    marginLeft:10
  },
  instructionsNumberContainer: {
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: '#FFFFF0',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 15,
    width: 23,
    height: 23,

  },
  instructionsNumber: {
    fontSize: 15,
    textAlign: 'center',
    color: '#f0f066',
    fontFamily: 'AvenirNext-Medium',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  next: {
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'transparent',
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  nextButton: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom:4,
    marginRight:2,
    marginLeft:2,
    width: 40,
    height: 40,
    borderRadius: 50,
    fontFamily: 'AvenirNext-Medium',
  }
});
