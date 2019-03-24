import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Alert,
  Button
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Dashboard from './Dashboard';

const luzy_logo = require('../../assets/images/luzy_logo.svg');
const menu_icon = require('../../assets/images/menu_icon.svg');
const placeholeder_email_icon = require('../../assets/images/placeholeder_email_icon.svg');
const checked_icon = require('../../assets/images/checked_icon.svg');
const placeholeder_password_icon = require('../../assets/images/placeholeder_password_icon.svg');
const remember_me_checkmark_icon = require('../../assets/images/remember_me_checkmark_icon.svg');
const show_password_off_icon = require('../../assets/images/show_password_off_icon.svg');
const show_password_on_icon = require('../../assets/images/show_password_on_icon.svg');
const facebook_icon = require('../../assets/images/facebook_icon.svg');
const twitter_icon = require('../../assets/images/twitter_icon.svg');
const instagram_icon = require('../../assets/images/instagram_icon.svg');
const about_us_icon = require('../../assets/images/about_us_icon.svg');
const need_help_icon = require('../../assets/images/need_help_icon.svg');

export default class Login extends Component {
  state = {
    status: null,
    renderDashboard: false,
    in_Username: 'ahmedd',
    in_Password: '1234',
    secureTextEntry: true
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.status !== this.state.status) {
      if (this.state.status) this.setState({ renderDashboard: true })
    }
    return false;
  }

  alertNav() { Alert.alert('In progress...'); }

  secureTextEntry() { this.setState({ secureTextEntry: !this.state.secureTextEntry }); }

  rememberMeAction() { Alert.alert('In progress...'); }

  forgotPasswordAction() { Alert.alert('In progress...'); }

  async onPressSignin() {
    const { in_Username, in_Password } = this.state;
    const auth = await fetch('http://63.35.102.119/node_api/luzy_UserLogin', {
      headers: new Headers({
        'Authorization': 'Bearer Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI5Iiwicm9sZXMiOlsiSE9VU0VIT0xEX1VTRVIiXSwiaG91c2VzIjpbIjYzMjIyM2QwYzk1ZDVjYmIyZGUyYWFmZWNkZDliNTBlZmVjODg1N2Q4NDQ0YzA3MDFmNDY3YzFkMmM2OWIyMzYiXSwiaWF0IjoxNTQ0NTQ4MzU1LCJleHAiOjE1NDQ2MzQ3NTV9.xBRfAojOVzRmfurfMd3-yu8ygmDXQlXt5ZI19Cmws-o',
    		'Content-Type': 'text/plain'
    	}),
    	method: 'post',
    	body: JSON.stringify({ in_Username, in_Password })
    }).then(responseObj => responseObj).then(data => data.status);

    this.setState({ status: auth && auth == '200' })
  }

  onPressSignup() { Alert.alert('In progress...'); }

  aboutUsAction() { Alert.alert('In progress...'); }

  needHelpAction() { Alert.alert('In progress...'); }

  onPressSocialSigninWith(socialAccount) {
    Alert.alert(`Login with ${socialAccount}`);
  }

  render() {
    const renderLogin = (
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

        <ScrollView>
          {/* AppSignin */}
          <View style={[styles.section, styles.signinSection]}>
            <View style={styles.sectionInner}>
              <View style={styles.sectionTitle}>
                <Text style={styles.title}>SIGN IN</Text>
                <Text style={styles.subTitle}>with LUZY account:</Text>
              </View>
              <Text style={styles.inputLabel}>USERNAME:</Text>
              <View style={styles.textInputWrapper}>
                <View style={styles.textInputIcon}>
                  <SvgUri width="26" height="21" source={placeholeder_email_icon} />
                </View>
                <TextInput
                  autoCapitalize='none'
                  autoFocus={true}
                  textContentType='none'
                  autocomplete='off'
                  placeholder={'Your email address'}
                  placeholderTextColor={'#054993'}
                  style={styles.textInput}
                  onChangeText={(in_Username) => this.setState({in_Username})}
                  value={this.state.username} />
                <View style={[styles.textInputIcon, styles.alignRight]}>
                  <SvgUri width="26" height="21" source={checked_icon} />
                </View>
              </View>

              <Text style={[styles.inputLabel, styles.separator]}>PASSWORD:</Text>
              <View style={styles.textInputWrapper}>
                <View style={styles.textInputIcon}>
                  <SvgUri width="22" height="25" source={placeholeder_password_icon} />
                </View>
                <TextInput
                  secureTextEntry={this.state.secureTextEntry}
                  textContentType='none'
                  autocomplete='off'
                  placeholder={'Your password'}
                  placeholderTextColor={'#054993'}
                  style={styles.textInput}
                  onChangeText={(in_Password) => this.setState({in_Password})}
                  value={this.state.password} />
                <View style={[styles.textInputIcon, styles.alignRight]}>
                  <TouchableOpacity onPress={() => this.secureTextEntry()}>
                    <SvgUri width="27" height="20" source={this.state.secureTextEntry ? show_password_off_icon : show_password_on_icon} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.accountOptions}>
                <TouchableOpacity onPress={() => this.rememberMeAction()}>
                  <View style={styles.remeberUserOptionWrapper}>
                    <SvgUri width="20" height="20" source={remember_me_checkmark_icon} />
                    <Text style={[styles.accountOptionsText, styles.accountOptionsTextSpacing]}>Remember me</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.forgotPasswordAction()}>
                  <View style={styles.forgotPasswordOptionWrapper}>
                    <Text style={styles.accountOptionsText}>Forgot your password?</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={() => this.onPressSignin()}>
                <View style={styles.signinButtonWrapper}>
                  <Text style={styles.button}>LOGIN</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* AppSocialSignin */}
          <View style={[styles.section, styles.socialSigninSection]}>
            <View style={styles.sectionInner}>
              <View style={styles.sectionTitle}>
                <Text style={styles.title}>SIGN IN</Text>
                <Text style={styles.subTitle}>with your social media account:</Text>
              </View>
              <View style={styles.socialSigninIconsWrapper}>
                <View style={styles.socialSigninIcon}>
                <TouchableOpacity onPress={() => this.onPressSocialSigninWith('Facebook')}>
                  <SvgUri width="50" height="50" source={facebook_icon} />
                </TouchableOpacity>
                </View>
                <View style={styles.socialSigninIcon}>
                <TouchableOpacity onPress={() => this.onPressSocialSigninWith('Twitter')}>
                  <SvgUri width="50" height="50" source={twitter_icon} />
                </TouchableOpacity>
                </View>
                <View style={styles.socialSigninIcon}>
                <TouchableOpacity onPress={() => this.onPressSocialSigninWith('Instagram')}>
                  <SvgUri width="50" height="50" source={instagram_icon} />
                </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* AppSocialSignup */}
          <View style={[styles.section, styles.signupSection]}>
            <View style={styles.sectionInner}>
              <View style={styles.sectionTitle}>
                <Text style={[styles.title, styles.darkColor]}>SIGN UP</Text>
              </View>
              <TouchableOpacity onPress={() => this.onPressSignup()}>
                <View style={styles.signupButtonWrapper}>
                  <Text style={styles.button}>CREATE ACCOUNT</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* AppFooter */}
          <View style={[styles.section]}>
            <View style={[styles.sectionInner, styles.footerItems]}>
              <TouchableOpacity onPress={() => this.aboutUsAction()}>
                <View style={styles.footerItemWrapper}>
                  <SvgUri width="30" height="30" source={about_us_icon} />
                  <Text style={styles.footerItemText}>About us</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.needHelpAction()}>
                <View style={styles.footerItemWrapper}>
                  <SvgUri width="30" height="30" source={need_help_icon} />
                  <Text style={styles.footerItemText}>Need help</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );

    let renderComponent = this.state.status
      ? <Dashboard />
      : renderLogin;

    return renderComponent;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  darkColor: {
    color: '#054993'
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
    alignItems:'center',
    height: 52
  },
  signinSection: {
    backgroundColor: '#02152A'
  },
  inputLabel: {
    paddingBottom: 5,
    color: '#FFFFFF',
    fontFamily: 'Linotte-Bold',
    fontSize: 12
  },
  separator: {
    marginTop: 10
  },
  textInputWrapper: {
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: '#011e3f',
    borderRadius: 8,
    paddingRight: 10,
    paddingLeft: 10
  },
  textInputIcon: {
    alignItems:'center',
    width: 30
  },
  alignRight: {
    marginLeft: 'auto'
  },
  textInput: {
    flex: 1,
    paddingTop: 14,
    paddingRight: 8,
    paddingBottom: 14,
    paddingLeft: 8,
    color: '#FFFFFF'
  },
  accountOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    height: 20
  },
  remeberUserOptionWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  forgotPasswordOptionWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  accountOptionsText: {
    color: '#FFFFFF',
    fontSize: 12
  },
  accountOptionsTextSpacing: {
    marginLeft: 8
  },
  signinButtonWrapper: {
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
  socialSigninSection: {
    backgroundColor: '#054993'
  },
  socialSigninIconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
    height: 50
  },
  socialSigninIcon: {
    marginHorizontal: 10
  },
  signupSection: {
    backgroundColor: '#FFFFFF'
  },
  signupButtonWrapper: {
    backgroundColor: '#054993',
    borderRadius: 5,
    padding: 16,
    alignItems: 'center'
  },
  footerItems: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF'
  },
  footerItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 25
  },
  footerItemText: {
    marginLeft: 10,
    color: '#b5c8dd',
    fontWeight: 'bold'
  }
});
