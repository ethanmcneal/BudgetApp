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
import Colors from "../../constants/Colors";

const BudgetFormScreen = (props: any) => {
	const [income, setIncome] = useState("");
	const [expenses, setExpenses] = useState({
		house: "",
		utilities: "",
		car: "",
		food: "",
		leisure: "",
		other: "",
	});
	const [counter, setCounter] = useState(0);

	const handleChange = (text: any, category: string) => {
		let replacedText = text.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '')
		setExpenses({ ...expenses, [category]: replacedText });
	};
	const handleIncomeChange = (text: any) => {
		let replacedText = text.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '')
		setIncome(replacedText);
	};
	return (
		<ScrollView>
			<View style={styles.screen}>
				<Text>{counter}</Text>
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
							/>
						</View>
					</View>
				)}
				{counter === 1 && (
					<View style={styles.inputContainer}>
						<Ionicons name={"home"} size={42} color="red" />
						<Text style={styles.inputPrompt}>
							What is your monthly living payment? eg. rent,
							mortgage, etc
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
						<View style={styles.input}>
							<TextInput
								style={styles.field}
								placeholder=""
								value={expenses.utilities}
								onChangeText={(text) =>
									handleChange(text, "utilities")
								}
								keyboardType={'numbers-and-punctuation'}
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
						<View style={styles.input}>
							<TextInput
								style={styles.field}
								placeholder=""
								value={expenses.food}
								onChangeText={(text) =>
									handleChange(text, "food")
								}
								keyboardType={'numbers-and-punctuation'}
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
						<View style={styles.input}>
							<TextInput
								style={styles.field}
								placeholder=""
								value={expenses.other}
								onChangeText={(text) =>
									handleChange(text, "other")
								}
								keyboardType={'numbers-and-punctuation'}
							/>
						</View>
					</View>
				)}
				<Text style={styles.inputSubPrompt}>
					Pro tip! you can string together numbers with a{" "}
					<Text style={{ color: "green" }}>+</Text> or{" "}
					<Text style={{ color: "red" }}>-</Text> and we will do the
					math for you!
				</Text>

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
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
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
	form: {},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
});

export default BudgetFormScreen;
