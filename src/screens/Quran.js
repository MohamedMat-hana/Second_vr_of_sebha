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
import { COLORS, FONTS } from '../constants';
const { width, height } = Dimensions.get('window');
import WebView from 'react-native-webview'

export default class Video extends React.Component {


    constructor() {
        super(); {
            this.state = {
                video: [

                    {
                        name: "محمد رفعت",
                        link: "https://alkabbah.com/recitations/playlist/288369/bak-mn-altlaoat-alkhashaa-o-alnadr-llkary-mhmd-rfaat243-tlao-mhmd-rfaat",
                        resizeMode: "contain",view:true
                    }, 
                    {
                        name: " محمد صديق المنشاوى",
                        link: "https://alkabbah.com/recitations/playlist/335215/mksm-agzaaa-mshf-almnshaoy-mrtl-30-gzaa-kaml-mhmd-sdyk-almnshaoy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "محمود الشحات",
                        link: "https://alkabbah.com/recitations/playlist/21029/mhmod-alshhat-altlaoat-alkhashaa-o-alnadr-mhmod-alshhat",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "محمود صديق المنشاوى",
                        link: "https://alkabbah.com/recitations/playlist/31484/mhmod-sdyk-almnshao-altlaoat-alkhashaa-o-alnadr-mhmod-sdyk-almnshao",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "مشارى بن راشد العفاسى",
                        link: "https://alkabbah.com/recitations/playlist/106583/mshar-bn-rashd-alaafas-god-aaaly-mshary-bn-rashd-alaafasy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " اسلام صبحي",
                        link: "https://alkabbah.com/recitations/playlist/239667/almshf-almrtl-aslam-sbhy-god-128-k-b-aslam-sbhy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "محمود خليل الحصري",
                        link: "https://alkabbah.com/recitations/playlist/244875/almshf-almrtl-llkary-mhmod-khlyl-alhsry-broay-hfs-aan-aaasm-bgod-32-k-mhmod-khlyl-alhsr",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "محمود على البنا",
                        link: "https://alkabbah.com/recitations/playlist/335224/mksm-agzaaa-mshf-mhmod-aaly-albna-mrtl-30-gzaa-kaml-mhmod-aal-albna",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "مصطفى إسماعيل",
                        link: "https://alkabbah.com/recitations/playlist/245545/almshf-almrtl-llkary-mstf-asmaaayl-broay-hfs-aan-aaasm-bgod-32-k-mstf-asmaaayl",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أبو الحسن محي الدين الكردي ",
                        link: "https://alkabbah.com/recitations/playlist/335316/mksm-agzaaa-mshf-abo-alhsn-mhy-aldyn-alkrdy-30-gzaa-kaml-abo-alhsn-mhy-aldyn-alkrdy",
                        resizeMode: "contain",view:true

                    },
                    {
                        name: "أبو الوليد الهاشمي",
                        link: "https://alkabbah.com/recitations/playlist/335326/mksm-agzaaa-mshf-abo-alolyd-alhashmy-roay-orsh-mn-alasbhany-30-gzaa-kaml-abo-alolyd-alhashmy",
                        resizeMode: "contain",view:true

                    },
                    {
                        name: "أبو اليمان عدنان المسقلي",
                        link: "https://alkabbah.com/recitations/playlist/165775/almshf-almrtl-llkary-abo-alyman-aadnan-almskly-abo-alyman-aadnan-almskly",
                        resizeMode: "contain",view:true

                    },
                    {
                        name: "أبو بكر الشاطري",
                        link: "https://alkabbah.com/recitations/playlist/68943/alkary-abo-bkr-alshatry-hfs-aan-aaasm-abo-bkr-alshatry",
                        resizeMode: "contain",view:true

                    },
                    {
                        name: "أبو بكر عطية عبد المتعال حجاجي",
                        link: "https://alkabbah.com/recitations/playlist/363316/mshf-abo-bkr-aaty-aabd-almtaaal-hgagy-114-sor-kaml-roay-albzy-god-aaaly-128-k-b-abo-bkr-aaty-aabd-almtaaal-hgagy",
                        resizeMode: "contain",view:true

                    },
                    {
                        name: "أبو عبد الله المظفر",
                        link: "https://alkabbah.com/recitations/playlist/49936/abo-aabd-allh-almthfr-broay-kalon-aan-nafaa-almshf-kamla-abo-aabd-allh-almthfr",
                        resizeMode: "contain",view:true

                    },
                    {
                        name: "أبو عبد الله منير المظفر",
                        link: "https://alkabbah.com/recitations/playlist/158105/abo-aabd-allh-mnyr-almthfr-abo-aabd-allh-mnyr-almthfr",
                        resizeMode: "contain",view:true

                    },
                    {
                        name: "أبو يوسف الخرخاشي",
                        link: "https://alkabbah.com/recitations/playlist/317347/mshf-alshykh-abo-yosf-alkhrkhashy-broay-kalon-aan-nafaa-mrtl-abo-yosf-alkhrkhashy",
                        resizeMode: "contain",view:true

                    },
                    {
                        name: " أحمد عيسى المعصراوي",
                        link: "https://alkabbah.com/recitations/playlist/264623/mshf-ahmd-aays-almaasraoy-roay-roys-aan-yaakob-alhdrmy-mn-mokaa-ndaaa-alaslam-bgod-aaaly-ahmd-almaasraoy",
                        resizeMode: "contain",view:true

                    },
                    {
                        name: "أحمد عبد السلام كراسي",
                        link: "https://alkabbah.com/recitations/playlist/239552/almshf-almrtl-ahmd-aabd-alslam-krasy-god-128-k-b-ahmd-krasy",
                        resizeMode: "contain",view:true

                    },
                    {
                        name: "أحمد أبو المجد الهوى",
                        link: "https://alkabbah.com/recitations/playlist/248102/altlaoat-oalhflat-oaltsgylat-alkhargy-alkary-ahmd-abo-almgd-alho-ahmd-abo-almgd-alho",
                        resizeMode: "contain",view:true

                    },
                    {
                        name: "أحمد أبو المعاطىي",
                        link: "https://alkabbah.com/recitations/playlist/318629/171-tlao-khashaa-onadr-llshykh-ahmd-abo-almaaaty-ahmd-abo-almaaaty",
                        resizeMode: "contain",view:true

                    },
                    {
                        name: "أحمد البحيرى",
                        link: "https://alkabbah.com/recitations/playlist/2436/ahmd-albhyr-altlaoat-alkhashaa-o-alnadr-ahmd-albhyr",
                        resizeMode: "contain",view:true
                    },
                     {
                        name: "أحمد الحذيفى",
                        link: "https://alkabbah.com/recitations/playlist/197721/almshf-almrtl-ahmd-alhthyf-ahmd-alhthyf",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أحمد الدباغ",
                        link: "https://alkabbah.com/recitations/playlist/335302/mksm-agzaaa-mshf-ahmd-aldbagh-30-gzaa-kaml-ahmd-aldbagh",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد الزريقي",
                        link: "https://alkabbah.com/recitations/playlist/55554/ahmd-alzryky-nskh-alathaaa-almsry-ahmd-alzryky",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد السعيد مندور",
                        link: "https://alkabbah.com/recitations/playlist/154834/mn-tlaoat-alkary-ahmd-alsaayd-mndor-17-tlao-rayaa-ahmd-alsaayd-mndor",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد الشافعي  ",
                        link: "https://alkabbah.com/recitations/playlist/212962/ahmd-alshafaay-almshf-almrtl-ahmd-alshafaay",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد العبيدي  ",
                        link: "https://alkabbah.com/recitations/playlist/234280/ahmd-alaabydy-170-tlao-ahmd-alaabydy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد المصباحي",
                        link: "https://alkabbah.com/recitations/playlist/257903/almshf-almrtl-llkary-ahmd-almsbahy-bgod-32-k-ahmd-almsbahy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد عيسى المعصراوي",
                        link: "https://alkabbah.com/recitations/playlist/264688/mshf-ahmd-aays-almaasraoy-broay-albzy-aan-abn-kthyr-almky-mn-mokaa-ndaaa-alaslam-bgod-aaaly-ahmd-almaasraoyo",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد النفيس",
                        link: "https://alkabbah.com/recitations/playlist/232888/almshf-almrtl-bsot-alkaryaa-ahmd-alnfys-ahmd-alnfys",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد الهذيلي",
                        link: "https://alkabbah.com/recitations/playlist/48153/ahmd-alhthyly-ahmd-alhthyly",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد العجمى",
                        link: "https://alkabbah.com/recitations/playlist/257559/almshf-almrtl-llkary-ahmd-alaagmy-bgod-32-k-ahmd-bn-aaly-alaagmy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد بن قاسم",
                        link: "https://alkabbah.com/recitations/playlist/68729/almshf-broay-orsh-aan-nafaa-llkaraa-ahmd-bn-kasm-ahmd-bn-kasm",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أحمد ديبان",
                        link: "https://alkabbah.com/recitations/playlist/335313/mksm-agzaaa-mshf-ahmd-dyban-broay-albzy-30-gzaa-kaml-ahmd-bn-mhmd-dyban",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أحمد جمال",
                        link: "https://alkabbah.com/recitations/playlist/314671/almshf-almrtl-llshykh-ahmd-gmal-ahmd-gmal",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد جوهر",
                        link: "https://alkabbah.com/recitations/playlist/363285/mshf-ahmd-gohr-114-sor-kaml-god-aaaly-128-k-b-ahmd-gohr",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "احمد حسن سالمان",
                        link: "https://alkabbah.com/recitations/playlist/299054/tlaoat-nadr-llkary-ahmd-hsn-salman-ahmd-hsn-salman",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد حطيبة المصحف كاملا",
                        link: "https://alkabbah.com/recitations/playlist/49586/ahmd-htyb-almshf-kamla-ahmd-htyb",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أحمد حماد",
                        link: "https://alkabbah.com/recitations/playlist/363281/mshf-ahmd-hmad-114-sor-kaml-god-aaaly-128-k-b-ahmd-hmad",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد خضر الطرابلسى",
                        link: "https://alkabbah.com/recitations/playlist/41225/ahmd-khdr-altrabls-ahmd-khdr-altrabls",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أحمد سعود",
                        link: "https://alkabbah.com/recitations/playlist/268441/mshf-ahmd-saaod-30-sor-roay-hfs-ahmd-saaod",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد سعيد العمراني",
                        link: "https://alkabbah.com/recitations/playlist/60107/ahmd-saayd-alaamrany-ahmd-saayd-alaamrany",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أحمد سليمان السعدني",
                        link: "https://alkabbah.com/recitations/playlist/155556/alshykh-ahmd-slyman-alsaadny-bak-nadr-mn-agml-ma-kra-mgmoaa-mn-altlaoat-taard-hsrya-laol-mr-ahmd-slyman-alsaadny",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أحمد سيد هاشم ",
                        link: "https://alkabbah.com/recitations/playlist/256757/almshf-almrtl-llkary-ahmd-syd-hashm-bgod-32-k-ahmd-syd-hashm",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد صابر المصحف كاملا",
                        link: "https://alkabbah.com/recitations/playlist/49116/ahmd-sabr-almshf-kamla-ahmd-sabr",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد طالب حميد",
                        link: "https://alkabbah.com/recitations/playlist/277933/almshf-almrtl-llshykh-ahmd-talb-hmyd-amam-almsgd-alnbo-ahmd-talb-hmbd",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " احمد عبد الرازق",
                        link: "https://alkabbah.com/recitations/playlist/275552/almshf-almrtl-alshykh-alkaraa-ahmd-aabd-alrazk-nsr-roay-hfs-aan-aaasm-ahmd-aabd-alrazk-nsr",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أحمد عبد الفتاح صالح",
                        link: "https://alkabbah.com/recitations/playlist/363280/mshf-ahmd-aabd-alftah-salh-114-sor-kaml-god-aaaly-128-k-b-ahmd-aabd-alftah-ahmd-salh",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد عبد الفتاح المنياوى",
                        link: "https://alkabbah.com/recitations/playlist/220650/almshf-almrtl-aldktor-ahmd-aabd-alftah-almnyao-baaal-god-ahmd-aabd-alftah-almnyao",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد عبد الله اللحدان الدوسري",
                        link: "https://alkabbah.com/recitations/playlist/257848/almshf-almrtl-llkary-ahmd-aabd-allh-allhdan-aldosry-bgod-32-k-ahmd-aabd-allh-allhdan-aldosry",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "احمد عبد الرحمن ضرار",
                        link: "https://alkabbah.com/recitations/playlist/239529/almshf-almrtl-ahmd-aabd-alrhmn-drar-god-128-k-b-ahmd-aabdalrhmn-drar",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد عيسى المعصراوي",
                        link: "https://alkabbah.com/recitations/playlist/263933/mshf-ahmd-aays-almaasraoy-roay-khlf-aan-hmz-mn-mokaa-ndaaa-alaslam-bgod-aaaly-64-ahmd-aays-almaasraoy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد كريموف",
                        link: "https://alkabbah.com/recitations/playlist/335335/mksm-agzaaa-mshf-ahmd-krymof-30-gzaa-kaml-ahmd-krymof",
                        resizeMode: "contain",view:true
                    },
                     {
                        name: "أحمد محمد الحواشى",
                        link: "https://alkabbah.com/recitations/playlist/48228/ahmd-mhmd-alhoash-almshf-kamla-ahmd-mhmd-alhoash",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد سلامة",
                        link: "https://alkabbah.com/recitations/playlist/244299/almshf-almrtl-alshykh-ahmd-slam-god-128-k-b-ahmd-mhmd-slam",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أحمد محمد طاهر السوداني",
                        link: "https://alkabbah.com/recitations/playlist/369350/mshf-ahmd-mhmd-tahr-alsodany-sfhat-mksm-604-sfh-kaml-ahmd-mhmd-tahr-alsodany",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد محمد عامر",
                        link: "https://alkabbah.com/recitations/playlist/256583/almshf-almrtl-llkary-ahmd-mhmd-aaamr-bgod-32-k-ahmd-mhmd-aaamr",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أحمد محمد يونس",
                        link: "https://alkabbah.com/recitations/playlist/271952/almshf-almrtl-mn-mokaa-aslam-oyb-mshf-mrtl-broay-abn-ordan-o-abn-gmaz-aan-aby-gaafr-llshykh-ahmd-mhmd-yons-alshykh-ahmd-yons-78-sor-ahmd-mhmd-yons",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد نصر",
                        link: "https://alkabbah.com/recitations/playlist/363270/mshf-ahmd-nsr-114-sor-kaml-god-aaaly-128-k-b-ahmd-nsr",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد نعمان",
                        link: "https://alkabbah.com/recitations/playlist/363271/mshf-ahmd-naaman-114-sor-kaml-god-aaaly-128-k-b-ahmd-naaman",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد نعينع",
                        link: "https://alkabbah.com/recitations/playlist/335202/mksm-agzaaa-mshf-ahmd-naaynaa-mrtl-30-gzaa-kaml-ahmd-naaynaa",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "اسامة الصافي",
                        link: "https://alkabbah.com/recitations/playlist/235394/almshf-almrtl-asam-alsafy-bgod-128-k-b-asam-alsafy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أسامة جلال عامر",
                        link: "https://alkabbah.com/recitations/playlist/152772/astmaaa-tsgylat-ltlaoat-khargy-llkary-asam-glal-aaamr-35-tsgyl-bgod-aaaly-asam-glal-aaamr",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أسامة خياط إمام",
                        link: "https://alkabbah.com/recitations/playlist/316490/tlaoat-alshykh-aldktor-asam-khyat-amam-almsgd-alhram-asam-khyat",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أسامة كربلائي",
                        link: "https://alkabbah.com/recitations/playlist/335334/mksm-agzaaa-mshf-asam-krblayy-30-gzaa-kaml-asam-krblayy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أسامة محمد جمعة",
                        link: "https://alkabbah.com/recitations/playlist/363311/mshf-asam-mhmd-gmaa-114-sor-kaml-roay-kalon-god-aaaly-128-k-b-asam-mhmd-gmaa",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أشرف عبده درويش",
                        link: "https://alkabbah.com/recitations/playlist/162955/almshf-almrtl-llkary-ashrf-aabdh-droysh-ashrf-aabdh-droysh",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أكرم العلاقمي",
                        link: "https://alkabbah.com/recitations/playlist/335195/mksm-agzaaa-mshf-akrm-alaalakmy-30-gzaa-kaml-akrm-alaalakmy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أمين أبو سماحة",
                        link: "https://alkabbah.com/recitations/playlist/335306/mksm-agzaaa-mshf-amyn-abo-smah-30-gzaa-kaml-amyn-abo-smah",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أمين إدريس فلاتة",
                        link: "https://alkabbah.com/recitations/playlist/335355/mksm-agzaaa-mshf-amyn-adrys-flat-roay-hsham-aan-abn-aaamr-30-gzaa-kaml-amyn-adrys-flat",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أنس جلهوم",
                        link: "https://alkabbah.com/recitations/playlist/163440/almshf-almrtl-llkary-ans-glhom-ans-glhom",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أنور الشحات",
                        link: "https://alkabbah.com/recitations/playlist/20040/anor-alshhat-altlaoat-alkhashaa-o-alnadr-anor-alshhat",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "إبراهيم العسيري",
                        link: "https://alkabbah.com/recitations/playlist/69417/alkary-abrahym-alaasyry-hfs-aan-aaasm-abrahym-alaasyry",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "إبراهيم المنصوري",
                        link: "https://alkabbah.com/recitations/playlist/152831/tlaoat-alkary-alshykh-abrahym-almnsory-aadd-altsgylat-20-tlao-abrahym-almnsory",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "إبراهيم الوحيد",
                        link: "https://alkabbah.com/recitations/playlist/152472/tlaoat-khashaa-llkary-abrahym-alohyd-abrahym-alohyd",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "إبراهيم جمال القرجاوي",
                        link: "https://alkabbah.com/recitations/playlist/255778/almshf-almrtl-broay-hfs-aan-aaasm-alkary-abrahym-gmal-alkrgaoy-bgod-32-k-abrahym-gmal-alkrgaoy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "مصحف إبراهيم صقر الزعيم ",
                        link: "https://alkabbah.com/recitations/playlist/335294/mksm-agzaaa-mshf-abrahym-skr-alzaaym-30-gzaa-kaml-abrahym-skr-alzaaym",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "إبراهيم عبد القادر الدسوقي  ",
                        link: "https://alkabbah.com/recitations/playlist/363288/mshf-abrahym-aabd-alkadr-aldsoky-114-sor-kaml-god-aaaly-128-k-b-abrahym-aabd-alkadr-aldsoky",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " إبراهيم محمد الجرمي",
                        link: "https://alkabbah.com/recitations/playlist/166427/almshf-almrtl-llkary-abrahym-mhmd-algrmy-abrahym-mhmd-algrmy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " إدريس أبكر",
                        link: "https://alkabbah.com/recitations/playlist/232697/almshf-almrtl-adrys-abkr-adrys-abkr",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " إسلام فكري  ",
                        link: "https://alkabbah.com/recitations/playlist/152468/audio-tlaoat-alkary-aslam-fkry-aslam-fkry",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " إسماعيل حجاب",
                        link: "https://alkabbah.com/recitations/playlist/154729/tsgylat-ltlaoat-khargy-llkary-alshykh-asmaaayl-hgab-30-tsgyl-bgod-aaaly-asmaaayl-hgab",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " إبراهيم الأخضر ",
                        link: "https://alkabbah.com/recitations/playlist/256191/almshf-almrtl-llkary-abrahym-alakhdr-bgod-32-k-abrahym-alakhdr",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "ابراهيم الجبرين",
                        link: "https://alkabbah.com/recitations/playlist/166705/almshf-almrtl-llkary-abrahym-algbryn-god-aaaly-abrahym-algbryn",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "  ابراهيم رزق",
                        link: "https://alkabbah.com/recitations/playlist/166482/almshf-almrtl-llkary-abrahym-rzk-abrahym-rzk",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " إبراهيم سليم الدرملي",
                        link: "https://alkabbah.com/recitations/playlist/363292/mshf-abrahym-slym-aldrmly-114-sor-kaml-god-aaaly-128-k-b-abrahym-slym-aldrmly",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "عبد الله غنيم",
                        link: "https://alkabbah.com/recitations/playlist/271949/almshf-almrtl-mn-mokaa-aslam-oyb-mshf-mrtl-roay-shaab-aan-aaasm-l-alkary-abrahym-aabd-allh-ghnym-abrahym-aabd-allh-ghnym0",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "براهيم محمد يوسف كشيدان",
                        link: "https://alkabbah.com/recitations/playlist/165784/almshf-almrtl-llkary-abrahym-mhmd-yosf-kshydan-abrahym-mhmd-yosf-kshydan",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أبو بكر الظبي",
                        link: "https://alkabbah.com/recitations/playlist/352654/mshf-abo-bkr-althby-roay-hfs-114-sor-kaml-128-k-b-abo-bkr-aaly-ahmd-althby",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أحمد خضر الطرابلسي",
                        link: "https://alkabbah.com/recitations/playlist/335203/mksm-agzaaa-mshf-ahmd-khdr-altrablsy-roay-kalon-30-gzaa-kaml-ahmd-ahmd-khdr-altrablsy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "احمد الجبالي",
                        link: "https://alkabbah.com/recitations/playlist/335251/mksm-agzaaa-mshf-ahmd-algbaly-30-gzaa-kaml-ahmd-algbaly",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " احمد الحداد ",
                        link: "https://alkabbah.com/recitations/playlist/267855/almshf-almrtl-alkary-ahmd-alhdad-mshf-114-sor-kaml-bgod-32-k-hgm-sghyr-ahmd-alhdad0",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "أحمد الرزيقي",
                        link: "https://alkabbah.com/recitations/playlist/257354/almshf-almrtl-llkary-ahmd-alrzyky-bgod-32-k-ahmd-alrzyky",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "احمد الشحات لاشين",
                        link: "https://alkabbah.com/recitations/playlist/28040/ahmd-alshhat-lashyn-altlaoat-alkhashaa-o-alnadr-ahmd-alshhat-lashyn",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " الشحات محمد أنور  ",
                        link: "https://alkabbah.com/recitations/playlist/335298/mksm-agzaaa-mshf-alshhat-mhmd-anor-mrtl-30-gzaa-kaml-alshhat-mhmd-anor",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "عبدالباسط عبدالصمد",
                        link: "https://alkabbah.com/recitations/playlist/262307/aabdalbast-aabdalsmd-alshykh-aabdalbast-aabdalsmd",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "محمود علي البنا",
                        link: "https://alkabbah.com/recitations/playlist/271487/alshykh-mhmod-aaly-albna-alshykh-mhmod-aaly-albna",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " أحمد الزارع",
                        link: "https://alkabbah.com/recitations/playlist/270906/mshf-altbyb-alkary-aldktor-ahmd-alzaraa-88-sor-mrtl-almshf-almrtl-altbyb-alkary-aldktor-ahmd-alzaraa",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "العشرى عمران",
                        link: "https://alkabbah.com/recitations/playlist/269703/almshf-almrtl-alkary-alaashry-aamran-mshf-broay-hfs-aan-aaasm-114-sor-kaml-bgod-aaaly-128-k-alaashry-aamran",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "ياسر القرشي",
                        link: "https://alkabbah.com/recitations/playlist/265728/almshf-almrtl-alkary-yasr-alkrshy-roay-hfs-aan-aaasm-mshf-114-sor-kaml-bgod-32-k-alkary-yasr-alkrshy-roay-hfs-aan-aaasm",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "يحي الحليلى",
                        link: "https://alkabbah.com/recitations/playlist/268840/almshf-almrtl-alkary-yhy-alhlyl-broay-hfs-aan-aaasm-mshf-114-sor-kaml-bgod-32-k-alkary-yhy-alhlyl",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "الهادي بن الطاهر الفخفاخ  ",
                        link: "https://alkabbah.com/recitations/playlist/54732/alhady-bn-altahr-alfkhfakh-broay-kalon-alhady-bn-altahr-alfkhfakh",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "ايمن عيسى حطيبة ",
                        link: "https://alkabbah.com/recitations/playlist/41066/aymn-aays-htyb-altlaoat-alkhashaa-o-alnadr-aymn-aays-htyb",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "باسل عبد الرحمن الراوي",
                        link: "https://alkabbah.com/recitations/playlist/152487/almshf-almrtl-llkary-basl-aabd-alrhmn-alraoy-basl-aabd-alrhmn-alraoy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " المرتل بدر محمد التركى",
                        link: "https://alkabbah.com/recitations/playlist/235808/almshf-almrtl-bdr-mhmd-altrk-god-128-k-bdr-mhmd-altrk",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "بركت الله سليم",
                        link: "https://alkabbah.com/recitations/playlist/335291/mksm-agzaaa-mshf-brkt-allh-slym-30-gzaa-kaml-brkt-allh-slym",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "  بشر لطفي",
                        link: "https://alkabbah.com/recitations/playlist/163491/almshf-almrtl-llkary-bshr-ltfy-bshr-ltfy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "جوهر القردلي",
                        link: "https://alkabbah.com/recitations/playlist/163779/almshf-almrtl-broay-kalon-llkary-gohr-alkrdly-gohr-alkrdly",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "بكري أبو الهدى  ",
                        link: "https://alkabbah.com/recitations/playlist/335336/mksm-agzaaa-mshf-bkry-abo-alhd-hlak-30-gzaa-kaml-bkry-abo-alhd-hlak",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "جزاع بن فليح الصويلح",
                        link: "https://alkabbah.com/recitations/playlist/164116/almshf-almrtl-llkary-gzaaa-bn-flyh-alsoylh-god-aaaly-gzaaa-bn-flyh-alsoylh",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "جعفر محمود آدم",
                        link: "https://alkabbah.com/recitations/playlist/164022/almshf-almrtl-llkary-gaafr-mhmod-adm-gaafr-mhmod-adm",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " جمال سيد الأسيوطي",
                        link: "https://alkabbah.com/recitations/playlist/363313/mshf-gmal-syd-alasyoty-114-sor-kaml-roay-abn-thkoan-god-aaaly-128-k-b-gmal-syd-alasyoty",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " جمال شاكر عبد الله",
                        link: "https://alkabbah.com/recitations/playlist/254353/almshf-almrtl-llkary-gmal-shakr-aabd-allh-broay-hfs-aan-aaasm-bgod-32-k-gmal-shakr-aabd-allh",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "جمعان العصيمي",
                        link: "https://alkabbah.com/recitations/playlist/164023/almshf-almrtl-llkary-gmaaan-alaasymy-gmaaan-alaasymy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "جواد فروغي",
                        link: "https://alkabbah.com/recitations/playlist/152458/tlaoat-khashaa-llkaraa-goad-froghy-goad-froghy",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " حازم أبوغزالة",
                        link: "https://alkabbah.com/recitations/playlist/164637/almshf-almrtl-llkary-hazm-aboghzal-hazm-abo-ghzal",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "حسن بخاري   ",
                        link: "https://alkabbah.com/recitations/playlist/335378/mksm-agzaaa-mshf-hsn-bkhary-30-gzaa-kaml-hsn-bkhary",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " حسن سعيد السكندري  ",
                        link: "https://alkabbah.com/recitations/playlist/335257/mksm-agzaaa-mshf-hsn-saayd-alskndry-nskh-dar-alahsan-kaml-30-gzaa-hsn-saayd-alskndry",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "خالد أبو شادي  ",
                        link: "https://alkabbah.com/recitations/playlist/233365/almshf-almrtl-alshykh-khald-abo-shady-bgod-32-k-b-khald-abo-shady",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "خضر أحمد مصطفي",
                        link: "https://alkabbah.com/recitations/playlist/206081/roayaa-tlaoat-alkary-khdr-ahmd-mstfy-khdr-ahmd-mstf",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "رافع العامري  ",
                        link: "https://alkabbah.com/recitations/playlist/335364/mksm-agzaaa-mshf-rafaa-alaaamry-30-gzaa-kaml-rafaa-alaaamry",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "سعيد محمد نور",
                        link: "https://alkabbah.com/recitations/playlist/319282/20-tlao-llshykh-alkary-saayd-mhmd-nor-saayd-mhmd-nor",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "سلامة عبد الحميد رمضان",
                        link: "https://alkabbah.com/recitations/playlist/74858/slam-aabd-alhmyd-rmdan-slam-aabd-alhmyd-rmdan",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "سيد النقشبندى  ",
                        link: "https://alkabbah.com/recitations/playlist/154691/tsgylat-tlaoat-nadr-alshykh-syd-alnkshbndy-5-tsgylat-bgod-aaaly-syd-alnkshbnd",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "عمر بوشقرة",
                        link: "https://alkabbah.com/recitations/playlist/52301/aamr-boshkralmshf-kamla-aamr-boshkr",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "ماهر المعيقلي",
                        link: "https://alkabbah.com/recitations/playlist/335174/mksm-agzaaa-mshf-mahr-almaaykly-30-gzaa-kaml-mahr-almaaykly",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: " محمد بكري أبو الدهب",
                        link: "https://alkabbah.com/recitations/playlist/363279/mshf-mhmd-bkry-abo-aldhb-114-sor-kaml-god-aaaly-128-k-b-mhmd-bkry-abo-aldhb",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "محمد جبريل",
                        link: "https://alkabbah.com/recitations/playlist/335188/mksm-agzaaa-mshf-mhmd-gbryl-30-gzaa-kaml-mhmd-gbryl",
                        resizeMode: "contain",view:true
                    },
                    {
                        name: "محمد حسان",
                        link: "https://alkabbah.com/recitations/playlist/335189/mksm-agzaaa-mshf-mhmd-hsan-30-gzaa-kaml-mhmd-hsan",
                        resizeMode: "contain",view:true
                    },

                ]
            }
        }
    }

