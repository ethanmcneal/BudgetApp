import * as React from 'react';
import { StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import EditScreenInfo from '../components/EditScreenInfo';
import CustomHeaderButton from '../components/myComponents/CustomHeaderButton';
import SimpleSquareCard from '../components/myComponents/SimpleSquareCard';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function Home(props :any) {
  return (
    <View style={styles.container}>
      <View style={styles.separator}/>
      <Text>
        Budget Calculator
      </Text>
      <SimpleSquareCard color={Colors.light.tint} onPress={() => props.navigation.navigate('Budget Form')}>Calculator</SimpleSquareCard>
      <View style={styles.separator}  />
    </View>
  );
}

Home.navigationOptions = (navData :any) => {
	return{
	headerTitle: "Your Orders",
	headerLeft: () => { 
		return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
			<Item title='Menu' iconName={'ios-menu'} onPress={() => {
				navData.navigation.toggleDrawer();
			}}/>
		</HeaderButtons>
		)},
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
    backgroundColor: '#222'
  },
});
