import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const InputErrorMessage = (props :any) => {
    return(
        <View style={styles.errorContainer}>
            <Text style={styles.errorMessage}>
                Error! one or more inputs were not a number
            </Text>
            <Text style={styles.errorSubMessage}>
                We are sorry! something went wrong with submitting the form, 
                this usually happens if an input is not a number
            </Text>
            <Text style={styles.errorSubMessage}>please try and fill out the form again</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    errorContainer: {
        width: '80%',
        alignItems: 'center',
        marginVertical: 20,
    },
    errorMessage: {
		fontSize: 18,
		color: "rgba(251, 18, 18, 0.62)",
		textAlign: "center",
		marginHorizontal: 15,
	},
    errorSubMessage: {
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 16,
    }
})

export default InputErrorMessage