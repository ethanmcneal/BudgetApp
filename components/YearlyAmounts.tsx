import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const YearlyAmounts = (props: any) => {
	// P [(1 + i)^n – 1] => compound interest formula
	// P = principle
	// i = nominal interest rate,
	// n = compounding periods
	const getTotalWithInterest = (interestRate: number, numOfYears: number) => {
		//interest rate should be passed as a percentage decimal
		let initialAmount = props.leftover * 12;
		// 5% => 0.05
		let interestPercentage = Math.pow(1 + interestRate, numOfYears) - 1;
		let totalYearlyInterest = initialAmount * interestPercentage;
		console.log(totalYearlyInterest);
		return initialAmount + totalYearlyInterest;
	};
	useEffect(() => {}, [props.interest]);
	const yearlyAmounts = {
		oneYear: getTotalWithInterest(parseFloat(`0.${props.interest}`), 1),
		twoYears: getTotalWithInterest(parseFloat(`0.${props.interest}`), 2),
		fiveYears: getTotalWithInterest(parseFloat(`0.${props.interest}`), 5),
		tenYears: getTotalWithInterest(parseFloat(`0.${props.interest}`), 10),
		twentyYears: getTotalWithInterest(
			parseFloat(`0.${props.interest}`),
			20,
		),
	};
	return (
		<View style={styles.resultsContainer}>
			<View style={styles.resultCard}>
            <Text>1 Year: </Text><Text style={{...styles.amount, fontSize: 16}}>${yearlyAmounts.oneYear.toFixed(2)}</Text>
            </View>
			<View style={styles.resultCard}>
            <Text>2 Years:</Text><Text style={{...styles.amount, fontSize: 18}}>${yearlyAmounts.twoYears.toFixed(2)}</Text>		
            </View>
			<View style={styles.resultCard}>
            <Text>5 Years: </Text><Text style={{...styles.amount, fontSize: 20}}>${yearlyAmounts.fiveYears.toFixed(2)}</Text>		
            </View>
			<View style={styles.resultCard}>
            <Text>10 Years:</Text><Text style={{...styles.amount, fontSize: 22}}>${yearlyAmounts.tenYears.toFixed(2)}</Text>		
            </View>
			<View style={styles.resultCard}>
			<Text>20 Years:</Text><Text style={{...styles.amount, fontSize: 24}}>${yearlyAmounts.twentyYears.toFixed(2)}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
    resultsContainer: {
        width: '80%'
    },
    resultCard: { 
        width: '100%',
        borderWidth: 2,
        padding: 15,
        borderColor: '#ccc',
        borderRadius: 8,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e8ded1',
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 0},
        shadowOpacity: .3,
        shadowRadius: 8,

    },
    amount: {
        color: 'green'
    },
})

export default YearlyAmounts;
