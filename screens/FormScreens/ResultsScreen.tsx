import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import CenterView from '../../components/myComponents/CenterView'


const ResultsScreen = (props :any) => {

    const totalExpenses = props.navigation.getParam('expenses')
    const totalIncome = props.navigation.getParam('income')
    const leftover = totalIncome - totalExpenses
    const [interest, setInterest] = useState('0')

     // P [(1 + i)^n – 1] => compound interest formula
     // P = principle
     // i = nominal interest rate,
     // n = compounding periods
    const getTotalWithInterest = (interestRate :number, numOfYears :number) => {
        //interest rate should be passed as a percentage decimal
        // 5% => 0.05
        let interestPercentage = (Math.pow((1 + interestRate), numOfYears) - 1);
        let yearlyInterest =  (leftover * interestPercentage)
        return ((leftover * numOfYears) + (yearlyInterest * numOfYears))
    }
    const YearlyAmounts = (int :any) => {
    const yearlyAmounts = {oneYear: getTotalWithInterest(parseInt(`0.${int}`), 1),
     twoYears: getTotalWithInterest(parseInt(`0.${int}`), 2),
     fiveYears: getTotalWithInterest(parseInt(`0.${int}`), 5),
     tenYears: getTotalWithInterest(parseInt(`0.${int}`), 10),
     twentyYears: getTotalWithInterest(parseInt(`0.${int}`), 20)}
        return (
            <View>
            <Text>${yearlyAmounts.oneYear} in one year</Text>
            <Text>${yearlyAmounts.twoYears} in two years</Text>
            <Text>${yearlyAmounts.fiveYears} in five years</Text>
            <Text>${yearlyAmounts.tenYears} in ten years</Text>
            <Text>${yearlyAmounts.twentyYears} in twenty years</Text>
            </View>
        )
}
    return (
        <CenterView>
            <Text>{totalExpenses}</Text>
            <Text>{totalIncome}</Text>
            <Text>You will have {leftover} leftover each month</Text>
            <Text>if you save {leftover} for one year and
                invest that at <View style={styles.input}>
                    <TextInput
                    value={interest}
                    onChangeText={(text) => setInterest(text)} 
                /><Text>%</Text>
                </View> interest each compounded annually</Text>
                <YearlyAmounts />
                <Button title='Calculate!' onPress={() => YearlyAmounts(interest)}/>
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