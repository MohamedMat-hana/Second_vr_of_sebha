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
import { COLORS } from '../constants';
const { width, height } = Dimensions.get('window');
import WebView from 'react-native-webview'


export default class Video extends React.Component {


    constructor() {
        super(); {
            this.state = {
                video: [
                    // {
                    //     logo: require("../img/sharawi.jpg"),
                    //     name: "الشيخ محمد متولي الشعراوي",
                    //     Caption: "القناة الرسمية لفضيلة الشيخ محمد متولي الشعراوي",
                    //     link: "https://www.youtube.com/@AlShaarawyOfficial/featured",
                    //     resizeMode: "contain",
                    //     Captionbool: true
                    // },
                    {
                        logo: require("../img/waee.jpg"),
                        name: "قناة وعي",
                        Caption: "بودكاست وعي مع أحمد عامر، حازم الصديق وشريف علي",
                        link: "https://www.youtube.com/c/%D9%88%D8%B9%D9%8A-%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA",
                        resizeMode: "contain",
                        Captionbool: true
                    },
                    {
                        logo: require("../img/eyad.jpg"),
                        name: "الدكتور إياد قنيبي ",
                        // Caption: "بودكاست وعي مع أحمد عامر، حازم الصديق وشريف علي",
                        link: "https://www.youtube.com/@eyadqunaibi/featured",
                        resizeMode: "contain",
                        Captionbool: false
                    },
                    {
                        logo: require("../img/ayman.jpg"),
                        name: "م. أيمن عبدالرحيم",
                        // Caption: "بودكاست وعي مع أحمد عامر، حازم الصديق وشريف علي",
                        link: "https://www.youtube.com/channel/UCi-3sFnwkkgqCPqSlE10NFg",
                        resizeMode: "contain",
                        Captionbool: false
                    },
                    {
                        logo: require("../img/makany.jpg"),
                        name: "فقه النفس/ مكاني",
                        Caption: 'تجمع محاضرات ودروس واستشارات عبدالرحمن ذاكر الهاشمي',
                        link: "https://www.youtube.com/c/MakanyWorld",
                        resizeMode: "cover",
                        Captionbool: true
                    },
                    {
                        logo: require("../img/ahmedamer.jpg"),
                        name: "مهندس احمد عامر",
                        Caption: " سلسله عن السيره النبويه",
                        link: "https://www.youtube.com/channel/UCah56qawts736uNxZA3inLQ",
                        resizeMode: "cover",
                        Captionbool: true
                    },
                    {
                        logo: require("../img/ahmedamer.jpg"),
                        name: "احمد عبد المنعم / انه القران",
                        Caption: " تفسير القران ",
                        link: "https://www.youtube.com/c/itsthequran",
                        resizeMode: "contain",
                        Captionbool: true
                    },
                    {
                        logo: require("../img/online.jpg"),
                        name: "دروس أونلاين/ احمد ابو زيد",
                        Caption: "هتعليم كيفيه عمل اي شئ- الى حد ما",
                        link: "https://www.youtube.com/channel/UCi-3sFnwkkgqCPqSlE10NFg",
                        resizeMode: "contain",
                        Captionbool: true
                    },
                    {
                        logo: require("../img/AhmedElsayed.jpg"),
                        name: "الشيخ أحمد السيد",
                        // Caption: "بودكاست وعي مع أحمد عامر، حازم الصديق وشريف علي",
                        link: "https://www.youtube.com/@alsayyed_ah/videos",
                        resizeMode: "contain",
                        Captionbool: false
                    },
                    {
                        logo: require("../img/th.jpeg"),
                        name: "الشَّيخ سَعيد الكَمَلي",
                        Caption: "خطب محاضرات دروس إسلامية على منهج أهل السنة والسلف الصالح",
                        link: "https://www.youtube.com/@alsayyed_ah/videos",
                        resizeMode: "contain",
                        Captionbool: true
                    },
                    {
                        logo: require("../img/essam.jpg"),
                        name: " الشيخ البشير عصام المراكشي",
                        Caption: " تزكية النفوس وعلاج القلوب والمران على حسن الخلق",
                        link: "https://www.youtube.com/@alsayyed_ah/videos",
                        resizeMode: "contain",
                        Captionbool: true
                    },
                    {
                        logo: require("../img/amir.jpeg"),
                        name: "أمير منير",
                        Caption: "فيديوهات دينية شبهنا .. بلغتنا .. بطريقتنا .. احنا الشباب ",
                        link: "https://www.youtube.com/@amirmounirofficial",
                        resizeMode: "cover",
                        Captionbool: true
                    },
                    {
                        logo: require("../img/hassan.jpeg"),
                        name: "الدكتور محمد حسان",
                        Caption: " تنشر القناة كافة المقاطع والفتاوى الخاصة بالشيخ ",
                        link: "https://www.youtube.com/@user-zu4hg7mt4f",
                        resizeMode: "cover",
                        Captionbool: true
                    },
                    {
                        logo: require("../img/ghalez.jpeg"),
                        name: "الشيخ محمد الغليظ",
                        // Caption: " تنشر القناة كافة المقاطع والفتاوى الخاصة بالشيخ ",
                        link: "https://www.youtube.com/c/mohelghaleez",
                        resizeMode: "cover",
                        Captionbool: false
                    },
                    {
                        logo: require("../img/quran.jpeg"),
                        name: "تفسير القرآن كاملًا بالترتيب",
                        // Caption: " تنشر القناة كافة المقاطع والفتاوى الخاصة بالشيخ ",
                        link: "https://youtube.com/playlist?list=PLrtO3jwCIOlA3hpsBTQNsHZVA_s--Sldh",
                        resizeMode: "cover",
                        Captionbool: false
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
                <View style={{ backgroundColor: "#0c0c0c" }} >
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
                <View style={styles.Page}
                 >
                    <ScrollView>
                        <View style={styles.Header}>


                            <Text style={{
                                fontSize: 20,
                                color: COLORS.background
                            }}>قنوات اسلاميه و توعية</Text>

                        </View>
                        {this.state.video.map((items, index) =>
                            <View style={{
                                backgroundColor: "#bbbbbb",
                                borderRadius: 30,
                                marginBottom: 10
                            }} >
                                <Image
                                    source={items.logo}
                                    resizeMode={items.resizeMode}
                                    style={styles.ViewVideo} />
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate('Wep', { name: items })

                                        // Linking.openURL(items.link);
                                    }}
                                    style={styles.buttonVideo} >
                                    <View style={{ width: width / 1.5 }}>
                                        <Text style={{ fontSize: 20, color: "#000" }}> {items.name}  </Text>
                                        {items.Captionbool ? (<Text style={{ fontSize: 10, color: "#000" }}> {items.Caption} </Text>
                                        ) : (null)}
                                    </View>
                                    <AntDesign name='youtube' color={"#f00"} size={60} />
                                </TouchableOpacity>

                            </View>
                        )}
                    </ScrollView>
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
    Header: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        padding: 10,
        paddingHorizontal: 50,
        borderRadius: 20,
        backgroundColor: "#bbbbbb",
        marginVertical: 10
    },
    ViewVideo: {
        width: width / 1.1,
        height: height / 4,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: "#000000",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonVideo: {
        flexDirection: "row",
        width: width / 1.1,
        // height: height / 12,
        // borderRadius: 20,
        // backgroundColor: "#bbbb",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: 20
    }
});