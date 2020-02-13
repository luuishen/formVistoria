import React, { Component } from 'react';;
import { Alert, FlatList, Text, View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { findAll, findAllNotRemoved } from '../service/RealmService';

export default class VistoriaList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            vistorias: []
        }
    }   

	static navigationOptions = {
		title: 'Todas as vistorias'
	};

    componentDidMount() {

        let vistorias = findAllNotRemoved('Vistoria')

        this.setState({
            vistorias: vistorias
        })
    }

    refreshData = () => {
        let vistorias = findAllNotRemoved('Vistoria')
        this.setState({
            vistorias: vistorias
        })
    }

    render() {
        return(
            <SafeAreaView style={{
                flex: 1,
                backgroundColor: '#F2F2F2'
            }}>
                <View style={{
                    flex:9,
                    justifyContent: 'center'
                }}>
                    {
                        this.state.vistorias.length==0 ? (
                            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                                <Text>Não há nenhuma vistoria cadastrada ainda...</Text>
                            </View>
                        ) : (
                            <View flex={9}>
                                <FlatList 
                                    style={{marginTop: 16, paddingStart: 16, paddingEnd: 16}}
                                    flex={1}
                                    extraData={this.state}
                                    data={this.state.vistorias}
                                    renderItem={({ item }) => {
                                        return(
                                            <TouchableOpacity onPress={() => {
                                                this.props.navigation.navigate('Formulario', { onGoBack: this.refreshData, vistoriaMid: item.mid })
                                            }}>
                                                <View style={{
                                                    flex: 1,
                                                    height: 50,
                                                    borderRadius: 15,
                                                    backgroundColor: '#F9F9F9',
                                                    borderWidth: 1,
                                                    flexDirection: 'row'
                                                }}>
                                                    <View style={{
                                                        height: 50,
                                                        flex: 1,
                                                        justifyContent: 'center',
                                                        paddingStart: 16
                                                    }}>
                                                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.locatario}</Text>
                                                    </View>
                                                    <View style={{
                                                        height: 50,
                                                        flex: 1,
                                                        flexDirection: 'row-reverse',
                                                        paddingStart: 16,
                                                        alignItems: 'center'
                                                    }}>
                                                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>/{item.situacaoDataAno}</Text>
                                                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>/{item.situacaoDataMes}</Text>
                                                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.situacaoDataDia}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }}
                                />
                            </View>
                        )
                    }
                </View> 
                <View style={{flex: 1, padding: 16, justifyContent: 'center'}}>
                    <TouchableOpacity
                        style={{height: 50, borderRadius: 15, backgroundColor: '#077528', justifyContent: 'center', alignItems: 'center'}}
                        onPress={() => {
                            this.props.navigation.navigate('Formulario', { onGoBack: this.refreshData })
                        }}>
                            <Text style={{fontSize: 16, color: '#FFF'}}>NOVA VISTORIA</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}