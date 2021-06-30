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

const BudgetFormScreen = (props: any) => {
	const [income, setIncome] = useState('');
	const [expenses, setExpenses] = useState({house: '', utilities: '', car: '', food: '', leisure: '', otherPayments: '', });
	const [counter, setCounter] = useState(0)
	return (
		<ScrollView>
			<View style={styles.screen}>
				<Text>{counter}</Text>
	{counter === 0 && <View style={styles.inputContainer}>
					<Ionicons iconName={'ios-money'} size={22}/>
                    <Text style={styles.inputPrompt}>How much Income do you make in any given month?</Text>
                    <View style={styles.input}>
					<TextInput
                    placeholder=''
                    value={income} 
                    />
                    </View>
				</View>}
	{counter === 1 && <View style={styles.inputContainer}>
					<Ionicons iconName={'ios-home'} size={22}/>
                    <Text style={styles.inputPrompt}>How much Income do you make in any given month?</Text>
                    <View style={styles.input}>
					<TextInput
                    placeholder=''
                    value={income} 
                    />
                    </View>
				</View>}
	{counter === 2 && <View style={styles.inputContainer}>
					<Ionicons iconName={'ios-money'} size={22}/>
                    <Text style={styles.inputPrompt}>How much Income do you make in any given month?</Text>
                    <View style={styles.input}>
					<TextInput
                    placeholder=''
                    value={income} 
                    />
                    </View>
				</View>}
	{counter === 3 && <View style={styles.inputContainer}>
					<Ionicons iconName={'ios-money'} size={22}/>
                    <Text style={styles.inputPrompt}>How much Income do you make in any given month?</Text>
                    <View style={styles.input}>
					<TextInput
                    placeholder=''
                    value={income} 
                    />
                    </View>
				</View>}
	{counter === 4 && <View style={styles.inputContainer}>
					<Ionicons iconName={'ios-money'} size={22}/>
                    <Text style={styles.inputPrompt}>How much Income do you make in any given month?</Text>
                    <View style={styles.input}>
					<TextInput
                    placeholder=''
                    value={income} 
                    />
                    </View>
				</View>}
				<View style={styles.buttonContainer}>
				{counter > 0 && <Button
					onPress={() => {
						setCounter(prev => prev - 1);
					}}
					title="Back"
				/>}
				{counter < 4 && <Button
					onPress={() => {
						setCounter(prev => prev + 1);
					}}
					title="Next"
				/>}
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: 'center',
	},
    inputContainer: {
        alignItems: 'center',
    },
    inputPrompt: {
		fontSize: 22
    },
	input: {
		width: "60%",
		marginVertical: 20,
		borderWidth: 2,
		borderColor: "#ccc",
	},
	form: {},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
});

export default BudgetFormScreen;
