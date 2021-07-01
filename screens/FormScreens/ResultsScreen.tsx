import React from 'react'
import { Text } from 'react-native'
import CenterView from '../../components/myComponents/CenterView'


const ResultsScreen = (props :any) => {

    const totalExpenses = props.props.navigation.getParam('expenses')
    const totalIncome = props.props.navigation.getParam('income')
    return (
        <CenterView>
            <Text>{totalExpenses}</Text>
            <Text>{totalIncome}</Text>
            <Text>You will have _ leftover each month</Text>
            <Text>if you invest _% at _% interest each month you will have</Text>
            <Text>_ in one year</Text>
            <Text>_ in two years</Text>
            <Text>_ in five years</Text>
            <Text>_ in ten years</Text>
            <Text>_ in twenty years</Text>

        </CenterView>
    )
}

export default ResultsScreen