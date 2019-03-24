import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const luzy_logo = require('../../assets/images/luzy_logo.svg');
const menu_icon = require('../../assets/images/menu_icon.svg');

export default class Dashboard extends Component {
  alertNav() { Alert.alert('In progress...'); }

  render() {
    return (
      <View style={styles.container}>
        {/* AppHeader */}
        <View style={[styles.section, styles.headerSection]}>
          <View style={styles.sectionInner}>
            <View style={styles.header}>
              <SvgUri width="136" height="52" source={luzy_logo} />
              <TouchableOpacity onPress={() => this.alertNav()}>
                <SvgUri width="30" height="30" source={menu_icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* AppDashboard */}
        <View style={[styles.section, styles.signinSection]}>
          <View style={styles.sectionInner}>
            <View style={styles.sectionTitle}>
              <Text style={styles.title}>Welcome!</Text>
              <Text style={styles.subTitle}>to your LUZY account</Text>
            </View>
            <Text style={styles.inputLabel}>Authenticated as:</Text>

          </View>
        </View>

        {/* AppFooter */}
        <View style={[styles.section, styles.signinSection]}>
          <View style={styles.sectionInner}>
            <View style={styles.sectionTitle}>
              <Text style={styles.inputLabel}>Menu:</Text>
            </View>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    fontFamily: 'Roboto-Regular'
  },
  section: {},
  sectionInner: {
    paddingVertical: 25,
    paddingHorizontal: 30
  },
  sectionTitle : {
    marginBottom: 10
  },
  title : {
    textAlign: 'center',
    fontFamily: 'Linotte-Bold',
    fontSize: 30,
    color: '#FFFFFF'
  },
  subTitle : {
    textAlign: 'center',
    fontSize: 12,
    color: '#FFFFFF'
  },
  headerSection: {
    backgroundColor: '#054993'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  buttonWrapper: {
    backgroundColor: '#0CB6F3',
    borderRadius: 5,
    marginTop: 16,
    padding: 16,
    alignItems: 'center'
  },
  button: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  inputLabel: {
    color: '#FFFFFF',
    fontSize: 12
  },
  footer: {
    justifyContent: 'flex-end'
  }
});
