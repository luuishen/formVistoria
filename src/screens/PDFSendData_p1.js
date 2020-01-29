import React, { Component } from 'react';
import { Alert, View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';

export default class PDFSendData_p1 extends Component{

	render(){

		const locatario = this.props.navigation.getParam('locatario', '');
		const locador = this.props.navigation.getParam('locador', '');
		const endereco = this.props.navigation.getParam('endereco', '');
		const bairro = this.props.navigation.getParam('bairro', '');
		const cidade = this.props.navigation.getParam('cidade', '');
		const uf = this.props.navigation.getParam('uf', '');
		const situacaoN = this.props.navigation.getParam('situacaoN', '');
		const situacaoDataDia = this.props.navigation.getParam('situacaoDataDia', '');
		const situacaoDataMes = this.props.navigation.getParam('situacaoDataMes', '');
		const situacaoDataAno = this.props.navigation.getParam('situacaoDataAno', '');
		const situacaoMedidorNEquatorial = this.props.navigation.getParam('situacaoMedidorNEquatorial', '');
		const situacaoMedidorNAguas = this.props.navigation.getParam('situacaoMedidorNAguas', '');
		const situacaoMedidorNGas = this.props.navigation.getParam('situacaoMedidorNGas', '');
		const situacaoLeituraEquatorial = this.props.navigation.getParam('situacaoLeituraEquatorial', '');
		const situacaoLeituraAguas = this.props.navigation.getParam('situacaoLeituraAguas', '');
		const situacaoLeituraGas = this.props.navigation.getParam('situacaoLeituraGas', '');
		const estadoFisicoPinturaExObs = this.props.navigation.getParam('estadoFisicoPinturaExObs', '');
		const estadoFisicoPinturaInObs = this.props.navigation.getParam('estadoFisicoPinturaInObs', '');
		const tipoVistoriaLocacao = this.props.navigation.getParam('tipoVistoriaLocacao', '')==false? "0":"1";
		const tipoVistoriaAvaliacao = this.props.navigation.getParam('tipoVistoriaAvaliacao', '')==false? "0":"1";
		const tipoVistoriaDesocupacao = this.props.navigation.getParam('tipoVistoriaDesocupacao', '')==false? "0":"1";
		const tipoImovelCasa = this.props.navigation.getParam('tipoImovelCasa', '')==false? "0":"1";
		const tipoImovelApartamento = this.props.navigation.getParam('tipoImovelApartamento', '')==false? "0":"1";
		const tipoImovelPontoComercial = this.props.navigation.getParam('tipoImovelPontoComercial', '')==false? "0":"1";
		const tipoImovelSitio = this.props.navigation.getParam('tipoImovelSitio', '')==false? "0":"1";
		const tipoImovelTerreno = this.props.navigation.getParam('tipoImovelTerreno', '')==false? "0":"1";
		const situacaoMedidorEquatorial = this.props.navigation.getParam('situacaoMedidorEquatorial', '')==false? "0":"1";
		const situacaoMedidorAguas = this.props.navigation.getParam('situacaoMedidorAguas', '')==false? "0":"1";
		const situacaoMedidorGas = this.props.navigation.getParam('situacaoMedidorGas', '')==false? "0":"1";
		const situacaoTampaEquatorial = this.props.navigation.getParam('situacaoTampaEquatorial', '')==false? "0":"1";
		const situacaoTampaAguas = this.props.navigation.getParam('situacaoTampaAguas', '')==false? "0":"1";
		const situacaoTampaGas = this.props.navigation.getParam('situacaoTampaGas', '')==false? "0":"1";
		const estadoFisicoPinturaExNova = this.props.navigation.getParam('estadoFisicoPinturaExNova', '')==false? "0":"1";
		const estadoFisicoPinturaExConservada = this.props.navigation.getParam('estadoFisicoPinturaExConservada', '')==false? "0":"1";
		const estadoFisicoPinturaExVelha = this.props.navigation.getParam('estadoFisicoPinturaExVelha', '')==false? "0":"1";
		const estadoFisicoPinturaInNova = this.props.navigation.getParam('estadoFisicoPinturaInNova', '')==false? "0":"1";
		const estadoFisicoPinturaInConservada = this.props.navigation.getParam('estadoFisicoPinturaInConservada', '')==false? "0":"1";
		const estadoFisicoPinturaInVelha = this.props.navigation.getParam('estadoFisicoPinturaInVelha', '')==false? "0":"1";

		const formId = this.props.navigation.getParam('formId', '');

		const formId_p1 = formId+"_p1";

		const formData = `locatario=${locatario}&locador=${locador}&endereco=${endereco}&bairro=${bairro}&formId=${formId_p1}&cidade=${cidade}&uf=${uf}&
		&situacaoN=${situacaoN}&situacaoDataDia=${situacaoDataDia}&situacaoDataMes=${situacaoDataMes}&situacaoDataAno=${situacaoDataAno}&situacaoTampaGas=${situacaoTampaGas}&situacaoTampaAguas=${situacaoTampaAguas}&
		&situacaoTampaEquatorial=${situacaoTampaEquatorial}&situacaoMedidorGas=${situacaoMedidorGas}&situacaoMedidorAguas=${situacaoMedidorAguas}&
		&situacaoMedidorEquatorial=${situacaoMedidorEquatorial}&situacaoMedidorNGas=${situacaoMedidorNGas}&situacaoMedidorNAguas=${situacaoMedidorNAguas}&
		&situacaoMedidorNEquatorial=${situacaoMedidorNEquatorial}&situacaoLeituraGas=${situacaoLeituraGas}&situacaoLeituraAguas=${situacaoLeituraAguas}&
		&situacaoLeituraEquatorial=${situacaoLeituraEquatorial}&estadoFisicoPinturaExNova=${estadoFisicoPinturaExNova}&estadoFisicoPinturaExConservada=${estadoFisicoPinturaExConservada}&
		&estadoFisicoPinturaExVelha=${estadoFisicoPinturaExVelha}&estadoFisicoPinturaExObs=${estadoFisicoPinturaExObs}&estadoFisicoPinturaInNova=${estadoFisicoPinturaInNova}&
		&estadoFisicoPinturaInConservada=${estadoFisicoPinturaInConservada}&estadoFisicoPinturaInVelha=${estadoFisicoPinturaInVelha}&estadoFisicoPinturaInObs=${estadoFisicoPinturaInObs}&
		&tipoImovelCasa=${tipoImovelCasa}&tipoImovelApartamento=${tipoImovelApartamento}&tipoImovelPontoComercial=${tipoImovelPontoComercial}&
		&tipoImovelSitio=${tipoImovelSitio}&tipoImovelTerreno=${tipoImovelTerreno}&tipoVistoriaLocacao=${tipoVistoriaLocacao}&tipoVistoriaAvaliacao=${tipoVistoriaAvaliacao}&
		&tipoVistoriaDesocupacao=${tipoVistoriaDesocupacao}`;

		return(
			<WebView 
	          source={{uri: "https://formvistoria.000webhostapp.com/p1.php", method:"POST", body: formData}}
	          javaScriptEnabled={true}
	          domStorageEnabled={true}	          
    		  allowUniversalAccessFromFileURLs={true}
    		  startInLoadingState={true}
    		  mixedContentMode={'always'}
              onMessage={ message => {
              	this.props.navigation.navigate('PDFSendData_p2', {
	          	'base64': [message.nativeEvent.data],
	          	'formId': formId,
	          	})
              }}
        	/>
		);
	}
}