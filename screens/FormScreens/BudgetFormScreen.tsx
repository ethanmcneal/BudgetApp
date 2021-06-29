import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import CenterView from '../../components/myComponents/CenterView'


const BudgetFormScreen = (props :any) => {
    return (
        <ScrollView >
            <View style={styles.screen}>
            <Text>Form screen</Text>
            <View style={styles.input}>
                <TextInput />
            </View>
            <View style={styles.input}>
                <TextInput />
            </View>
            <View style={styles.input}>
                <TextInput />
            </View>
            <View style={styles.input}>
                <TextInput />
            </View>
            <View style={styles.input}>
                <TextInput />
            </View>
            <View style={styles.input}>
                <TextInput />
            </View>
            <View style={styles.input}>
                <TextInput />
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        width: '80%',
        marginVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    form: {

    },

})

export default BudgetFormScreen