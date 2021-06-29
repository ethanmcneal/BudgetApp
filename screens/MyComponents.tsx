import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SimpleSquareCard from "../components/myComponents/SimpleSquareCard";


const MyComponents = (props :any) => {
    return(
        <View>
        <View style={styles.cardContainer}>
        <SimpleSquareCard color='#8a5b53' textColor='white' onPress={() =>props.navigation.navigate('SquareCard')}>
            Square Card
        </SimpleSquareCard>
        <SimpleSquareCard color='#8a88b2' textColor='white' onPress={() => props.navigation.navigate('CenterView')}>
            CenterView
        </SimpleSquareCard>
        <SimpleSquareCard color='#8ab288' textColor='white' onPress={props.navigate}>
            Square Card
        </SimpleSquareCard>
        <SimpleSquareCard color='#b088b2' textColor='white' onPress={props.navigate}>
            Square Card
        </SimpleSquareCard>

        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: 20,
    },
})

export default MyComponents