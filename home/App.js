// import { Text, SafeAreaView, StyleSheet } from 'react-native';

// // You can import supported modules from npm
// import { Card } from 'react-native-paper';

// // or any files within the Snack
// import AssetExample from './components/AssetExample';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.paragraph}>
//         Change code in the editor and watch it change on your phone! Save to get a shareable url.
//       </Text>
//       <Card>
//         <AssetExample />
//       </Card>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableWithoutFeedback, Animated , KeyboardAvoidingView , ScrollView  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [selectedButton, setSelectedButton] = useState('Total Sales');
  const [selectedButton2, setSelectedButton2] = useState('Week');
  const buttonAnimation = useRef(new Animated.Value(-300)).current;
 // Start value outside the screen width
  useEffect(() => {
    Animated.timing(buttonAnimation, {
      toValue: 0, // Stop at the center position
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true,
    }).start();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName === 'Total Sales' ? 'Activity Breakdown' : 'Total Sales');
  };

  const handleSelectButton = (buttonName) => {
    setSelectedButton2(buttonName);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Image source={require('./assets/profile-image.png')} style={styles.profileImage} />
          <Text style={styles.balanceText}>My balance</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/notification-icon.png')} style={styles.logo} />
        </View>
      </View>
      <LinearGradient
        colors={['#7394C6', '#076AFF', '#42EEF9']}
        start={{ x: 0, y: 1}}
        end={{ x: 1, y: 0 }}
        style={styles.rectangularBox}
      >
        <Text style={styles.text1}>Current balance</Text>
        <Text style={styles.text2}>$690.40</Text>
        <Animated.View style={[styles.button, { transform: [{ translateX: buttonAnimation }] }]}>
            <Text style={styles.buttonText}>Cash Out</Text>
        </Animated.View>
      </LinearGradient>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableWithoutFeedback onPress={() => handleButtonPress('Total Sales')}>
            <View
              style={[
                styles.secondaryButton,
                selectedButton === 'Total Sales' ? styles.selectedButton : null,
              ]}
            >
              <Text
                style={[
                  styles.secondaryButtonText,
                  selectedButton === 'Total Sales' ? styles.selectedButtonText : null,
                ]}
              >
                Total Sales
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleButtonPress('Activity Breakdown')}>
            <View
              style={[
                styles.secondaryButton,
                selectedButton === 'Activity Breakdown' ? styles.selectedButton : null,
              ]}
            >
              <Text
                style={[
                  styles.secondaryButtonText,
                  selectedButton === 'Activity Breakdown' ? styles.selectedButtonText : null,
                ]}
              >
                Activity Breakdown
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      
      <View>
        <Text style={styles.text3}>Activity Breakdown</Text>
        <View style={styles.buttonContainer2}>
          <TouchableWithoutFeedback onPress={() => handleSelectButton('Hour')}>
            <View style={[styles.secondaryButton2, selectedButton2 === 'Hour' ? { backgroundColor: 'rgba(186, 238, 254, 1)' } : { backgroundColor: 'rgba(242, 242, 242, 1)' }]}>
              <Text style={[styles.secondaryButtonText2, selectedButton2 === 'Hour' ? { color: 'rgba(7, 106, 255, 1)' } : { color: 'black' }]}>Hour</Text>
            </View>
          </TouchableWithoutFeedback>
          {/* Similarly, apply styles for other buttons */}
          <TouchableWithoutFeedback onPress={() => handleSelectButton('Week')}>
            <View style={[styles.secondaryButton2, selectedButton2 === 'Week' ? { backgroundColor: 'rgba(186, 238, 254, 1)' } : { backgroundColor: 'rgba(242, 242, 242, 1)' }]}>
              <Text style={[styles.secondaryButtonText2, selectedButton2 === 'Week' ? { color: 'rgba(7, 106, 255, 1)' } : { color: 'black' }]}>Week</Text>
            </View>
          </TouchableWithoutFeedback>
          {/* Similarly, apply styles for other buttons */}
          <TouchableWithoutFeedback onPress={() => handleSelectButton('Month')}>
            <View style={[styles.secondaryButton2, selectedButton2 === 'Month' ? { backgroundColor: 'rgba(186, 238, 254, 1)' } : { backgroundColor: 'rgba(242, 242, 242, 1)' }]}>
              <Text style={[styles.secondaryButtonText2, selectedButton2 === 'Month' ? { color: 'rgba(7, 106, 255, 1)' } : { color: 'black' }]}>Month</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleSelectButton('Lifetime')}>
            <View style={[styles.secondaryButton2, selectedButton2 === 'Lifetime' ? { backgroundColor: 'rgba(186, 238, 254, 1)' } : { backgroundColor: 'rgba(242, 242, 242, 1)' }]}>
              <Text style={[styles.secondaryButtonText2, selectedButton2 === 'Lifetime' ? { color: 'rgba(7, 106, 255, 1)' } : { color: 'black' }]}>Lifetime</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.subBox}>
            <Image source={require('./assets/dollar-icon.png')} style={styles.logo} />
            <View style={styles.subBox2}>
              <Image source={require('./assets/upward-icon.png')} style={styles.logo} />
              <Text style={styles.text4}>+19.4%</Text>
            </View>
          </View>
          <View style={styles.subBox3}>
            <Text style={styles.text5}>Revenue</Text>
            <Text style={styles.text6}>$500.34</Text>
          </View>
        </View>
        <View style={styles.gap}></View>
        <View style={styles.box}>
          <View style={styles.subBox}>
            <Image source={require('./assets/file-icon.png')} style={styles.logo} />
            <View style={styles.subBox2}>
              <Image source={require('./assets/upward-icon.png')} style={styles.logo} />
              <Text style={styles.text4}>+19.4%</Text>
            </View>
          </View>
          <View style={styles.subBox3}>
            <Text style={styles.text5}>Sales</Text>
            <Text style={styles.text6}>1289</Text>
          </View>
        </View>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.subBox}>
            <Image source={require('./assets/calculator-icon.png')} style={styles.logo} />
            <View style={styles.subBox2}>
              <Image source={require('./assets/upward-icon.png')} style={styles.logo} />
              <Text style={styles.text4}>+19.4%</Text>
            </View>
          </View>
          <View style={styles.subBox3}>
            <Text style={styles.text5}>Revenue</Text>
            <Text style={styles.text6}>$500.34</Text>
          </View>
        </View>
        <View style={styles.gap}></View>
        <View style={styles.box}>
          <View style={styles.subBox}>
            <Image source={require('./assets/files-icon.png')} style={styles.logo} />
            <View style={styles.subBox2}>
              <Image source={require('./assets/upward-icon.png')} style={styles.logo} />
              <Text style={styles.text4}>+19.4%</Text>
            </View>
          </View>
          <View style={styles.subBox3}>
            <Text style={styles.text5}>Listings</Text>
            <Text style={styles.text6}>4021</Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.text7}>Recently Sold</Text>
        <View style={styles.pcontainer}>
          <View style={styles.productContainer}>
            <Image source={require('./assets/product-icon.png')} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>Vanleonet Beach Blanket 10'</Text>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>Feb 14, 2024</Text>
                <Image source={require('./assets/ellipse-icon.png')} style={styles.timeIcon} />
                <Text style={styles.time}>5:19pm</Text>
              </View>
            </View>
          </View>
          <Text style={styles.price}>$35.42</Text>
        </View>
      </View>
      <View>
        <View style={styles.pcontainer}>
          <View style={styles.productContainer}>
            <Image source={require('./assets/product-icon.png')} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>Vanleonet Beach Blanket 10'</Text>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>Feb 14, 2024</Text>
                <Image source={require('./assets/ellipse-icon.png')} style={styles.timeIcon} />
                <Text style={styles.time}>5:19pm</Text>
              </View>
            </View>
          </View>
          <Text style={styles.price}>$35.42</Text>
        </View>
      </View>
      <View>
        <View style={styles.pcontainer}>
          <View style={styles.productContainer}>
            <Image source={require('./assets/product-icon.png')} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>Vanleonet Beach Blanket 10'</Text>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>Feb 14, 2024</Text>
                <Image source={require('./assets/ellipse-icon.png')} style={styles.timeIcon} />
                <Text style={styles.time}>5:19pm</Text>
              </View>
            </View>
          </View>
          <Text style={styles.price}>$35.42</Text>
        </View>
      </View>
      <View>
        <View style={styles.pcontainer}>
          <View style={styles.productContainer}>
            <Image source={require('./assets/product-icon.png')} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>Vanleonet Beach Blanket 10'</Text>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>Feb 14, 2024</Text>
                <Image source={require('./assets/ellipse-icon.png')} style={styles.timeIcon} />
                <Text style={styles.time}>5:19pm</Text>
              </View>
            </View>
          </View>
          <Text style={styles.price}>$35.42</Text>
        </View>
      </View>
      <View>
        <View style={styles.pcontainer}>
          <View style={styles.productContainer}>
            <Image source={require('./assets/product-icon.png')} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>Vanleonet Beach Blanket 10'</Text>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>Feb 14, 2024</Text>
                <Image source={require('./assets/ellipse-icon.png')} style={styles.timeIcon} />
                <Text style={styles.time}>5:19pm</Text>
              </View>
            </View>
          </View>
          <Text style={styles.price}>$35.42</Text>
        </View>
      </View>
      <View>
        <View style={styles.pcontainer}>
          <View style={styles.productContainer}>
            <Image source={require('./assets/product-icon.png')} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>Vanleonet Beach Blanket 10'</Text>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>Feb 14, 2024</Text>
                <Image source={require('./assets/ellipse-icon.png')} style={styles.timeIcon} />
                <Text style={styles.time}>5:19pm</Text>
              </View>
            </View>
          </View>
          <Text style={styles.price}>$35.42</Text>
        </View>
      </View>
      <View>
        <View style={styles.pcontainer}>
          <View style={styles.productContainer}>
            <Image source={require('./assets/product-icon.png')} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>Vanleonet Beach Blanket 10'</Text>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>Feb 14, 2024</Text>
                <Image source={require('./assets/ellipse-icon.png')} style={styles.timeIcon} />
                <Text style={styles.time}>5:19pm</Text>
              </View>
            </View>
          </View>
          <Text style={styles.price}>$35.42</Text>
        </View>
      </View>
      <View>
        <View style={styles.pcontainer}>
          <View style={styles.productContainer}>
            <Image source={require('./assets/product-icon.png')} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>Vanleonet Beach Blanket 10'</Text>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>Feb 14, 2024</Text>
                <Image source={require('./assets/ellipse-icon.png')} style={styles.timeIcon} />
                <Text style={styles.time}>5:19pm</Text>
              </View>
            </View>
          </View>
          <Text style={styles.price}>$35.42</Text>
        </View>
      </View>

    </View>
    </ScrollView>

    <View style={styles.footer}>
        {/* Your footer components go here */}
        <View style={styles.footerwidth}>
          <Image source={require('./assets/home-icon.png')} style={styles.footerImage} />
          <Image source={require('./assets/hut-icon.png')} style={styles.footerImage} />
          <Image source={require('./assets/add-icon.png')} style={styles.footerImage} />
          <Image source={require('./assets/help-icon.png')} style={styles.footerImage} />
          <Image source={require('./assets/profile-icon.png')} style={styles.footerImage} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const buttonWidth = 168;
