import React, { Component } from 'react';
import { Alert, Text, View, Button, TextInput} from 'react-native';
import RNImageToPdf from 'react-native-image-to-pdf';
import fetch_blob from 'react-native-fetch-blob';
import RNFS from 'react-native-fs';
const timer = require('react-native-timer');


export default class PDFScreen extends Component {

	myAsyncPDFFunction = async (imagesPath, formId, pdfFolder) => {
		try {
			const options = {
				imagePaths: imagesPath,
				name: 'formulario_'+formId+'.pdf',
			};			
			const pdf = await RNImageToPdf.createPDFbyImages(options);
			
			const destinationFolder = pdfFolder+options.name;
			RNFS.moveFile(pdf.filePath, destinationFolder)
			.then(r => {				
				console.log('PDF Gerado com sucesso. Salvo em: ',destinationFolder);
			})
			.catch(e => console.log(e));

		} catch(e) {
			console.log(e);
		}
	};

	saveImages64 = (bases, formId, imagesFolder, pdfFolder) => {
		const fs = fetch_blob.fs;
		const dirs = fetch_blob.fs.dirs;
		var imagesPath = [];
		bases.map((b, i) => {
		    const file_path = imagesFolder+formId+"_"+i+".png";
		    console.log(file_path);
		    imagesPath = [...imagesPath, file_path];
		    var image_data = b;

		    RNFS.writeFile(file_path, image_data, 'base64');
		});
		this.myAsyncPDFFunction(imagesPath, formId, pdfFolder);
	};

	createFolder = async (formId, bases, baseFolder, formFolder, imagesFolder, pdfFolder) => {

		const existBase = await RNFS.exists(baseFolder);
		if(existBase==false){
			const createBase = RNFS.mkdir(baseFolder);
			console.log('Diretório base criado com sucesso!');
		}else{
			console.log('Diretorio base já existente');
		}

		const existForm = await RNFS.exists(formFolder);
		if(existForm==false){
			const createForm = RNFS.mkdir(formFolder);
			console.log('Diretório do form criado com sucesso');
		}else{
			console.log('Diretório do form já existente');
		}

		const existImages = await RNFS.exists(imagesFolder);
		if(existImages==false){
			const createImages = RNFS.mkdir(imagesFolder);
			console.log('Diretório das imagens do form criado com sucesso');
		}else{
			console.log('Diretório das imagens do form já existente');
		}

		const existPDF = await RNFS.exists(pdfFolder);
		if(existPDF==false){
			const createPDF = RNFS.mkdir(pdfFolder);
			console.log('Diretório do pdf do form criado com sucesso');
		}else{
			console.log('Diretório do pdf do form já existente');
		}
		
		this.saveImages64(bases, formId, imagesFolder, pdfFolder);		
	}

    componentDidMount(){
    	const getFormId = this.props.navigation.getParam('formId', 'Erro ao recolher o ID');
  		const getBases64 = this.props.navigation.getParam('base64', 'Erro ao recolher as imagens ');

		const baseFolder = '/storage/emulated/0/formVistoria/';

		const formFolder = baseFolder+getFormId+'/';
		const imagesFolder = formFolder+'images/';
		const pdfFolder = formFolder+'pdf/';

  		this.createFolder(getFormId, getBases64, baseFolder, formFolder, imagesFolder, pdfFolder);
    }

	render(){	
		return(
			<View>
				<Text>PDFCreator Screen</Text>
			</View>
		);
	}
}