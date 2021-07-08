import React from 'react'
import { Text, View } from 'react-native'

const InputErrorMessage = (props :any) => {
    return(
        <View>
            <Text>
                We are sorry! something went wrong with submitting the form, 
                this usually happens if an input is not a number
            </Text>
            <Text>please try and fill out the form again</Text>
        </View>
    )
}

export default InputErrorMessage