const buttonHeight = 44;
const headerHeight = windowHeight * 0.1;
const rectangularBoxWidth = windowWidth * 0.9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: windowHeight * 0.05,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.05,
    height: headerHeight,
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 'auto',
  },
  logoContainer: {
    marginLeft: 'auto',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 20,
  },
  balanceText: {
    fontFamily: 'SF Pro',
    fontSize: windowWidth * 0.04,
    fontWeight: '700',
    lineHeight: windowHeight * 0.05,
    letterSpacing: -0.03,
    textAlign: 'left',
    marginLeft: windowWidth * 0.02,
  },
  logo: {
    width: windowWidth * 0.05,
    height: windowHeight * 0.05,
    resizeMode: 'contain',
  },
  rectangularBox: {
    width: rectangularBoxWidth,
    height: windowHeight * 0.28,
    paddingVertical: windowHeight * 0.01,
    paddingHorizontal: windowWidth * 0.162,
    borderRadius: windowHeight * 0.02,
    overflow: 'hidden',
    marginTop: windowHeight * 0.005,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontFamily:'SF Pro',
    fontSize: windowWidth * 0.04,
    fontWeight: '590',
    lineHeight: windowHeight * 0.04,
    letterSpacing: -0.03,
    textAlign: 'center',
    color: 'white',
    width: windowWidth * 0.5,
  },
  text2: {
    fontFamily:'SF Pro',
    fontSize: windowWidth * 0.14,
    fontWeight: '590',
    lineHeight: windowHeight * 0.10,
    letterSpacing: -0.03,
    textAlign: 'center',
    color: 'white',
    width: windowWidth * 0.6,
  },
  button: {
    width: buttonWidth,
    height: buttonHeight,
    borderRadius: windowHeight * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight * 0.01,
    backgroundColor: '#ffffff',
    borderWidth: 1, // Add border for better visibility
    borderColor: '#000000', // Set border color
  },

  buttonText: {
    fontFamily: 'SF Pro',
    fontSize: 16,
    fontWeight: '700',
    color: '#000000', // Text color
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginLeft: windowWidth * 0.05,
    marginTop: windowHeight * 0.020,
    backgroundColor: 'rgba(247, 247, 248, 1)',
    borderRadius: windowHeight * 0.05,
  },
  buttonRow: {
    flexDirection: 'row',
    paddingVertical:windowHeight*0.008,
  },
  secondaryButton: {
    width: 'auto',
    height: windowHeight * 0.05,
    paddingHorizontal: windowWidth * 0.03,
    borderRadius: windowHeight * 0.05,
    backgroundColor: 'rgba(8, 12, 16, 1)',
    shadowColor: 'rgba(25, 89, 253, 0.04)',
    marginRight: windowWidth * 0.02,
    justifyContent:'center',
  },
  secondaryButtonText: {
    fontFamily: 'SF Pro',
    fontSize: windowWidth * 0.03,
    fontWeight: 590,
    textAlign: 'center',
    color: '#ffffff',
  },
  selectedButton: {
    backgroundColor: 'rgba(247, 247, 248, 1)',
  },
  selectedButtonText: {
    color: 'rgba(8, 12, 16, 1)',
  },
  text3: {
    fontFamily: 'SF Pro',
    fontSize: 16,
    fontWeight: 510,
    padding:8,
    marginTop:8,
  },
  buttonContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth * 0.9,
  },
  secondaryButton2: {
    paddingVertical: windowHeight*0.007,
    paddingHorizontal: windowWidth*0.03,
    borderRadius: windowHeight*0.5,
    justifyContent: 'center',
    marginRight: 8,
  },
  secondaryButtonText2: {
    fontFamily: 'SF Pro',
    fontSize: 14,
    fontWeight: 700,
    padding: 8,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  box: {
    width: windowWidth*0.43, // Adjust width as needed
    height: 120, // Adjust height as needed
    backgroundColor: 'rgba(237, 239, 241, 1)',
    borderRadius: windowHeight*0.01,
    alignItems:'center',
  },
  gap: {
    width: 10, // Adjust the width of the gap as needed
  },
  subBox: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align items at the extreme ends
    alignItems: 'center', // Vertically center items
    width: windowWidth*0.35,
  },
  subBox2: {
    flexDirection: 'row',
    alignItems: 'center', // Vertically center items
  },
  text4: {
    color: 'rgba(0, 186, 119, 1)', // Text color
    fontFamily: 'SF Pro',
  },
  subBox3: {
    flexDirection: 'column',
    alignItems: 'flex-start', // Vertically center items
    width:windowWidth*0.35,
    padding:5,
  },
  text5: {
    color: 'rgba(102, 115, 133, 1)', // Text color
    fontFamily: 'SF Pro',
    fontWeight: '510',
    fontSize: 12,
  },
  text6: {
    color: 'rgba(8, 12, 16, 1)', // Text color
    fontFamily: 'SF Pro',
    fontWeight: '590',
    fontSize: 21,
  },
  pcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth*0.88,
    paddingVertical: 10,
    justifyContent:'center',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    color: 'rgba(8, 12, 16, 1)',
    fontFamily: 'SF Pro',
    fontWeight: '590',
    fontSize: 12,
    marginBottom: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    color: 'rgba(102, 115, 133, 1)',
    fontFamily: 'SF Pro',
    fontWeight: '510',
    fontSize: 12,
    marginRight: 5,
  },
  timeIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    marginRight: 5,
  },
  price: {
    color: 'rgba(8, 12, 16, 1)',
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 12,
    position: 'absolute',
    top: 10,
    right: 0,
  },
  text7: {
    color: 'rgba(8, 12, 16, 1)', // Text color
    fontFamily: 'SF Pro',
    fontWeight: '700',
    fontSize: 21,
    marginTop:8,
    padding:5,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: '100%',
    height: 60, // Adjust the height as needed
    backgroundColor: 'rgba(236, 236, 236, 0.75)',
    paddingHorizontal: 20,
  },
  footerwidth:{
    width:'80%',
    flexDirection:'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 19,
  },
  footerImage: {
    width: 25, // Adjust the width of the images as needed
    height: 24, // Adjust the height of the images as needed
  },
});
