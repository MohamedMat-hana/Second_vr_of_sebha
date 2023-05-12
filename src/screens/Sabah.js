import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  StatusBar,
  TextInput,
  Dimensions,
  Modal,
  AsyncStorage,
  BackHandler,
  Alert
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  COLORS,
  MARGIN,
  ICONS,
  FONTS,
  RADIUS,
  PADDING
} from '../../src/constants/Constants';

import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');


export default class Sabah extends React.Component {


  constructor() {
    super(); {
      this.state = {
        count: 0,
        Collect: 0,
        Tasbeh: 'صلي علي اشرف المرسلين',
        model_alert: false,
        model_alert_time: false,
        day: "",
        time: "",
        data: "",
        // day1: "",
        // time1: "",
        // data1: "",
      }
    }
  }

  // gethegry() {
  //   let real_time = new Date()
  //   let day = ""
  //   let Day_num = real_time.getDay()
  //   switch (Day_num) {
  //     case 0:
  //       day = "الأحد"
  //       break
  //     case 1:
  //       day = "الأثنين"
  //       break
  //     case 2:
  //       day = "الثلاثاء"
  //       break
  //     case 3:
  //       day = "الاربعاء"
  //       break
  //     case 4:
  //       day = "الخميس"
  //       break
  //     case 5:
  //       day = "الجمعه"
  //       break
  //     default:
  //       day = "السبت"
  //   }
  //   let data_Time = real_time.getDate()
  //   data_Time = data_Time + 8
  //   if (data_Time < 10) {
  //     data_Time = "0" + real_time.getDate()
  //   }
  //   let data_mounth = (real_time.getMonth() + 1)

  //   if (data_mounth < 10) {
  //     data_mounth = "0" + data_mounth
  //   }

  //   let data = data_Time + '/' + "شعبان" + '/' + 1444
  //   this.setState({ day1: day, data1: data })

  // }
  gettime() {
    let real_time = new Date()
    let day = ""
    let Day_num = real_time.getDay()
    switch (Day_num) {
      case 0:
        day = "الأحد"
        break
      case 1:
        day = "الأثنين"
        break
      case 2:
        day = "الثلاثاء"
        break
      case 3:
        day = "الاربعاء"
        break
      case 4:
        day = "الخميس"
        break
      case 5:
        day = "الجمعه"
        break
      default:
        day = "السبت"
    }
    let data_Time = real_time.getDate()
    if (data_Time < 10) {
      data_Time = "0" + real_time.getDate()
    }
    let data_mounth = (real_time.getMonth() + 1)
    if (data_mounth < 10) {
      data_mounth = "0" + data_mounth
    }

    let data = data_Time + '/' + data_mounth + '/' + real_time.getFullYear()

    let mood = "AM"

    let data_Hours = real_time.getHours()
    if (data_Hours > 12) {
      data_Hours -= 12
      mood = "PM"
    }
    if (data_Hours < 10) {
      data_Hours = "0" + data_Hours
    }

    let data_Minutes = real_time.getMinutes()
    if (data_Minutes < 10) {
      data_Minutes = "0" + data_Minutes
    }
    let data_Seconds = real_time.getSeconds()
    if (data_Seconds < 10) {
      data_Seconds = "0" + data_Seconds
    }



    let time = data_Hours + '/' + data_Minutes + '/' + data_Seconds + mood

    this.setState({ day: day, time: time, data: data })

  }

  backAction = () => {

    BackHandler.exitApp()

    return true;
  };

  componentWillUnmount() {
    this.backHandler.remove();
  }


