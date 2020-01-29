import React, { Component } from 'react';
import { Alert, View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default class PDFSendData_p3 extends Component {
	render(){
		let base64_Code = this.props.navigation.getParam('base64','');
		const formId = this.props.navigation.getParam('formId', "");
		const formId_p3 = formId+"_p3";

		const formData = `formId=${formId_p3}`;

		return(
				<WebView 
		          source={{uri: "https://formvistoria.000webhostapp.com/p3.php", method: "POST", body: formData}}
		          javaScriptEnabled={true}
		          domStorageEnabled={true}
		          onMessage={ message => {
		          	base64_Code = [...base64_Code, message.nativeEvent.data];
	              	this.props.navigation.navigate('PDFSendData_p4', {
		          		'base64': base64_Code,
		          		'formId': formId,
		          	});
	              }}
	        	/>
		);
	}
}