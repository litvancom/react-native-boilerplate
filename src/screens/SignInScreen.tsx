import React from 'react';
import {AsyncStorage, Button, Text, View} from "react-native";
import Layout from "../components/Layout";
import {NavigationInjectedProps} from "react-navigation";

interface Props extends NavigationInjectedProps {
}

function SignInScreen(props: Props) {
    const onPress = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        props.navigation.navigate('App');
    };
    return (
        <Layout>
            <View>
                <Button title="Sign in!" onPress={onPress}/>
            </View>
        </Layout>
    );
}

export default SignInScreen;
