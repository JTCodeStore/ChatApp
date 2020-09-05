import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/navigation/Routes';
import { View, Text } from 'react-native';

/**
 * Wrap all providers here
 */

const Providers = () => {
    return (
        //<View><Text>Hi</Text></View>
        <PaperProvider>
            <Routes />
        </PaperProvider>
    );
}

export default Providers;


