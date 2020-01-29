import React, { Component } from 'react';
import { Alert, Text, View, Button, TextInput} from 'react-native';
import RNImageToPdf from 'react-native-image-to-pdf';
import fetch_blob from 'react-native-fetch-blob';
import RNFS from 'react-native-fs';


export default class PDFScreen extends Component {

	myAsyncPDFFunction = async (imagesPath, formId) => {
		try {
			const options = {
				imagePaths: imagesPath,
				name: 'formulario_'+formId+'.pdf',
			};
			const pdf = await RNImageToPdf.createPDFbyImages(options);
			console.log('PDF Gerado com sucesso. Salvo em: ',pdf.filePath);			
		} catch(e) {
			console.log(e);
		}
	};

	saveImages64 = (bases, formId) => {
		const fs = fetch_blob.fs;
		const dirs = fetch_blob.fs.dirs;
		var imagesPath = [];
		bases.map((b, i) => {
		    const file_path = dirs.DCIMDir +"/"+formId+"_"+i+".png";
		    imagesPath= [...imagesPath, file_path];
		    var image_data = b;

		    RNFS.writeFile(file_path, image_data, 'base64');
		});
		this.myAsyncPDFFunction(imagesPath, formId);
	};


    componentDidMount(){
    	const getFormId = this.props.navigation.getParam('formId', 'Erro ao recolher o ID');
  		const getBases64 = this.props.navigation.getParam('base64', 'Erro ao recolher as imagens ');
  		this.saveImages64(getBases64, getFormId);
    }

	render(){	
		return(
			<View>
				<Text>{this.state.formId}</Text>
				{/*<Text>Image Paths: {this.state.imagesPath}</Text>*/}
			</View>
		);
	}
}