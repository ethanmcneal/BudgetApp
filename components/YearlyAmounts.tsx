import React, { useEffect } from 'react';
import { Text, View } from 'react-native'

const YearlyAmounts = (props :any) => {
    // P [(1 + i)^n – 1] => compound interest formula
     // P = principle
     // i = nominal interest rate,
     // n = compounding periods
     const getTotalWithInterest = (interestRate :number, numOfYears :number) => {
        //interest rate should be passed as a percentage decimal
        let initialAmount = props.leftover * 12
        console.log(interestRate)
        // 5% => 0.05
        let interestPercentage = (Math.pow((1 + interestRate), numOfYears) - 1);
        let totalYearlyInterest =  (initialAmount * interestPercentage)
        console.log(totalYearlyInterest)
        return ((initialAmount) + (totalYearlyInterest))
    }
    useEffect(() => {

    },[props.interest])
    const yearlyAmounts = {oneYear: getTotalWithInterest(parseFloat(`0.${props.interest}`), 1),
     twoYears: getTotalWithInterest(parseFloat(`0.${props.interest}`), 2),
     fiveYears: getTotalWithInterest(parseFloat(`0.${props.interest}`), 5),
     tenYears: getTotalWithInterest(parseFloat(`0.${props.interest}`), 10),
     twentyYears: getTotalWithInterest(parseFloat(`0.${props.interest}`), 20)}
        return (
            <View>
            <Text>${yearlyAmounts.oneYear.toFixed(2)} in one year</Text>
            <Text>${yearlyAmounts.twoYears.toFixed(2)} in two years</Text>
            <Text>${yearlyAmounts.fiveYears.toFixed(2)} in five years</Text>
            <Text>${yearlyAmounts.tenYears.toFixed(2)} in ten years</Text>
            <Text>${yearlyAmounts.twentyYears.toFixed(2)} in twenty years</Text>
            </View>
        )
}

export default YearlyAmounts