    makesearch(searchText) {
        let list = this.state.video
        for (let i = 0; i < list.length; i++) {
            if (((list[i].name).toUpperCase()).includes(searchText.toUpperCase())) {
                list[i].view = true
            }
            else {
                list[i].view = false
            }
        }
        this.setState({ video: list })
    }

Dara(){
    let last = this.state.video
    console.log(last.length)
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
                {/* <WebView source={{ uri: 'https://bit.ly/3MrAWNX' }} /> */}
                <View style={{ backgroundColor: "#0c0c0c" }}>
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
                    <ScrollView>
                        <View style={styles.Header}
                        // onPress={() => {
                        //     this.Dara()
                        // }}
                        >


                            <Text style={{
                                fontSize: 20,
                                color: COLORS.black
                            }}>تلاوات مشاهير القراء</Text>

                        </View>
                             <View style={{
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: 'space-evenly',
                                alignItems: "center",
                                // borderBottomRadius: 1,
                                marginVertical:11,
                                borderRadius: 20,
                                borderColor: COLORS.white,
                                borderBottomWidth: 3,
                                //   backgroundColor:"#f0f"

                            }}>
                                <TouchableOpacity>
                                    <FontAwesome5 name='search' size={20} color={COLORS.gray} style={{padding: 10}} />
                                </TouchableOpacity>
                                <TextInput style={{
                                    color: '#fff', 
                                    padding: 10, 
                                    fontSize: 20,
                                    width: "80%"
                                }}
                                    placeholder={'ابحث عن الشيخ'}
                                    placeholderTextColor={COLORS.gray}
                                    onChangeText={(value) => {
                                        this.makesearch(value)
                                        this.setState({ search: value })
                                    }}
                                    value={this.state.search}>

                                </TextInput>
                            </View>


 

                        {this.state.video.map((items, index) =>
                        items.view?(
                            <View style={{
                                backgroundColor: "#bbbbbb",
                                borderRadius: 20,
                                marginBottom: 10
                            }} >
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate('Wep', { name: items })

                                        // Linking.openURL(items.link);
                                    }}
                                    style={styles.buttonVideo} >
                                    <Image
                                        source={require("../img/koran.png")}
                                        resizeMode={items.resizeMode}
                                        style={styles.ViewVideo} />

                                    <View style={{ width: width / 1.5 }}>
                                        <Text style={{ fontSize: FONTS.h4, color: "#000" }}> {items.name}  </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>):(null)
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
        width: width / 7,
        height: height / 12,
        borderRadius: 30,
        // backgroundColor: "#000000",
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