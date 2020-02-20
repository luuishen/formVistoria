import React, { Component } from 'react';
import { Alert, ScrollView, Text, View, Image, TextInput, StyleSheet } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import CheckBox from '@react-native-community/checkbox'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WHITEPDFICON } from '../../images';
import { saveThis, getNextMid, findFirstByFilter, updateThis } from '../service/RealmService';

const formId = Math.random().toString(36).substring(2, 7);

export default class FormScreen extends Component {

	static navigationOptions = {
		title: 'Formulário de Vistória'
	};

	constructor(props) {
		super(props);
		const { navigation } = this.props

		let vistoriaMid = navigation.getParam('vistoriaMid', 0)

		let tipoVistoriaLocacao = false
		let tipoVistoriaAvaliacao = false
		let tipoVistoriaDesocupacao = false
		let locatario = ''
		let locador = ''
		let endereco = ''
		let bairro = ''
		let cidade = ''
		let uf = ''
		let tipoImovelCasa = false
		let tipoImovelApartamento = false
		let tipoImovelPontoComercial = false
		let tipoImovelSitio = false
		let tipoImovelTerreno = false
		let situacaoN = ''
		let situacaoDataDia = ''
		let situacaoDataMes = ''
		let situacaoDataAno = ''
		let temFornecimentoAgua = true
		let temFornecimentoEnergia = true
		let situacaoMedidorNEquatorial = ''
		let situacaoMedidorNAguas = ''
		let situacaoMedidorNGas = ''
		let situacaoLeituraEquatorial = ''
		let situacaoLeituraAguas = ''
		let situacaoLeituraGas = ''
		let estadoFisicoPinturaExObs = ''
		let estadoFisicoPinturaInObs = ''
		let situacaoMedidorEquatorial = false
		let situacaoMedidorAguas = false
		let situacaoMedidorGas = false
		let situacaoTampaEquatorial = false
		let situacaoTampaAguas = false
		let situacaoTampaGas = false
		let situacaoImovelRetalhado = false
		let situacaoImovelRetalhadoObs = ''
		let estadoFisicoPinturaExNova = false
		let estadoFisicoPinturaExConservada = false
		let estadoFisicoPinturaExVelha = false
		let estadoFisicoPinturaInNova = false
		let estadoFisicoPinturaInConservada = false
		let estadoFisicoPinturaInVelha = false
		let estadoFisicoPinturaFoNova = false
		let estadoFisicoPinturaFoConservada = false
		let estadoFisicoPinturaFoVelha = false
		let estadoFisicoPinturaFoObs = ''
		let estadoFisicoPinturaGeNova = false
		let estadoFisicoPinturaGeConservada = false
		let estadoFisicoPinturaGeVelha = false
		let estadoFisicoPinturaGeObs = ''
		let estadoFisicoPinturaPvcNova = false
		let estadoFisicoPinturaPvcConservada = false
		let estadoFisicoPinturaPvcVelha = false
		let estadoFisicoPinturaPvcObs = ''
		let estadoFisicoPinturaPortaMadeiraNova = false
		let estadoFisicoPinturaPortaMadeiraConservada = false
		let estadoFisicoPinturaPortaMadeiraVelha = false
		let estadoFisicoPinturaPortaMadeiraObs = ''
		let estadoFisicoPinturaJanelaMadeiraNova = false
		let estadoFisicoPinturaJanelaMadeiraConservada = false
		let estadoFisicoPinturaJanelaMadeiraVelha = false
		let estadoFisicoPinturaJanelaMadeiraObs = ''
		let estadoFisicoPinturaPortasFerroNova = false
		let estadoFisicoPinturaPortasFerroConservada = false
		let estadoFisicoPinturaPortasFerroVelha = false
		let estadoFisicoPinturaPortasFerroObs = ''
		let estadoFisicoPinturaJanelasFerroNova = false
		let estadoFisicoPinturaJanelasFerroConservada = false
		let estadoFisicoPinturaJanelasFerroVelha = false
		let estadoFisicoPinturaJanelasFerroObs = ''
		let estadoFisicoPinturaMuroNova = false
		let estadoFisicoPinturaMuroConservada = false
		let estadoFisicoPinturaMuroVelha = false
		let estadoFisicoPinturaMuroObs = ''
		let estadoFisicoRebocoNova = false
		let estadoFisicoRebocoConservada = false
		let estadoFisicoRebocoVelha = false
		let estadoFisicoRebocoObs = ''
		let estadoFisicoQtdChavesNova = false
		let estadoFisicoQtdChavesConservada = false
		let estadoFisicoQtdChavesVelha = false
		let estadoFisicoQtdChavesObs = ''
		let estadoFisicoInstalacoesObs = ''
		let estadoFisicoCaixaDisjuntorObs = ''
		let estadoFisicoCampainhaObs = ''
		let estadoFisicoInterfoneObs = ''
		let estadoFisicoLampadasComunsObs = ''
		let estadoFisicoLampadasFluorescentesObs = ''
		let estadoFisicoLampadasDicroicasObs = ''
		let estadoFisicoPLFluorescentesCompridaObs = ''
		let estadoFisicoPLFluorescentesRedondaObs = ''
		let estadoFisicoTomadasComunsObs = ''
		let estadoFisicoTomadasTelefoneObs = ''
		let estadoFisicoInterruptoresObs = ''
		let estadoFisicoLuminariasObs = ''
		let estadoFisicoLustresObs = ''
		let estadoFisicoGlobosObs = ''
		let estadoFisicoSpotsObs = ''
		let estadoFisicoBocaisPlafonObs = ''
		let estadoFisicoTemCerca = false
		let estadoFisicoCercaResidencialVelha = false
		let estadoFisicoCercaIndustrialVelha = false
		let estadoFisicoCercaEletricaObs = ''
		let estadoFisicoInstalacoesHidroSaniObs = ''
		let estadoFisicoInstalacoesHidroSaniRegistroObs = ''
		let estadoFisicoInstalacoesHidroSaniPiaCozinhaObs = ''
		let estadoFisicoInstalacoesHidroSaniTorneiraObs = ''
		let estadoFisicoInstalacoesHidroSaniPiaLavanObs = ''
		let estadoFisicoInstalacoesHidroSaniTorneiraInternaObs = ''
		let estadoFisicoInstalacoesHidroSaniPiaLavanExternaObs = ''
		let estadoFisicoInstalacoesHidroSaniTorneiraExternaObs = ''
		let estadoFisicoTemPiscina = false
		let estadoFisicoInstalacoesHidroSaniPiscinaObs = ''
		let estadoFisicoInstalacoesLavaboAcessoriosObs = ''
		let estadoFisicoInstalacoesLavaboEspelhoObs = ''
		let estadoFisicoInstalacoesLavaboBoxObs = ''
		let estadoFisicoInstalacoesLavaboPiaObs = ''
		let estadoFisicoInstalacoesLavaboDuchaObs = ''
		let estadoFisicoInstalacoesLavaboDescargaObs = ''
		let estadoFisicoInstalacoesLavaboSanitarioObs = ''
		let estadoFisicoInstalacoesLavaboAssentoObs = ''
		let estadoFisicoInstalacoesLavaboTorneiraObs = ''
		let estadoFisicoInstalacoesLavaboArmarioObs = ''
		let estadoFisicoInstalacoesBanheiroSocialAcessoriosObs = ''
		let estadoFisicoInstalacoesBanheiroSocialEspelhoObs = ''
		let estadoFisicoInstalacoesBanheiroSocialBoxObs = ''
		let estadoFisicoInstalacoesBanheiroSocialPiaObs = ''
		let estadoFisicoInstalacoesBanheiroSocialDuchaObs = ''
		let estadoFisicoInstalacoesBanheiroSocialDescargaObs = ''
		let estadoFisicoInstalacoesBanheiroSocialSanitarioObs = ''
		let estadoFisicoInstalacoesBanheiroSocialAssentoObs = ''
		let estadoFisicoInstalacoesBanheiroSocialTorneiraObs = ''
		let estadoFisicoInstalacoesBanheiroSocialArmarioObs = ''
		let estadoFisicoInstalacoesSuite01AcessoriosObs = ''
		let estadoFisicoInstalacoesSuite01EspelhoObs = ''
		let estadoFisicoInstalacoesSuite01BoxObs = ''
		let estadoFisicoInstalacoesSuite01PiaObs = ''
		let estadoFisicoInstalacoesSuite01DuchaObs = ''
		let estadoFisicoInstalacoesSuite01DescargaObs = ''
		let estadoFisicoInstalacoesSuite01SanitarioObs = ''
		let estadoFisicoInstalacoesSuite01AssentoObs = ''
		let estadoFisicoInstalacoesSuite01TorneiraObs = ''
		let estadoFisicoInstalacoesSuite01ArmarioObs = ''
		let estadoFisicoInstalacoesSuite02AcessoriosObs = ''
		let estadoFisicoInstalacoesSuite02EspelhoObs = ''
		let estadoFisicoInstalacoesSuite02BoxObs = ''
		let estadoFisicoInstalacoesSuite02PiaObs = ''
		let estadoFisicoInstalacoesSuite02DuchaObs = ''
		let estadoFisicoInstalacoesSuite02DescargaObs = ''
		let estadoFisicoInstalacoesSuite02SanitarioObs = ''
		let estadoFisicoInstalacoesSuite02AssentoObs = ''
		let estadoFisicoInstalacoesSuite02TorneiraObs = ''
		let estadoFisicoInstalacoesSuite02ArmarioObs = ''
		let estadoFisicoInstalacoesSuite03AcessoriosObs = ''
		let estadoFisicoInstalacoesSuite03EspelhoObs = ''
		let estadoFisicoInstalacoesSuite03BoxObs = ''
		let estadoFisicoInstalacoesSuite03PiaObs = ''
		let estadoFisicoInstalacoesSuite03DuchaObs = ''
		let estadoFisicoInstalacoesSuite03DescargaObs = ''
		let estadoFisicoInstalacoesSuite03SanitarioObs = ''
		let estadoFisicoInstalacoesSuite03AssentoObs = ''
		let estadoFisicoInstalacoesSuite03TorneiraObs = ''
		let estadoFisicoInstalacoesSuite03ArmarioObs = ''
		let estadoFisicoInstalacoesDependenciaAcessoriosObs = ''
		let estadoFisicoInstalacoesDependenciaEspelhoObs = ''
		let estadoFisicoInstalacoesDependenciaBoxObs = ''
		let estadoFisicoInstalacoesDependenciaPiaObs = ''
		let estadoFisicoInstalacoesDependenciaDuchaObs = ''
		let estadoFisicoInstalacoesDependenciaDescargaObs = ''
		let estadoFisicoInstalacoesDependenciaSanitarioObs = ''
		let estadoFisicoInstalacoesDependenciaAssentoObs = ''
		let estadoFisicoInstalacoesDependenciaTorneiraObs = ''
		let estadoFisicoInstalacoesDependenciaArmarioObs = ''
		let estadoFisicoNormalRalosEsgoto = false
		let estadoFisicoUsadoRalosEsgoto = false
		let estadoFisicoInstalacoesRalosEsgotoArmarioObs = ''
		let estadoFisicoCeramicaNova = false
		let estadoFisicoCeramicaUsada = false
		let estadoFisicoCeramicaObs = ''
		let estadoFisicoAzulejoNova = false
		let estadoFisicoAzulejoUsada = false
		let estadoFisicoAzulejoObs = ''
		let estadoFisicoCimentoNova = false
		let estadoFisicoCimentoObs = ''
		let estadoFisicoRodapeNova = false
		let estadoFisicoRodapeUsada = false
		let estadoFisicoRodapeObs = ''
		let estadoFisicoRevestimentoNova = false
		let estadoFisicoRevestimentoUsada = false
		let estadoFisicoRevestimentoObs = ''
		let estadoFisicoSoleirasNova = false
		let estadoFisicoSoleirasUsada = false
		let estadoFisicoSoleirasObs = ''
		let estadoFisicoAssoalhoNova = false
		let estadoFisicoAssoalhoObs = ''
		let estadoFisicoOutrosPisosNova = false
		let estadoFisicoOutrosPisosObs = ''
		let estadoFisicoPortasEsquadriasNormal = false
		let estadoFisicoPortasEsquadriasObs = ''
		let estadoFisicoJanelasEsquadriasNormal = false
		let estadoFisicoJanelasEsquadriasObs = ''
		let estadoFisicoBasculantesEsquadriasNormal = false
		let estadoFisicoBasculantesEsquadriasObs = ''
		let estadoFisicoTemArmarios = false
		let estadoFisicoArmariosObs = ''
		let estadoFisicoQuintalLimpoObs = ''
		let estadoFisicoJardimTemPlanta = false
		let estadoFisicoJardimNaoTemPlanta = false
		let estadoFisicoJardimLimpo = false
		let estadoFisicoJardimObs = ''
		let estadoFisicoTorneiraDePlastico = false
		let estadoFisicoTorneiraDeMetal = false
		let estadoFisicoTorneiraObs = ''
		let estadoFisicoPortaJanelaBasculanteNormal = false
		let estadoFisicoPortaJanelaBasculanteObs = ''
		let estadoFisicoPinturaPortoesNova = false
		let estadoFisicoPinturaPortoesVelha = false
		let estadoFisicoPinturaPortoesConservada = false
		let estadoFisicoPinturasPortoesExternoObs = ''
		let estadoFisicoPinturasPortoesternoObs = ''
		let estadoFisicoGradeImovelObs = ''
		let estadoFisicoCaixaArCondicionadoObs = ''
		let estadoFisicoInstalacaoSplitObs = ''
		let estadoFisicoInstalacaoSplitSim = false
		let estadoFisicoCadeadosObs = ''
		let estadoFisicoArmadoresObs = ''
		let estadoFisicoObservacoesGeraisObs = ''
		let vistoria = undefined

		if (vistoriaMid != 0) {
			vistoria = findFirstByFilter('Vistoria', 'removido = false AND mid = ' + vistoriaMid)

			tipoVistoriaLocacao = vistoria.tipoVistoriaLocacao
			tipoVistoriaAvaliacao = vistoria.tipoVistoriaAvaliacao
			tipoVistoriaDesocupacao = vistoria.tipoVistoriaDesocupacao
			locatario = vistoria.locatario
			locador = vistoria.locador
			endereco = vistoria.endereco
			bairro = vistoria.bairro
			cidade = vistoria.cidade
			uf = vistoria.uf
			tipoImovelCasa = vistoria.tipoImovelCasa
			tipoImovelApartamento = vistoria.tipoImovelApartamento
			tipoImovelPontoComercial = vistoria.tipoImovelPontoComercial
			tipoImovelSitio = vistoria.tipoImovelSitio
			tipoImovelTerreno = vistoria.tipoImovelTerreno
			situacaoN = vistoria.situacaoN
			situacaoDataDia = vistoria.situacaoDataDia
			situacaoDataMes = vistoria.situacaoDataMes
			situacaoDataAno = vistoria.situacaoDataAno
			temFornecimentoAgua = vistoria.temFornecimentoAgua
			temFornecimentoEnergia = vistoria.temFornecimentoEnergia
			situacaoMedidorNEquatorial = vistoria.situacaoMedidorNEquatorial
			situacaoMedidorNAguas = vistoria.situacaoMedidorNAguas
			situacaoMedidorNGas = vistoria.situacaoMedidorNGas
			situacaoLeituraEquatorial = vistoria.situacaoLeituraEquatorial
			situacaoLeituraAguas = vistoria.situacaoLeituraAguas
			situacaoLeituraGas = vistoria.situacaoLeituraGas
			estadoFisicoPinturaExObs = vistoria.estadoFisicoPinturaExObs
			estadoFisicoPinturaInObs = vistoria.estadoFisicoPinturaInObs
			situacaoMedidorEquatorial = vistoria.situacaoMedidorEquatorial
			situacaoMedidorAguas = vistoria.situacaoMedidorAguas
			situacaoMedidorGas = vistoria.situacaoMedidorGas
			situacaoTampaEquatorial = vistoria.situacaoTampaEquatorial
			situacaoTampaAguas = vistoria.situacaoTampaAguas
			situacaoTampaGas = vistoria.situacaoTampaGas
			situacaoImovelRetalhado = vistoria.situacaoImovelRetalhado
			situacaoImovelRetalhadoObs = vistoria.situacaoImovelRetalhadoObs
			estadoFisicoPinturaExNova = vistoria.estadoFisicoPinturaExNova
			estadoFisicoPinturaExConservada = vistoria.estadoFisicoPinturaExConservada
			estadoFisicoPinturaExVelha = vistoria.estadoFisicoPinturaExVelha
			estadoFisicoPinturaInNova = vistoria.estadoFisicoPinturaInNova
			estadoFisicoPinturaInConservada = vistoria.estadoFisicoPinturaInConservada
			estadoFisicoPinturaInVelha = vistoria.estadoFisicoPinturaInVelha
			estadoFisicoPinturaFoNova = vistoria.estadoFisicoPinturaFoNova
			estadoFisicoPinturaFoConservada = vistoria.estadoFisicoPinturaFoConservada
			estadoFisicoPinturaFoVelha = vistoria.estadoFisicoPinturaFoVelha
			estadoFisicoPinturaFoObs = vistoria.estadoFisicoPinturaFoObs
			estadoFisicoPinturaGeNova = vistoria.estadoFisicoPinturaGeNova
			estadoFisicoPinturaGeConservada = vistoria.estadoFisicoPinturaGeConservada
			estadoFisicoPinturaGeVelha = vistoria.estadoFisicoPinturaGeVelha
			estadoFisicoPinturaGeObs = vistoria.estadoFisicoPinturaGeObs
			estadoFisicoPinturaPvcNova = vistoria.estadoFisicoPinturaPvcNova
			estadoFisicoPinturaPvcConservada = vistoria.estadoFisicoPinturaPvcConservada
			estadoFisicoPinturaPvcVelha = vistoria.estadoFisicoPinturaPvcVelha
			estadoFisicoPinturaPvcObs = vistoria.estadoFisicoPinturaPvcObs
			estadoFisicoPinturaPortaMadeiraNova = vistoria.estadoFisicoPinturaPortaMadeiraNova
			estadoFisicoPinturaPortaMadeiraConservada = vistoria.estadoFisicoPinturaPortaMadeiraConservada
			estadoFisicoPinturaPortaMadeiraVelha = vistoria.estadoFisicoPinturaPortaMadeiraVelha
			estadoFisicoPinturaPortaMadeiraObs = vistoria.estadoFisicoPinturaPortaMadeiraObs
			estadoFisicoPinturaJanelaMadeiraNova = vistoria.estadoFisicoPinturaJanelaMadeiraNova
			estadoFisicoPinturaJanelaMadeiraConservada = vistoria.estadoFisicoPinturaJanelaMadeiraConservada
			estadoFisicoPinturaJanelaMadeiraVelha = vistoria.estadoFisicoPinturaJanelaMadeiraVelha
			estadoFisicoPinturaJanelaMadeiraObs = vistoria.estadoFisicoPinturaJanelaMadeiraObs
			estadoFisicoPinturaPortasFerroNova = vistoria.estadoFisicoPinturaPortasFerroNova
			estadoFisicoPinturaPortasFerroConservada = vistoria.estadoFisicoPinturaPortasFerroConservada
			estadoFisicoPinturaPortasFerroVelha = vistoria.estadoFisicoPinturaPortasFerroVelha
			estadoFisicoPinturaPortasFerroObs = vistoria.estadoFisicoPinturaPortasFerroObs
			estadoFisicoPinturaJanelasFerroNova = vistoria.estadoFisicoPinturaJanelasFerroNova
			estadoFisicoPinturaJanelasFerroConservada = vistoria.estadoFisicoPinturaJanelasFerroConservada
			estadoFisicoPinturaJanelasFerroVelha = vistoria.estadoFisicoPinturaJanelasFerroVelha
			estadoFisicoPinturaJanelasFerroObs = vistoria.estadoFisicoPinturaJanelasFerroObs
			estadoFisicoPinturaMuroNova = vistoria.estadoFisicoPinturaMuroNova
			estadoFisicoPinturaMuroConservada = vistoria.estadoFisicoPinturaMuroConservada
			estadoFisicoPinturaMuroVelha = vistoria.estadoFisicoPinturaMuroVelha
			estadoFisicoPinturaMuroObs = vistoria.estadoFisicoPinturaMuroObs
			estadoFisicoRebocoNova = vistoria.estadoFisicoRebocoNova
			estadoFisicoRebocoConservada = vistoria.estadoFisicoRebocoConservada
			estadoFisicoRebocoVelha = vistoria.estadoFisicoRebocoVelha
			estadoFisicoRebocoObs = vistoria.estadoFisicoRebocoObs
			estadoFisicoQtdChavesNova = vistoria.estadoFisicoQtdChavesNova
			estadoFisicoQtdChavesConservada = vistoria.estadoFisicoQtdChavesConservada
			estadoFisicoQtdChavesVelha = vistoria.estadoFisicoQtdChavesVelha
			estadoFisicoQtdChavesObs = vistoria.estadoFisicoQtdChavesObs
			estadoFisicoInstalacoesObs = vistoria.estadoFisicoInstalacoesObs
			estadoFisicoCaixaDisjuntorObs = vistoria.estadoFisicoCaixaDisjuntorObs
			estadoFisicoCampainhaObs = vistoria.estadoFisicoCampainhaObs
			estadoFisicoInterfoneObs = vistoria.estadoFisicoInterfoneObs
			estadoFisicoLampadasComunsObs = vistoria.estadoFisicoLampadasComunsObs
			estadoFisicoLampadasFluorescentesObs = vistoria.estadoFisicoLampadasFluorescentesObs
			estadoFisicoLampadasDicroicasObs = vistoria.estadoFisicoLampadasDicroicasObs
			estadoFisicoPLFluorescentesCompridaObs = vistoria.estadoFisicoPLFluorescentesCompridaObs
			estadoFisicoPLFluorescentesRedondaObs = vistoria.estadoFisicoPLFluorescentesRedondaObs
			estadoFisicoTomadasComunsObs = vistoria.estadoFisicoTomadasComunsObs
			estadoFisicoTomadasTelefoneObs = vistoria.estadoFisicoTomadasTelefoneObs
			estadoFisicoInterruptoresObs = vistoria.estadoFisicoInterruptoresObs
			estadoFisicoLuminariasObs = vistoria.estadoFisicoLuminariasObs
			estadoFisicoLustresObs = vistoria.estadoFisicoLustresObs
			estadoFisicoGlobosObs = vistoria.estadoFisicoGlobosObs
			estadoFisicoSpotsObs = vistoria.estadoFisicoSpotsObs
			estadoFisicoBocaisPlafonObs = vistoria.estadoFisicoBocaisPlafonObs
			estadoFisicoTemCerca = vistoria.estadoFisicoTemCerca
			estadoFisicoCercaResidencialVelha = vistoria.estadoFisicoCercaResidencialVelha
			estadoFisicoCercaIndustrialVelha = vistoria.estadoFisicoCercaIndustrialVelha
			estadoFisicoCercaEletricaObs = vistoria.estadoFisicoCercaEletricaObs
			estadoFisicoInstalacoesHidroSaniObs = vistoria.estadoFisicoInstalacoesHidroSaniObs
			estadoFisicoInstalacoesHidroSaniRegistroObs = vistoria.estadoFisicoInstalacoesHidroSaniRegistroObs
			estadoFisicoInstalacoesHidroSaniPiaCozinhaObs = vistoria.estadoFisicoInstalacoesHidroSaniPiaCozinhaObs
			estadoFisicoInstalacoesHidroSaniTorneiraObs = vistoria.estadoFisicoInstalacoesHidroSaniTorneiraObs
			estadoFisicoInstalacoesHidroSaniPiaLavanObs = vistoria.estadoFisicoInstalacoesHidroSaniPiaLavanObs
			estadoFisicoInstalacoesHidroSaniTorneiraInternaObs = vistoria.estadoFisicoInstalacoesHidroSaniTorneiraInternaObs
			estadoFisicoInstalacoesHidroSaniPiaLavanExternaObs = vistoria.estadoFisicoInstalacoesHidroSaniPiaLavanExternaObs
			estadoFisicoInstalacoesHidroSaniTorneiraExternaObs = vistoria.estadoFisicoInstalacoesHidroSaniTorneiraExternaObs
			estadoFisicoTemPiscina = vistoria.estadoFisicoTemPiscina
			estadoFisicoInstalacoesHidroSaniPiscinaObs = vistoria.estadoFisicoInstalacoesHidroSaniPiscinaObs
			estadoFisicoInstalacoesLavaboAcessoriosObs = vistoria.estadoFisicoInstalacoesLavaboAcessoriosObs
			estadoFisicoInstalacoesLavaboEspelhoObs = vistoria.estadoFisicoInstalacoesLavaboEspelhoObs
			estadoFisicoInstalacoesLavaboBoxObs = vistoria.estadoFisicoInstalacoesLavaboBoxObs
			estadoFisicoInstalacoesLavaboPiaObs = vistoria.estadoFisicoInstalacoesLavaboPiaObs
			estadoFisicoInstalacoesLavaboDuchaObs = vistoria.estadoFisicoInstalacoesLavaboDuchaObs
			estadoFisicoInstalacoesLavaboDescargaObs = vistoria.estadoFisicoInstalacoesLavaboDescargaObs
			estadoFisicoInstalacoesLavaboSanitarioObs = vistoria.estadoFisicoInstalacoesLavaboSanitarioObs
			estadoFisicoInstalacoesLavaboAssentoObs = vistoria.estadoFisicoInstalacoesLavaboAssentoObs
			estadoFisicoInstalacoesLavaboTorneiraObs = vistoria.estadoFisicoInstalacoesLavaboTorneiraObs
			estadoFisicoInstalacoesLavaboArmarioObs = vistoria.estadoFisicoInstalacoesLavaboArmarioObs
			estadoFisicoInstalacoesBanheiroSocialAcessoriosObs = vistoria.estadoFisicoInstalacoesBanheiroSocialAcessoriosObs
			estadoFisicoInstalacoesBanheiroSocialEspelhoObs = vistoria.estadoFisicoInstalacoesBanheiroSocialEspelhoObs
			estadoFisicoInstalacoesBanheiroSocialEspelhoObs = vistoria.estadoFisicoInstalacoesBanheiroSocialEspelhoObs
			estadoFisicoInstalacoesBanheiroSocialBoxObs = vistoria.estadoFisicoInstalacoesBanheiroSocialBoxObs
			estadoFisicoInstalacoesBanheiroSocialPiaObs = vistoria.estadoFisicoInstalacoesBanheiroSocialPiaObs
			estadoFisicoInstalacoesBanheiroSocialDuchaObs = vistoria.estadoFisicoInstalacoesBanheiroSocialDuchaObs
			estadoFisicoInstalacoesBanheiroSocialDescargaObs = vistoria.estadoFisicoInstalacoesBanheiroSocialDescargaObs
			estadoFisicoInstalacoesBanheiroSocialSanitarioObs = vistoria.estadoFisicoInstalacoesBanheiroSocialSanitarioObs
			estadoFisicoInstalacoesBanheiroSocialAssentoObs = vistoria.estadoFisicoInstalacoesBanheiroSocialAssentoObs
			estadoFisicoInstalacoesBanheiroSocialTorneiraObs = vistoria.estadoFisicoInstalacoesBanheiroSocialTorneiraObs
			estadoFisicoInstalacoesBanheiroSocialArmarioObs = vistoria.estadoFisicoInstalacoesBanheiroSocialArmarioObs
			estadoFisicoInstalacoesSuite01AcessoriosObs = vistoria.estadoFisicoInstalacoesSuite01AcessoriosObs
			estadoFisicoInstalacoesSuite01EspelhoObs = vistoria.estadoFisicoInstalacoesSuite01EspelhoObs
			estadoFisicoInstalacoesSuite01BoxObs = vistoria.estadoFisicoInstalacoesSuite01BoxObs
			estadoFisicoInstalacoesSuite01PiaObs = vistoria.estadoFisicoInstalacoesSuite01PiaObs
			estadoFisicoInstalacoesSuite01DuchaObs = vistoria.estadoFisicoInstalacoesSuite01DuchaObs
			estadoFisicoInstalacoesSuite01DescargaObs = vistoria.estadoFisicoInstalacoesSuite01DescargaObs
			estadoFisicoInstalacoesSuite01SanitarioObs = vistoria.estadoFisicoInstalacoesSuite01SanitarioObs
			estadoFisicoInstalacoesSuite01AssentoObs = vistoria.estadoFisicoInstalacoesSuite01AssentoObs
			estadoFisicoInstalacoesSuite01TorneiraObs = vistoria.estadoFisicoInstalacoesSuite01TorneiraObs
			estadoFisicoInstalacoesSuite01ArmarioObs = vistoria.estadoFisicoInstalacoesSuite01ArmarioObs
			estadoFisicoInstalacoesSuite02AcessoriosObs = vistoria.estadoFisicoInstalacoesSuite02AcessoriosObs
			estadoFisicoInstalacoesSuite02EspelhoObs = vistoria.estadoFisicoInstalacoesSuite02EspelhoObs
			estadoFisicoInstalacoesSuite02BoxObs = vistoria.estadoFisicoInstalacoesSuite02BoxObs
			estadoFisicoInstalacoesSuite02PiaObs = vistoria.estadoFisicoInstalacoesSuite02PiaObs
			estadoFisicoInstalacoesSuite02DuchaObs = vistoria.estadoFisicoInstalacoesSuite02DuchaObs
			estadoFisicoInstalacoesSuite02DescargaObs = vistoria.estadoFisicoInstalacoesSuite02DescargaObs
			estadoFisicoInstalacoesSuite02SanitarioObs = vistoria.estadoFisicoInstalacoesSuite02SanitarioObs
			estadoFisicoInstalacoesSuite02AssentoObs = vistoria.estadoFisicoInstalacoesSuite02AssentoObs
			estadoFisicoInstalacoesSuite02TorneiraObs = vistoria.estadoFisicoInstalacoesSuite02TorneiraObs
			estadoFisicoInstalacoesSuite02ArmarioObs = vistoria.estadoFisicoInstalacoesSuite02ArmarioObs
			estadoFisicoInstalacoesSuite03AcessoriosObs = vistoria.estadoFisicoInstalacoesSuite03AcessoriosObs
			estadoFisicoInstalacoesSuite03EspelhoObs = vistoria.estadoFisicoInstalacoesSuite03EspelhoObs
			estadoFisicoInstalacoesSuite03BoxObs = vistoria.estadoFisicoInstalacoesSuite03BoxObs
			estadoFisicoInstalacoesSuite03PiaObs = vistoria.estadoFisicoInstalacoesSuite03PiaObs
			estadoFisicoInstalacoesSuite03DuchaObs = vistoria.estadoFisicoInstalacoesSuite03DuchaObs
			estadoFisicoInstalacoesSuite03DescargaObs = vistoria.estadoFisicoInstalacoesSuite03DescargaObs
			estadoFisicoInstalacoesSuite03SanitarioObs = vistoria.estadoFisicoInstalacoesSuite03SanitarioObs
			estadoFisicoInstalacoesSuite03AssentoObs = vistoria.estadoFisicoInstalacoesSuite03AssentoObs
			estadoFisicoInstalacoesSuite03TorneiraObs = vistoria.estadoFisicoInstalacoesSuite03TorneiraObs
			estadoFisicoInstalacoesSuite03ArmarioObs = vistoria.estadoFisicoInstalacoesSuite03ArmarioObs
			estadoFisicoInstalacoesDependenciaAcessoriosObs = vistoria.estadoFisicoInstalacoesDependenciaAcessoriosObs
			estadoFisicoInstalacoesDependenciaEspelhoObs = vistoria.estadoFisicoInstalacoesDependenciaEspelhoObs
			estadoFisicoInstalacoesDependenciaBoxObs = vistoria.estadoFisicoInstalacoesDependenciaBoxObs
			estadoFisicoInstalacoesDependenciaPiaObs = vistoria.estadoFisicoInstalacoesDependenciaPiaObs
			estadoFisicoInstalacoesDependenciaDuchaObs = vistoria.estadoFisicoInstalacoesDependenciaDuchaObs
			estadoFisicoInstalacoesDependenciaDescargaObs = vistoria.estadoFisicoInstalacoesDependenciaDescargaObs
			estadoFisicoInstalacoesDependenciaSanitarioObs = vistoria.estadoFisicoInstalacoesDependenciaSanitarioObs
			estadoFisicoInstalacoesDependenciaAssentoObs = vistoria.estadoFisicoInstalacoesDependenciaAssentoObs
			estadoFisicoInstalacoesDependenciaTorneiraObs = vistoria.estadoFisicoInstalacoesDependenciaTorneiraObs
			estadoFisicoInstalacoesDependenciaArmarioObs = vistoria.estadoFisicoInstalacoesDependenciaArmarioObs
			estadoFisicoNormalRalosEsgoto = vistoria.estadoFisicoNormalRalosEsgoto
			estadoFisicoUsadoRalosEsgoto = vistoria.estadoFisicoUsadoRalosEsgoto
			estadoFisicoInstalacoesRalosEsgotoArmarioObs = vistoria.estadoFisicoInstalacoesRalosEsgotoArmarioObs
			estadoFisicoCeramicaNova = vistoria.estadoFisicoCeramicaNova
			estadoFisicoCeramicaUsada = vistoria.estadoFisicoCeramicaUsada
			estadoFisicoCeramicaObs = vistoria.estadoFisicoCeramicaObs
			estadoFisicoAzulejoNova = vistoria.estadoFisicoAzulejoNova
			estadoFisicoAzulejoUsada = vistoria.estadoFisicoAzulejoUsada
			estadoFisicoAzulejoObs = vistoria.estadoFisicoAzulejoObs
			estadoFisicoCimentoNova = vistoria.estadoFisicoCimentoNova
			estadoFisicoCimentoObs = vistoria.estadoFisicoCimentoObs
			estadoFisicoRodapeNova = vistoria.estadoFisicoRodapeNova
			estadoFisicoRodapeUsada = vistoria.estadoFisicoRodapeUsada
			estadoFisicoRodapeObs = vistoria.estadoFisicoRodapeObs
			estadoFisicoRevestimentoNova = vistoria.estadoFisicoRevestimentoNova
			estadoFisicoRevestimentoUsada = vistoria.estadoFisicoRevestimentoUsada
			estadoFisicoRevestimentoObs = vistoria.estadoFisicoRevestimentoObs
			estadoFisicoSoleirasNova = vistoria.estadoFisicoSoleirasNova
			estadoFisicoSoleirasUsada = vistoria.estadoFisicoSoleirasUsada
			estadoFisicoSoleirasObs = vistoria.estadoFisicoSoleirasObs
			estadoFisicoAssoalhoNova = vistoria.estadoFisicoAssoalhoNova
			estadoFisicoAssoalhoObs = vistoria.estadoFisicoAssoalhoObs
			estadoFisicoOutrosPisosNova = vistoria.estadoFisicoOutrosPisosNova
			estadoFisicoOutrosPisosObs = vistoria.estadoFisicoOutrosPisosObs
			estadoFisicoPortasEsquadriasNormal = vistoria.estadoFisicoPortasEsquadriasNormal
			estadoFisicoPortasEsquadriasObs = vistoria.estadoFisicoPortasEsquadriasObs
			estadoFisicoJanelasEsquadriasNormal = vistoria.estadoFisicoJanelasEsquadriasNormal
			estadoFisicoJanelasEsquadriasObs = vistoria.estadoFisicoJanelasEsquadriasObs
			estadoFisicoBasculantesEsquadriasNormal = vistoria.estadoFisicoBasculantesEsquadriasNormal
			estadoFisicoBasculantesEsquadriasObs = vistoria.estadoFisicoBasculantesEsquadriasObs
			estadoFisicoTemArmarios = vistoria.estadoFisicoTemArmarios
			estadoFisicoArmariosObs = vistoria.estadoFisicoArmariosObs
			estadoFisicoQuintalLimpoObs = vistoria.estadoFisicoQuintalLimpoObs
			estadoFisicoJardimTemPlanta = vistoria.estadoFisicoJardimTemPlanta
			estadoFisicoJardimNaoTemPlanta = vistoria.estadoFisicoJardimNaoTemPlanta
			estadoFisicoJardimLimpo = vistoria.estadoFisicoJardimLimpo
			estadoFisicoJardimObs = vistoria.estadoFisicoJardimObs
			estadoFisicoTorneiraDePlastico = vistoria.estadoFisicoTorneiraDePlastico
			estadoFisicoTorneiraDeMetal = vistoria.estadoFisicoTorneiraDeMetal
			estadoFisicoTorneiraObs = vistoria.estadoFisicoTorneiraObs
			estadoFisicoPortaJanelaBasculanteNormal = vistoria.estadoFisicoPortaJanelaBasculanteNormal
			estadoFisicoPortaJanelaBasculanteObs = vistoria.estadoFisicoPortaJanelaBasculanteObs
			estadoFisicoPinturaPortoesNova = vistoria.estadoFisicoPinturaPortoesNova
			estadoFisicoPinturaPortoesVelha = vistoria.estadoFisicoPinturaPortoesVelha
			estadoFisicoPinturaPortoesConservada = vistoria.estadoFisicoPinturaPortoesConservada
			estadoFisicoPinturasPortoesExternoObs = vistoria.estadoFisicoPinturasPortoesExternoObs
			estadoFisicoPinturasPortoesternoObs = vistoria.estadoFisicoPinturasPortoesternoObs
			estadoFisicoGradeImovelObs = vistoria.estadoFisicoGradeImovelObs
			estadoFisicoCaixaArCondicionadoObs = vistoria.estadoFisicoCaixaArCondicionadoObs
			estadoFisicoInstalacaoSplitObs = vistoria.estadoFisicoInstalacaoSplitObs
			estadoFisicoInstalacaoSplitSim = vistoria.estadoFisicoInstalacaoSplitSim
			estadoFisicoCadeadosObs = vistoria.estadoFisicoCadeadosObs
			estadoFisicoArmadoresObs = vistoria.estadoFisicoArmadoresObs
			estadoFisicoObservacoesGeraisObs = vistoria.estadoFisicoObservacoesGeraisObs
		}



		this.state = {
			vistoria: vistoria,
			edit: vistoriaMid != 0,
			tipoVistoriaLocacao: tipoVistoriaLocacao,
			tipoVistoriaAvaliacao: tipoVistoriaAvaliacao,
			tipoVistoriaDesocupacao: tipoVistoriaDesocupacao,
			locatario: locatario,
			locador: locador,
			endereco: endereco,
			bairro: bairro,
			cidade: cidade,
			uf: uf,
			tipoImovelCasa: tipoImovelCasa,
			tipoImovelApartamento: tipoImovelApartamento,
			tipoImovelPontoComercial: tipoImovelPontoComercial,
			tipoImovelSitio: tipoImovelSitio,
			tipoImovelTerreno: tipoImovelTerreno,
			situacaoN: situacaoN,
			situacaoDataDia: situacaoDataDia,
			situacaoDataMes: situacaoDataMes,
			situacaoDataAno: situacaoDataAno,
			temFornecimentoAgua: temFornecimentoAgua,
			temFornecimentoEnergia: temFornecimentoEnergia,
			situacaoMedidorNEquatorial: situacaoMedidorNEquatorial,
			situacaoMedidorNAguas: situacaoMedidorNAguas,
			situacaoMedidorNGas: situacaoMedidorNGas,
			situacaoLeituraEquatorial: situacaoLeituraEquatorial,
			situacaoLeituraAguas: situacaoLeituraAguas,
			situacaoLeituraGas: situacaoLeituraGas,
			estadoFisicoPinturaExObs: estadoFisicoPinturaExObs,
			estadoFisicoPinturaInObs: estadoFisicoPinturaInObs,
			situacaoMedidorEquatorial: situacaoMedidorEquatorial,
			situacaoMedidorAguas: situacaoMedidorAguas,
			situacaoMedidorGas: situacaoMedidorGas,
			situacaoTampaEquatorial: situacaoTampaEquatorial,
			situacaoTampaAguas: situacaoTampaAguas,
			situacaoTampaGas: situacaoTampaGas,
			situacaoImovelRetalhado: situacaoImovelRetalhado,
			situacaoImovelRetalhadoObs: situacaoImovelRetalhadoObs,
			estadoFisicoPinturaExNova: estadoFisicoPinturaExNova,
			estadoFisicoPinturaExConservada: estadoFisicoPinturaExConservada,
			estadoFisicoPinturaExVelha: estadoFisicoPinturaExVelha,
			estadoFisicoPinturaInNova: estadoFisicoPinturaInNova,
			estadoFisicoPinturaInConservada: estadoFisicoPinturaInConservada,
			estadoFisicoPinturaInVelha: estadoFisicoPinturaInVelha,
			estadoFisicoPinturaFoNova: estadoFisicoPinturaFoNova,
			estadoFisicoPinturaFoConservada: estadoFisicoPinturaFoConservada,
			estadoFisicoPinturaFoVelha: estadoFisicoPinturaFoVelha,
			estadoFisicoPinturaFoObs: estadoFisicoPinturaFoObs,
			estadoFisicoPinturaGeNova: estadoFisicoPinturaGeNova,
			estadoFisicoPinturaGeConservada: estadoFisicoPinturaGeConservada,
			estadoFisicoPinturaGeVelha: estadoFisicoPinturaGeVelha,
			estadoFisicoPinturaGeObs: estadoFisicoPinturaGeObs,
			estadoFisicoPinturaPvcNova: estadoFisicoPinturaPvcNova,
			estadoFisicoPinturaPvcConservada: estadoFisicoPinturaPvcConservada,
			estadoFisicoPinturaPvcVelha: estadoFisicoPinturaPvcVelha,
			estadoFisicoPinturaPvcObs: estadoFisicoPinturaPvcObs,
			estadoFisicoPinturaPortaMadeiraNova: estadoFisicoPinturaPortaMadeiraNova,
			estadoFisicoPinturaPortaMadeiraConservada: estadoFisicoPinturaPortaMadeiraConservada,
			estadoFisicoPinturaPortaMadeiraVelha: estadoFisicoPinturaPortaMadeiraVelha,
			estadoFisicoPinturaPortaMadeiraObs: estadoFisicoPinturaPortaMadeiraObs,
			estadoFisicoPinturaJanelaMadeiraNova: estadoFisicoPinturaJanelaMadeiraNova,
			estadoFisicoPinturaJanelaMadeiraConservada: estadoFisicoPinturaJanelaMadeiraConservada,
			estadoFisicoPinturaJanelaMadeiraVelha: estadoFisicoPinturaJanelaMadeiraVelha,
			estadoFisicoPinturaJanelaMadeiraObs: estadoFisicoPinturaJanelaMadeiraObs,
			estadoFisicoPinturaPortasFerroNova: estadoFisicoPinturaPortasFerroNova,
			estadoFisicoPinturaPortasFerroConservada: estadoFisicoPinturaPortasFerroConservada,
			estadoFisicoPinturaPortasFerroVelha: estadoFisicoPinturaPortasFerroVelha,
			estadoFisicoPinturaPortasFerroObs: estadoFisicoPinturaPortasFerroObs,
			estadoFisicoPinturaJanelasFerroNova: estadoFisicoPinturaJanelasFerroNova,
			estadoFisicoPinturaJanelasFerroConservada: estadoFisicoPinturaJanelasFerroConservada,
			estadoFisicoPinturaJanelasFerroVelha: estadoFisicoPinturaJanelasFerroVelha,
			estadoFisicoPinturaJanelasFerroObs: estadoFisicoPinturaJanelasFerroObs,
			estadoFisicoPinturaMuroNova: estadoFisicoPinturaMuroNova,
			estadoFisicoPinturaMuroConservada: estadoFisicoPinturaMuroConservada,
			estadoFisicoPinturaMuroVelha: estadoFisicoPinturaMuroVelha,
			estadoFisicoPinturaMuroObs: estadoFisicoPinturaMuroObs,
			estadoFisicoRebocoNova: estadoFisicoRebocoNova,
			estadoFisicoRebocoConservada: estadoFisicoRebocoConservada,
			estadoFisicoRebocoVelha: estadoFisicoRebocoVelha,
			estadoFisicoRebocoObs: estadoFisicoRebocoObs,
			estadoFisicoQtdChavesNova: estadoFisicoQtdChavesNova,
			estadoFisicoQtdChavesConservada: estadoFisicoQtdChavesConservada,
			estadoFisicoQtdChavesVelha: estadoFisicoQtdChavesVelha,
			estadoFisicoQtdChavesObs: estadoFisicoQtdChavesObs,
			estadoFisicoInstalacoesObs: estadoFisicoInstalacoesObs,
			estadoFisicoCaixaDisjuntorObs: estadoFisicoCaixaDisjuntorObs,
			estadoFisicoCampainhaObs: estadoFisicoCampainhaObs,
			estadoFisicoInterfoneObs: estadoFisicoInterfoneObs,
			estadoFisicoLampadasComunsObs: estadoFisicoLampadasComunsObs,
			estadoFisicoLampadasFluorescentesObs: estadoFisicoLampadasFluorescentesObs,
			estadoFisicoLampadasDicroicasObs: estadoFisicoLampadasDicroicasObs,
			estadoFisicoPLFluorescentesCompridaObs: estadoFisicoPLFluorescentesCompridaObs,
			estadoFisicoPLFluorescentesRedondaObs: estadoFisicoPLFluorescentesRedondaObs,
			estadoFisicoTomadasComunsObs: estadoFisicoTomadasComunsObs,
			estadoFisicoTomadasTelefoneObs: estadoFisicoTomadasTelefoneObs,
			estadoFisicoInterruptoresObs: estadoFisicoInterruptoresObs,
			estadoFisicoLuminariasObs: estadoFisicoLuminariasObs,
			estadoFisicoLustresObs: estadoFisicoLustresObs,
			estadoFisicoGlobosObs: estadoFisicoGlobosObs,
			estadoFisicoSpotsObs: estadoFisicoSpotsObs,
			estadoFisicoBocaisPlafonObs: estadoFisicoBocaisPlafonObs,
			estadoFisicoTemCerca: estadoFisicoTemCerca,
			estadoFisicoCercaResidencialVelha: estadoFisicoCercaResidencialVelha,
			estadoFisicoCercaIndustrialVelha: estadoFisicoCercaIndustrialVelha,
			estadoFisicoCercaEletricaObs: estadoFisicoCercaEletricaObs,
			estadoFisicoInstalacoesHidroSaniObs: estadoFisicoInstalacoesHidroSaniObs,
			estadoFisicoInstalacoesHidroSaniRegistroObs: estadoFisicoInstalacoesHidroSaniRegistroObs,
			estadoFisicoInstalacoesHidroSaniPiaCozinhaObs: estadoFisicoInstalacoesHidroSaniPiaCozinhaObs,
			estadoFisicoInstalacoesHidroSaniTorneiraObs: estadoFisicoInstalacoesHidroSaniTorneiraObs,
			estadoFisicoInstalacoesHidroSaniPiaLavanObs: estadoFisicoInstalacoesHidroSaniPiaLavanObs,
			estadoFisicoInstalacoesHidroSaniTorneiraInternaObs: estadoFisicoInstalacoesHidroSaniTorneiraInternaObs,
			estadoFisicoInstalacoesHidroSaniPiaLavanExternaObs: estadoFisicoInstalacoesHidroSaniPiaLavanExternaObs,
			estadoFisicoInstalacoesHidroSaniTorneiraExternaObs: estadoFisicoInstalacoesHidroSaniTorneiraExternaObs,
			estadoFisicoTemPiscina: estadoFisicoTemPiscina,
			estadoFisicoInstalacoesHidroSaniPiscinaObs: estadoFisicoInstalacoesHidroSaniPiscinaObs,
			estadoFisicoInstalacoesLavaboAcessoriosObs: estadoFisicoInstalacoesLavaboAcessoriosObs,
			estadoFisicoInstalacoesLavaboEspelhoObs: estadoFisicoInstalacoesLavaboEspelhoObs,
			estadoFisicoInstalacoesLavaboBoxObs: estadoFisicoInstalacoesLavaboBoxObs,
			estadoFisicoInstalacoesLavaboPiaObs: estadoFisicoInstalacoesLavaboPiaObs,
			estadoFisicoInstalacoesLavaboDuchaObs: estadoFisicoInstalacoesLavaboDuchaObs,
			estadoFisicoInstalacoesLavaboDescargaObs: estadoFisicoInstalacoesLavaboDescargaObs,
			estadoFisicoInstalacoesLavaboSanitarioObs: estadoFisicoInstalacoesLavaboSanitarioObs,
			estadoFisicoInstalacoesLavaboAssentoObs: estadoFisicoInstalacoesLavaboAssentoObs,
			estadoFisicoInstalacoesLavaboTorneiraObs: estadoFisicoInstalacoesLavaboTorneiraObs,
			estadoFisicoInstalacoesLavaboArmarioObs: estadoFisicoInstalacoesLavaboArmarioObs,
			estadoFisicoInstalacoesBanheiroSocialAcessoriosObs: estadoFisicoInstalacoesBanheiroSocialAcessoriosObs,
			estadoFisicoInstalacoesBanheiroSocialEspelhoObs: estadoFisicoInstalacoesBanheiroSocialEspelhoObs,
			estadoFisicoInstalacoesBanheiroSocialEspelhoObs: estadoFisicoInstalacoesBanheiroSocialEspelhoObs,
			estadoFisicoInstalacoesBanheiroSocialBoxObs: estadoFisicoInstalacoesBanheiroSocialBoxObs,
			estadoFisicoInstalacoesBanheiroSocialPiaObs: estadoFisicoInstalacoesBanheiroSocialPiaObs,
			estadoFisicoInstalacoesBanheiroSocialDuchaObs: estadoFisicoInstalacoesBanheiroSocialDuchaObs,
			estadoFisicoInstalacoesBanheiroSocialDescargaObs: estadoFisicoInstalacoesBanheiroSocialDescargaObs,
			estadoFisicoInstalacoesBanheiroSocialSanitarioObs: estadoFisicoInstalacoesBanheiroSocialSanitarioObs,
			estadoFisicoInstalacoesBanheiroSocialAssentoObs: estadoFisicoInstalacoesBanheiroSocialAssentoObs,
			estadoFisicoInstalacoesBanheiroSocialTorneiraObs: estadoFisicoInstalacoesBanheiroSocialTorneiraObs,
			estadoFisicoInstalacoesBanheiroSocialArmarioObs: estadoFisicoInstalacoesBanheiroSocialArmarioObs,
			estadoFisicoInstalacoesSuite01AcessoriosObs: estadoFisicoInstalacoesSuite01AcessoriosObs,
			estadoFisicoInstalacoesSuite01EspelhoObs: estadoFisicoInstalacoesSuite01EspelhoObs,
			estadoFisicoInstalacoesSuite01BoxObs: estadoFisicoInstalacoesSuite01BoxObs,
			estadoFisicoInstalacoesSuite01PiaObs: estadoFisicoInstalacoesSuite01PiaObs,
			estadoFisicoInstalacoesSuite01DuchaObs: estadoFisicoInstalacoesSuite01DuchaObs,
			estadoFisicoInstalacoesSuite01DescargaObs: estadoFisicoInstalacoesSuite01DescargaObs,
			estadoFisicoInstalacoesSuite01SanitarioObs: estadoFisicoInstalacoesSuite01SanitarioObs,
			estadoFisicoInstalacoesSuite01AssentoObs: estadoFisicoInstalacoesSuite01AssentoObs,
			estadoFisicoInstalacoesSuite01TorneiraObs: estadoFisicoInstalacoesSuite01TorneiraObs,
			estadoFisicoInstalacoesSuite01ArmarioObs: estadoFisicoInstalacoesSuite01ArmarioObs,
			estadoFisicoInstalacoesSuite02AcessoriosObs: estadoFisicoInstalacoesSuite02AcessoriosObs,
			estadoFisicoInstalacoesSuite02EspelhoObs: estadoFisicoInstalacoesSuite02EspelhoObs,
			estadoFisicoInstalacoesSuite02BoxObs: estadoFisicoInstalacoesSuite02BoxObs,
			estadoFisicoInstalacoesSuite02PiaObs: estadoFisicoInstalacoesSuite02PiaObs,
			estadoFisicoInstalacoesSuite02DuchaObs: estadoFisicoInstalacoesSuite02DuchaObs,
			estadoFisicoInstalacoesSuite02DescargaObs: estadoFisicoInstalacoesSuite02DescargaObs,
			estadoFisicoInstalacoesSuite02SanitarioObs: estadoFisicoInstalacoesSuite02SanitarioObs,
			estadoFisicoInstalacoesSuite02AssentoObs: estadoFisicoInstalacoesSuite02AssentoObs,
			estadoFisicoInstalacoesSuite02TorneiraObs: estadoFisicoInstalacoesSuite02TorneiraObs,
			estadoFisicoInstalacoesSuite02ArmarioObs: estadoFisicoInstalacoesSuite02ArmarioObs,
			estadoFisicoInstalacoesSuite03AcessoriosObs: estadoFisicoInstalacoesSuite03AcessoriosObs,
			estadoFisicoInstalacoesSuite03EspelhoObs: estadoFisicoInstalacoesSuite03EspelhoObs,
			estadoFisicoInstalacoesSuite03BoxObs: estadoFisicoInstalacoesSuite03BoxObs,
			estadoFisicoInstalacoesSuite03PiaObs: estadoFisicoInstalacoesSuite03PiaObs,
			estadoFisicoInstalacoesSuite03DuchaObs: estadoFisicoInstalacoesSuite03DuchaObs,
			estadoFisicoInstalacoesSuite03DescargaObs: estadoFisicoInstalacoesSuite03DescargaObs,
			estadoFisicoInstalacoesSuite03SanitarioObs: estadoFisicoInstalacoesSuite03SanitarioObs,
			estadoFisicoInstalacoesSuite03AssentoObs: estadoFisicoInstalacoesSuite03AssentoObs,
			estadoFisicoInstalacoesSuite03TorneiraObs: estadoFisicoInstalacoesSuite03TorneiraObs,
			estadoFisicoInstalacoesSuite03ArmarioObs: estadoFisicoInstalacoesSuite03ArmarioObs,
			estadoFisicoInstalacoesDependenciaAcessoriosObs: estadoFisicoInstalacoesDependenciaAcessoriosObs,
			estadoFisicoInstalacoesDependenciaEspelhoObs: estadoFisicoInstalacoesDependenciaEspelhoObs,
			estadoFisicoInstalacoesDependenciaBoxObs: estadoFisicoInstalacoesDependenciaBoxObs,
			estadoFisicoInstalacoesDependenciaPiaObs: estadoFisicoInstalacoesDependenciaPiaObs,
			estadoFisicoInstalacoesDependenciaDuchaObs: estadoFisicoInstalacoesDependenciaDuchaObs,
			estadoFisicoInstalacoesDependenciaDescargaObs: estadoFisicoInstalacoesDependenciaDescargaObs,
			estadoFisicoInstalacoesDependenciaSanitarioObs: estadoFisicoInstalacoesDependenciaSanitarioObs,
			estadoFisicoInstalacoesDependenciaAssentoObs: estadoFisicoInstalacoesDependenciaAssentoObs,
			estadoFisicoInstalacoesDependenciaTorneiraObs: estadoFisicoInstalacoesDependenciaTorneiraObs,
			estadoFisicoInstalacoesDependenciaArmarioObs: estadoFisicoInstalacoesDependenciaArmarioObs,
			estadoFisicoNormalRalosEsgoto: estadoFisicoNormalRalosEsgoto,
			estadoFisicoUsadoRalosEsgoto: estadoFisicoUsadoRalosEsgoto,
			estadoFisicoInstalacoesRalosEsgotoArmarioObs: estadoFisicoInstalacoesRalosEsgotoArmarioObs,
			estadoFisicoCeramicaNova: estadoFisicoCeramicaNova,
			estadoFisicoCeramicaUsada: estadoFisicoCeramicaUsada,
			estadoFisicoCeramicaObs: estadoFisicoCeramicaObs,
			estadoFisicoAzulejoNova: estadoFisicoAzulejoNova,
			estadoFisicoAzulejoUsada: estadoFisicoAzulejoUsada,
			estadoFisicoAzulejoObs: estadoFisicoAzulejoObs,
			estadoFisicoCimentoNova: estadoFisicoCimentoNova,
			estadoFisicoCimentoObs: estadoFisicoCimentoObs,
			estadoFisicoRodapeNova: estadoFisicoRodapeNova,
			estadoFisicoRodapeUsada: estadoFisicoRodapeUsada,
			estadoFisicoRodapeObs: estadoFisicoRodapeObs,
			estadoFisicoRevestimentoNova: estadoFisicoRevestimentoNova,
			estadoFisicoRevestimentoUsada: estadoFisicoRevestimentoUsada,
			estadoFisicoRevestimentoObs: estadoFisicoRevestimentoObs,
			estadoFisicoSoleirasNova: estadoFisicoSoleirasNova,
			estadoFisicoSoleirasUsada: estadoFisicoSoleirasUsada,
			estadoFisicoSoleirasObs: estadoFisicoSoleirasObs,
			estadoFisicoAssoalhoNova: estadoFisicoAssoalhoNova,
			estadoFisicoAssoalhoObs: estadoFisicoAssoalhoObs,
			estadoFisicoOutrosPisosNova: estadoFisicoOutrosPisosNova,
			estadoFisicoOutrosPisosObs: estadoFisicoOutrosPisosObs,
			estadoFisicoPortasEsquadriasNormal: estadoFisicoPortasEsquadriasNormal,
			estadoFisicoPortasEsquadriasObs: estadoFisicoPortasEsquadriasObs,
			estadoFisicoJanelasEsquadriasNormal: estadoFisicoJanelasEsquadriasNormal,
			estadoFisicoJanelasEsquadriasObs: estadoFisicoJanelasEsquadriasObs,
			estadoFisicoBasculantesEsquadriasNormal: estadoFisicoBasculantesEsquadriasNormal,
			estadoFisicoBasculantesEsquadriasObs: estadoFisicoBasculantesEsquadriasObs,
			estadoFisicoTemArmarios: estadoFisicoTemArmarios,
			estadoFisicoArmariosObs: estadoFisicoArmariosObs,
			estadoFisicoQuintalLimpoObs: estadoFisicoQuintalLimpoObs,
			estadoFisicoJardimTemPlanta: estadoFisicoJardimTemPlanta,
			estadoFisicoJardimNaoTemPlanta: estadoFisicoJardimNaoTemPlanta,
			estadoFisicoJardimLimpo: estadoFisicoJardimLimpo,
			estadoFisicoJardimObs: estadoFisicoJardimObs,
			estadoFisicoTorneiraDePlastico: estadoFisicoTorneiraDePlastico,
			estadoFisicoTorneiraDeMetal: estadoFisicoTorneiraDeMetal,
			estadoFisicoTorneiraObs: estadoFisicoTorneiraObs,
			estadoFisicoPortaJanelaBasculanteNormal: estadoFisicoPortaJanelaBasculanteNormal,
			estadoFisicoPortaJanelaBasculanteObs: estadoFisicoPortaJanelaBasculanteObs,
			estadoFisicoPinturaPortoesNova: estadoFisicoPinturaPortoesNova,
			estadoFisicoPinturaPortoesVelha: estadoFisicoPinturaPortoesVelha,
			estadoFisicoPinturaPortoesConservada: estadoFisicoPinturaPortoesConservada,
			estadoFisicoPinturasPortoesExternoObs: estadoFisicoPinturasPortoesExternoObs,
			estadoFisicoPinturasPortoesternoObs: estadoFisicoPinturasPortoesternoObs,
			estadoFisicoGradeImovelObs: estadoFisicoGradeImovelObs,
			estadoFisicoCaixaArCondicionadoObs: estadoFisicoCaixaArCondicionadoObs,
			estadoFisicoInstalacaoSplitObs: estadoFisicoInstalacaoSplitObs,
			estadoFisicoInstalacaoSplitSim: estadoFisicoInstalacaoSplitSim,
			estadoFisicoCadeadosObs: estadoFisicoCadeadosObs,
			estadoFisicoArmadoresObs: estadoFisicoArmadoresObs,
			estadoFisicoObservacoesGeraisObs: estadoFisicoObservacoesGeraisObs
		}
	};

