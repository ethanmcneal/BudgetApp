import React, { useState } from "react";
import {
	Button,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import CenterView from "../../components/myComponents/CenterView";

const BudgetFormScreen = (props: any) => {
	const [income, setIncome] = useState('');
	const [expenses, setExpenses] = useState([]);

	return (
		<ScrollView>
			<View style={styles.screen}>
				<Text>Form screen</Text>
				<View style={styles.inputContainer}>
                    <Text style={styles.inputPrompt}>How many Sources of Income do you have?</Text>
                    <View style={styles.input}>
					<TextInput
                    placeholder=''
                    value={income} 
                    />
                    </View>
				</View>
				<View style={styles.inputContainer}>
				</View>
				<View style={styles.input}>
					<TextInput />
				</View>
				<View style={styles.input}>
					<TextInput />
				</View>
				<View style={styles.input}>
					<TextInput />
				</View>
				<View style={styles.input}>
					<TextInput />
				</View>
				<View style={styles.input}>
					<TextInput />
				</View>
				<Button
					onPress={() => {
						props.navigation.navigate("Results");
					}}
					title="Submit"
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
	},
    inputContainer: {
        alignItems: 'center',
    },
    inputPrompt: {
        width: '70%'
    },
	input: {
		width: "60%",
		marginVertical: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	form: {},
});

export default BudgetFormScreen;
