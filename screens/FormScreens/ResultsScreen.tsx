import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native'
import YearlyAmounts from '../../components/YearlyAmounts'


const ResultsScreen = (props :any) => {

    const totalExpenses = props.navigation.getParam('expenses')
    const totalIncome = props.navigation.getParam('income')
    const leftover = totalIncome - totalExpenses
    const [interest, setInterest] = useState('6')
    return (
        <ScrollView style={styles.screen}>
        <View style={styles.container}>
            <Text style={styles.resultsText}>You will have <Text style={styles.moneyText}>${leftover}</Text> leftover each month</Text>
            <Text style={styles.resultsText}>if you save {leftover} for one year and
                invest that at <View style={styles.input}>
                    <TextInput
                    keyboardType='numeric'
                    value={interest}
                    onChangeText={(text) => setInterest(text)} 
                /><Text>%</Text>
                </View> interest each compounded annually</Text>
                <YearlyAmounts leftover={leftover} interest={interest} />
                {/* <Button title='Calculate!' onPress={() => YearlyAmounts(interest)}/> */}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor: 'white'
    },
    container: {
        alignItems: 'center',
        marginVertical: 20,
        },
    resultsText: {
        fontSize: 18,
        textAlign: 'center',
    },
    moneyText: {
        color: 'green',
        fontSize: 19,
    },
    input: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ResultsScreen