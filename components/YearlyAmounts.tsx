import React from 'react';
import { Text, View } from 'react-native'

const YearlyAmounts = (props :any) => {
    // P [(1 + i)^n – 1] => compound interest formula
     // P = principle
     // i = nominal interest rate,
     // n = compounding periods
     const getTotalWithInterest = (interestRate :number, numOfYears :number) => {
        //interest rate should be passed as a percentage decimal
        // 5% => 0.05
        let interestPercentage = (Math.pow((1 + interestRate), numOfYears) - 1);
        let yearlyInterest =  (props.leftover * interestPercentage)
        return ((props.leftover * numOfYears) + (yearlyInterest * numOfYears))
    }
    const yearlyAmounts = {oneYear: getTotalWithInterest(parseInt(`0.${props.interest}`), 1),
     twoYears: getTotalWithInterest(parseInt(`0.${props.interest}`), 2),
     fiveYears: getTotalWithInterest(parseInt(`0.${props.interest}`), 5),
     tenYears: getTotalWithInterest(parseInt(`0.${props.interest}`), 10),
     twentyYears: getTotalWithInterest(parseInt(`0.${props.interest}`), 20)}
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

export default YearlyAmounts