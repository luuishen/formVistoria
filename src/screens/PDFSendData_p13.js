import React, { Component } from 'react';
import { Alert, View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default class PDFSendData_p13 extends Component {
	render(){
		let base64_Code = this.props.navigation.getParam('base64','');
		const formId = this.props.navigation.getParam('formId', "");
		const formId_p13 = formId+"_p13";

		const formData = `formId=${formId_p13}`;

		return(
				<WebView 
		          source={{uri: "https://formvistoria.000webhostapp.com/p13.php", method: "POST", body: formData}}
		          javaScriptEnabled={true}
		          domStorageEnabled={true}
		          onMessage={ message => {
		          	base64_Code = [...base64_Code, message.nativeEvent.data];
	              	this.props.navigation.navigate('PDFSendData_p14', {
		          		'base64': base64_Code,
		          		'formId': formId,
		          	});
	              }}
	        	/>
		);
	}
}