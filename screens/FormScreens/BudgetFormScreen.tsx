import React from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
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
            <Button onPress={() => {props.navigation.navigate('Results')}} title='Submit'/>
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