  componentDidMount() {
    // await AsyncStorage.setItem('counter',null)
    this.get_Count()
    this.getContacts()
    this.get_Collect()
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );

  }



  async store_Count(last_edit) {
    await AsyncStorage.setItem("counter", JSON.stringify(last_edit))

  }
  async get_Count() {
    let coun = await AsyncStorage.getItem("counter")



    if (coun == null || coun == 99 || coun == 100) {
      await AsyncStorage.setItem('counter', null)
      this.setState({ count: 0 })

    } else {
      this.setState({ count: coun })

    }
  }

  async store_Collect(last_all) {
    await AsyncStorage.setItem("Collect", JSON.stringify(last_all))

  }
  async get_Collect() {
    let coun = await AsyncStorage.getItem("Collect")



    if (coun == null || coun == 99 || coun == 100) {
      await AsyncStorage.setItem('Collect', null)
      this.setState({ Collect: 0 })

    } else {
      this.setState({ Collect: coun })

    }
  }





  async Plus_num() {
    let new_edit = parseInt(this.state.count)
    let last_edit = parseInt(new_edit + 1)
    let all = parseInt(this.state.Collect)
    let last_all = parseInt(all + 1)
    this.setState({ Collect: last_all })
    this.setState({ count: last_edit })
    if (new_edit == 99) {

      this.setState({ count: 0, model_alert: true })
    }
    this.store_Collect(last_all)

    this.store_Count(last_edit)
  }



  rest() {
    let new_edit = parseInt(this.state.count)
    if (new_edit > 0) {
      this.setState({ count: 0, Tasbeh: 'صلي علي اشرف المرسلين' })
    }
  }



  async storeContacts(vlaue) {
    await AsyncStorage.setItem("contacts", JSON.stringify(vlaue))
  }

  async getContacts() {
    let data2 = await AsyncStorage.getItem("contacts")

    if (data2 == null || data2 == "") {
      data2 = ""
    }


    data2 = JSON.parse(data2)
    this.setState({ Tasbeh: data2 })
  }
  azkar() {
    let new_edit = this.state.Tasbeh
    if (this.state.count < 33) {

      new_edit = ['سبحان الله']
    }
    else if (this.state.count < 66) {

      new_edit = ['الحمد لله']
    }
    else if (this.state.count < 99 && this.state.count > 65) {
      new_edit = ['لا اله الا الله']
    } else {
      new_edit = ['صلي علي اشرف المرسلين']

    }
    this.setState({ Tasbeh: new_edit })
    this.storeContacts(new_edit)

  }
 
  render() {
    return (
      <>
        <StatusBar backgroundColor="#0c0c0c" hidden={false} />


        <ImageBackground source={require('../img/23.jpg')}
          style={{ flex: 1 }}>
          <ScrollView>

            <View style={{
              width: width / 1.09,
              // height: height / 15,
              // backgroundColor: "#fff",
              alignItems: "center",
              alignSelf: "center",
              marginTop: 10
            }}>
              <TouchableOpacity style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "flex-start"
                //  backgroundColor:"#00f"
              }}
                onPress={() => {
                  // this.gethegry(),
                    this.gettime(),
                    this.setState({ model_alert_time: true })
                }}
              >
                <Text style={{
                  color: COLORS.white,
                  fontSize: FONTS.h4,
                  marginHorizontal: 5
                }}>
                  التوقيت
                </Text>
                <AntDesign name='clockcircle' color={COLORS.white} size={20} />
              </TouchableOpacity>
            </View>

            <View style={{
              height: height / 2.5,
              width: width,
              justifyContent: 'space-around',
              alignItems: "flex-start",
            }}>



              <View style={{
                height: "35%",
                width: width,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Animatable.Text
                  animation='pulse'
                  iterationCount="infinite"
                  style={{
                    fontSize: 35,
                    fontWeight: "bold",
                    color: "#bbbbbb",
                  }}>
                  {this.state.Tasbeh}
                </Animatable.Text>

              </View>


              <View style={{
                height: "40%",
                width: width / 1.1,
                justifyContent: "space-between",
                alignItems: "flex-end",
                alignSelf: "center",
                flexDirection: "row"
              }}>
                <TouchableOpacity
                  onPress={() => {
                    this.Plus_num(),
                      this.azkar()
                  }}
                  style={{
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    width: width / 4,
                    // backgroundColor: "#0f0"
                  }}>
                  <Animatable.Text
                    animation='slideInLeft'
                    style={{
                      fontSize: 70,
                      fontWeight: "bold",
                      color: "#bbbbbb",
                      justifyContent: "center",
                    }}>
                    {this.state.count}
                  </Animatable.Text>
                </TouchableOpacity>
                <View
                  style={{
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    // width: width / 4,
                    backgroundColor: "#cbe0eb90",
                    borderRadius: 23,
                    padding: 8,
                    // borderWidth: 1,
                    // borderColor: COLORS.Yellow
                  }}>

                  <Animatable.Text
                    animation='slideInLeft'
                    style={{
                      fontSize: 10,
                      fontWeight: "bold",
                      color: COLORS.black,
                      justifyContent: "center",
                      fontFamily: "Cairo-Black"
                    }}>
                    مجموع تسبيحاتك
                  </Animatable.Text>

                  <Animatable.Text
                    animation='slideInLeft'
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: COLORS.black,
                      justifyContent: "center",
                    }}>
                    {this.state.Collect}
                  </Animatable.Text>
                </View>
                <View style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  width: width / 4,
                  // backgroundColor: "#0f0"
                }}>
                  <Animatable.Text
                    animation='slideInRight'
                    style={{
                      fontSize: 40,
                      fontWeight: "bold",
                      color: "#bbbbbb",
                      justifyContent: "center"
                    }}>
                    99
                  </Animatable.Text>
                </View>
              </View>

            </View>

            <Animatable.View
              animation='fadeIn'
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}>

              <TouchableOpacity
                onPress={() => {
                  this.Plus_num(),
                    this.azkar()
                }}
                style={{
                  width: 300,
                  height: 300,
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 150,
                  backgroundColor: COLORS.Yellow,
                  marginTop: 10
                }}>
                <Text style={{
                  fontSize: 50,
                  fontWeight: "bold",
                  color: COLORS.white,
                  fontFamily: "Cairo-Black",
                }}>
                  سبح
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { this.rest() }}
                style={{
                  width: 50,
                  height: 50,
                  alignSelf: "flex-start",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 400,
                  backgroundColor: COLORS.Yellow,
                  marginTop: 10
                }}>
                <Text style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: COLORS.white,
                }}>
                  reset
                </Text>
              </TouchableOpacity>

            </Animatable.View>
          </ScrollView>

        </ImageBackground>


        <Modal
          animationType="slide"
          transparent={true}

          visible={this.state.model_alert}
          onRequestClose={() => {
            this.setState({ model_alert: false });
          }}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: height,
                width: width,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  width: '80%',
                  backgroundColor: "#E4DCAD",
                  borderRadius: 20,
                  elevation: 5,
                  paddingVertical: 10,
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#735F32",

                    // borderColor: COLORS.black,
                    marginBottom: 10
                  }}

                >


                  <Text
                    style={{
                      color: COLORS.black,
                      fontWeight: 'bold',
                      fontSize: 22,
                      textAlign: 'center',
                    }}>
                    اتممت التسبيحات
                  </Text>
                </View>

                <View
                  style={{

                    width: "100%",

                  }}
                >


                  {/* <Text
                    style={{
                      color: '#ddd',
                      // fontWeight: 'bold',
                      fontSize: 22,
                      textAlign: "center", marginRight: 10
                    }}>
                    اتممت التسبيحات
                  </Text> */}
                  <Text
                    style={{
                      color: COLORS.black,
                      // fontWeight: 'bold',
                      fontSize: 15,
                      textAlign: "left",
                      padding: PADDING.smPadding
                    }}>
                    الرجاء الدعاء ل جدتي فاديه حامد المرسي وجدتي بهجات محمد شعير والحاجة كاميلا محمد عثمان وجميع اموات الْمُسْلِمِينَ
                  </Text>

                </View>

                <TouchableOpacity
                  style={{
                    width: '30%',
                    alignSelf: "flex-start",
                    padding: 10,
                    backgroundColor: "#735F32",
                    borderRadius: 10,
                    elevation: 3,
                    marginBottom: 5,
                    flexDirection: 'row',
                    justifyContent: "center",
                    alignItems: 'center',
                    marginLeft: 10
                  }}
                  onPress={() => {
                    this.rest()
                    this.setState({ model_alert: false })
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: '#fff',
                      fontSize: 18,
                    }}>
                    حسناّ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}

          visible={this.state.model_alert_time}
          onRequestClose={() => {
            this.setState({ model_alert_time: false });
          }}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: height,
                width: width,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  width: '80%',
                  backgroundColor: "#E4DCAD",
                  borderRadius: 20,
                  elevation: 5,
                  paddingVertical: 10,
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#735F32",

                    // borderColor: COLORS.black,
                    marginBottom: 10
                  }}

                >


                  <Text
                    style={{
                      color: COLORS.black,
                      fontWeight: 'bold',
                      fontSize: 22,
                      textAlign: 'center',
                    }}>
                    توقيت اليوم
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",

                  }}
                >
                  <Text
                    style={{
                      color: COLORS.black,
                      // fontWeight: 'bold',
                      fontSize: 15,
                      textAlign: "left",
                      padding: PADDING.smPadding
                    }}>

                    الساعة  {"\n"}
                    اليوم  {"\n"}
                    التاريخ
                  </Text>

                  <Text
                    style={{
                      color: COLORS.black,
                      // fontWeight: 'bold',
                      fontSize: 15,
                      textAlign: "left",
                      padding: PADDING.smPadding
                    }}>

                    {this.state.time}{"\n"}
                    {this.state.day}{"\n"}
                    {this.state.data}{"\n"}
                    {/* {this.state.data1} */}
                  </Text>

                </View>

                <TouchableOpacity
                  style={{
                    width: '30%',
                    alignSelf: "flex-start",
                    padding: 10,
                    backgroundColor: "#735F32",
                    borderRadius: 10,
                    elevation: 3,
                    marginBottom: 5,
                    flexDirection: 'row',
                    justifyContent: "center",
                    alignItems: 'center',
                    marginLeft: 10
                  }}
                  onPress={() => {
                    this.setState({ model_alert_time: false })
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: '#fff',
                      fontSize: 18,
                    }}>
                    تم
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>


      </>
    )
  }
}
const styles = StyleSheet.create({

})