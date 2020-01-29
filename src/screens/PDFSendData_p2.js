import React, { Component } from 'react';
import { Alert, View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default class PDFSendData_p2 extends Component {
	render(){
		let base64_Code = this.props.navigation.getParam('base64','');
		const formId = this.props.navigation.getParam('formId', '');
		const formId_p2 = formId+"_p2";

		const formData = `formId=${formId_p2}`;

		return(
				<WebView 
		          source={{uri: "https://formvistoria.000webhostapp.com/p2.php", method: "POST", body: formData}}
		          javaScriptEnabled={true}
		          domStorageEnabled={true}
    		  	  allowUniversalAccessFromFileURLs={true}
    		  	  startInLoadingState={true}
    		  	  mixedContentMode={'always'}
		          onMessage={ message => {
		          	base64_Code = [...base64_Code, message.nativeEvent.data];
	              	this.props.navigation.navigate('PDFSendData_p3', {
		          		'base64': base64_Code,
		          		'formId': formId,
		          	});
	              }}
	        	/>
		);
	}
}