	getDataFromForm() {
		let vistoria = {
			tipoVistoriaLocacao: this.state.tipoVistoriaLocacao,
			tipoVistoriaAvaliacao: this.state.tipoVistoriaAvaliacao,
			tipoVistoriaDesocupacao: this.state.tipoVistoriaDesocupacao,
			locatario: this.state.locatario,
			locador: this.state.locador,
			endereco: this.state.endereco,
			bairro: this.state.bairro,
			cidade: this.state.cidade,
			uf: this.state.uf,
			tipoImovelCasa: this.state.tipoImovelCasa,
			tipoImovelApartamento: this.state.tipoImovelApartamento,
			tipoImovelPontoComercial: this.state.tipoImovelPontoComercial,
			tipoImovelSitio: this.state.tipoImovelSitio,
			tipoImovelTerreno: this.state.tipoImovelTerreno,
			situacaoN: this.state.situacaoN,
			situacaoDataDia: this.state.situacaoDataDia,
			situacaoDataMes: this.state.situacaoDataMes,
			situacaoDataAno: this.state.situacaoDataAno,
			temFornecimentoAgua: this.state.temFornecimentoAgua,
			temFornecimentoEnergia: this.state.temFornecimentoEnergia,
			situacaoMedidorNEquatorial: this.state.situacaoMedidorNEquatorial,
			situacaoMedidorNAguas: this.state.situacaoMedidorNAguas,
			situacaoMedidorNGas: this.state.situacaoMedidorNGas,
			situacaoLeituraEquatorial: this.state.situacaoLeituraEquatorial,
			situacaoLeituraAguas: this.state.situacaoLeituraAguas,
			situacaoLeituraGas: this.state.situacaoLeituraGas,
			estadoFisicoPinturaExObs: this.state.estadoFisicoPinturaExObs,
			estadoFisicoPinturaInObs: this.state.estadoFisicoPinturaInObs,
			situacaoMedidorEquatorial: this.state.situacaoMedidorEquatorial,
			situacaoMedidorAguas: this.state.situacaoMedidorAguas,
			situacaoMedidorGas: this.state.situacaoMedidorGas,
			situacaoTampaEquatorial: this.state.situacaoTampaEquatorial,
			situacaoTampaAguas: this.state.situacaoTampaAguas,
			situacaoTampaGas: this.state.situacaoTampaGas,
			situacaoImovelRetalhado: this.state.situacaoImovelRetalhado,
			situacaoImovelRetalhadoObs: this.state.situacaoImovelRetalhadoObs,
			estadoFisicoPinturaExNova: this.state.estadoFisicoPinturaExNova,
			estadoFisicoPinturaExConservada: this.state.estadoFisicoPinturaExConservada,
			estadoFisicoPinturaExVelha: this.state.estadoFisicoPinturaExVelha,
			estadoFisicoPinturaInNova: this.state.estadoFisicoPinturaInNova,
			estadoFisicoPinturaInConservada: this.state.estadoFisicoPinturaInConservada,
			estadoFisicoPinturaInVelha: this.state.estadoFisicoPinturaInVelha,
			estadoFisicoPinturaFoNova: this.state.estadoFisicoPinturaFoNova,
			estadoFisicoPinturaFoConservada: this.state.estadoFisicoPinturaFoConservada,
			estadoFisicoPinturaFoVelha: this.state.estadoFisicoPinturaFoVelha,
			estadoFisicoPinturaFoObs: this.state.estadoFisicoPinturaFoObs,
			estadoFisicoPinturaGeNova: this.state.estadoFisicoPinturaGeNova,
			estadoFisicoPinturaGeConservada: this.state.estadoFisicoPinturaGeConservada,
			estadoFisicoPinturaGeVelha: this.state.estadoFisicoPinturaGeVelha,
			estadoFisicoPinturaGeObs: this.state.estadoFisicoPinturaGeObs,
			estadoFisicoPinturaPvcNova: this.state.estadoFisicoPinturaPvcNova,
			estadoFisicoPinturaPvcConservada: this.state.estadoFisicoPinturaPvcConservada,
			estadoFisicoPinturaPvcVelha: this.state.estadoFisicoPinturaPvcVelha,
			estadoFisicoPinturaPvcObs: this.state.estadoFisicoPinturaPvcObs,
			estadoFisicoPinturaPortaMadeiraNova: this.state.estadoFisicoPinturaPortaMadeiraNova,
			estadoFisicoPinturaPortaMadeiraConservada: this.state.estadoFisicoPinturaPortaMadeiraConservada,
			estadoFisicoPinturaPortaMadeiraVelha: this.state.estadoFisicoPinturaPortaMadeiraVelha,
			estadoFisicoPinturaPortaMadeiraObs: this.state.estadoFisicoPinturaPortaMadeiraObs,
			estadoFisicoPinturaJanelaMadeiraNova: this.state.estadoFisicoPinturaJanelaMadeiraNova,
			estadoFisicoPinturaJanelaMadeiraConservada: this.state.estadoFisicoPinturaJanelaMadeiraConservada,
			estadoFisicoPinturaJanelaMadeiraVelha: this.state.estadoFisicoPinturaJanelaMadeiraVelha,
			estadoFisicoPinturaJanelaMadeiraObs: this.state.estadoFisicoPinturaJanelaMadeiraObs,
			estadoFisicoPinturaPortasFerroNova: this.state.estadoFisicoPinturaPortasFerroNova,
			estadoFisicoPinturaPortasFerroConservada: this.state.estadoFisicoPinturaPortasFerroConservada,
			estadoFisicoPinturaPortasFerroVelha: this.state.estadoFisicoPinturaPortasFerroVelha,
			estadoFisicoPinturaPortasFerroObs: this.state.estadoFisicoPinturaPortasFerroObs,
			estadoFisicoPinturaJanelasFerroNova: this.state.estadoFisicoPinturaJanelasFerroNova,
			estadoFisicoPinturaJanelasFerroConservada: this.state.estadoFisicoPinturaJanelasFerroConservada,
			estadoFisicoPinturaJanelasFerroVelha: this.state.estadoFisicoPinturaJanelasFerroVelha,
			estadoFisicoPinturaJanelasFerroObs: this.state.estadoFisicoPinturaJanelasFerroObs,
			estadoFisicoPinturaMuroNova: this.state.estadoFisicoPinturaMuroNova,
			estadoFisicoPinturaMuroConservada: this.state.estadoFisicoPinturaMuroConservada,
			estadoFisicoPinturaMuroVelha: this.state.estadoFisicoPinturaMuroVelha,
			estadoFisicoPinturaMuroObs: this.state.estadoFisicoPinturaMuroObs,
			estadoFisicoRebocoNova: this.state.estadoFisicoRebocoNova,
			estadoFisicoRebocoConservada: this.state.estadoFisicoRebocoConservada,
			estadoFisicoRebocoVelha: this.state.estadoFisicoRebocoVelha,
			estadoFisicoRebocoObs: this.state.estadoFisicoRebocoObs,
			estadoFisicoQtdChavesNova: this.state.estadoFisicoQtdChavesNova,
			estadoFisicoQtdChavesConservada: this.state.estadoFisicoQtdChavesConservada,
			estadoFisicoQtdChavesVelha: this.state.estadoFisicoQtdChavesVelha,
			estadoFisicoQtdChavesObs: this.state.estadoFisicoQtdChavesObs,
			estadoFisicoInstalacoesObs: this.state.estadoFisicoInstalacoesObs,
			estadoFisicoCaixaDisjuntorObs: this.state.estadoFisicoCaixaDisjuntorObs,
			estadoFisicoCampainhaObs: this.state.estadoFisicoCampainhaObs,
			estadoFisicoInterfoneObs: this.state.estadoFisicoInterfoneObs,
			estadoFisicoLampadasComunsObs: this.state.estadoFisicoLampadasComunsObs,
			estadoFisicoLampadasFluorescentesObs: this.state.estadoFisicoLampadasFluorescentesObs,
			estadoFisicoLampadasDicroicasObs: this.state.estadoFisicoLampadasDicroicasObs,
			estadoFisicoPLFluorescentesCompridaObs: this.state.estadoFisicoPLFluorescentesCompridaObs,
			estadoFisicoPLFluorescentesRedondaObs: this.state.estadoFisicoPLFluorescentesRedondaObs,
			estadoFisicoTomadasComunsObs: this.state.estadoFisicoTomadasComunsObs,
			estadoFisicoTomadasTelefoneObs: this.state.estadoFisicoTomadasTelefoneObs,
			estadoFisicoInterruptoresObs: this.state.estadoFisicoInterruptoresObs,
			estadoFisicoLuminariasObs: this.state.estadoFisicoLuminariasObs,
			estadoFisicoLustresObs: this.state.estadoFisicoLustresObs,
			estadoFisicoGlobosObs: this.state.estadoFisicoGlobosObs,
			estadoFisicoSpotsObs: this.state.estadoFisicoSpotsObs,
			estadoFisicoBocaisPlafonObs: this.state.estadoFisicoBocaisPlafonObs,
			estadoFisicoTemCerca: this.state.estadoFisicoTemCerca,
			estadoFisicoCercaResidencialVelha: this.state.estadoFisicoCercaResidencialVelha,
			estadoFisicoCercaIndustrialVelha: this.state.estadoFisicoCercaIndustrialVelha,
			estadoFisicoCercaEletricaObs: this.state.estadoFisicoCercaEletricaObs,
			estadoFisicoInstalacoesHidroSaniObs: this.state.estadoFisicoInstalacoesHidroSaniObs,
			estadoFisicoInstalacoesHidroSaniRegistroObs: this.state.estadoFisicoInstalacoesHidroSaniRegistroObs,
			estadoFisicoInstalacoesHidroSaniPiaCozinhaObs: this.state.estadoFisicoInstalacoesHidroSaniPiaCozinhaObs,
			estadoFisicoInstalacoesHidroSaniTorneiraObs: this.state.estadoFisicoInstalacoesHidroSaniTorneiraObs,
			estadoFisicoInstalacoesHidroSaniPiaLavanObs: this.state.estadoFisicoInstalacoesHidroSaniPiaLavanObs,
			estadoFisicoInstalacoesHidroSaniTorneiraInternaObs: this.state.estadoFisicoInstalacoesHidroSaniTorneiraInternaObs,
			estadoFisicoInstalacoesHidroSaniPiaLavanExternaObs: this.state.estadoFisicoInstalacoesHidroSaniPiaLavanExternaObs,
			estadoFisicoInstalacoesHidroSaniTorneiraExternaObs: this.state.estadoFisicoInstalacoesHidroSaniTorneiraExternaObs,
			estadoFisicoTemPiscina: this.state.estadoFisicoTemPiscina,
			estadoFisicoInstalacoesHidroSaniPiscinaObs: this.state.estadoFisicoInstalacoesHidroSaniPiscinaObs,
			estadoFisicoInstalacoesLavaboAcessoriosObs: this.state.estadoFisicoInstalacoesLavaboAcessoriosObs,
			estadoFisicoInstalacoesLavaboEspelhoObs: this.state.estadoFisicoInstalacoesLavaboEspelhoObs,
			estadoFisicoInstalacoesLavaboBoxObs: this.state.estadoFisicoInstalacoesLavaboBoxObs,
			estadoFisicoInstalacoesLavaboPiaObs: this.state.estadoFisicoInstalacoesLavaboPiaObs,
			estadoFisicoInstalacoesLavaboDuchaObs: this.state.estadoFisicoInstalacoesLavaboDuchaObs,
			estadoFisicoInstalacoesLavaboDescargaObs: this.state.estadoFisicoInstalacoesLavaboDescargaObs,
			estadoFisicoInstalacoesLavaboSanitarioObs: this.state.estadoFisicoInstalacoesLavaboSanitarioObs,
			estadoFisicoInstalacoesLavaboAssentoObs: this.state.estadoFisicoInstalacoesLavaboAssentoObs,
			estadoFisicoInstalacoesLavaboTorneiraObs: this.state.estadoFisicoInstalacoesLavaboTorneiraObs,
			estadoFisicoInstalacoesLavaboArmarioObs: this.state.estadoFisicoInstalacoesLavaboArmarioObs,
			estadoFisicoInstalacoesBanheiroSocialAcessoriosObs: this.state.estadoFisicoInstalacoesBanheiroSocialAcessoriosObs,
			estadoFisicoInstalacoesBanheiroSocialEspelhoObs: this.state.estadoFisicoInstalacoesBanheiroSocialEspelhoObs,
			estadoFisicoInstalacoesBanheiroSocialEspelhoObs: this.state.estadoFisicoInstalacoesBanheiroSocialEspelhoObs,
			estadoFisicoInstalacoesBanheiroSocialBoxObs: this.state.estadoFisicoInstalacoesBanheiroSocialBoxObs,
			estadoFisicoInstalacoesBanheiroSocialPiaObs: this.state.estadoFisicoInstalacoesBanheiroSocialPiaObs,
			estadoFisicoInstalacoesBanheiroSocialDuchaObs: this.state.estadoFisicoInstalacoesBanheiroSocialDuchaObs,
			estadoFisicoInstalacoesBanheiroSocialDescargaObs: this.state.estadoFisicoInstalacoesBanheiroSocialDescargaObs,
			estadoFisicoInstalacoesBanheiroSocialSanitarioObs: this.state.estadoFisicoInstalacoesBanheiroSocialSanitarioObs,
			estadoFisicoInstalacoesBanheiroSocialAssentoObs: this.state.estadoFisicoInstalacoesBanheiroSocialAssentoObs,
			estadoFisicoInstalacoesBanheiroSocialTorneiraObs: this.state.estadoFisicoInstalacoesBanheiroSocialTorneiraObs,
			estadoFisicoInstalacoesBanheiroSocialArmarioObs: this.state.estadoFisicoInstalacoesBanheiroSocialArmarioObs,
			estadoFisicoInstalacoesSuite01AcessoriosObs: this.state.estadoFisicoInstalacoesSuite01AcessoriosObs,
			estadoFisicoInstalacoesSuite01EspelhoObs: this.state.estadoFisicoInstalacoesSuite01EspelhoObs,
			estadoFisicoInstalacoesSuite01BoxObs: this.state.estadoFisicoInstalacoesSuite01BoxObs,
			estadoFisicoInstalacoesSuite01PiaObs: this.state.estadoFisicoInstalacoesSuite01PiaObs,
			estadoFisicoInstalacoesSuite01DuchaObs: this.state.estadoFisicoInstalacoesSuite01DuchaObs,
			estadoFisicoInstalacoesSuite01DescargaObs: this.state.estadoFisicoInstalacoesSuite01DescargaObs,
			estadoFisicoInstalacoesSuite01SanitarioObs: this.state.estadoFisicoInstalacoesSuite01SanitarioObs,
			estadoFisicoInstalacoesSuite01AssentoObs: this.state.estadoFisicoInstalacoesSuite01AssentoObs,
			estadoFisicoInstalacoesSuite01TorneiraObs: this.state.estadoFisicoInstalacoesSuite01TorneiraObs,
			estadoFisicoInstalacoesSuite01ArmarioObs: this.state.estadoFisicoInstalacoesSuite01ArmarioObs,
			estadoFisicoInstalacoesSuite02AcessoriosObs: this.state.estadoFisicoInstalacoesSuite02AcessoriosObs,
			estadoFisicoInstalacoesSuite02EspelhoObs: this.state.estadoFisicoInstalacoesSuite02EspelhoObs,
			estadoFisicoInstalacoesSuite02BoxObs: this.state.estadoFisicoInstalacoesSuite02BoxObs,
			estadoFisicoInstalacoesSuite02PiaObs: this.state.estadoFisicoInstalacoesSuite02PiaObs,
			estadoFisicoInstalacoesSuite02DuchaObs: this.state.estadoFisicoInstalacoesSuite02DuchaObs,
			estadoFisicoInstalacoesSuite02DescargaObs: this.state.estadoFisicoInstalacoesSuite02DescargaObs,
			estadoFisicoInstalacoesSuite02SanitarioObs: this.state.estadoFisicoInstalacoesSuite02SanitarioObs,
			estadoFisicoInstalacoesSuite02AssentoObs: this.state.estadoFisicoInstalacoesSuite02AssentoObs,
			estadoFisicoInstalacoesSuite02TorneiraObs: this.state.estadoFisicoInstalacoesSuite02TorneiraObs,
			estadoFisicoInstalacoesSuite02ArmarioObs: this.state.estadoFisicoInstalacoesSuite02ArmarioObs,
			estadoFisicoInstalacoesSuite03AcessoriosObs: this.state.estadoFisicoInstalacoesSuite03AcessoriosObs,
			estadoFisicoInstalacoesSuite03EspelhoObs: this.state.estadoFisicoInstalacoesSuite03EspelhoObs,
			estadoFisicoInstalacoesSuite03BoxObs: this.state.estadoFisicoInstalacoesSuite03BoxObs,
			estadoFisicoInstalacoesSuite03PiaObs: this.state.estadoFisicoInstalacoesSuite03PiaObs,
			estadoFisicoInstalacoesSuite03DuchaObs: this.state.estadoFisicoInstalacoesSuite03DuchaObs,
			estadoFisicoInstalacoesSuite03DescargaObs: this.state.estadoFisicoInstalacoesSuite03DescargaObs,
			estadoFisicoInstalacoesSuite03SanitarioObs: this.state.estadoFisicoInstalacoesSuite03SanitarioObs,
			estadoFisicoInstalacoesSuite03AssentoObs: this.state.estadoFisicoInstalacoesSuite03AssentoObs,
			estadoFisicoInstalacoesSuite03TorneiraObs: this.state.estadoFisicoInstalacoesSuite03TorneiraObs,
			estadoFisicoInstalacoesSuite03ArmarioObs: this.state.estadoFisicoInstalacoesSuite03ArmarioObs,
			estadoFisicoInstalacoesDependenciaAcessoriosObs: this.state.estadoFisicoInstalacoesDependenciaAcessoriosObs,
			estadoFisicoInstalacoesDependenciaEspelhoObs: this.state.estadoFisicoInstalacoesDependenciaEspelhoObs,
			estadoFisicoInstalacoesDependenciaBoxObs: this.state.estadoFisicoInstalacoesDependenciaBoxObs,
			estadoFisicoInstalacoesDependenciaPiaObs: this.state.estadoFisicoInstalacoesDependenciaPiaObs,
			estadoFisicoInstalacoesDependenciaDuchaObs: this.state.estadoFisicoInstalacoesDependenciaDuchaObs,
			estadoFisicoInstalacoesDependenciaDescargaObs: this.state.estadoFisicoInstalacoesDependenciaDescargaObs,
			estadoFisicoInstalacoesDependenciaSanitarioObs: this.state.estadoFisicoInstalacoesDependenciaSanitarioObs,
			estadoFisicoInstalacoesDependenciaAssentoObs: this.state.estadoFisicoInstalacoesDependenciaAssentoObs,
			estadoFisicoInstalacoesDependenciaTorneiraObs: this.state.estadoFisicoInstalacoesDependenciaTorneiraObs,
			estadoFisicoInstalacoesDependenciaArmarioObs: this.state.estadoFisicoInstalacoesDependenciaArmarioObs,
			estadoFisicoNormalRalosEsgoto: this.state.estadoFisicoNormalRalosEsgoto,
			estadoFisicoUsadoRalosEsgoto: this.state.estadoFisicoUsadoRalosEsgoto,
			estadoFisicoInstalacoesRalosEsgotoArmarioObs: this.state.estadoFisicoInstalacoesRalosEsgotoArmarioObs,
			estadoFisicoCeramicaNova: this.state.estadoFisicoCeramicaNova,
			estadoFisicoCeramicaUsada: this.state.estadoFisicoCeramicaUsada,
			estadoFisicoCeramicaObs: this.state.estadoFisicoCeramicaObs,
			estadoFisicoAzulejoNova: this.state.estadoFisicoAzulejoNova,
			estadoFisicoAzulejoUsada: this.state.estadoFisicoAzulejoUsada,
			estadoFisicoAzulejoObs: this.state.estadoFisicoAzulejoObs,
			estadoFisicoCimentoNova: this.state.estadoFisicoCimentoNova,
			estadoFisicoCimentoObs: this.state.estadoFisicoCimentoObs,
			estadoFisicoRodapeNova: this.state.estadoFisicoRodapeNova,
			estadoFisicoRodapeUsada: this.state.estadoFisicoRodapeUsada,
			estadoFisicoRodapeObs: this.state.estadoFisicoRodapeObs,
			estadoFisicoRevestimentoNova: this.state.estadoFisicoRevestimentoNova,
			estadoFisicoRevestimentoUsada: this.state.estadoFisicoRevestimentoUsada,
			estadoFisicoRevestimentoObs: this.state.estadoFisicoRevestimentoObs,
			estadoFisicoSoleirasNova: this.state.estadoFisicoSoleirasNova,
			estadoFisicoSoleirasUsada: this.state.estadoFisicoSoleirasUsada,
			estadoFisicoSoleirasObs: this.state.estadoFisicoSoleirasObs,
			estadoFisicoAssoalhoNova: this.state.estadoFisicoAssoalhoNova,
			estadoFisicoAssoalhoObs: this.state.estadoFisicoAssoalhoObs,
			estadoFisicoOutrosPisosNova: this.state.estadoFisicoOutrosPisosNova,
			estadoFisicoOutrosPisosObs: this.state.estadoFisicoOutrosPisosObs,
			estadoFisicoPortasEsquadriasNormal: this.state.estadoFisicoPortasEsquadriasNormal,
			estadoFisicoPortasEsquadriasObs: this.state.estadoFisicoPortasEsquadriasObs,
			estadoFisicoJanelasEsquadriasNormal: this.state.estadoFisicoJanelasEsquadriasNormal,
			estadoFisicoJanelasEsquadriasObs: this.state.estadoFisicoJanelasEsquadriasObs,
			estadoFisicoBasculantesEsquadriasNormal: this.state.estadoFisicoBasculantesEsquadriasNormal,
			estadoFisicoBasculantesEsquadriasObs: this.state.estadoFisicoBasculantesEsquadriasObs,
			estadoFisicoTemArmarios: this.state.estadoFisicoTemArmarios,
			estadoFisicoArmariosObs: this.state.estadoFisicoArmariosObs,
			estadoFisicoQuintalLimpoObs: this.state.estadoFisicoQuintalLimpoObs,
			estadoFisicoJardimTemPlanta: this.state.estadoFisicoJardimTemPlanta,
			estadoFisicoJardimNaoTemPlanta: this.state.estadoFisicoJardimNaoTemPlanta,
			estadoFisicoJardimLimpo: this.state.estadoFisicoJardimLimpo,
			estadoFisicoJardimObs: this.state.estadoFisicoJardimObs,
			estadoFisicoTorneiraDePlastico: this.state.estadoFisicoTorneiraDePlastico,
			estadoFisicoTorneiraDeMetal: this.state.estadoFisicoTorneiraDeMetal,
			estadoFisicoTorneiraObs: this.state.estadoFisicoTorneiraObs,
			estadoFisicoPortaJanelaBasculanteNormal: this.state.estadoFisicoPortaJanelaBasculanteNormal,
			estadoFisicoPortaJanelaBasculanteObs: this.state.estadoFisicoPortaJanelaBasculanteObs,
			estadoFisicoPinturaPortoesNova: this.state.estadoFisicoPinturaPortoesNova,
			estadoFisicoPinturaPortoesVelha: this.state.estadoFisicoPinturaPortoesVelha,
			estadoFisicoPinturaPortoesConservada: this.state.estadoFisicoPinturaPortoesConservada,
			estadoFisicoPinturasPortoesExternoObs: this.state.estadoFisicoPinturasPortoesExternoObs,
			estadoFisicoPinturasPortoesternoObs: this.state.estadoFisicoPinturasPortoesternoObs,
			estadoFisicoGradeImovelObs: this.state.estadoFisicoGradeImovelObs,
			estadoFisicoCaixaArCondicionadoObs: this.state.estadoFisicoCaixaArCondicionadoObs,
			estadoFisicoInstalacaoSplitObs: this.state.estadoFisicoInstalacaoSplitObs,
			estadoFisicoInstalacaoSplitSim: this.state.estadoFisicoInstalacaoSplitSim,
			estadoFisicoCadeadosObs: this.state.estadoFisicoCadeadosObs,
			estadoFisicoArmadoresObs: this.state.estadoFisicoArmadoresObs,
			estadoFisicoObservacoesGeraisObs: this.state.estadoFisicoObservacoesGeraisObs,
			formId: formId
		}
		return vistoria
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
				<View flex={8}>
					<ScrollView>
						<View style={{ padding: 16 }}>
							{/*TIPO VISTORÍA*/}
							<Text style={styles.h1}>1.0 - INFORMAÇÕES DO IMÓVEL:</Text>
							<Text style={styles.h2}>1.1 - TIPO VISTORIA</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.tipoVistoriaLocacao}
									onChange={() => { this.setState({ tipoVistoriaLocacao: !this.state.tipoVistoriaLocacao }) }}
								/>
								<Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Locação</Text>

