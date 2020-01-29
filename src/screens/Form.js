import React, { Component } from 'react';
import { Alert, ScrollView, Text, View, Button, TextInput, StyleSheet} from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CheckBox from '@react-native-community/checkbox'

const formId = Math.random().toString(36).substring(2,7);

export default class FormScreen extends Component {

	static navigationOptions = {
		title: 'Formulário de Vistória'
	};

	constructor(props){
		super(props);
		this.state = {
			locatario: '',
			locador: '',
			endereco: '',
			bairro: '',
			cidade: '',
			uf: '',
			situacaoN: '',
			situacaoDataDia: '',
			situacaoDataMes: '',
			situacaoDataAno: '',

			situacaoMedidorNEquatorial: '',
			situacaoMedidorNAguas: '',
			situacaoMedidorNGas: '',

			situacaoLeituraEquatorial: '',
			situacaoLeituraAguas: '',
			situacaoLeituraGas: '',

			estadoFisicoPinturaExObs: '',
			estadoFisicoPinturaInObs: '',

			tipoVistoriaLocacao: false,
			tipoVistoriaAvaliacao: false,
			tipoVistoriaDesocupacao: false,

			tipoImovelCasa: false,
			tipoImovelApartamento: false,
			tipoImovelPontoComercial: false,
			tipoImovelSitio: false,
			tipoImovelTerreno: false,

			situacaoMedidorEquatorial: false,
			situacaoMedidorAguas: false,
			situacaoMedidorGas: false,

			situacaoTampaEquatorial: false,
			situacaoTampaAguas: false,
			situacaoTampaGas: false,

			estadoFisicoPinturaExNova: false,
			estadoFisicoPinturaExConservada: false,
			estadoFisicoPinturaExVelha: false,
			
			estadoFisicoPinturaInNova: false,
			estadoFisicoPinturaInConservada: false,
			estadoFisicoPinturaInVelha: false,
		}
	};

	render(){
		return (
			<ScrollView>
				<View style={{ flex: 1 }}>
					<View style={{ marginTop:10 }}>
						<Button
							title="Converter em PDF"
							onPress={() => this.props.navigation.navigate('PDFSendData_p1', {
								locatario:this.state.locatario,
								locador:this.state.locador,
								endereco:this.state.endereco,
								bairro:this.state.bairro,
								cidade: this.state.cidade,
								uf: this.state.uf,
								situacaoN: this.state.situacaoN,
								situacaoDataDia: this.state.situacaoDataDia,
								situacaoDataMes: this.state.situacaoDataMes,
								situacaoDataAno: this.state.situacaoDataAno,
								situacaoMedidorNEquatorial: this.state.situacaoMedidorNEquatorial,
								situacaoMedidorNAguas: this.state.situacaoMedidorNAguas,
								situacaoMedidorNGas: this.state.situacaoMedidorNGas,
								situacaoLeituraEquatorial: this.state.situacaoLeituraEquatorial,
								situacaoLeituraAguas: this.state.situacaoLeituraAguas,
								situacaoLeituraGas: this.state.situacaoLeituraGas,
								estadoFisicoPinturaExObs: this.state.estadoFisicoPinturaExObs,
								estadoFisicoPinturaInObs: this.state.estadoFisicoPinturaInObs,
								tipoVistoriaLocacao: this.state.tipoVistoriaLocacao,
								tipoVistoriaAvaliacao: this.state.tipoVistoriaAvaliacao,
								tipoVistoriaDesocupacao: this.state.tipoVistoriaDesocupacao,
								tipoImovelCasa: this.state.tipoImovelCasa,
								tipoImovelApartamento: this.state.tipoImovelApartamento,
								tipoImovelPontoComercial: this.state.tipoImovelPontoComercial,
								tipoImovelSitio: this.state.tipoImovelSitio,
								tipoImovelTerreno: this.state.tipoImovelTerreno,
								situacaoMedidorEquatorial: this.state.situacaoMedidorEquatorial,
								situacaoMedidorAguas: this.state.situacaoMedidorAguas,
								situacaoMedidorGas: this.state.situacaoMedidorGas,
								situacaoTampaEquatorial: this.state.situacaoTampaEquatorial,
								situacaoTampaAguas: this.state.situacaoTampaAguas,
								situacaoTampaGas: this.state.situacaoTampaGas,
								estadoFisicoPinturaExNova: this.state.estadoFisicoPinturaExNova,
								estadoFisicoPinturaExConservada: this.state.estadoFisicoPinturaExConservada,
								estadoFisicoPinturaExVelha: this.state.estadoFisicoPinturaExVelha,
								estadoFisicoPinturaInNova: this.state.estadoFisicoPinturaInNova,
								estadoFisicoPinturaInConservada: this.state.estadoFisicoPinturaInConservada,
								estadoFisicoPinturaInVelha: this.state.estadoFisicoPinturaInVelha,
								formId: formId
							})}
						/>
	{/*TIPO VISTORÍA*/}
					<Text style={styles.h1}>1.0 Informações do Imóvel</Text>
					<Text style={styles.h1}>Tipo Vistória</Text>
					<View style={styles.checkBoxContainer}>
						<CheckBox
							value={this.state.tipoVistoriaLocacao}
							onChange={() => { this.setState({tipoVistoriaLocacao:!this.state.tipoVistoriaLocacao}) }}
						/>
						<Text>Locação</Text>

						<CheckBox
							value={this.state.tipoVistoriaAvaliacao}
							onChange={() => { this.setState({tipoVistoriaAvaliacao:!this.state.tipoVistoriaAvaliacao})}}
						/>
						<Text>Avaliação</Text>

						<CheckBox
							value={this.state.tipoVistoriaDesocupacao}
							onChange={() => { this.setState({tipoVistoriaDesocupacao:!this.state.tipoVistoriaDesocupacao})}}
						/>
						<Text>Desocupação</Text>
					</View>

	{/*INFORMAÇÕES DO IMÓVEL*/}
					<Text style={styles.h1}>Locatario</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({locatario:text})}
					/>

					<Text style={styles.h1}>Locador</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({locador:text})}
					/>

