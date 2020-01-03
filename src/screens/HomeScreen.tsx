import React from 'react';
import {AsyncStorage, Button, Text, View} from "react-native";
import Layout from "../components/Layout";
import {NavigationInjectedProps} from "react-navigation";

interface Props extends NavigationInjectedProps {
}

function HomeScreen(props: Props) {
    const signOut = async () => {
        await AsyncStorage.clear();
        props.navigation.navigate('Auth');
    };
    const showMore = () => {
        props.navigation.navigate('Other')
    };
    return (
        <Layout>
            <View>
                <Button title="Show me more of the app" onPress={showMore}/>
                <Button title="Actually, sign me out :)" onPress={signOut}/>
            </View>
        </Layout>
    );
}

export default HomeScreen;
