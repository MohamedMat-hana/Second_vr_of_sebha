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
    Linking,
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
} from '../constants/Constants';

import Entypo from 'react-native-vector-icons/Entypo';

export default class ELsharawy extends React.Component {


    constructor() {
        super(); {
            this.state = {
                Arr: [
                    {
                        Icon: require("../img/youtube.png"),
                        link: "https://youtube.com/@AlShaarawyOfficial",
                        Boll: true
                    },
                    {
                        Icon: require("../img/sound.jpeg"),
                        link: "https://m.soundcloud.com/dinwhayah",
                        Boll: false

                    },
                    {
                        Icon: require("../img/anghami.jpeg"),
                        link: "https://play.anghami.com/artist/10987790?adj_t=dgl0aa8_64v1dnl&adj_campaign=ios&adj_adgroup=artist&adj_creative=119768618",
                        Boll: false

                    },
                    {
                        Icon: require("../img/link.png"),
                        link: "https://alkabbah.com/recitations/playlist/278015/khoatr-alshykh-mhmd-mtol-alshaarao-llkran-alkrym-kamla-1117-hlk-mhmd-mtoly-alshaaraoy?fbclid=IwAR0q1gwOYTOsAV1_BHllC0AJa1p0wK_9PH2ufPdox6RUnl1XLQQ8qQ1ulYo",
                        Boll: true

                    },
                    {
                        Icon: require("../img/link.png"),
                        link: "https://alkabbah.com/scholar/457/mhmd-mtoly-alshaaraoy/lessons?fbclid=IwAR2BPrPir5F9RUkIftu34MK-kGWrgy7bM6AWgRi5T21j_lX4b2AJmozhBFQ",
                        Boll: true

                    },


                ]
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

    }

    render() {
        return (
            <>
                <StatusBar backgroundColor="#0c0c0c" />
                <View style={styles.Page} >
                    <TouchableOpacity
                        style={styles.Header}
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}>
                        <AntDesign
                            name="arrowleft"
                            color={"#ddd"}
                            size={30}
                        />
                    </TouchableOpacity>


                    <View style={styles.Header1}>


                        <Text style={{
                            fontSize: 20,
                            color: COLORS.background
                        }}>
                            موسوعة الشيخ الشعراوي
                        </Text>

                    </View>
                    <View style={styles.View1}>
                        {this.state.Arr.map((items, index) =>
                            <TouchableOpacity
                                onPress={() => {
                                    if (items.Boll == true) {
                                        this.props.navigation.navigate('Wep', { name: items })
                                    } else {
                                        Linking.openURL(items.link);
                                    }
                                }}
                                style={styles.TouchableOpacityPrees}>
                                <Image
                                    source={items.Icon}
                                    resizeMode={"center"}
                                    style={{
                                        width: width / 2.5,
                                        height: height / 5,
                                        borderRadius: RADIUS.xlRadius
                                    }}
                                />

                            </TouchableOpacity>
                        )}
                    </View>
                </View>


            </>
        )
    }
}
const styles = StyleSheet.create({
    Page: {
        flex: 1,
        alignItems: "center",
        // justifyContent:"center",
        backgroundColor: COLORS.background
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
    Header1: {
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
        width: width,
        alignItems: "flex-end"
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
        borderWidth: 2,
        borderColor: COLORS.gray,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: "center",
        backgroundColor: COLORS.Yellow
    },
    View1: {
        // flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor:"#00f",
        // width: width / 1.5,
        // height: height / 12,
        // paddingVertical: PADDING.smPadding,
        // alignSelf: "center",
        // alignItems: 'center',
        // justifyContent: "center"
    },

    TouchableOpacityPrees: {
        margin: MARGIN.xsMargin,
        // width: width / 2.5,
        // height: height / 5,
        // alignSelf: "center",
        borderRadius: RADIUS.lgRadius,
        alignSelf: "center",
        // borderWidth: 2,
        // borderColor: COLORS.gray,
        // flexDirection: "row",
        // justifyContent: 'space-evenly',
        padding: PADDING.xsPadding,
        // paddingVertical: 2,
        // alignItems: "center",
        backgroundColor: COLORS.blackModal
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