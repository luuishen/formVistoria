import React, { Component } from 'react';
import { Alert, View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default class PDFSendData_p9 extends Component {
	render(){
		let base64_Code = this.props.navigation.getParam('base64','');
		const formId = this.props.navigation.getParam('formId', "");
		const formId_p9 = formId+"_p9";

		const formData = `formId=${formId_p9}`;

		return(
				<WebView 
		          source={{uri: "https://formvistoria.000webhostapp.com/p9.php", method: "POST", body: formData}}
		          javaScriptEnabled={true}
		          domStorageEnabled={true}
		          onMessage={ message => {
		          	base64_Code = [...base64_Code, message.nativeEvent.data];
	              	this.props.navigation.navigate('PDFSendData_p10', {
		          		'base64': base64_Code,
		          		'formId': formId,
		          	});
	              }}
	        	/>
		);
	}
}