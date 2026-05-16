import { FlatList, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useState, useMemo } from "react";

import CadaProduto from './Produto'
import Texto from '../../componentes/Texto'
import Style from './estiloProd'

export default function Index({itens}:any){
    const [anoSelecionado, setAnoSelecionado] = useState<number | null>(null);
    
    // Obter anos únicos dos carros
    const anosDisponiveis = useMemo(() => {
        return [...new Set(itens.lista.map((carro: any) => carro.ano))].sort((a, b) => b - a);
    }, [itens.lista]);
    
    // Filtrar produtos baseado no ano selecionado
    const produtosFiltrados = useMemo(() => {
        if (anoSelecionado === null) {
            return itens.lista;
        }
        return itens.lista.filter((carro: any) => carro.ano === anoSelecionado);
    }, [itens.lista, anoSelecionado]);
    
    return (
        <View style={Style.corFundo}>
            <ScrollView 
                horizontal 
                style={styles.filtroContainer}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity 
                    style={[
                        styles.botaoFiltro, 
                        anoSelecionado === null && styles.botaoFiltroAtivo
                    ]}
                    onPress={() => setAnoSelecionado(null)}
                >
                    <Texto estiloEspecifico={[
                        styles.textoFiltro,
                        anoSelecionado === null && styles.textoFiltroAtivo
                    ]}>
                        Todos
                    </Texto>
                </TouchableOpacity>
                
                {anosDisponiveis.map((ano) => (
                    <TouchableOpacity
                        key={ano}
                        style={[
                            styles.botaoFiltro,
                            anoSelecionado === ano && styles.botaoFiltroAtivo
                        ]}
                        onPress={() => setAnoSelecionado(ano)}
                    >
                        <Texto estiloEspecifico={[
                            styles.textoFiltro,
                            anoSelecionado === ano && styles.textoFiltroAtivo
                        ]}>
                            {ano}
                        </Texto>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            
            <FlatList
                data={produtosFiltrados}
                renderItem={({item})=> <CadaProduto produto={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    filtroContainer: {
        paddingHorizontal: 10,
        marginBottom: 15,
        maxHeight: 60,
    },
    botaoFiltro: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginHorizontal: 5,
        backgroundColor: '#333333',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#666666',
    },
    botaoFiltroAtivo: {
        backgroundColor: '#DC143C',
        borderColor: '#DC143C',
    },
    textoFiltro: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
    },
    textoFiltroAtivo: {
        color: '#ffffff',
    },
});