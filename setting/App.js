import react from "react";
import {Text, StyleSheet, Image, View, Dimensions, KeyboardAvoidingView, ScrollView} from "react-native";

const App=()=> {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
    <ScrollView>

    <View style={styles.viewStyle21}> 
    <Text style={styles.textStyle1}> Settings </Text>
    <Image
    style={styles.ImgStyle11}
    source={require("./assets/Frame.png")}
    />
    </View>
    <View style={styles.viewStyle13}> 
    <View style={styles.viewStyle2}> 
    <Image style={styles.ImgStyle2} source={require("./assets/profile.png")}/>
    <View style={styles.viewStyle22}> 
    <Text style={styles.textStyle2}> Patrick Young </Text>
    <Text style={styles.textStyle3}> Edit Profile </Text>
    </View>
    </View>
     </View>
    <View style={styles.viewStyle3}> 
    <View style={styles.viewStyle5}>
    <Text style={styles.textStyle4}> Payment methods </Text>
    <View style={styles.viewStyle10}> 
    <Image style ={styles.ImgStyle10}source={require("./assets/plus.png")}/>
    <Text style={styles.textStyle17}> Add method </Text>
    </View>
    </View>
    <View style={styles.viewStyle17}>
    <Image style={styles.ImgStyle9} source={require("./assets/circle.png")}/>
    <Image style={styles.ImgStyle3}source={require("./assets/amazon.png")}/>
    <Text style={styles.textStyle5}> Amazon Gift cards </Text>
    </View>
    <View style={styles.viewStyle4}>
     <Image style={styles.ImgStyle9} source={require("./assets/circle.png")}/>
    <Image style={styles.ImgStyle4}source={require("./assets/venmoo.png")}/>
    <View> 
    <Text style={styles.textStyle6}> Venmo</Text>
    <Text style={styles.textStyle7}> @tylerma </Text>
    </View>
    </View>
    </View>

    <View style={styles.viewStyle6}> 
    <View style={styles.viewStyle9}>
    <Text style={styles.textStyle8}>Shipping addresses </Text>
    <View style={styles.viewStyle10}> 
    <Image style ={styles.ImgStyle10}source={require("./assets/plus.png")}/>
    <Text style={styles.textStyle17}> Add method </Text>
    </View> 
    </View>
    <View style={styles.viewStyle19}>
    <View style={styles.viewStyle7}> 
    <Text style={styles.textStyle9}> Tyler Ma</Text>
    <Text style={styles.textStyle10}>
     237 Birchmore Mark,
     Lawrenceville GA 30044
     </Text>
    </View>
    <Image style={styles.ImgStyle6}source={require("./assets/pen.png")}/>
    </View>
    </View>

    <View style={styles.viewStyle12}> 
    <Text style={styles.textStyle11}> Preferences</Text>
    <View style={styles.viewStyle18}> 
    <Text style={styles.textStyle12}> Appearences </Text>
    <Image style= {styles.ImgStyle5} source={require("./assets/arrow.png")}/> 
    </View>
    </View>
    <Text style={styles.textStyle13}> Log out</Text>
    <Text style={styles.textStyle14}> Delete account</Text>
    <View style={styles.viewStyle20}> 
    <Image
    style={styles.ImgStyle7}
    source={require("./assets/sellrazeblack.png")}
    />
    <Text style={styles.textStyle15}> version 1.0.0 (2024) </Text>
    <Text style={styles.textStyle16}> Terms & Privacy </Text>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>

  )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles= StyleSheet.create({
  viewStyle22: {margin:0 },
  ImgStyle10: {marginTop:2, width:10, height:10,},
  ImgStyle11: {width: 24, height:24, marginRight:10, },
  ImgStyle9: {width:18, height:18, marginTop: 5,},
  viewStyle21: {flexDirection: "row", marginTop:40, justifyContent: "space-between", },
  ImgStyle7: {marginTop:20, width: 131, height: 51,},
  viewStyle20: {justifyContent: "center", alignItems:"center",},
  ImgStyle6: {alignItems: "center", marginRight: 10, marginTop: 15,},
  viewStyle19: {flexDirection: "row", justifyContent: "space-between"},
  
  viewStyle7: {marginTop:14,  },
  viewStyle18: {flexDirection: "row", marginTop:5, justifyContent: "space-between"},
  ImgStyle5: {width:11.94, height:18, transform: [{ rotate: '180deg' }], marginRight:10},
  // viewStyle1: {width:'100%', height:681,},
  ImgStyle4: {width:33, height:26, marginLeft:6, },
   viewStyle17: {flexDirection: "row",},
  ImgStyle3: {width:33, height:23},
  viewStyle13: {height:36, padding:10},
  
  ImgStyle2:{marginTop:8,},
  textStyle1: { 
    fontWeight:700,
               fontSize: 18,
               textAlign: "center",
               width: 358,
               height: 40,
              //  marginLeft:16,
             
  },
  
  textStyle8:{fontSize:21, fontWeight: 700, },
  textStyle9:{fontSize:14, fontWeight:590, marginLeft:0, },
  textStyle10:{width:167, height:50, color: "grey", fontSize:14, fontWeight: 400, },
 textStyle11: { width: 177, height:30, fontSize:21, fontWeight: 700, },
 textStyle12: { height:30,},
 
 textStyle13: {marginTop:50, width:100, height:50, color:"red", fontSize:16, fontWeight:700},
 textStyle14: {marginTop:20, width:145, height:50, color:"#667385", fontSize:16, fontWeight: 700,},
 textStyle15: {color: "#A1A2A2",fontSize:16, fontWeight:510,},
 textStyle16: {color: "#A1A2A2", fontSize:16, fontWeight:510, marginBottom:20,},

   viewStyle2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 'auto',
    height:38,
  },
  viewStyle6: {
    
    marginTop:46,
    
  
  },
  viewStyle3: {
    justifyContent: "space-between",
  marginTop: 45,
  },
  viewStyle12: {
    height:52,
  marginTop: 46,
  },
  
  
  viewStyle10: {
    flexDirection:"row",
  
  marginRight:10,
  width:88, height:24,
  backgroundColor: "#EDEFF1",
  borderRadius:6,
  paddingVertical:4,
  paddingHorizontal:9,
  
  },
  viewStyle5: {
    width: '100%',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  viewStyle9: {
    width: '100%',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  viewStyle4: {
      flexDirection: "row",
  },
  textStyle2: {
   
    fontFamily: 'SF Pro',
    fontSize:21,
    fontWeight:700,

  },
  textStyle3: {
    
    marginLeft:2.5,
    fontSize:10,
  },
  textStyle4: {

fontSize:21,
fontWeight:700,
  },

  textStyle5: {fontSize:14, fontWeight: 590, },
  textStyle6: {fontSize:14, fontWeight:590, },
  textStyle7: {fontWeight:400, fontSize:10, },
  textStyle17: { fontWeight:590, fontSize:10, color: "#080C10",},
})

export default App;