					<Text style={styles.h1}>Endereço</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({endereco:text})}
					/>

					<Text style={styles.h1}>Bairro</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({bairro:text})}
					/>

					<Text style={styles.h1}>Cidade</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({cidade:text})}
					/>

					<Text style={styles.h1}>UF</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({uf:text})}
					/>
					
	{/*TIPO DE IMÓVEL*/}
					<Text style={styles.h1}>Tipo de Imóvel</Text>

					<View style={styles.checkBoxContainer}>
						<CheckBox
							value={this.state.tipoImovelCasa}
							onChange={() => { this.setState({tipoImovelCasa:!this.state.tipoImovelCasa}) }}
						/>
						<Text>Casa</Text>

						<CheckBox
							value={this.state.tipoImovelApartamento}
							onChange={() => { this.setState({tipoImovelApartamento:!this.state.tipoImovelApartamento})}}
						/>
						<Text>Apartamento</Text>

						<CheckBox
							value={this.state.tipoImovelPontoComercial}
							onChange={() => { this.setState({tipoImovelPontoComercial:!this.state.tipoImovelPontoComercial})}}
						/>
						<Text>Ponto Comercial</Text>

					</View>

					<View style={styles.checkBoxContainer}>
						<CheckBox
							value={this.state.tipoImovelSitio}
							onChange={() => { this.setState({tipoImovelSitio:!this.state.tipoImovelSitio})}}
						/>
						<Text>Sitio</Text>

						<CheckBox
							value={this.state.tipoImovelTerreno}
							onChange={() => { this.setState({tipoImovelTerreno:!this.state.tipoImovelTerreno})}}
						/>
						<Text>Terreno</Text>
					</View>

	{/*SITUAÇÃO ATUAL DO IMÓVEL*/}
					<Text style={styles.h1}>Situação Atual do Imóvel</Text>
					

					<Text>Nº Locação</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({situacaoN:text})}
					/>

					<Text>Dia</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({situacaoDataDia:text})}
						keyboardType='numeric'
					/>

					<Text>Mês</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({situacaoDataMes:text})}
						keyboardType='numeric'
					/>

					<Text>Ano</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({situacaoDataAno:text})}
						keyboardType='numeric'
					/>

					<Text style={styles.h2}>--Equatorial--</Text>

					<Text>Medidor Nº</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({situacaoMedidorNEquatorial:text})}
					/>

					<Text>Leitura Nº</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({situacaoLeituraEquatorial:text})}
					/>

					<Text>Lacres</Text>
					<View style={styles.checkBoxContainer}>
						<CheckBox
							value={this.state.situacaoMedidorEquatorial}
							onChange={() => { this.setState({situacaoMedidorEquatorial:!this.state.situacaoMedidorEquatorial}) }}
						/>
						<Text>Medidor</Text>

						<CheckBox
							value={this.state.situacaoTampaEquatorial}
							onChange={() => { this.setState({situacaoTampaEquatorial:!this.state.situacaoTampaEquatorial})}}
						/>
						<Text>Tampa (cx)</Text>
					</View>

					<Text style={styles.h2}>--Águas de Teresina--</Text>

					<Text>Medidor Nº</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({situacaoMedidorNAguas:text})}
					/>

					<Text>Leitura Nº</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({situacaoLeituraAguas:text})}
					/>

					<Text>Lacres</Text>
					<View style={styles.checkBoxContainer}>
						<CheckBox
							value={this.state.situacaoMedidorAguas}
							onChange={() => { this.setState({situacaoMedidorAguas:!this.state.situacaoMedidorAguas})}}
						/>
						<Text>Medidor</Text>

						<CheckBox
							value={this.state.situacaoTampaAguas}
							onChange={() => { this.setState({situacaoTampaAguas:!this.state.situacaoTampaAguas})}}
						/>
						<Text>Tampa (cx)</Text>
					</View>

					<Text style={styles.h2}>--Gás--</Text>

					<Text>Medidor Nº</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({situacaoMedidorNGas:text})}
					/>

					<Text>Leitura Nº</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({situacaoLeituraGas:text})}
					/>

					<Text>Lacres</Text>
					<View style={styles.checkBoxContainer}>
						<CheckBox
							value={this.state.situacaoMedidorGas}
							onChange={() => { this.setState({situacaoMedidorGas:!this.state.situacaoMedidorGas})}}
						/>
						<Text>Medidor</Text>

						<CheckBox
							value={this.state.situacaoTampaGas}
							onChange={() => { this.setState({situacaoTampaGas:!this.state.situacaoTampaGas})}}
						/>
						<Text>Tampa (cx)</Text>
					</View>
{/* ESTADO FÍSICO DO IMÓVEL */}					
					<Text style={styles.h1}>Estado Físico do Imóvel</Text>
					
					<Text style={styles.h2}>--PINTURA EXTERNA--</Text>
					<View style={styles.checkBoxContainer}>
						<CheckBox
							value={this.state.estadoFisicoPinturaExNova}
							onChange={() => { this.setState({estadoFisicoPinturaExNova:!this.state.estadoFisicoPinturaExNova}) }}
						/>
						<Text>Nova</Text>

						<CheckBox
							value={this.state.estadoFisicoPinturaExConservada}
							onChange={() => { this.setState({estadoFisicoPinturaExConservada:!this.state.estadoFisicoPinturaExConservada}) }}
						/>
						<Text>Conservada</Text>

						<CheckBox
							value={this.state.estadoFisicoPinturaExVelha}
							onChange={() => { this.setState({estadoFisicoPinturaExVelha:!this.state.estadoFisicoPinturaExVelha})}}
						/>
						<Text>Velha</Text>
					</View>

					<Text>Obs</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({estadoFisicoPinturaExObs:text})}
					/>

					<Text style={styles.h2}>--PINTURA INTERNA--</Text>
					<View style={styles.checkBoxContainer}>
						<CheckBox
							value={this.state.estadoFisicoPinturaInNova}
							onChange={() => { this.setState({estadoFisicoPinturaInNova:!this.state.estadoFisicoPinturaInNova}) }}
						/>
						<Text>Nova</Text>

						<CheckBox
							value={this.state.estadoFisicoPinturaInConservada}
							onChange={() => { this.setState({estadoFisicoPinturaInConservada:!this.state.estadoFisicoPinturaInConservada})}}
						/>
						<Text>Conservada</Text>

						<CheckBox
							value={this.state.estadoFisicoPinturaInVelha}
							onChange={() => { this.setState({estadoFisicoPinturaInVelha:!this.state.estadoFisicoPinturaInVelha})}}
						/>
						<Text>Velha</Text>
					</View>

					<Text>Obs</Text>
					<TextInput
						style={{ height:40, borderWidth:1 }}
						onChangeText={text => this.setState({estadoFisicoPinturaInObs:text})}
					/>
					
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({

	h1: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	h2: {
		fontSize: 15,
		fontWeight: 'bold',
	},
	checkBoxContainer:{
		flexDirection: 'row',
		alignItems: 'center',
	},

});


{/*<View>
	<RadioForm
      radio_props={this.state.situacaoAgua}
      initial={0}
      onPress={(value) => {this.setState({value:value})}}
    />
</View>*/}	