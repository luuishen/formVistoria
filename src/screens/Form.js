import React, { Component } from 'react';
import { Alert, ScrollView, Text, View, Image, TextInput, StyleSheet} from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CheckBox from '@react-native-community/checkbox'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WHITEPDFICON } from '../../images';

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
			<View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
				<View flex={8}>
					<ScrollView>
						<View style={{padding: 16}}>
							{/*TIPO VISTORÍA*/}
							<Text style={styles.h1}>1.0 - Informações do Imóvel</Text>
							<Text style={styles.h2}>Tipo Vistoria</Text>
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
							<Text style={styles.h2}>Locatario</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({locatario:text})}
							/>

							<Text style={styles.h2}>Locador</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({locador:text})}
							/>

							<Text style={styles.h2}>Endereço</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({endereco:text})}
							/>

							<Text style={styles.h2}>Bairro</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({bairro:text})}
							/>

							<Text style={styles.h2}>Cidade</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({cidade:text})}
							/>

							<Text style={styles.h2}>UF</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({uf:text})}
							/>

							{/*TIPO DE IMÓVEL*/}
							<Text style={styles.h2}>Tipo de Imóvel</Text>

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
							<Text style={styles.h2}>2.0 - Situação Atual do Imóvel</Text>


							<Text>Nº Locação</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({situacaoN:text})}
							/>

							<Text>Dia</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({situacaoDataDia:text})}
								keyboardType='numeric'
							/>

							<Text>Mês</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({situacaoDataMes:text})}
								keyboardType='numeric'
							/>

							<Text>Ano</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({situacaoDataAno:text})}
								keyboardType='numeric'
							/>

							<Text style={styles.h2}>--Equatorial--</Text>

							<Text>Medidor Nº</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({situacaoMedidorNEquatorial:text})}
							/>

							<Text>Leitura Nº</Text>
							<TextInput
								style={styles.borderInput}
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
								style={styles.borderInput}
								onChangeText={text => this.setState({situacaoMedidorNAguas:text})}
							/>

							<Text>Leitura Nº</Text>
							<TextInput
								style={styles.borderInput}
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
								style={styles.borderInput}
								onChangeText={text => this.setState({situacaoMedidorNGas:text})}
							/>

							<Text>Leitura Nº</Text>
							<TextInput
								style={styles.borderInput}
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

							{/*ESTADO FÍSICO DO IMÓVEL*/}
							<Text style={styles.h1}>3.0 - Estado Físico do Imóvel</Text>

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
								style={styles.borderInput}
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
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoPinturaInObs:text})}
							/>

							<Text style={styles.h2}>--PINTURA FORRO/LAJE--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaFoNova}
									onChange={() => { this.setState({estadoFisicoPinturaFoNova:!this.state.estadoFisicoPinturaFoNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaFoConservada}
									onChange={() => { this.setState({estadoFisicoPinturaFoConservada:!this.state.estadoFisicoPinturaFoConservada})}}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaFoVelha}
									onChange={() => { this.setState({estadoFisicoPinturaFoVelha:!this.state.estadoFisicoPinturaFoVelha})}}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoPinturaFoObs:text})}
							/>

							<Text style={styles.h2}>--PINTURA FORRO/GESSO--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaGeNova}
									onChange={() => { this.setState({estadoFisicoPinturaGeNova:!this.state.estadoFisicoPinturaGeNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaGeConservada}
									onChange={() => { this.setState({estadoFisicoPinturaGeConservada:!this.state.estadoFisicoPinturaGeConservada})}}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaGeVelha}
									onChange={() => { this.setState({estadoFisicoPinturaGeVelha:!this.state.estadoFisicoPinturaGeVelha})}}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoPinturaGeObs:text})}
							/>

							<Text style={styles.h2}>--FORRO/PVC/MADEIRA--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaPvcNova}
									onChange={() => { this.setState({estadoFisicoPinturaPvcNova:!this.state.estadoFisicoPinturaPvcNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaPvcConservada}
									onChange={() => { this.setState({estadoFisicoPinturaPvcConservada:!this.state.estadoFisicoPinturaPvcConservada})}}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaPvcVelha}
									onChange={() => { this.setState({estadoFisicoPinturaPvcVelha:!this.state.estadoFisicoPinturaPvcVelha})}}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoPinturaPvcObs:text})}
							/>

							<Text style={styles.h2}>--PINTURAS PORTAS/MADEIRA--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaPortaMadeiraNova}
									onChange={() => { this.setState({estadoFisicoPinturaPortaMadeiraNova:!this.state.estadoFisicoPinturaPortaMadeiraNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaPortaMadeiraConservada}
									onChange={() => { this.setState({estadoFisicoPinturaPortaMadeiraConservada:!this.state.estadoFisicoPinturaPortaMadeiraConservada})}}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaPortaMadeiraVelha}
									onChange={() => { this.setState({estadoFisicoPinturaPortaMadeiraVelha:!this.state.estadoFisicoPinturaPortaMadeiraVelha})}}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoPinturaPortaMadeiraObs:text})}
							/>

							<Text style={styles.h2}>--PINTURAS JANELAS/MADEIRA--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaJanelaMadeiraNova}
									onChange={() => { this.setState({estadoFisicoPinturaJanelaMadeiraNova:!this.state.estadoFisicoPinturaJanelaMadeiraNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaJanelaMadeiraConservada}
									onChange={() => { this.setState({estadoFisicoPinturaJanelaMadeiraConservada:!this.state.estadoFisicoPinturaJanelaMadeiraConservada})}}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaJanelaMadeiraVelha}
									onChange={() => { this.setState({estadoFisicoPinturaJanelaMadeiraVelha:!this.state.estadoFisicoPinturaJanelaMadeiraVelha})}}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoPinturaJanelaMadeiraObs:text})}
							/>

							<Text style={styles.h2}>--PINTURAS PORTAS/FERRO--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaPortasFerroNova}
									onChange={() => { this.setState({estadoFisicoPinturaPortasFerroNova:!this.state.estadoFisicoPinturaPortasFerroNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaPortasFerroConservada}
									onChange={() => { this.setState({estadoFisicoPinturaPortasFerroConservada:!this.state.estadoFisicoPinturaPortasFerroConservada})}}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaPortasFerroVelha}
									onChange={() => { this.setState({estadoFisicoPinturaPortasFerroVelha:!this.state.estadoFisicoPinturaPortasFerroVelha})}}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoPinturaPortasFerroObs:text})}
							/>

							<Text style={styles.h2}>--PINTURAS JANELAS/FERRO--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaJanelasFerroNova}
									onChange={() => { this.setState({estadoFisicoPinturaJanelasFerroNova:!this.state.estadoFisicoPinturaJanelasFerroNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaJanelasFerroConservada}
									onChange={() => { this.setState({estadoFisicoPinturaJanelasFerroConservada:!this.state.estadoFisicoPinturaJanelasFerroConservada})}}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaJanelasFerroVelha}
									onChange={() => { this.setState({estadoFisicoPinturaJanelasFerroVelha:!this.state.estadoFisicoPinturaJanelasFerroVelha})}}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoPinturaJanelasFerroObs:text})}
							/>

							<Text style={styles.h2}>--PINTURA DO MURO--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaMuroNova}
									onChange={() => { this.setState({estadoFisicoPinturaMuroNova:!this.state.estadoFisicoPinturaMuroNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaMuroConservada}
									onChange={() => { this.setState({estadoFisicoPinturaMuroConservada:!this.state.estadoFisicoPinturaMuroConservada})}}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaMuroVelha}
									onChange={() => { this.setState({estadoFisicoPinturaMuroVelha:!this.state.estadoFisicoPinturaMuroVelha})}}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoPinturaMuroObs:text})}
							/>

							<Text style={styles.h2}>--REBOCO--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoRebocoNova}
									onChange={() => { this.setState({estadoFisicoRebocoNova:!this.state.estadoFisicoRebocoNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoRebocoConservada}
									onChange={() => { this.setState({estadoFisicoRebocoConservada:!this.state.estadoFisicoRebocoConservada})}}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoRebocoVelha}
									onChange={() => { this.setState({estadoFisicoRebocoVelha:!this.state.estadoFisicoRebocoVelha})}}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoRebocoObs:text})}
							/>

							<Text style={styles.h2}>--QUANTIDADE DE CHAVES DO IMÓVEL--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoQtdChavesNova}
									onChange={() => { this.setState({estadoFisicoQtdChavesNova:!this.state.estadoFisicoQtdChavesNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoQtdChavesConservada}
									onChange={() => { this.setState({estadoFisicoQtdChavesConservada:!this.state.estadoFisicoQtdChavesConservada})}}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoQtdChavesVelha}
									onChange={() => { this.setState({estadoFisicoQtdChavesVelha:!this.state.estadoFisicoQtdChavesVelha})}}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoQtdChavesObs:text})}
							/>

							{/*ESTADO FÍSICO DO IMÓVEL*/}
							<Text style={styles.h1}>4.0 - Instalações Elétricas</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesObs:text})}
							/>

							<Text style={styles.h2}>--CAMPAINHA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoCampainhaObs:text})}
							/>

							<Text style={styles.h2}>--INTERFONE--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInterfoneObs:text})}
							/>

							<Text style={styles.h2}>--LÂMPADAS COMUNS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoLampadasComunsObs:text})}
							/>

							<Text style={styles.h2}>--LÂMPADAS FLUORESCENTES--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoLampadasFluorescentesObs:text})}
							/>

							<Text style={styles.h2}>--LÂMPADAS DICRÓICAS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoLampadasDicroicasObs:text})}
							/>

							<Text style={styles.h2}>--PL FLUORESCENTES COMPRIDA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoPLFluorescentesCompridaObs:text})}
							/>

							<Text style={styles.h2}>--PL FLUORESCENTES REDONDA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoPLFluorescentesRedondaObs:text})}
							/>

							<Text style={styles.h2}>--TOMADAS COMUNS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoTomadasComunsObs:text})}
							/>

							<Text style={styles.h2}>--TOMADAS TELEFONE--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoTomadasTelefoneObs:text})}
							/>

							<Text style={styles.h2}>--INTERRUPTORES--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInterruptoresObs:text})}
							/>

							<Text style={styles.h2}>--LUMINÁRIAS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoLuminariasObs:text})}
							/>

							<Text style={styles.h2}>--LUSTRES--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoLustresObs:text})}
							/>

							<Text style={styles.h2}>--GLOBOS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoGlobosObs:text})}
							/>

							<Text style={styles.h2}>--SPOTS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoSpotsObs:text})}
							/>

							<Text style={styles.h2}>--BOCAIS PLAFON--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoBocaisPlafonObs:text})}
							/>

							<Text style={styles.h2}>--CERCA ELÉTRICA--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoTemCerca}
									onChange={() => { this.setState({estadoFisicoTemCerca:!this.state.estadoFisicoTemCerca}) }}
								/>
								<Text>Sim</Text>

								<CheckBox
									value={!this.state.estadoFisicoTemCerca}
									onChange={() => { this.setState({estadoFisicoTemCerca:!this.state.estadoFisicoTemCerca})}}
								/>
								<Text>Não</Text>

								<CheckBox
									value={this.state.estadoFisicoCercaResidencialVelha}
									onChange={() => { this.setState({estadoFisicoCercaResidencialVelha:!this.state.estadoFisicoCercaResidencialVelha})}}
								/>
								<Text>Residencial</Text>

								<CheckBox
									value={this.state.estadoFisicoCercaIndustrialVelha}
									onChange={() => { this.setState({estadoFisicoCercaIndustrialVelha:!this.state.estadoFisicoCercaIndustrialVelha})}}
								/>
								<Text>Industrial</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoCercaEletricaObs:text})}
							/>
							
							<Text style={styles.h1}>5.0 - Instalações Hidráulicas e Sanitárias</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesHidroSaniObs:text})}
							/>

							<Text style={styles.h2}>--REGISTROS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesHidroSaniRegistroObs:text})}
							/>

							<Text style={styles.h2}>--PIA COZINHA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesHidroSaniPiaCozinhaObs:text})}
							/>

							<Text style={styles.h2}>--TORNEIRA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesHidroSaniTorneiraObs:text})}
							/>

							<Text style={styles.h1}>ÁREA INTERNA</Text>

							<Text style={styles.h2}>--PIA LAVANDEIRA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesHidroSaniPiaLavanObs:text})}
							/>

							<Text style={styles.h2}>--TORNEIRA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesHidroSaniTorneiraObs:text})}
							/>

							<Text style={styles.h1}>ÁREA EXTERNA</Text>

							<Text style={styles.h2}>--PIA LAVANDEIRA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesHidroSaniPiaLavanExternaObs:text})}
							/>

							<Text style={styles.h2}>--TORNEIRA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesHidroSaniTorneiraExternaObs:text})}
							/>

							<Text style={styles.h2}>--PISCINA--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoTemPiscina}
									onChange={() => { this.setState({estadoFisicoTemPiscina:!this.state.estadoFisicoTemPiscina}) }}
								/>
								<Text>Sim</Text>

								<CheckBox
									value={!this.state.estadoFisicoTemPiscina}
									onChange={() => { this.setState({estadoFisicoTemPiscina:!this.state.estadoFisicoTemPiscina})}}
								/>
								<Text>Não</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesHidroSaniPiscinaObs:text})}
							/>	

							<Text style={styles.h1}>LAVABO</Text>
							
							<Text style={styles.h2}>--ACESSÓRIOS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesLavaboAcessoriosObs:text})}
							/>
							
							<Text style={styles.h2}>--ESPELHO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesLavaboEspelhoObs:text})}
							/>
							
							<Text style={styles.h2}>--BOX--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesLavaboBoxObs:text})}
							/>
							
							<Text style={styles.h2}>--PIA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesLavaboPiaObs:text})}
							/>
							
							<Text style={styles.h2}>--DUCHA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesLavaboDuchaObs:text})}
							/>
							
							<Text style={styles.h2}>--DESCARGA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesLavaboDescargaObs:text})}
							/>
							
							<Text style={styles.h2}>--SANITÁRIO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesLavaboSanitarioObs:text})}
							/>
							
							<Text style={styles.h2}>--ASSENTO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesLavaboAssentoObs:text})}
							/>
							
							<Text style={styles.h2}>--TORNEIRA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesLavaboTorneiraObs:text})}
							/>
							
							<Text style={styles.h2}>--ARMÁRIOS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesLavaboArmarioObs:text})}
							/>

							<Text style={styles.h1}>BANHEIRO SOCIAL</Text>
							
							<Text style={styles.h2}>--ACESSÓRIOS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesBanheiroSocialAcessoriosObs:text})}
							/>
							
							<Text style={styles.h2}>--ESPELHO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesBanheiroSocialEspelhoObs:text})}
							/>
							
							<Text style={styles.h2}>--BOX--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesBanheiroSocialBoxObs:text})}
							/>
							
							<Text style={styles.h2}>--PIA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesBanheiroSocialPiaObs:text})}
							/>
							
							<Text style={styles.h2}>--DUCHA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesBanheiroSocialDuchaObs:text})}
							/>
							
							<Text style={styles.h2}>--DESCARGA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesBanheiroSocialDescargaObs:text})}
							/>
							
							<Text style={styles.h2}>--SANITÁRIO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesBanheiroSocialSanitarioObs:text})}
							/>
							
							<Text style={styles.h2}>--ASSENTO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesBanheiroSocialAssentoObs:text})}
							/>
							
							<Text style={styles.h2}>--TORNEIRA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesBanheiroSocialTorneiraObs:text})}
							/>
							
							<Text style={styles.h2}>--ARMÁRIOS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesBanheiroSocialArmarioObs:text})}
							/>

							<Text style={styles.h1}>SUÍTE 01</Text>
							
							<Text style={styles.h2}>--ACESSÓRIOS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite01AcessoriosObs:text})}
							/>
							
							<Text style={styles.h2}>--ESPELHO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite01EspelhoObs:text})}
							/>
							
							<Text style={styles.h2}>--BOX--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite01BoxObs:text})}
							/>
							
							<Text style={styles.h2}>--PIA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite01PiaObs:text})}
							/>
							
							<Text style={styles.h2}>--DUCHA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite01DuchaObs:text})}
							/>
							
							<Text style={styles.h2}>--DESCARGA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite01DescargaObs:text})}
							/>
							
							<Text style={styles.h2}>--SANITÁRIO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite01SanitarioObs:text})}
							/>
							
							<Text style={styles.h2}>--ASSENTO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite01AssentoObs:text})}
							/>
							
							<Text style={styles.h2}>--TORNEIRA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite01TorneiraObs:text})}
							/>
							
							<Text style={styles.h2}>--ARMÁRIOS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite01ArmarioObs:text})}
							/>

							<Text style={styles.h1}>SUÍTE 02</Text>
							
							<Text style={styles.h2}>--ACESSÓRIOS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite02AcessoriosObs:text})}
							/>
							
							<Text style={styles.h2}>--ESPELHO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite02EspelhoObs:text})}
							/>
							
							<Text style={styles.h2}>--BOX--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite02BoxObs:text})}
							/>
							
							<Text style={styles.h2}>--PIA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite02PiaObs:text})}
							/>
							
							<Text style={styles.h2}>--DUCHA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite02DuchaObs:text})}
							/>
							
							<Text style={styles.h2}>--DESCARGA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite02DescargaObs:text})}
							/>
							
							<Text style={styles.h2}>--SANITÁRIO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite02SanitarioObs:text})}
							/>
							
							<Text style={styles.h2}>--ASSENTO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite02AssentoObs:text})}
							/>
							
							<Text style={styles.h2}>--TORNEIRA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite02TorneiraObs:text})}
							/>
							
							<Text style={styles.h2}>--ARMÁRIOS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite02ArmarioObs:text})}
							/>

							<Text style={styles.h1}>SUÍTE 03</Text>
							
							<Text style={styles.h2}>--ACESSÓRIOS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite03AcessoriosObs:text})}
							/>
							
							<Text style={styles.h2}>--ESPELHO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite03EspelhoObs:text})}
							/>
							
							<Text style={styles.h2}>--BOX--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite03BoxObs:text})}
							/>
							
							<Text style={styles.h2}>--PIA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite03PiaObs:text})}
							/>
							
							<Text style={styles.h2}>--DUCHA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite03DuchaObs:text})}
							/>
							
							<Text style={styles.h2}>--DESCARGA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite03DescargaObs:text})}
							/>
							
							<Text style={styles.h2}>--SANITÁRIO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite03SanitarioObs:text})}
							/>
							
							<Text style={styles.h2}>--ASSENTO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite03AssentoObs:text})}
							/>
							
							<Text style={styles.h2}>--TORNEIRA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite03TorneiraObs:text})}
							/>
							
							<Text style={styles.h2}>--ARMÁRIOS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesSuite03ArmarioObs:text})}
							/>

							<Text style={styles.h1}>DEPENDÊNCIA DE EMPREGADO(A)</Text>
							
							<Text style={styles.h2}>--ACESSÓRIOS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesDependenciaAcessoriosObs:text})}
							/>
							
							<Text style={styles.h2}>--ESPELHO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesDependenciaEspelhoObs:text})}
							/>
							
							<Text style={styles.h2}>--BOX--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesDependenciaBoxObs:text})}
							/>
							
							<Text style={styles.h2}>--PIA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesDependenciaPiaObs:text})}
							/>
							
							<Text style={styles.h2}>--DUCHA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesDependenciaDuchaObs:text})}
							/>
							
							<Text style={styles.h2}>--DESCARGA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesDependenciaDescargaObs:text})}
							/>
							
							<Text style={styles.h2}>--SANITÁRIO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesDependenciaSanitarioObs:text})}
							/>
							
							<Text style={styles.h2}>--ASSENTO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesDependenciaAssentoObs:text})}
							/>
							
							<Text style={styles.h2}>--TORNEIRA--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesDependenciaTorneiraObs:text})}
							/>
							
							<Text style={styles.h2}>--ARMÁRIOS--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesDependenciaArmarioObs:text})}
							/>
							
							<Text style={styles.h2}>--RALOS DE ESGOTO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesRalosEsgotoArmarioObs:text})}
							/>

							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoNormalRalosEsgoto}
									onChange={() => { this.setState({estadoFisicoNormalRalosEsgoto:!this.state.estadoFisicoNormalRalosEsgoto}) }}
								/>
								<Text>Normal</Text>

								<CheckBox
									value={!this.state.estadoFisicoConservadoRalosEsgoto}
									onChange={() => { this.setState({estadoFisicoConservadoRalosEsgoto:!this.state.estadoFisicoConservadoRalosEsgoto})}}
								/>
								<Text>Conservado</Text>

								<CheckBox
									value={this.state.estadoFisicoUsadoRalosEsgoto}
									onChange={() => { this.setState({estadoFisicoUsadoRalosEsgoto:!this.state.estadoFisicoUsadoRalosEsgoto})}}
								/>
								<Text>Usado</Text>
							</View>

							<Text style={styles.h2}>--RALOS DE ESGOTO--</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoInstalacoesRalosEsgotoArmarioObs:text})}
							/>

							<Text style={styles.h1}>6.0 - Pisos</Text>
							
							<Text style={styles.h2}>--CERÂMICA--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoCeramicaNova}
									onChange={() => { this.setState({estadoFisicoCeramicaNova:!this.state.estadoFisicoCeramicaNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={!this.state.estadoFisicoCeramicaUsada}
									onChange={() => { this.setState({estadoFisicoCeramicaUsada:!this.state.estadoFisicoCeramicaUsada})}}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoCeramicaObs:text})}
							/>


							<Text style={styles.h2}>--AZULEJO--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoAzulejoNova}
									onChange={() => { this.setState({estadoFisicoAzulejoNova:!this.state.estadoFisicoAzulejoNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={!this.state.estadoFisicoAzulejoUsada}
									onChange={() => { this.setState({estadoFisicoAzulejoUsada:!this.state.estadoFisicoAzulejoUsada})}}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoAzulejoObs:text})}
							/>
							
							<Text style={styles.h2}>--CIMENTO--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoCimentoNova}
									onChange={() => { this.setState({estadoFisicoCimentoNova:!this.state.estadoFisicoCimentoNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={!this.state.estadoFisicoCimentoUsada}
									onChange={() => { this.setState({estadoFisicoCimentoUsada:!this.state.estadoFisicoCimentoUsada})}}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoCimentoObs:text})}
							/>
							
							<Text style={styles.h2}>--RODAPÉ--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoRodapeNova}
									onChange={() => { this.setState({estadoFisicoRodapeNova:!this.state.estadoFisicoRodapeNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={!this.state.estadoFisicoRodapeUsada}
									onChange={() => { this.setState({estadoFisicoRodapeUsada:!this.state.estadoFisicoRodapeUsada})}}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoRodapeObs:text})}
							/>
							
							<Text style={styles.h2}>--REVESTIMENTO--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoRevestimentoNova}
									onChange={() => { this.setState({estadoFisicoRevestimentoNova:!this.state.estadoFisicoRevestimentoNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={!this.state.estadoFisicoRevestimentoUsada}
									onChange={() => { this.setState({estadoFisicoRevestimentoUsada:!this.state.estadoFisicoRevestimentoUsada})}}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoRevestimentoObs:text})}
							/>
							
							<Text style={styles.h2}>--SOLEIRAS--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoSoleirasNova}
									onChange={() => { this.setState({estadoFisicoSoleirasNova:!this.state.estadoFisicoSoleirasNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={!this.state.estadoFisicoSoleirasUsada}
									onChange={() => { this.setState({estadoFisicoSoleirasUsada:!this.state.estadoFisicoSoleirasUsada})}}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoSoleirasObs:text})}
							/>
							
							<Text style={styles.h2}>--ASSOALHO--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoAssoalhoNova}
									onChange={() => { this.setState({estadoFisicoAssoalhoNova:!this.state.estadoFisicoAssoalhoNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={!this.state.estadoFisicoAssoalhoUsada}
									onChange={() => { this.setState({estadoFisicoAssoalhoUsada:!this.state.estadoFisicoAssoalhoUsada})}}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoAssoalhoObs:text})}
							/>
							
							<Text style={styles.h2}>--OUTROS PISOS--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoOutrosPisosNova}
									onChange={() => { this.setState({estadoFisicoOutrosPisosNova:!this.state.estadoFisicoOutrosPisosNova}) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={!this.state.estadoFisicoOutrosPisosUsada}
									onChange={() => { this.setState({estadoFisicoOutrosPisosUsada:!this.state.estadoFisicoOutrosPisosUsada})}}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoOutrosPisosObs:text})}
							/>

							<Text style={styles.h1}>7.0 - VIDROS</Text>
							
							<Text style={styles.h2}>--PORTAS/ESQUADRIAS--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPortasEsquadriasNormal}
									onChange={() => { this.setState({estadoFisicoPortasEsquadriasNormal:!this.state.estadoFisicoPortasEsquadriasNormal}) }}
								/>
								<Text>Normal</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoPortasEsquadriasObs:text})}
							/>

							<Text style={styles.h2}>--JANELAS/ESQUADRIAS--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoJanelasEsquadriasNormal}
									onChange={() => { this.setState({estadoFisicoJanelasEsquadriasNormal:!this.state.estadoFisicoJanelasEsquadriasNormal}) }}
								/>
								<Text>Normal</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoJanelasEsquadriasObs:text})}
							/>

							<Text style={styles.h2}>--BASCULANTES/ESQUADRIAS--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoBasculantesEsquadriasNormal}
									onChange={() => { this.setState({estadoFisicoBasculantesEsquadriasNormal:!this.state.estadoFisicoBasculantesEsquadriasNormal}) }}
								/>
								<Text>Normal</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoBasculantesEsquadriasObs:text})}
							/>

							<Text style={styles.h1}>8.0 - ARMÁRIOS EMBUTIDOS</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoTemArmarios}
									onChange={() => { this.setState({estadoFisicoTemArmarios:!this.state.estadoFisicoTemArmarios}) }}
								/>
								<Text>Sim</Text>
								<CheckBox
									value={!this.state.estadoFisicoTemArmarios}
									onChange={() => { this.setState({estadoFisicoTemArmarios:!this.state.estadoFisicoTemArmarios}) }}
								/>
								<Text>Não</Text>
							</View>
							
							<TextInput
								multiline={true}
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoArmariosObs:text})}
							/>

							<Text style={styles.h1}>11.0 - QUINTAL</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoQuintalLimpoObs:text})}
							/>

							<Text style={styles.h2}>--JARDIM--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoJardimTemPlanta}
									onChange={() => { this.setState({estadoFisicoJardimTemPlanta:!this.state.estadoFisicoJardimTemPlanta}) }}
								/>
								<Text>Com Planta</Text>
								<CheckBox
									value={this.state.estadoFisicoJardimNaoTemPlanta}
									onChange={() => { this.setState({estadoFisicoJardimNaoTemPlanta:!this.state.estadoFisicoJardimNaoTemPlanta}) }}
								/>
								<Text>Sem Planta</Text>
								<CheckBox
									value={this.state.estadoFisicoJardimLimpo}
									onChange={() => { this.setState({estadoFisicoJardimLimpo:!this.state.estadoFisicoJardimLimpo}) }}
								/>
								<Text>Limpo</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoJardimObs:text})}
							/>

							<Text style={styles.h2}>--TORNEIRA--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoTorneiraDePlastico}
									onChange={() => { this.setState({estadoFisicoTorneiraDePlastico:!this.state.estadoFisicoTorneiraDePlastico}) }}
								/>
								<Text>De plástico</Text>
								<CheckBox
									value={this.state.estadoFisicoTorneiraDeMetal}
									onChange={() => { this.setState({estadoFisicoTorneiraDeMetal:!this.state.estadoFisicoTorneiraDeMetal}) }}
								/>
								<Text>De metal</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({estadoFisicoTorneiraObs:text})}
							/>


						</View>
					</ScrollView>
				</View>
				<View style={{flex: 2, height: 120, justifyContent: 'center', padding: 16}}>
					<TouchableOpacity
						style={{height: 50, borderRadius: 15, backgroundColor: '#077528', justifyContent: 'center', alignItems: 'center'}}
						onPress={() => {}}>
							<Text style={{fontSize: 16, color: '#FFF'}}>SALVAR A VISTORIA</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{height: 50, borderRadius: 15, marginTop: 6, backgroundColor: '#94240d', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
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
						})}>
							<Text style={{fontSize: 16, color: '#FFF'}}>CONVERTER EM PDF</Text>
							<Image source={WHITEPDFICON} style={{height: 24, width: 24, marginStart: 16}} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	h1: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 6
	},
	h2: {
		fontSize: 15,
		fontWeight: 'bold',
		marginTop: 16
	},
	checkBoxContainer:{
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 6
	},
	borderInput: {
		height:40, 
		borderWidth:1,
		borderColor: '#969696'
	}

});