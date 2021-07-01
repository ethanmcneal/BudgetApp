import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import CenterView from '../../components/myComponents/CenterView'
import YearlyAmounts from '../../components/YearlyAmounts'


const ResultsScreen = (props :any) => {

    const totalExpenses = props.navigation.getParam('expenses')
    const totalIncome = props.navigation.getParam('income')
    const leftover = totalIncome - totalExpenses
    const [interest, setInterest] = useState('6')
    return (
        <CenterView>
            <Text>{totalExpenses}</Text>
            <Text>{totalIncome}</Text>
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
        </CenterView>
    )
}

const styles = StyleSheet.create({
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