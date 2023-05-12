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
    Linking,
    BackHandler
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import { COLORS, FONTS, MARGIN } from '../constants';
const { width, height } = Dimensions.get('window');


export default class Option extends React.Component {
    constructor(props) {
        super(props); {
            this.state = {
                Option: [
                    {
                        photo: require("../img/mos7af.jpg"),
                        word: "تلاوات مشاهير القراء"
                    }, {
                        photo: require("../img/iconvideo.png"),
                        word: "فيديوهات اسلاميه و توعية"
                    },
                     {
                        photo: require("../img/ELsharawy.jpg"),
                        word: "موسوعة الشيخ الشعراوي"
                    },
                    {
                        photo: require("../img/bin.jpg"),
                        word: "مدوناتك"
                    },
                   


                ]
            }
        }
    }
    Move(index) {
        if (index == 0) {
            this.props.navigation.navigate('Move', { screen: "Quran" })
        }
        else if (index == 1) {
            this.props.navigation.navigate('Move', { screen: "Video" })
        }
        else if (index == 3) {
            this.props.navigation.navigate('Move', { screen: 'Note' })
        }
        else if (index == 2) {
            this.props.navigation.navigate('Move', { screen: 'ELsharawy' })
        }
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor="#0c0c0c" />
                <View style={styles.Page}>
                    {/* <View style={styles.Contact}> */}
                    <View style={styles.Header}>
                        <Text style={{
                            fontSize: 20,
                            color: COLORS.background
                        }}>منوعات</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL('https://linktr.ee/mohamedmathana');
                        }}
                        style={styles.Header1}>
                        <Text style={{
                            fontSize: 13,
                            color: COLORS.black
                        }} >  تواصل معنا   </Text>
                        <FontAwesome5 name='user-circle' size={20} color={COLORS.black} />
                    </TouchableOpacity>


                    {/* </View> */}

                    <View style={styles.ViewBoxs} >
                        <ScrollView>
                            {this.state.Option.map((items, index) =>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.Move(index)}
                                    style={styles.buttonPage} >
                                    <Image source={items.photo}
                                        resizeMode={'cover'}
                                        style={styles.Image} />
                                    <Text style={{ fontSize: FONTS.h3, color: "#000" }} >{items.word}</Text>
                                </TouchableOpacity>
                            )}
                        </ScrollView>
                    </View>


                </View>
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
    Contact: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    Header: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        padding: 10,
        paddingHorizontal: 40,
        borderRadius: 20,
        backgroundColor: "#bbbbbb",
        marginVertical: 10
    },
    Header1: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "flex-end",
        alignItems: "center",
        marginTop: -35,
        marginBottom: MARGIN.xsMargin,
        marginRight: 11,
        backgroundColor: "#D2D8D880",
        borderRadius: 22,
    },
    ViewBoxs: {
        // width: width,
        flex: 1,
        // flexDirection: "row",
        // flexWrap: "wrap",
        // borderTopRightRadius: 30,
        // borderTopLeftRadius: 30,
        borderRadius: 20,
        paddingHorizontal: 20,
        backgroundColor: COLORS.premeim,
        justifyContent: 'center',
        alignItems: "center"
    },
    buttonPage: {
        // flexDirection: "row",
        width: width / 1.3,
        margin: 5,
        // height: height / 4,
        margin: 10,
        borderRadius: 20,
        backgroundColor: COLORS.gray,
        alignItems: "center",
        justifyContent: 'center',
        // padding: 2
    },
    Image: {
        // marginTop: 0,
        width: width / 1.3,
        height: height / 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    }
});