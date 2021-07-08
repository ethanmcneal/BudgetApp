import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native'
import YearlyAmounts from '../../components/YearlyAmounts'


const ResultsScreen = (props :any) => {

    const totalExpenses = props.navigation.getParam('expenses')
    const totalIncome = props.navigation.getParam('income')
    const leftover = totalIncome - totalExpenses
    const [interest, setInterest] = useState('6')
    return (
        <ScrollView>
        <View style={styles.screen}>
            <Text>You will have {leftover} leftover each month</Text>
            <Text>if you save {leftover} for one year and
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
    screen: {
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: 'white',
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