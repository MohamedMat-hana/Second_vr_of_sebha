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
    BackHandler
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');
import {
    COLORS,
    MARGIN,
    ICONS,
    FONTS,
    RADIUS,
    PADDING
} from '../../src/constants/Constants';

import Entypo from 'react-native-vector-icons/Entypo';

export default class Note extends React.Component {


    constructor() {
        super(); {
            this.state = {
                list: [],
                Model_add: false,
                AddWords: "",
                view: false,

            }
        }
    }
    backAction = () => {

        this.props.navigation.navigate('HomeStack', { screen: "Option" })
        return true;
    };

    componentWillUnmount() {
        this.backHandler.remove();
    }


    componentDidMount() {
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
        this.getnote()

    }


    async storeContacts(vlaue) {
        await AsyncStorage.setItem("contacts", JSON.stringify(vlaue))
    }

    async getnote() {
        let data2 = await AsyncStorage.getItem("contacts")

        if (data2 == null || data2 == "") {
            data2 = ""
        }


        data2 = JSON.parse(data2)
        this.setState({ list: data2 })
    }

    Add_item() {
        let all_list = this.state.list
        let new_obj = {
            AddWords: this.state.AddWords,
            view: true
        }
        all_list.push(new_obj)
        this.setState({ list: all_list, Model_add: false, view: true, })
        this.storeContacts(all_list)


    }
    delete_Item(index) {
        let all_list = this.state.list
        all_list.splice(index, 1)
        this.setState({ list: all_list })
        this.storeContacts(all_list)

    }

