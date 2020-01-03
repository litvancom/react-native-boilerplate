import React from 'react';
import {SafeAreaView} from "react-navigation";

interface Props {
    children: any
}

function Layout(props: Props) {
    return (
        <SafeAreaView style={{flex: 1}}>
            {props.children}
        </SafeAreaView>
    );
}

export default Layout;