								<CheckBox
									value={this.state.tipoVistoriaAvaliacao}
									onChange={() => { this.setState({ tipoVistoriaAvaliacao: !this.state.tipoVistoriaAvaliacao }) }}
								/>
								<Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Avaliação</Text>

								<CheckBox
									value={this.state.tipoVistoriaDesocupacao}
									onChange={() => { this.setState({ tipoVistoriaDesocupacao: !this.state.tipoVistoriaDesocupacao }) }}
								/>
								<Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Desocupação</Text>
							</View>

							{/*INFORMAÇÕES DO IMÓVEL*/}
							<Text style={styles.h2}>Locatário</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.locatario}
								onChangeText={text => this.setState({ locatario: text })}
							/>

							<Text style={styles.h2}>Locador</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.locador}
								onChangeText={text => this.setState({ locador: text })}
							/>

							<Text style={styles.h2}>Endereço</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.endereco}
								onChangeText={text => this.setState({ endereco: text })}
							/>

							<Text style={styles.h2}>Bairro</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.bairro}
								onChangeText={text => this.setState({ bairro: text })}
							/>

							<Text style={styles.h2}>Cidade</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.cidade}
								onChangeText={text => this.setState({ cidade: text })}
							/>

							<Text style={styles.h2}>UF</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.uf}
								onChangeText={text => this.setState({ uf: text })}
							/>

							{/*TIPO DE IMÓVEL*/}
							<Text style={styles.h2}>Tipo de Imóvel</Text>

							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.tipoImovelCasa}
									onChange={() => { this.setState({ tipoImovelCasa: !this.state.tipoImovelCasa }) }}
								/>
								<Text>Casa</Text>

								<CheckBox
									value={this.state.tipoImovelApartamento}
									onChange={() => { this.setState({ tipoImovelApartamento: !this.state.tipoImovelApartamento }) }}
								/>
								<Text>Apartamento</Text>

								<CheckBox
									value={this.state.tipoImovelPontoComercial}
									onChange={() => { this.setState({ tipoImovelPontoComercial: !this.state.tipoImovelPontoComercial }) }}
								/>
								<Text>Ponto Comercial</Text>

							</View>

							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.tipoImovelSitio}
									onChange={() => { this.setState({ tipoImovelSitio: !this.state.tipoImovelSitio }) }}
								/>
								<Text>Sitio</Text>

								<CheckBox
									value={this.state.tipoImovelTerreno}
									onChange={() => { this.setState({ tipoImovelTerreno: !this.state.tipoImovelTerreno }) }}
								/>
								<Text>Terreno</Text>
							</View>

							{/*SITUAÇÃO ATUAL DO IMÓVEL*/}
							<Text style={styles.h2}>2.0 - Situação Atual do Imóvel</Text>


							<Text>Nº Locação</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.situacaoN}
								onChangeText={text => this.setState({ situacaoN: text })}
							/>
							{/**adicionar o campo de data */}
							<Text>Data da vistoria</Text>
							<View
								style={{ flexDirection: 'row', alignItems: 'center' }}>
								<TextInput
									style={styles.borderInput}
									flex={1}
									maxLength={2}
									placeholder={'DD'}
									value={this.state.situacaoDataDia}
									onChangeText={text => this.setState({ situacaoDataDia: text })}
									keyboardType='numeric'
								/>
								<Text style={{ fontSize: 24 }}>/</Text>
								<TextInput
									style={styles.borderInput}
									flex={1}
									maxLength={2}
									placeholder={'MM'}
									value={this.state.situacaoDataMes}
									onChangeText={text => this.setState({ situacaoDataMes: text })}
									keyboardType='numeric'
								/>

								<Text style={{ fontSize: 24 }}>/</Text>
								<TextInput
									style={styles.borderInput}
									flex={2}
									maxLength={4}
									placeholder={'AAAA'}
									value={this.state.situacaoDataAno}
									onChangeText={text => this.setState({ situacaoDataAno: text })}
									keyboardType='numeric'
								/>

							</View>



							<Text style={styles.h2}>2.2 - FORNECIMENTOS</Text>
							<Text style={styles.h2}>--Água:--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.temFornecimentoAgua}
									onChange={() => { this.setState({ temFornecimentoAgua: !this.state.temFornecimentoAgua }) }}
								/>
								<Text>Ligada</Text>

								<CheckBox
									value={!this.state.temFornecimentoAgua}
									onChange={() => { this.setState({ temFornecimentoAgua: !this.state.temFornecimentoAgua }) }}
								/>
								<Text>Desligada</Text>
							</View>

							<Text style={styles.h2}>--Energia:--</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.temFornecimentoEnergia}
									onChange={() => { this.setState({ temFornecimentoEnergia: !this.state.temFornecimentoEnergia }) }}
								/>
								<Text>Ligada</Text>

								<CheckBox
									value={!this.state.temFornecimentoEnergia}
									onChange={() => { this.setState({ temFornecimentoEnergia: !this.state.temFornecimentoEnergia }) }}
								/>
								<Text>Desligada</Text>
							</View>

							<Text style={styles.h2}>2.3 - MEDIDORES</Text>
							<Text style={styles.h2}>--Equatorial--</Text>

							<Text>Medidor Nº</Text>
							<TextInput
								style={styles.borderInput}
								onChangeText={text => this.setState({ situacaoMedidorNEquatorial: text })}
							/>

							<Text>Leitura Nº</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.situacaoLeituraEquatorial}
								onChangeText={text => this.setState({ situacaoLeituraEquatorial: text })}
							/>

							<Text>Lacres</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.situacaoMedidorEquatorial}
									onChange={() => { this.setState({ situacaoMedidorEquatorial: !this.state.situacaoMedidorEquatorial }) }}
								/>
								<Text>Medidor</Text>

								<CheckBox
									value={this.state.situacaoTampaEquatorial}
									onChange={() => { this.setState({ situacaoTampaEquatorial: !this.state.situacaoTampaEquatorial }) }}
								/>
								<Text>Tampa (cx)</Text>
							</View>

							<Text style={styles.h2}>--Águas de Teresina--</Text>

							<Text>Medidor Nº</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.situacaoMedidorNAguas}
								onChangeText={text => this.setState({ situacaoMedidorNAguas: text })}
							/>

							<Text>Leitura Nº</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.situacaoLeituraAguas}
								onChangeText={text => this.setState({ situacaoLeituraAguas: text })}
							/>

							<Text>Lacres</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.situacaoMedidorAguas}
									onChange={() => { this.setState({ situacaoMedidorAguas: !this.state.situacaoMedidorAguas }) }}
								/>
								<Text>Medidor</Text>

								<CheckBox
									value={this.state.situacaoTampaAguas}
									onChange={() => { this.setState({ situacaoTampaAguas: !this.state.situacaoTampaAguas }) }}
								/>
								<Text>Tampa (cx)</Text>
							</View>

							<Text style={styles.h2}>--Gás--</Text>

							<Text>Medidor Nº</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.situacaoMedidorNGas}
								onChangeText={text => this.setState({ situacaoMedidorNGas: text })}
							/>

							<Text>Leitura Nº</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.situacaoLeituraGas}
								onChangeText={text => this.setState({ situacaoLeituraGas: text })}
							/>

							<Text>Lacres</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.situacaoMedidorGas}
									onChange={() => { this.setState({ situacaoMedidorGas: !this.state.situacaoMedidorGas }) }}
								/>
								<Text>Medidor</Text>

								<CheckBox
									value={this.state.situacaoTampaGas}
									onChange={() => { this.setState({ situacaoTampaGas: !this.state.situacaoTampaGas }) }}
								/>
								<Text>Tampa (cx)</Text>
							</View>

							<Text style={styles.h2}>2.4 Imóvel foi retalhado?</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.situacaoImovelRetalhado}
									onChange={() => { this.setState({ situacaoImovelRetalhado: !this.state.situacaoImovelRetalhado }) }}
								/>
								<Text>Sim</Text>

								<CheckBox
									value={!this.state.situacaoImovelRetalhado}
									onChange={() => { this.setState({ situacaoImovelRetalhado: !this.state.situacaoImovelRetalhado }) }}
								/>
								<Text>Não</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.situacaoImovelRetalhadoObs}
								onChangeText={text => this.setState({ situacaoImovelRetalhadoObs: text })}
							/>
							{/*ESTADO FÍSICO DO IMÓVEL*/}
							<Text style={styles.h1}>3.0 - Estado Físico do Imóvel</Text>

							<Text style={styles.h2}>3.1 - PINTURA EXTERNA</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaExNova}
									onChange={() => { this.setState({ estadoFisicoPinturaExNova: !this.state.estadoFisicoPinturaExNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaExConservada}
									onChange={() => { this.setState({ estadoFisicoPinturaExConservada: !this.state.estadoFisicoPinturaExConservada }) }}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaExVelha}
									onChange={() => { this.setState({ estadoFisicoPinturaExVelha: !this.state.estadoFisicoPinturaExVelha }) }}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPinturaExObs}
								onChangeText={text => this.setState({ estadoFisicoPinturaExObs: text })}
							/>

							<Text style={styles.h2}>3.2 - PINTURA INTERNA</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaInNova}
									onChange={() => { this.setState({ estadoFisicoPinturaInNova: !this.state.estadoFisicoPinturaInNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaInConservada}
									onChange={() => { this.setState({ estadoFisicoPinturaInConservada: !this.state.estadoFisicoPinturaInConservada }) }}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaInVelha}
									onChange={() => { this.setState({ estadoFisicoPinturaInVelha: !this.state.estadoFisicoPinturaInVelha }) }}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPinturaInObs}
								onChangeText={text => this.setState({ estadoFisicoPinturaInObs: text })}
							/>

							<Text style={styles.h2}>3.3 - PINTURA FORRO/LAJE</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaFoNova}
									onChange={() => { this.setState({ estadoFisicoPinturaFoNova: !this.state.estadoFisicoPinturaFoNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaFoConservada}
									onChange={() => { this.setState({ estadoFisicoPinturaFoConservada: !this.state.estadoFisicoPinturaFoConservada }) }}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaFoVelha}
									onChange={() => { this.setState({ estadoFisicoPinturaFoVelha: !this.state.estadoFisicoPinturaFoVelha }) }}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPinturaFoObs}
								onChangeText={text => this.setState({ estadoFisicoPinturaFoObs: text })}
							/>

							<Text style={styles.h2}>3.4 - PINTURA FORRO/GESSO</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaGeNova}
									onChange={() => { this.setState({ estadoFisicoPinturaGeNova: !this.state.estadoFisicoPinturaGeNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaGeConservada}
									onChange={() => { this.setState({ estadoFisicoPinturaGeConservada: !this.state.estadoFisicoPinturaGeConservada }) }}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaGeVelha}
									onChange={() => { this.setState({ estadoFisicoPinturaGeVelha: !this.state.estadoFisicoPinturaGeVelha }) }}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPinturaGeObs}
								onChangeText={text => this.setState({ estadoFisicoPinturaGeObs: text })}
							/>

							<Text style={styles.h2}>3.5 - FORRO/PVC/MADEIRA</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaPvcNova}
									onChange={() => { this.setState({ estadoFisicoPinturaPvcNova: !this.state.estadoFisicoPinturaPvcNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaPvcConservada}
									onChange={() => { this.setState({ estadoFisicoPinturaPvcConservada: !this.state.estadoFisicoPinturaPvcConservada }) }}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaPvcVelha}
									onChange={() => { this.setState({ estadoFisicoPinturaPvcVelha: !this.state.estadoFisicoPinturaPvcVelha }) }}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPinturaPvcObs}
								onChangeText={text => this.setState({ estadoFisicoPinturaPvcObs: text })}
							/>

							<Text style={styles.h2}>3.6 - PINTURAS PORTAS/MADEIRA</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaPortaMadeiraNova}
									onChange={() => { this.setState({ estadoFisicoPinturaPortaMadeiraNova: !this.state.estadoFisicoPinturaPortaMadeiraNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaPortaMadeiraConservada}
									onChange={() => { this.setState({ estadoFisicoPinturaPortaMadeiraConservada: !this.state.estadoFisicoPinturaPortaMadeiraConservada }) }}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaPortaMadeiraVelha}
									onChange={() => { this.setState({ estadoFisicoPinturaPortaMadeiraVelha: !this.state.estadoFisicoPinturaPortaMadeiraVelha }) }}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPinturaPortaMadeiraObs}
								onChangeText={text => this.setState({ estadoFisicoPinturaPortaMadeiraObs: text })}
							/>

							<Text style={styles.h2}>3.7 - PINTURAS JANELAS/MADEIRA</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaJanelaMadeiraNova}
									onChange={() => { this.setState({ estadoFisicoPinturaJanelaMadeiraNova: !this.state.estadoFisicoPinturaJanelaMadeiraNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaJanelaMadeiraConservada}
									onChange={() => { this.setState({ estadoFisicoPinturaJanelaMadeiraConservada: !this.state.estadoFisicoPinturaJanelaMadeiraConservada }) }}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaJanelaMadeiraVelha}
									onChange={() => { this.setState({ estadoFisicoPinturaJanelaMadeiraVelha: !this.state.estadoFisicoPinturaJanelaMadeiraVelha }) }}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPinturaJanelaMadeiraObs}
								onChangeText={text => this.setState({ estadoFisicoPinturaJanelaMadeiraObs: text })}
							/>

							<Text style={styles.h2}>3.8 - PINTURAS PORTAS/FERRO</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaPortasFerroNova}
									onChange={() => { this.setState({ estadoFisicoPinturaPortasFerroNova: !this.state.estadoFisicoPinturaPortasFerroNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaPortasFerroConservada}
									onChange={() => { this.setState({ estadoFisicoPinturaPortasFerroConservada: !this.state.estadoFisicoPinturaPortasFerroConservada }) }}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaPortasFerroVelha}
									onChange={() => { this.setState({ estadoFisicoPinturaPortasFerroVelha: !this.state.estadoFisicoPinturaPortasFerroVelha }) }}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPinturaPortasFerroObs}
								onChangeText={text => this.setState({ estadoFisicoPinturaPortasFerroObs: text })}
							/>

							<Text style={styles.h2}>3.9 - PINTURAS JANELAS/FERRO</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaJanelasFerroNova}
									onChange={() => { this.setState({ estadoFisicoPinturaJanelasFerroNova: !this.state.estadoFisicoPinturaJanelasFerroNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaJanelasFerroConservada}
									onChange={() => { this.setState({ estadoFisicoPinturaJanelasFerroConservada: !this.state.estadoFisicoPinturaJanelasFerroConservada }) }}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaJanelasFerroVelha}
									onChange={() => { this.setState({ estadoFisicoPinturaJanelasFerroVelha: !this.state.estadoFisicoPinturaJanelasFerroVelha }) }}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPinturaJanelasFerroObs}
								onChangeText={text => this.setState({ estadoFisicoPinturaJanelasFerroObs: text })}
							/>

							<Text style={styles.h2}>3.10 -PINTURA DO MURO</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaMuroNova}
									onChange={() => { this.setState({ estadoFisicoPinturaMuroNova: !this.state.estadoFisicoPinturaMuroNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaMuroConservada}
									onChange={() => { this.setState({ estadoFisicoPinturaMuroConservada: !this.state.estadoFisicoPinturaMuroConservada }) }}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoPinturaMuroVelha}
									onChange={() => { this.setState({ estadoFisicoPinturaMuroVelha: !this.state.estadoFisicoPinturaMuroVelha }) }}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPinturaMuroObs}
								onChangeText={text => this.setState({ estadoFisicoPinturaMuroObs: text })}
							/>

							<Text style={styles.h2}>3.11 - REBOCO</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoRebocoNova}
									onChange={() => { this.setState({ estadoFisicoRebocoNova: !this.state.estadoFisicoRebocoNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoRebocoConservada}
									onChange={() => { this.setState({ estadoFisicoRebocoConservada: !this.state.estadoFisicoRebocoConservada }) }}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoRebocoVelha}
									onChange={() => { this.setState({ estadoFisicoRebocoVelha: !this.state.estadoFisicoRebocoVelha }) }}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoRebocoObs}
								onChangeText={text => this.setState({ estadoFisicoRebocoObs: text })}
							/>

							<Text style={styles.h2}>3.12 - QUANTIDADE DE CHAVES DO IMÓVEL</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoQtdChavesNova}
									onChange={() => { this.setState({ estadoFisicoQtdChavesNova: !this.state.estadoFisicoQtdChavesNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoQtdChavesConservada}
									onChange={() => { this.setState({ estadoFisicoQtdChavesConservada: !this.state.estadoFisicoQtdChavesConservada }) }}
								/>
								<Text>Conservada</Text>

								<CheckBox
									value={this.state.estadoFisicoQtdChavesVelha}
									onChange={() => { this.setState({ estadoFisicoQtdChavesVelha: !this.state.estadoFisicoQtdChavesVelha }) }}
								/>
								<Text>Velha</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoQtdChavesObs}
								onChangeText={text => this.setState({ estadoFisicoQtdChavesObs: text })}
							/>

							{/*ESTADO FÍSICO DO IMÓVEL*/}
							<Text style={styles.h1}>4.0 - Instalações Elétricas</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesObs: text })}
							/>

							<Text style={styles.h2}>4.1 - Caixa para disjuntor</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoCaixaDisjuntorObs}
								onChangeText={text => this.setState({ estadoFisicoCaixaDisjuntorObs: text })}
							/>

							<Text style={styles.h2}>4.2 - CAMPAINHA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoCampainhaObs}
								onChangeText={text => this.setState({ estadoFisicoCampainhaObs: text })}
							/>

							<Text style={styles.h2}>4.3 - INTERFONE</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInterfoneObs}
								onChangeText={text => this.setState({ estadoFisicoInterfoneObs: text })}
							/>

							<Text style={styles.h2}>4.4 - LÂMPADAS COMUNS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoLampadasComunsObs}
								onChangeText={text => this.setState({ estadoFisicoLampadasComunsObs: text })}
							/>

							<Text style={styles.h2}>4.5 - LÂMPADAS FLUORESCENTES</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoLampadasFluorescentesObs}
								onChangeText={text => this.setState({ estadoFisicoLampadasFluorescentesObs: text })}
							/>

							<Text style={styles.h2}>4.6 - LÂMPADAS DICRÓICAS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoLampadasDicroicasObs}
								onChangeText={text => this.setState({ estadoFisicoLampadasDicroicasObs: text })}
							/>

							<Text style={styles.h2}>4.7 - PL FLUORESCENTES COMPRIDA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPLFluorescentesCompridaObs}
								onChangeText={text => this.setState({ estadoFisicoPLFluorescentesCompridaObs: text })}
							/>

							<Text style={styles.h2}>4.8 - PL FLUORESCENTES REDONDA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPLFluorescentesRedondaObs}
								onChangeText={text => this.setState({ estadoFisicoPLFluorescentesRedondaObs: text })}
							/>

							<Text style={styles.h2}>4.9 - TOMADAS COMUNS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoTomadasComunsObs}
								onChangeText={text => this.setState({ estadoFisicoTomadasComunsObs: text })}
							/>

							<Text style={styles.h2}>4.10 - TOMADAS TELEFONE</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoTomadasTelefoneObs}
								onChangeText={text => this.setState({ estadoFisicoTomadasTelefoneObs: text })}
							/>

							<Text style={styles.h2}>4.11 - INTERRUPTORES</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInterruptoresObs}
								onChangeText={text => this.setState({ estadoFisicoInterruptoresObs: text })}
							/>

							<Text style={styles.h2}>4.12 - LUMINÁRIAS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoLuminariasObs}
								onChangeText={text => this.setState({ estadoFisicoLuminariasObs: text })}
							/>

							<Text style={styles.h2}>4.13 - LUSTRES</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoLustresObs}
								onChangeText={text => this.setState({ estadoFisicoLustresObs: text })}
							/>

							<Text style={styles.h2}>4.14 - GLOBOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoGlobosObs}
								onChangeText={text => this.setState({ estadoFisicoGlobosObs: text })}
							/>

							<Text style={styles.h2}>4.15 - SPOTS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoSpotsObs}
								onChangeText={text => this.setState({ estadoFisicoSpotsObs: text })}
							/>

							<Text style={styles.h2}>4.16 - BOCAIS PLAFON</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoBocaisPlafonObs}
								onChangeText={text => this.setState({ estadoFisicoBocaisPlafonObs: text })}
							/>

							<Text style={styles.h2}>4.17 - CERCA ELÉTRICA</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoTemCerca}
									onChange={() => { this.setState({ estadoFisicoTemCerca: !this.state.estadoFisicoTemCerca }) }}
								/>
								<Text>Sim</Text>

								<CheckBox
									value={!this.state.estadoFisicoTemCerca}
									onChange={() => { this.setState({ estadoFisicoTemCerca: !this.state.estadoFisicoTemCerca }) }}
								/>
								<Text>Não</Text>

								<CheckBox
									value={this.state.estadoFisicoCercaResidencialVelha}
									onChange={() => { this.setState({ estadoFisicoCercaResidencialVelha: !this.state.estadoFisicoCercaResidencialVelha }) }}
								/>
								<Text>Residencial</Text>

								<CheckBox
									value={this.state.estadoFisicoCercaIndustrialVelha}
									onChange={() => { this.setState({ estadoFisicoCercaIndustrialVelha: !this.state.estadoFisicoCercaIndustrialVelha }) }}
								/>
								<Text>Industrial</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoCercaEletricaObs}
								onChangeText={text => this.setState({ estadoFisicoCercaEletricaObs: text })}
							/>

							<Text style={styles.h1}>5.0 - Instalações Hidráulicas e Sanitárias</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesHidroSaniObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesHidroSaniObs: text })}
							/>

							<Text style={styles.h2}>5.1 - REGISTROS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesHidroSaniRegistroObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesHidroSaniRegistroObs: text })}
							/>

							<Text style={styles.h2}>5.2 - PIA COZINHA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesHidroSaniPiaCozinhaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesHidroSaniPiaCozinhaObs: text })}
							/>

							<Text style={styles.h2}>5.3 - TORNEIRA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesHidroSaniTorneiraObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesHidroSaniTorneiraObs: text })}
							/>

							<Text style={styles.h1}>ÁREA INTERNA</Text>

							<Text style={styles.h2}>5.4 - PIA LAVANDEIRA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesHidroSaniPiaLavanObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesHidroSaniPiaLavanObs: text })}
							/>

							<Text style={styles.h2}>5.5 - TORNEIRA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesHidroSaniTorneiraInternaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesHidroSaniTorneiraInternaObs: text })}
							/>

							<Text style={styles.h1}>ÁREA EXTERNA</Text>

							<Text style={styles.h2}>5.6 - PIA LAVANDEIRA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesHidroSaniPiaLavanExternaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesHidroSaniPiaLavanExternaObs: text })}
							/>

							<Text style={styles.h2}>5.7 - TORNEIRA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesHidroSaniTorneiraExternaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesHidroSaniTorneiraExternaObs: text })}
							/>

							<Text style={styles.h2}>5.8 - PISCINA</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoTemPiscina}
									onChange={() => { this.setState({ estadoFisicoTemPiscina: !this.state.estadoFisicoTemPiscina }) }}
								/>
								<Text>Sim</Text>

								<CheckBox
									value={!this.state.estadoFisicoTemPiscina}
									onChange={() => { this.setState({ estadoFisicoTemPiscina: !this.state.estadoFisicoTemPiscina }) }}
								/>
								<Text>Não</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesHidroSaniPiscinaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesHidroSaniPiscinaObs: text })}
							/>

							<Text style={styles.h1}>LAVABO</Text>

							<Text style={styles.h2}>5.9 - ACESSÓRIOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesLavaboAcessoriosObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesLavaboAcessoriosObs: text })}
							/>

							<Text style={styles.h2}>5.10 - ESPELHO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesLavaboEspelhoObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesLavaboEspelhoObs: text })}
							/>

							<Text style={styles.h2}>5.11 - BOX</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesLavaboBoxObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesLavaboBoxObs: text })}
							/>

							<Text style={styles.h2}>5.12 - PIA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesLavaboPiaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesLavaboPiaObs: text })}
							/>

							<Text style={styles.h2}>5.13 - DUCHA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesLavaboDuchaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesLavaboDuchaObs: text })}
							/>

							<Text style={styles.h2}>5.14- DESCARGA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesLavaboDescargaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesLavaboDescargaObs: text })}
							/>

							<Text style={styles.h2}>5.15 - SANITÁRIO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesLavaboSanitarioObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesLavaboSanitarioObs: text })}
							/>

							<Text style={styles.h2}>5.16 - ASSENTO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesLavaboAssentoObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesLavaboAssentoObs: text })}
							/>

							<Text style={styles.h2}>5.17 - TORNEIRA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesLavaboTorneiraObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesLavaboTorneiraObs: text })}
							/>

							<Text style={styles.h2}>5.18 - ARMÁRIOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesLavaboArmarioObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesLavaboArmarioObs: text })}
							/>

							<Text style={styles.h1}>BANHEIRO SOCIAL</Text>

							<Text style={styles.h2}>5.19 - ACESSÓRIOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesBanheiroSocialAcessoriosObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesBanheiroSocialAcessoriosObs: text })}
							/>

							<Text style={styles.h2}>5.20 - ESPELHO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesBanheiroSocialEspelhoObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesBanheiroSocialEspelhoObs: text })}
							/>

							<Text style={styles.h2}>5.21 - BOX</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesBanheiroSocialBoxObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesBanheiroSocialBoxObs: text })}
							/>

							<Text style={styles.h2}>5.22 - PIA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesBanheiroSocialPiaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesBanheiroSocialPiaObs: text })}
							/>

							<Text style={styles.h2}>5.23 - DUCHA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesBanheiroSocialDuchaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesBanheiroSocialDuchaObs: text })}
							/>

							<Text style={styles.h2}>5.24 - DESCARGA-</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesBanheiroSocialDescargaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesBanheiroSocialDescargaObs: text })}
							/>

							<Text style={styles.h2}>5.25 - SANITÁRIO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesBanheiroSocialSanitarioObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesBanheiroSocialSanitarioObs: text })}
							/>

							<Text style={styles.h2}>5.26 - ASSENTO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesBanheiroSocialAssentoObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesBanheiroSocialAssentoObs: text })}
							/>

							<Text style={styles.h2}>5.27- TORNEIRA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesBanheiroSocialTorneiraObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesBanheiroSocialTorneiraObs: text })}
							/>

							<Text style={styles.h2}>5.28 - ARMÁRIOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesBanheiroSocialArmarioObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesBanheiroSocialArmarioObs: text })}
							/>

							<Text style={styles.h1}>SUÍTE 01</Text>

							<Text style={styles.h2}>5.29 - ACESSÓRIOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite01AcessoriosObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite01AcessoriosObs: text })}
							/>

							<Text style={styles.h2}>5.30 - ESPELHO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite01EspelhoObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite01EspelhoObs: text })}
							/>

							<Text style={styles.h2}>5.31 - BOX</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite01BoxObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite01BoxObs: text })}
							/>

							<Text style={styles.h2}>5.32 - PIA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite01PiaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite01PiaObs: text })}
							/>

							<Text style={styles.h2}>5.33 - DUCHA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite01DuchaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite01DuchaObs: text })}
							/>

							<Text style={styles.h2}>5.34 - DESCARGA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite01DescargaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite01DescargaObs: text })}
							/>

							<Text style={styles.h2}>5.35 - SANITÁRIO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite01SanitarioObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite01SanitarioObs: text })}
							/>

							<Text style={styles.h2}>5.36 - ASSENTO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite01AssentoObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite01AssentoObs: text })}
							/>

							<Text style={styles.h2}>5.37 - TORNEIRA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite01TorneiraObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite01TorneiraObs: text })}
							/>

							<Text style={styles.h2}>5.38 - ARMÁRIOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite01ArmarioObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite01ArmarioObs: text })}
							/>

							<Text style={styles.h1}>SUÍTE 02</Text>

							<Text style={styles.h2}>5.39 - ACESSÓRIOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite02AcessoriosObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite02AcessoriosObs: text })}
							/>

							<Text style={styles.h2}>5.40 - ESPELHO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite02EspelhoObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite02EspelhoObs: text })}
							/>

							<Text style={styles.h2}>5.41 - BOX</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite02BoxObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite02BoxObs: text })}
							/>

							<Text style={styles.h2}>5.42 - PIA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite02PiaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite02PiaObs: text })}
							/>

							<Text style={styles.h2}>5.43 - DUCHA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite02DuchaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite02DuchaObs: text })}
							/>

							<Text style={styles.h2}>5.44 - DESCARGA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite02DescargaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite02DescargaObs: text })}
							/>

							<Text style={styles.h2}>5.45 - SANITÁRIO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite02SanitarioObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite02SanitarioObs: text })}
							/>

							<Text style={styles.h2}>5.46 - ASSENTO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite02AssentoObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite02AssentoObs: text })}
							/>

							<Text style={styles.h2}>5.47 - TORNEIRA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite02TorneiraObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite02TorneiraObs: text })}
							/>

							<Text style={styles.h2}>5.48 - ARMÁRIOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite02ArmarioObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite02ArmarioObs: text })}
							/>

							<Text style={styles.h1}>SUÍTE 03</Text>

							<Text style={styles.h2}>5.49 - ACESSÓRIOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite03AcessoriosObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite03AcessoriosObs: text })}
							/>

							<Text style={styles.h2}>5.50 - ESPELHO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite03EspelhoObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite03EspelhoObs: text })}
							/>

							<Text style={styles.h2}>5.51 - BOX</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite03BoxObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite03BoxObs: text })}
							/>

							<Text style={styles.h2}>5.52 - PIA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite03PiaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite03PiaObs: text })}
							/>

							<Text style={styles.h2}>5.53 - DUCHA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite03DuchaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite03DuchaObs: text })}
							/>

							<Text style={styles.h2}>5.54 - DESCARGA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite03DescargaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite03DescargaObs: text })}
							/>

							<Text style={styles.h2}>5.55 - SANITÁRIO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite03SanitarioObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite03SanitarioObs: text })}
							/>

							<Text style={styles.h2}>5.56 - ASSENTO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite03AssentoObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite03AssentoObs: text })}
							/>

							<Text style={styles.h2}>5.57 - TORNEIRA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite03TorneiraObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite03TorneiraObs: text })}
							/>

							<Text style={styles.h2}>5.58 - ARMÁRIOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesSuite03ArmarioObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesSuite03ArmarioObs: text })}
							/>

							<Text style={styles.h1}>DEPENDÊNCIA DE EMPREGADO(A)</Text>

							<Text style={styles.h2}>5.59 - ACESSÓRIOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesDependenciaAcessoriosObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesDependenciaAcessoriosObs: text })}
							/>

							<Text style={styles.h2}>5.60 - ESPELHO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesDependenciaEspelhoObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesDependenciaEspelhoObs: text })}
							/>

							<Text style={styles.h2}>5.61 - BOX</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesDependenciaBoxObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesDependenciaBoxObs: text })}
							/>

							<Text style={styles.h2}>5.62 - PIA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesDependenciaPiaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesDependenciaPiaObs: text })}
							/>

							<Text style={styles.h2}>5.63 - DUCHA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesDependenciaDuchaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesDependenciaDuchaObs: text })}
							/>

							<Text style={styles.h2}>5.64 - DESCARGA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesDependenciaDescargaObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesDependenciaDescargaObs: text })}
							/>

							<Text style={styles.h2}>5.65 - SANITÁRIO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesDependenciaSanitarioObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesDependenciaSanitarioObs: text })}
							/>

							<Text style={styles.h2}>5.66 - ASSENTO</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesDependenciaAssentoObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesDependenciaAssentoObs: text })}
							/>

							<Text style={styles.h2}>5.67 - TORNEIRA</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesDependenciaTorneiraObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesDependenciaTorneiraObs: text })}
							/>

							<Text style={styles.h2}>5.68 - ARMÁRIOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesDependenciaArmarioObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesDependenciaArmarioObs: text })}
							/>

							<Text style={styles.h2}>5.69 - RALOS DE ESGOTO</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoNormalRalosEsgoto}
									onChange={() => { this.setState({ estadoFisicoNormalRalosEsgoto: !this.state.estadoFisicoNormalRalosEsgoto }) }}
								/>
								<Text>Normal</Text>

								<CheckBox
									value={!this.state.estadoFisicoConservadoRalosEsgoto}
									onChange={() => { this.setState({ estadoFisicoConservadoRalosEsgoto: !this.state.estadoFisicoConservadoRalosEsgoto }) }}
								/>
								<Text>Conservado</Text>

								<CheckBox
									value={this.state.estadoFisicoUsadoRalosEsgoto}
									onChange={() => { this.setState({ estadoFisicoUsadoRalosEsgoto: !this.state.estadoFisicoUsadoRalosEsgoto }) }}
								/>
								<Text>Usado</Text>
							</View>

							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacoesRalosEsgotoArmarioObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacoesRalosEsgotoArmarioObs: text })}
							/>

							<Text style={styles.h1}>6.0 - Pisos</Text>

							<Text style={styles.h2}>6.1 - CERÂMICA</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoCeramicaNova}
									onChange={() => { this.setState({ estadoFisicoCeramicaNova: !this.state.estadoFisicoCeramicaNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={!this.state.estadoFisicoCeramicaUsada}
									onChange={() => { this.setState({ estadoFisicoCeramicaUsada: !this.state.estadoFisicoCeramicaUsada }) }}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoCeramicaObs}
								onChangeText={text => this.setState({ estadoFisicoCeramicaObs: text })}
							/>


							<Text style={styles.h2}>6.2 - AZULEJO</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoAzulejoNova}
									onChange={() => { this.setState({ estadoFisicoAzulejoNova: !this.state.estadoFisicoAzulejoNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={!this.state.estadoFisicoAzulejoUsada}
									onChange={() => { this.setState({ estadoFisicoAzulejoUsada: !this.state.estadoFisicoAzulejoUsada }) }}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoAzulejoObs}
								onChangeText={text => this.setState({ estadoFisicoAzulejoObs: text })}
							/>

							<Text style={styles.h2}>6.3 - CIMENTO</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoCimentoNova}
									onChange={() => { this.setState({ estadoFisicoCimentoNova: !this.state.estadoFisicoCimentoNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={!this.state.estadoFisicoCimentoUsada}
									onChange={() => { this.setState({ estadoFisicoCimentoUsada: !this.state.estadoFisicoCimentoUsada }) }}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoCimentoObs}
								onChangeText={text => this.setState({ estadoFisicoCimentoObs: text })}
							/>

							<Text style={styles.h2}>6.4 - RODAPÉ</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoRodapeNova}
									onChange={() => { this.setState({ estadoFisicoRodapeNova: !this.state.estadoFisicoRodapeNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={!this.state.estadoFisicoRodapeUsada}
									onChange={() => { this.setState({ estadoFisicoRodapeUsada: !this.state.estadoFisicoRodapeUsada }) }}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoRodapeObs}
								onChangeText={text => this.setState({ estadoFisicoRodapeObs: text })}
							/>

							<Text style={styles.h2}>6.5 - REVESTIMENTO</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoRevestimentoNova}
									onChange={() => { this.setState({ estadoFisicoRevestimentoNova: !this.state.estadoFisicoRevestimentoNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoRevestimentoUsada}
									onChange={() => { this.setState({ estadoFisicoRevestimentoUsada: !this.state.estadoFisicoRevestimentoUsada }) }}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoRevestimentoObs}
								onChangeText={text => this.setState({ estadoFisicoRevestimentoObs: text })}
							/>

							<Text style={styles.h2}>6.6 - SOLEIRAS</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoSoleirasNova}
									onChange={() => { this.setState({ estadoFisicoSoleirasNova: !this.state.estadoFisicoSoleirasNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={this.state.estadoFisicoSoleirasUsada}
									onChange={() => { this.setState({ estadoFisicoSoleirasUsada: !this.state.estadoFisicoSoleirasUsada }) }}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoSoleirasObs}
								onChangeText={text => this.setState({ estadoFisicoSoleirasObs: text })}
							/>

							<Text style={styles.h2}>6.7 - ASSOALHO</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoAssoalhoNova}
									onChange={() => { this.setState({ estadoFisicoAssoalhoNova: !this.state.estadoFisicoAssoalhoNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={!this.state.estadoFisicoAssoalhoUsada}
									onChange={() => { this.setState({ estadoFisicoAssoalhoUsada: !this.state.estadoFisicoAssoalhoUsada }) }}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoAssoalhoObs}
								onChangeText={text => this.setState({ estadoFisicoAssoalhoObs: text })}
							/>

							<Text style={styles.h2}>6.8 - OUTROS PISOS</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoOutrosPisosNova}
									onChange={() => { this.setState({ estadoFisicoOutrosPisosNova: !this.state.estadoFisicoOutrosPisosNova }) }}
								/>
								<Text>Nova</Text>

								<CheckBox
									value={!this.state.estadoFisicoOutrosPisosUsada}
									onChange={() => { this.setState({ estadoFisicoOutrosPisosUsada: !this.state.estadoFisicoOutrosPisosUsada }) }}
								/>
								<Text>Usada</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoOutrosPisosObs}
								onChangeText={text => this.setState({ estadoFisicoOutrosPisosObs: text })}
							/>

							<Text style={styles.h1}>7.0 - VIDROS</Text>

							<Text style={styles.h2}>7.1 - PORTAS/ESQUADRIAS</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPortasEsquadriasNormal}
									onChange={() => { this.setState({ estadoFisicoPortasEsquadriasNormal: !this.state.estadoFisicoPortasEsquadriasNormal }) }}
								/>
								<Text>Normal</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPortasEsquadriasObs}
								onChangeText={text => this.setState({ estadoFisicoPortasEsquadriasObs: text })}
							/>

							<Text style={styles.h2}>7.2 - JANELAS/ESQUADRIAS</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoJanelasEsquadriasNormal}
									onChange={() => { this.setState({ estadoFisicoJanelasEsquadriasNormal: !this.state.estadoFisicoJanelasEsquadriasNormal }) }}
								/>
								<Text>Normal</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoJanelasEsquadriasObs}
								onChangeText={text => this.setState({ estadoFisicoJanelasEsquadriasObs: text })}
							/>

							<Text style={styles.h2}>7.3 - BASCULANTES/ESQUADRIAS</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoBasculantesEsquadriasNormal}
									onChange={() => { this.setState({ estadoFisicoBasculantesEsquadriasNormal: !this.state.estadoFisicoBasculantesEsquadriasNormal }) }}
								/>
								<Text>Normal</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoBasculantesEsquadriasObs}
								onChangeText={text => this.setState({ estadoFisicoBasculantesEsquadriasObs: text })}
							/>

							<Text style={styles.h1}>8.0 - ARMÁRIOS EMBUTIDOS</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoTemArmarios}
									onChange={() => { this.setState({ estadoFisicoTemArmarios: !this.state.estadoFisicoTemArmarios }) }}
								/>
								<Text>Sim</Text>
								<CheckBox
									value={!this.state.estadoFisicoTemArmarios}
									onChange={() => { this.setState({ estadoFisicoTemArmarios: !this.state.estadoFisicoTemArmarios }) }}
								/>
								<Text>Não</Text>
							</View>

							<TextInput
								multiline={true}
								style={styles.borderInput}
								value={this.state.estadoFisicoArmariosObs}
								onChangeText={text => this.setState({ estadoFisicoArmariosObs: text })}
							/>

							<Text style={styles.h1}>9.0 - QUINTAL</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoQuintalLimpoObs}
								onChangeText={text => this.setState({ estadoFisicoQuintalLimpoObs: text })}
							/>

							<Text style={styles.h2}>9.1 - JARDIM</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoJardimTemPlanta}
									onChange={() => { this.setState({ estadoFisicoJardimTemPlanta: !this.state.estadoFisicoJardimTemPlanta }) }}
								/>
								<Text>Com Planta</Text>
								<CheckBox
									value={this.state.estadoFisicoJardimNaoTemPlanta}
									onChange={() => { this.setState({ estadoFisicoJardimNaoTemPlanta: !this.state.estadoFisicoJardimNaoTemPlanta }) }}
								/>
								<Text>Sem Planta</Text>
								<CheckBox
									value={this.state.estadoFisicoJardimLimpo}
									onChange={() => { this.setState({ estadoFisicoJardimLimpo: !this.state.estadoFisicoJardimLimpo }) }}
								/>
								<Text>Limpo</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoJardimObs}
								onChangeText={text => this.setState({ estadoFisicoJardimObs: text })}
							/>

							<Text style={styles.h2}>9.2 - TORNEIRA</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoTorneiraDePlastico}
									onChange={() => { this.setState({ estadoFisicoTorneiraDePlastico: !this.state.estadoFisicoTorneiraDePlastico }) }}
								/>
								<Text>De plástico</Text>
								<CheckBox
									value={this.state.estadoFisicoTorneiraDeMetal}
									onChange={() => { this.setState({ estadoFisicoTorneiraDeMetal: !this.state.estadoFisicoTorneiraDeMetal }) }}
								/>
								<Text>De metal</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoTorneiraObs}
								onChangeText={text => this.setState({ estadoFisicoTorneiraObs: text })}
							/>

							<Text style={styles.h1}>10.0 - FECHADURAS/FERROLHOS/DOBRADIÇAS/TRINCOS/CREMONAS</Text>

							<Text style={styles.h2}>10.1 - PORTAS/JANELAS/BASCULANTES</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPortaJanelaBasculanteNormal}
									onChange={() => { this.setState({ estadoFisicoPortaJanelaBasculanteNormal: !this.state.estadoFisicoPortaJanelaBasculanteNormal }) }}
								/>
								<Text>Normal</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPortaJanelaBasculanteObs}
								onChangeText={text => this.setState({ estadoFisicoPortaJanelaBasculanteObs: text })}
							/>

							<Text style={styles.h1}>11.0 - PINTURA/PORTÕES</Text>

							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoPinturaPortoesNova}
									onChange={() => { this.setState({ estadoFisicoPinturaPortoesNova: !this.state.estadoFisicoPinturaPortoesNova }) }}
								/>
								<Text>Nova</Text>
								<CheckBox
									value={this.state.estadoFisicoPinturaPortoesVelha}
									onChange={() => { this.setState({ estadoFisicoPinturaPortoesVelha: !this.state.estadoFisicoPinturaPortoesVelha }) }}
								/>
								<Text>Velha</Text>
								<CheckBox
									value={this.state.estadoFisicoPinturaPortoesConservada}
									onChange={() => { this.setState({ estadoFisicoPinturaPortoesConservada: !this.state.estadoFisicoPinturaPortoesConservada }) }}
								/>
								<Text>Conservada</Text>
							</View>

							<Text style={styles.h2}>11.1 - EXTERNOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPinturasPortoesExternoObs}
								onChangeText={text => this.setState({ estadoFisicoPinturasPortoesExternoObs: text })}
							/>

							<Text style={styles.h2}>11.2 - INTERNOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoPinturasPortoesternoObs}
								onChangeText={text => this.setState({ estadoFisicoPinturasPortoesternoObs: text })}
							/>

							<Text style={styles.h2}>11.3 - GRADE NO IMÓVEL</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoGradeImovelObs}
								onChangeText={text => this.setState({ estadoFisicoGradeImovelObs: text })}
							/>

							<Text style={styles.h1}>12.0 - CAIXA AR CONDICIONADOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoCaixaArCondicionadoObs}
								onChangeText={text => this.setState({ estadoFisicoCaixaArCondicionadoObs: text })}
							/>

							<Text style={styles.h2}>12.1 - INSTALAÇÃO PARA SPLIT</Text>
							<View style={styles.checkBoxContainer}>
								<CheckBox
									value={this.state.estadoFisicoInstalacaoSplitSim}
									onChange={() => { this.setState({ estadoFisicoInstalacaoSplitSim: !this.state.estadoFisicoInstalacaoSplitSim }) }}
								/>
								<Text>Sim</Text>
								<CheckBox
									value={!this.state.estadoFisicoInstalacaoSplitSim}
									onChange={() => { this.setState({ estadoFisicoInstalacaoSplitSim: !this.state.estadoFisicoInstalacaoSplitSim }) }}
								/>
								<Text>Não</Text>
							</View>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoInstalacaoSplitObs}
								onChangeText={text => this.setState({ estadoFisicoInstalacaoSplitObs: text })}
							/>

							<Text style={styles.h1}>13.0 - CADEADOS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoCadeadosObs}
								onChangeText={text => this.setState({ estadoFisicoCadeadosObs: text })}
							/>
							<Text style={styles.h2}>13.1 - ARMADORES</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoArmadoresObs}
								onChangeText={text => this.setState({ estadoFisicoArmadoresObs: text })}
							/>

							<Text style={styles.h2}>14.0 - OBSERVAÇÕES GERAIS</Text>
							<Text>Obs</Text>
							<TextInput
								style={styles.borderInput}
								value={this.state.estadoFisicoObservacoesGeraisObs}
								onChangeText={text => this.setState({ estadoFisicoObservacoesGeraisObs: text })}
							/>
						</View>
					</ScrollView>
				</View>
				<View style={{ flex: 2, height: 120, justifyContent: 'center', padding: 16 }}>
					<TouchableOpacity
						style={{ height: 50, borderRadius: 15, backgroundColor: '#077528', justifyContent: 'center', alignItems: 'center' }}
						onPress={() => {
							let vistoria = this.getDataFromForm()
							if (this.state.edit) {
								let fields = [
									'tipoVistoriaLocacao',
									'tipoVistoriaAvaliacao',
									'tipoVistoriaDesocupacao',
									'locatario',
									'locador',
									'endereco',
									'bairro',
									'cidade',
									'uf',
									'tipoImovelCasa',
									'tipoImovelApartamento',
									'tipoImovelPontoComercial',
									'tipoImovelSitio',
									'tipoImovelTerreno',
									'situacaoN',
									'situacaoDataDia',
									'situacaoDataMes',
									'situacaoDataAno',
									'temFornecimentoAgua',
									'temFornecimentoEnergia',
									'situacaoMedidorNEquatorial',
									'situacaoMedidorNAguas',
									'situacaoMedidorNGas',
									'situacaoLeituraEquatorial',
									'situacaoLeituraAguas',
									'situacaoLeituraGas',
									'estadoFisicoPinturaExObs',
									'estadoFisicoPinturaInObs',
									'situacaoMedidorEquatorial',
									'situacaoMedidorAguas',
									'situacaoMedidorGas',
									'situacaoTampaEquatorial',
									'situacaoTampaAguas',
									'situacaoTampaGas',
									'situacaoImovelRetalhado',
									'situacaoImovelRetalhadoObs',
									'estadoFisicoPinturaExNova',
									'estadoFisicoPinturaExConservada',
									'estadoFisicoPinturaExVelha',
									'estadoFisicoPinturaInNova',
									'estadoFisicoPinturaInConservada',
									'estadoFisicoPinturaInVelha',
									'estadoFisicoPinturaFoNova',
									'estadoFisicoPinturaFoConservada',
									'estadoFisicoPinturaFoVelha',
									'estadoFisicoPinturaFoObs',
									'estadoFisicoPinturaGeNova',
									'estadoFisicoPinturaGeConservada',
									'estadoFisicoPinturaGeVelha',
									'estadoFisicoPinturaGeObs',
									'estadoFisicoPinturaPvcNova',
									'estadoFisicoPinturaPvcConservada',
									'estadoFisicoPinturaPvcVelha',
									'estadoFisicoPinturaPvcObs',
									'estadoFisicoPinturaPortaMadeiraNova',
									'estadoFisicoPinturaPortaMadeiraConservada',
									'estadoFisicoPinturaPortaMadeiraVelha',
									'estadoFisicoPinturaPortaMadeiraObs',
									'estadoFisicoPinturaJanelaMadeiraNova',
									'estadoFisicoPinturaJanelaMadeiraConservada',
									'estadoFisicoPinturaJanelaMadeiraVelha',
									'estadoFisicoPinturaJanelaMadeiraObs',
									'estadoFisicoPinturaPortasFerroNova',
									'estadoFisicoPinturaPortasFerroConservada',
									'estadoFisicoPinturaPortasFerroVelha',
									'estadoFisicoPinturaPortasFerroObs',
									'estadoFisicoPinturaJanelasFerroNova',
									'estadoFisicoPinturaJanelasFerroConservada',
									'estadoFisicoPinturaJanelasFerroVelha',
									'estadoFisicoPinturaJanelasFerroObs',
									'estadoFisicoPinturaMuroNova',
									'estadoFisicoPinturaMuroConservada',
									'estadoFisicoPinturaMuroVelha',
									'estadoFisicoPinturaMuroObs',
									'estadoFisicoRebocoNova',
									'estadoFisicoRebocoConservada',
									'estadoFisicoRebocoVelha',
									'estadoFisicoRebocoObs',
									'estadoFisicoQtdChavesNova',
									'estadoFisicoQtdChavesConservada',
									'estadoFisicoQtdChavesVelha',
									'estadoFisicoQtdChavesObs',
									'estadoFisicoInstalacoesObs',
									'estadoFisicoCaixaDisjuntorObs',
									'estadoFisicoCampainhaObs',
									'estadoFisicoInterfoneObs',
									'estadoFisicoLampadasComunsObs',
									'estadoFisicoLampadasFluorescentesObs',
									'estadoFisicoLampadasDicroicasObs',
									'estadoFisicoPLFluorescentesCompridaObs',
									'estadoFisicoPLFluorescentesRedondaObs',
									'estadoFisicoTomadasComunsObs',
									'estadoFisicoTomadasTelefoneObs',
									'estadoFisicoInterruptoresObs',
									'estadoFisicoLuminariasObs',
									'estadoFisicoLustresObs',
									'estadoFisicoGlobosObs',
									'estadoFisicoSpotsObs',
									'estadoFisicoBocaisPlafonObs',
									'estadoFisicoTemCerca',
									'estadoFisicoCercaResidencialVelha',
									'estadoFisicoCercaIndustrialVelha',
									'estadoFisicoCercaEletricaObs',
									'estadoFisicoInstalacoesHidroSaniObs',
									'estadoFisicoInstalacoesHidroSaniRegistroObs',
									'estadoFisicoInstalacoesHidroSaniPiaCozinhaObs',
									'estadoFisicoInstalacoesHidroSaniTorneiraObs',
									'estadoFisicoInstalacoesHidroSaniPiaLavanObs',
									'estadoFisicoInstalacoesHidroSaniTorneiraInternaObs',
									'estadoFisicoInstalacoesHidroSaniPiaLavanExternaObs',
									'estadoFisicoInstalacoesHidroSaniTorneiraExternaObs',
									'estadoFisicoTemPiscina',
									'estadoFisicoInstalacoesHidroSaniPiscinaObs',
									'estadoFisicoInstalacoesLavaboAcessoriosObs',
									'estadoFisicoInstalacoesLavaboEspelhoObs',
									'estadoFisicoInstalacoesLavaboBoxObs',
									'estadoFisicoInstalacoesLavaboPiaObs',
									'estadoFisicoInstalacoesLavaboDuchaObs',
									'estadoFisicoInstalacoesLavaboDescargaObs',
									'estadoFisicoInstalacoesLavaboSanitarioObs',
									'estadoFisicoInstalacoesLavaboAssentoObs',
									'estadoFisicoInstalacoesLavaboTorneiraObs',
									'estadoFisicoInstalacoesLavaboArmarioObs',
									'estadoFisicoInstalacoesBanheiroSocialAcessoriosObs',
									'estadoFisicoInstalacoesBanheiroSocialEspelhoObs',
									'estadoFisicoInstalacoesBanheiroSocialEspelhoObs',
									'estadoFisicoInstalacoesBanheiroSocialBoxObs',
									'estadoFisicoInstalacoesBanheiroSocialPiaObs',
									'estadoFisicoInstalacoesBanheiroSocialDuchaObs',
									'estadoFisicoInstalacoesBanheiroSocialDescargaObs',
									'estadoFisicoInstalacoesBanheiroSocialSanitarioObs',
									'estadoFisicoInstalacoesBanheiroSocialAssentoObs',
									'estadoFisicoInstalacoesBanheiroSocialTorneiraObs',
									'estadoFisicoInstalacoesBanheiroSocialArmarioObs',
									'estadoFisicoInstalacoesSuite01AcessoriosObs',
									'estadoFisicoInstalacoesSuite01EspelhoObs',
									'estadoFisicoInstalacoesSuite01BoxObs',
									'estadoFisicoInstalacoesSuite01PiaObs',
									'estadoFisicoInstalacoesSuite01DuchaObs',
									'estadoFisicoInstalacoesSuite01DescargaObs',
									'estadoFisicoInstalacoesSuite01SanitarioObs',
									'estadoFisicoInstalacoesSuite01AssentoObs',
									'estadoFisicoInstalacoesSuite01TorneiraObs',
									'estadoFisicoInstalacoesSuite01ArmarioObs',
									'estadoFisicoInstalacoesSuite02AcessoriosObs',
									'estadoFisicoInstalacoesSuite02EspelhoObs',
									'estadoFisicoInstalacoesSuite02BoxObs',
									'estadoFisicoInstalacoesSuite02PiaObs',
									'estadoFisicoInstalacoesSuite02DuchaObs',
									'estadoFisicoInstalacoesSuite02DescargaObs',
									'estadoFisicoInstalacoesSuite02SanitarioObs',
									'estadoFisicoInstalacoesSuite02AssentoObs',
									'estadoFisicoInstalacoesSuite02TorneiraObs',
									'estadoFisicoInstalacoesSuite02ArmarioObs',
									'estadoFisicoInstalacoesSuite03AcessoriosObs',
									'estadoFisicoInstalacoesSuite03EspelhoObs',
									'estadoFisicoInstalacoesSuite03BoxObs',
									'estadoFisicoInstalacoesSuite03PiaObs',
									'estadoFisicoInstalacoesSuite03DuchaObs',
									'estadoFisicoInstalacoesSuite03DescargaObs',
									'estadoFisicoInstalacoesSuite03SanitarioObs',
									'estadoFisicoInstalacoesSuite03AssentoObs',
									'estadoFisicoInstalacoesSuite03TorneiraObs',
									'estadoFisicoInstalacoesSuite03ArmarioObs',
									'estadoFisicoInstalacoesDependenciaAcessoriosObs',
									'estadoFisicoInstalacoesDependenciaEspelhoObs',
									'estadoFisicoInstalacoesDependenciaBoxObs',
									'estadoFisicoInstalacoesDependenciaPiaObs',
									'estadoFisicoInstalacoesDependenciaDuchaObs',
									'estadoFisicoInstalacoesDependenciaDescargaObs',
									'estadoFisicoInstalacoesDependenciaSanitarioObs',
									'estadoFisicoInstalacoesDependenciaAssentoObs',
									'estadoFisicoInstalacoesDependenciaTorneiraObs',
									'estadoFisicoInstalacoesDependenciaArmarioObs',
									'estadoFisicoNormalRalosEsgoto',
									'estadoFisicoUsadoRalosEsgoto',
									'estadoFisicoInstalacoesRalosEsgotoArmarioObs',
									'estadoFisicoCeramicaNova',
									'estadoFisicoCeramicaUsada',
									'estadoFisicoCeramicaObs',
									'estadoFisicoAzulejoNova',
									'estadoFisicoAzulejoUsada',
									'estadoFisicoAzulejoObs',
									'estadoFisicoCimentoNova',
									'estadoFisicoCimentoObs',
									'estadoFisicoRodapeNova',
									'estadoFisicoRodapeUsada',
									'estadoFisicoRodapeObs',
									'estadoFisicoRevestimentoNova',
									'estadoFisicoRevestimentoUsada',
									'estadoFisicoRevestimentoObs',
									'estadoFisicoSoleirasNova',
									'estadoFisicoSoleirasUsada',
									'estadoFisicoSoleirasObs',
									'estadoFisicoAssoalhoNova',
									'estadoFisicoAssoalhoObs',
									'estadoFisicoOutrosPisosNova',
									'estadoFisicoOutrosPisosObs',
									'estadoFisicoPortasEsquadriasNormal',
									'estadoFisicoPortasEsquadriasObs',
									'estadoFisicoJanelasEsquadriasNormal',
									'estadoFisicoJanelasEsquadriasObs',
									'estadoFisicoBasculantesEsquadriasNormal',
									'estadoFisicoBasculantesEsquadriasObs',
									'estadoFisicoTemArmarios',
									'estadoFisicoArmariosObs',
									'estadoFisicoQuintalLimpoObs',
									'estadoFisicoJardimTemPlanta',
									'estadoFisicoJardimNaoTemPlanta',
									'estadoFisicoJardimLimpo',
									'estadoFisicoJardimObs',
									'estadoFisicoTorneiraDePlastico',
									'estadoFisicoTorneiraDeMetal',
									'estadoFisicoTorneiraObs',
									'estadoFisicoPortaJanelaBasculanteNormal',
									'estadoFisicoPortaJanelaBasculanteObs',
									'estadoFisicoPinturaPortoesNova',
									'estadoFisicoPinturaPortoesVelha',
									'estadoFisicoPinturaPortoesConservada',
									'estadoFisicoPinturasPortoesExternoObs',
									'estadoFisicoPinturasPortoesternoObs',
									'estadoFisicoGradeImovelObs',
									'estadoFisicoCaixaArCondicionadoObs',
									'estadoFisicoInstalacaoSplitObs',
									'estadoFisicoInstalacaoSplitSim',
									'estadoFisicoCadeadosObs',
									'estadoFisicoArmadoresObs',
									'estadoFisicoObservacoesGeraisObs'
								]
								vistoria.mid = this.state.vistoria.mid
								updateThis('Vistoria', vistoria, fields)
							} else {
								vistoria.mid = getNextMid('Vistoria')
								saveThis('Vistoria', vistoria)
							}

							this.props.navigation.state.params.onGoBack();
							this.props.navigation.goBack();
						}}>
						<Text style={{ fontSize: 16, color: '#FFF' }}>SALVAR A VISTORIA</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{ height: 50, borderRadius: 15, marginTop: 6, backgroundColor: '#94240d', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
						onPress={() => this.props.navigation.navigate('PDFSendData_p1',
							this.getDataFromForm())
						}>
						<Text style={{ fontSize: 16, color: '#FFF' }}>CONVERTER EM PDF</Text>
						<Image source={WHITEPDFICON} style={{ height: 24, width: 24, marginStart: 16 }} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	h1: {
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 16,
		textTransform: 'uppercase'
	},
	h2: {
		fontSize: 16,
		fontWeight: 'bold',
		marginTop: 16,
		textTransform: 'capitalize'
	},
	checkBoxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 6
	},
	borderInput: {
		height: 40,
		borderWidth: 1,
		borderColor: '#969696'
	}

});