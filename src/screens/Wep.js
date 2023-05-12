import * as React from 'react';
import {
    BackHandler
} from 'react-native';
import WebView from 'react-native-webview'

export default class Wep extends React.Component {


    constructor() {
        super(); {
            this.state = {
                item: {}
            }
        }
    }
    backAction = () => {

        this.props.navigation.navigate('HomeStack')
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

        let data = this.props.route.params.name
        this.setState({ item: data })
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor="#0c0c0c" />
                <WebView source={{ uri: this.state.item.link }} />
            </>
        )
    }
}
const styles = StyleSheet.create({

});