import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FormScreen from './Form';
import PDFSendData_p1 from './PDFSendData_p1';
import PDFSendData_p2 from './PDFSendData_p2';
import PDFSendData_p3 from './PDFSendData_p3';
import PDFSendData_p4 from './PDFSendData_p4';
import PDFSendData_p5 from './PDFSendData_p5';
import PDFSendData_p6 from './PDFSendData_p6';
import PDFSendData_p7 from './PDFSendData_p7';
import PDFSendData_p8 from './PDFSendData_p8';
import PDFSendData_p9 from './PDFSendData_p9';
import PDFSendData_p10 from './PDFSendData_p10';
import PDFSendData_p11 from './PDFSendData_p11';
import PDFSendData_p12 from './PDFSendData_p12';
import PDFSendData_p13 from './PDFSendData_p13';
import PDFSendData_p14 from './PDFSendData_p14';
import PDFCreator from './PDFCreator';

const navigationOptionsValue = {
	state:{
		checked: false,
	 },
	headerTitleStyle: {
		color: '#FFF',
	},
	headerTitleStyle: {
		color: '#FFF'
	},
	headerTintColor:  '#FFF',
	headerStyle: {
		backgroundColor: '#B22222'
	}
}	

const AppNavigator = createStackNavigator(
	{
		Formulario:{
			screen: FormScreen,
			navigationOptions: navigationOptionsValue
		},
		PDFCreator:{
			screen: PDFCreator,
			navigationOptions: navigationOptionsValue
		},
		PDFSendData_p1:{
			screen: PDFSendData_p1,
			navigationOptions: navigationOptionsValue
		},
		PDFSendData_p2:{
			screen: PDFSendData_p2,
			navigationOptions: navigationOptionsValue
		},
		PDFSendData_p3:{
			screen: PDFSendData_p3,
			navigationOptions: navigationOptionsValue
		},
		PDFSendData_p4: {
			screen: PDFSendData_p4,
			navigationOptions: navigationOptionsValue
		},
		PDFSendData_p5:{
			screen: PDFSendData_p5,
			navigationOptions: navigationOptionsValue
		},
		PDFSendData_p6:{
			screen: PDFSendData_p6,
			navigationOptions: navigationOptionsValue
		},
		PDFSendData_p7:{
			screen: PDFSendData_p7,
			navigationOptions: navigationOptionsValue
		},
		PDFSendData_p8:{
			screen: PDFSendData_p8,
			navigationOptions: navigationOptionsValue
		},
		PDFSendData_p9:{
			screen: PDFSendData_p9,
			navigationOptions: navigationOptionsValue
		},
		PDFSendData_p10:{
			screen: PDFSendData_p10,
			navigationOptions: navigationOptionsValue
		},
		PDFSendData_p11:{
			screen: PDFSendData_p11,
			navigationOptions: navigationOptionsValue
		},
		PDFSendData_p12:{
			screen: PDFSendData_p12,
			navigationOptions: navigationOptionsValue
		},
		PDFSendData_p13:{
			screen: PDFSendData_p13,
			navigationOptions: navigationOptionsValue
		},
		PDFSendData_p14:{
			screen: PDFSendData_p14,
			navigationOptions: navigationOptionsValue
		},
	},
	{
		initialRouteName: 'Formulario'
	}
);

export default createAppContainer(AppNavigator);
