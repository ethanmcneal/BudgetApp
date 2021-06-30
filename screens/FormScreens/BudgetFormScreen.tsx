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
	const [income, setIncome] = useState('');
	const [expenses, setExpenses] = useState({house: '', utilities: '', car: '', food: '', leisure: '', other: '', });
	const [counter, setCounter] = useState(0)

	const handleChange = (e :any, category :string) => {
		setExpenses({...expenses, [category]: e})
	}
	return (
		<ScrollView>
			<View style={styles.screen}>
				<Text>{counter}</Text>
	{counter === 0 && <View style={styles.inputContainer}>
                    <Text style={styles.inputPrompt}>How much Income do you make in a month?</Text>
					<Ionicons name='cash' size={42} color='green'/>
                    <View style={styles.input}>
					<TextInput
					style={styles.field}
                    placeholder=''
                    value={income}
					onChangeText={(text) => setIncome(text)} 
                    />
                    </View>
				</View>}
	{counter === 1 && <View style={styles.inputContainer}>
					<Ionicons iconName={'ios-home'} size={22}/>
                    <Text style={styles.inputPrompt}>How much Income do you make in any given month?</Text>
                    <View style={styles.input}>
					<TextInput
					style={styles.field}
                    placeholder=''
                    value={expenses.house}
					onChangeText={(text) => handleChange(text, 'house')} 
                    />
                    </View>
				</View>}
	{counter === 2 && <View style={styles.inputContainer}>
					<Ionicons iconName={'ios-money'} size={22}/>
                    <Text style={styles.inputPrompt}>How much Income do you make in any given month?</Text>
                    <View style={styles.input}>
					<TextInput
					style={styles.field}
                    placeholder=''
                    value={expenses.utilities}
					onChangeText={(text) => handleChange(text, 'utilities')} 
 
                    />
                    </View>
				</View>}
	{counter === 3 && <View style={styles.inputContainer}>
					<Ionicons iconName={'ios-money'} size={22}/>
                    <Text style={styles.inputPrompt}>How much Income do you make in any given month?</Text>
                    <View style={styles.input}>
					<TextInput
					style={styles.field}
                    placeholder=''
                    value={expenses.car} 
					onChangeText={(text) => handleChange(text, 'car')} 

                    />
                    </View>
				</View>}
	{counter === 4 && <View style={styles.inputContainer}>
					<Ionicons iconName={'ios-money'} size={22}/>
                    <Text style={styles.inputPrompt}>How much Income do you make in any given month?</Text>
                    <View style={styles.input}>
					<TextInput
					style={styles.field}
                    placeholder=''
                    value={expenses.food} 
					onChangeText={(text) => handleChange(text, 'food')} 

                    />
                    </View>
					
				</View>}
	{counter === 5 && <View style={styles.inputContainer}>
					<Ionicons iconName={'ios-money'} size={22}/>
                    <Text style={styles.inputPrompt}>How much Income do you make in any given month?</Text>
                    <View style={styles.input}>
					<TextInput
					style={styles.field}
                    placeholder=''
                    value={expenses.leisure}
					onChangeText={(text) => handleChange(text, 'leisure')} 
 
                    />
                    </View>
					
				</View>}
	{counter === 6 && <View style={styles.inputContainer}>
					<Ionicons iconName={'ios-money'} size={22}/>
                    <Text style={styles.inputPrompt}>How much Income do you make in any given month?</Text>
                    <View style={styles.input}>
					<TextInput
					style={styles.field}
                    placeholder=''
                    value={expenses.other} 
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
				{counter < 6 && <Button
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
		marginVertical: 30,
        alignItems: 'center',
    },
    inputPrompt: {
		fontSize: 22,
		textAlign: 'center'
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
		textAlign: 'center',
	},
	form: {},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
});

export default BudgetFormScreen;