    render() {
        return (
            <>
                <StatusBar backgroundColor={COLORS.background} />
                <View style={{ backgroundColor: COLORS.background }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}>
                        <AntDesign
                            name="arrowleft"
                            color={"#ddd"}
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.Page}>

                    {/* <ImageBackground style={styles.Page}
                    source={require("../img/21.jpg")}
                    resizeMode={'cover'}> */}
                    <ScrollView>
                        <View style={styles.HeaderText}>


                            <Text style={{
                                fontSize: 20,
                                color: COLORS.background
                            }}>
                                اضف تحدياتك ومدوناتك
                            </Text>

                        </View>


                        <View style={styles.Header}>
                            <Text style={styles.text1}>
                                اضافة
                            </Text>

                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({
                                        Model_add: true,
                                        AddWords: "",
                                    })
                                }}
                                style={styles.TouchableOpacityPrees}>
                                <AntDesign name='plus' size={ICONS.lIcon} color={COLORS.blackModal} />


                            </TouchableOpacity>
                        </View>

                        {this.state.list.map((item, index) => (
                            item.AddWords == "" ? (
                                null
                            ) : (
                                <Animatable.View
                                    animation='bounceIn' easing={"ease-in-circ"}
                                    style={styles.animationView}>

                                    <View style={styles.View1}>
                                        <Text style={styles.text2}>
                                            {item.AddWords}
                                        </Text>

                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.delete_Item(index)
                                        }}>
                                        <FontAwesome5 name='trash-alt' color={COLORS.blackModal} size={ICONS.mIcon} />
                                    </TouchableOpacity>

                                </Animatable.View>
                            )
                        ))}
                    </ScrollView>
                    {/* </ImageBackground> */}
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}

                    visible={this.state.Model_add}
                    onRequestClose={() => { this.setState({ Model_add: false }) }}  >

                    <View style={{ justifyContent: "center", flex: 1 }}>
                        <View style={{
                             borderColor: "#735F32",
                            backgroundColor: "#E4DCAD",
                    borderWidth:1,
                            width: width / 1.09,
                            justifyContent: "center",
                            alignSelf: "center",
                            borderRadius: RADIUS.xlRadius,
                            padding: PADDING.mdPadding
                        }}>
                            <TextInput
                                value={this.state.AddWords}
                                onChangeText={(value) => { this.setState({ AddWords: value }) }}
                                onPress={() => {
                                    this.setState({ Model_add: true })
                                }}

                                style={{
                                    color: COLORS.blackModal,
                                    height: height / 12,
                                    width: width / 1.2,
                                    borderRadius: RADIUS.xlRadius,
                                    borderWidth: 2,
                                    borderColor: "#735F32",
                                    justifyContent: "center",
                                    alignItems: 'center',
                                    alignSelf: "center",
                                    marginTop: MARGIN.lgMargin,
                                    fontSize: FONTS.h3,
                                    paddingHorizontal: PADDING.lgPadding,
                                }}
                                placeholder={"اضافة تحدي"}
                                placeholderTextColor={COLORS.white50}>

                            </TextInput>

                            <View style={{
                                flexDirection: "row",
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                            }}>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({ Model_add: false })
                                    }}
                                    style={{
                                        height: height / 12,
                                        width: width / 3,
                                        borderRadius: RADIUS.lgRadius,
                                        borderWidth: 2,
                                        borderColor: "#735F32",
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        alignSelf: "center",
                                        marginTop: MARGIN.lgMargin,
                                    }}>
                                    <Text style={{
                                        fontSize: FONTS.h4,
                                        color: COLORS.black
                                    }}>
                                        إلغاء
                                    </Text>


                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.state.AddWords == "" ? (alert("لا تجعل الحقل فارغ")) : (this.Add_item())
                                    }}
                                    style={{
                                        height: height / 12,
                                        width: width / 3,
                                        borderRadius: RADIUS.lgRadius,
                                        borderWidth: 2,
                                        borderColor: "#735F32",
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        alignSelf: "center",
                                        marginTop: MARGIN.lgMargin,
                                    }}>
                                    <Text style={{
                                        fontSize: FONTS.h4,
                                        color: COLORS.black
                                    }}>
                                        أضف
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
    Page: {
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: "center",
    },
    HeaderText: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        padding: 10,
        paddingHorizontal: 50,
        borderRadius: 20,
        backgroundColor: "#bbbbbb",
        marginVertical: 10
    },
    Header: {
        width: width / 1.05,
        height: height / 20,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        alignSelf: "center",
        // backgroundColor: COLORS.Yellow,
        marginTop: MARGIN.xsMargin
    },
    text1: {
        alignSelf: "center",
        fontSize: FONTS.h3,
        color: COLORS.white,
    },
    animationView: {
        margin: MARGIN.xsMargin,
        width: width / 1.05,
        // height: height / 12,
        alignSelf: "center",
        borderRadius: RADIUS.mdRadius,
        borderWidth: 3,
        borderColor: "#735F32",
        backgroundColor: "#E4DCAD",
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: "center",
    },
    View1: {
        width: width / 1.5,
        // height: height / 12,
        paddingVertical: PADDING.smPadding,
        alignSelf: "center",
        alignItems: 'flex-start',
        justifyContent: "center"
    },
    text2: {
        fontSize: FONTS.h4,
        color: COLORS.background
    },
    TouchableOpacityPrees: {
        // margin: MARGIN.xsMargin,
        // width: width / 1.05,
        // height: height / 12,
        alignSelf: "center",
        borderRadius: RADIUS.xsRadius,
        borderWidth: 2,
        borderColor: "#735F32",
        backgroundColor: "#E4DCAD",
        // flexDirection: "row",
        // justifyContent: 'space-evenly',
        paddingHorizontal: PADDING.mdPadding,
        paddingVertical: 2,
        alignItems: "center",
     },
    View2: {
        // width: 40,
        // height: 40,
        // alignSelf: "center",
        // borderRadius: RADIUS.mdRadius,
        // borderWidth: 1,
        // borderColor: COLORS.white50,
        // justifyContent: "center",
        // alignItems: "center",
    },
    View3: {
        width: width / 1.5,
        height: height / 12,
        alignSelf: "center",
        alignItems: 'flex-start',
        justifyContent: "center"
    },
    text3: {
        fontSize: FONTS.h4,
        color: COLORS.white50
    },

});