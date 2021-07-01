import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
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
    const twentyYears = getTotalWithInterest(0, 20)
    return (
        <CenterView>
            <Text>{totalExpenses}</Text>
            <Text>{totalIncome}</Text>
            <Text>You will have {leftover} leftover each month</Text>
            <Text>if you save {leftover} for one year and
                invest that at <View style={styles.input}>
                    <TextInput
                    value={interest} 
                /><Text>%</Text>
                </View> interest each compounded annually</Text>
            <Text>_ in one year</Text>
            <Text>_ in two years</Text>
            <Text>_ in five years</Text>
            <Text>_ in ten years</Text>
            <Text>{twentyYears} in twenty years</Text>

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