import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
	Button,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import InputErrorMessage from "../../components/InputErrorMessage";
import Colors from "../../constants/Colors";

const BudgetFormScreen = (props: any) => {
	const [income, setIncome] = useState("");
	const [alert, setAlert] = useState(false)
	const defaultExpenseState = {
		house: "", 
		utilities: "",
		car: "",
		food: "",
		leisure: "",
		other: ""}
	const [expenses, setExpenses] = useState(defaultExpenseState);
	const [counter, setCounter] = useState(-1);

	const handleChange = (text: any, category: string) => {
		if(isNaN(text)){
			setAlert(true)
		} else {
			setAlert(false)
			setExpenses({ ...expenses, [category]: text })
		}
		;
	};
	const handleIncomeChange = (text: any) => {
		if(isNaN(text)){
			setAlert(true)
		} else {
			setAlert(false)
			setIncome(text)
		}
		;
	};
	const handleSubmit = (exp :any) => {
	let totalExpenses :number = 0
	let totalIncome = isNaN(parseInt(income)) ? 0 : parseInt(income)
		for(let expense in exp){
			if(!isNaN(exp[expense])){
			totalExpenses += parseInt(exp[expense])
		}
		}
		if(isNaN(totalExpenses) || isNaN(totalIncome)){
			setCounter(-1)
			setExpenses(defaultExpenseState)
			setIncome('')
		} else {
		console.log(totalExpenses, totalIncome)
		props.navigation.navigate('Results', {'income': totalIncome, 'expenses': totalExpenses})
	}	
	}
	return (
		<ScrollView style={styles.formContainer}>
			<View style={styles.screen}>
				{counter === -1 && <InputErrorMessage />}
				{counter === 0 && (
					<View style={styles.inputContainer}>
						<Ionicons name="cash" size={42} color="green" />
						<Text style={styles.inputPrompt}>
							How much Income do you make in a month?
						</Text>
						<View style={styles.input}>
							<TextInput
								style={styles.field}
								placeholder=""
								value={income}
								onChangeText={(text) => handleIncomeChange(text)}
								keyboardType={'numbers-and-punctuation'}
								onSubmitEditing={() => {setCounter(prev => prev + 1)}}
							/>
						</View>
					</View>
				)}
				{counter === 1 && (
					<View style={styles.inputContainer}>
						<Ionicons name={"home"} size={42} color="red" />
						<Text style={styles.inputPrompt}>
							What is your monthly living payment? 
							
						</Text>
						<Text style={styles.inputSubPrompt}>
							eg. rent,mortgage, etc
						</Text>
						<View style={styles.input}>
							<TextInput
								style={styles.field}
								placeholder=""
								value={expenses.house}
								onChangeText={(text) =>
									handleChange(text, "house")
								}
								keyboardType={'numbers-and-punctuation'}
								onSubmitEditing={() => {setCounter(prev => prev + 1)}}
								autoFocus
							/>
						</View>
					</View>
				)}
				{counter === 2 && (
					<View style={styles.inputContainer}>
						<Ionicons name={"flash"} size={42} color="red" />
						<Text style={styles.inputPrompt}>
							How much do you spend on utilities?
						</Text>
						<Text style={styles.inputSubPrompt}>
							water, electricity...
						</Text>
						<View style={styles.input}>
							<TextInput
								style={styles.field}
								placeholder=""
								value={expenses.utilities}
								onChangeText={(text) =>
									handleChange(text, "utilities")
								}
								keyboardType={'numbers-and-punctuation'}
								onSubmitEditing={() => {setCounter(prev => prev + 1)}}
								autoFocus
							/>
						</View>
					</View>
				)}
				{counter === 3 && (
					<View style={styles.inputContainer}>
						<Ionicons name={"car"} size={42} color="red" />
						<Text style={styles.inputPrompt}>
							What do you spend on transportation?
						</Text>
						<Text style={styles.inputSubPrompt}>
							gas, insurance, etc
						</Text>

						<View style={styles.input}>
							<TextInput
								style={styles.field}
								placeholder=""
								value={expenses.car}
								onChangeText={(text) =>
									handleChange(text, "car")
								}
								keyboardType={'numbers-and-punctuation'}
								onSubmitEditing={() => {setCounter(prev => prev + 1)}}
								autoFocus
							/>
						</View>
					</View>
				)}
				{counter === 4 && (
					<View style={styles.inputContainer}>
						<Ionicons name={"fast-food"} size={42} color="red" />
						<Text style={styles.inputPrompt}>
							How much on food?
						</Text>
						<Text style={styles.inputSubPrompt}>
							The average cost of groceries each month for one person ranges between $165 and $345
						</Text>
						<View style={styles.input}>
							<TextInput
								style={styles.field}
								placeholder=""
								value={expenses.food}
								onChangeText={(text) =>
									handleChange(text, "food")
								}
								keyboardType={'numbers-and-punctuation'}
								onSubmitEditing={() => {setCounter(prev => prev + 1)}}
								autoFocus
							/>
						</View>
					</View>
				)}
				{counter === 5 && (
					<View style={styles.inputContainer}>
						<Ionicons name={"happy"} size={42} color="red"/>
						<Text style={styles.inputPrompt}>
							What do you spend for fun?
						</Text>
						<View style={styles.input}>
							<TextInput
								style={styles.field}
								placeholder=""
								value={expenses.leisure}
								onChangeText={(text) =>
									handleChange(text, "leisure")
								}
								keyboardType={'numbers-and-punctuation'}
								onSubmitEditing={() => {setCounter(prev => prev + 1)}}
								autoFocus
							/>
						</View>
					</View>
				)}
				{counter === 6 && (
					<View style={styles.inputContainer}>
						<Ionicons name={"cart"} size={42} color="red"/>
						<Text style={styles.inputPrompt}>
							Put all other expenses here
						</Text>
						<Text style={styles.inputSubPrompt}>
							e.g. Student Load payments, or anything else we missed!
						</Text>
						<View style={styles.input}>
							<TextInput
								style={styles.field}
								placeholder=""
								value={expenses.other}
								onChangeText={(text) =>
									handleChange(text, "other")
								}
								keyboardType={'numbers-and-punctuation'}
								autoFocus
							/>
						</View>
					</View>
				)}
				{alert && <Text style={styles.inputAlertPrompt}>
					Not a Number! please enter a number
				</Text>}

				<View style={styles.buttonContainer}>
					{counter > 0 && (
						<Button
							onPress={() => {
								setCounter((prev) => prev - 1);
							}}
							title="Back"
						/>
						
					)}
					{counter < 6 && (
						<Button
							onPress={() => {
								setCounter((prev) => prev + 1);
							}}
							title="Next"
						/>
						
					)}
					{counter === 6 && (
						<Button
							onPress={() => {
								handleSubmit(expenses)
							}}
							title="Submit"
						/>
						
					)}
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	formContainer: {
		backgroundColor: 'white'
	},
	screen: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: "center",
		justifyContent: "center",
	},
	inputContainer: {
		marginVertical: 30,
		alignItems: "center",
	},
	inputPrompt: {
		fontSize: 22,
		textAlign: "center",
		marginHorizontal: 10,
	},
	inputSubPrompt: {
		fontSize: 18,
		color: "#bbb",
		textAlign: "center",
		marginHorizontal: 15,
	},
	inputAlertPrompt: {
		fontSize: 18,
		color: "rgba(251, 18, 18, 0.62)",
		textAlign: "center",
		marginHorizontal: 15,
	},
	input: {
		width: 300,
		fontSize: 32,
		borderBottomWidth: 2,
		borderBottomColor: "#ccc",
	},
	field: {
		fontSize: 33,
		color: Colors.light.text,
		textAlign: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
});

export default BudgetFormScreen;
