import React, { useState, useRef } from 'react';
import { View, Modal, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList, Dimensions, Text } from 'react-native';
import { Card } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import Texto from '../../componentes/Texto';

const { width } = Dimensions.get('window');

export default function Produto({ item }: any) {
  const [statusModal, acaoAbreFecha] = useState(false);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  return (
    <>
      {/* CARD VISÍVEL NA LISTA */}
      <View style={styles.cardContainer}>
        <Card mode="elevated" style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Texto style={styles.nomeCarro}>{item.nome}</Texto>

            <View style={styles.anoContainer}>
              <Ionicons name="calendar-outline" size={14} color="#C0392B" />
              <Texto style={styles.anoCarro}>{item.ano}</Texto>
            </View>

            <Texto numberOfLines={2} style={styles.descricaoCard}>
              {item.descricao}
            </Texto>
          </Card.Content>

          <Card.Cover source={item.imagens[0]} style={styles.cardCover} />

          <Card.Actions style={styles.cardActions}>
            <TouchableOpacity
              style={styles.botaoDetalhes}
              onPress={() => acaoAbreFecha(true)}
            >
              <Texto style={styles.textoBotaoDetalhes}>Ver Detalhes</Texto>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
      </View>

      {/* MODAL COM CARROSSEL */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={statusModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* HEADER DO MODAL */}
            <View style={styles.modalHeader}>
              <Texto style={styles.nomeTitulo}>{item.nome}</Texto>
              <TouchableOpacity onPress={() => acaoAbreFecha(false)}>
                <Ionicons name="close" size={24} color="white" />
              </TouchableOpacity>
            </View>

            {/* SCROLL VERTICAL DO CONTEÚDO */}
            <ScrollView style={styles.modalScroll} showsVerticalScrollIndicator={false}>
              {/* CARROSSEL DE IMAGENS */}
              <FlatList
                ref={flatListRef}
                data={item.imagens}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                onMomentumScrollEnd={(event) => {
                  const index = Math.round(
                    event.nativeEvent.contentOffset.x / width
                  );
                  setIndiceAtual(index);
                }}
                renderItem={({ item: imagem }) => (
                  <Image
                    source={imagem}
                    style={styles.carrosselImagem}
                    resizeMode="cover"
                  />
                )}
                scrollEventThrottle={16}
              />

              {/* INDICADORES DE PÁGINA (BOLINHAS) */}
              <View style={styles.indicadores}>
                {item.imagens.map((_: any, index: number) => (
                  <View
                    key={index}
                    style={[
                      styles.bolinha,
                      indiceAtual === index
                        ? styles.bolhinhaAtiva
                        : styles.bolinhaInativa,
                    ]}
                  />
                ))}
              </View>

              {/* INFORMAÇÕES DO CARRO */}
              <View style={styles.infoContainer}>
                {/* ANO */}
                <View style={styles.secaoAno}>
                  <Ionicons name="calendar" size={16} color="#C0392B" />
                  <Texto style={styles.labelInfo}>Ano: </Texto>
                  <Texto style={styles.valorInfo}>{item.ano}</Texto>
                </View>

                {/* SEPARADOR */}
                <View style={styles.separador} />

                {/* DESCRIÇÃO */}
                <Texto style={styles.tituloSecao}>Descrição</Texto>
                <Texto style={styles.textoDescricao}>{item.descricao}</Texto>

                {/* SEPARADOR */}
                <View style={styles.separador} />

                {/* OPCIONAIS */}
                <Texto style={styles.tituloSecao}>Opcionais inclusos</Texto>
                {item.opcionais.map((opcional: string, index: number) => (
                  <View key={index} style={styles.itemOpcional}>
                    <Ionicons
                      name="checkmark-circle"
                      size={18}
                      color="#C0392B"
                      style={styles.iconCheckmark}
                    />
                    <Texto style={styles.textoOpcional}>{opcional}</Texto>
                  </View>
                ))}

                {/* BOTÃO FECHAR */}
                <TouchableOpacity
                  style={styles.botaoFechar}
                  onPress={() => acaoAbreFecha(false)}
                >
                  <Texto style={styles.textoFechar}>Fechar</Texto>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  /* CARD VISÍVEL */
  cardContainer: {
    borderColor: '#C0392B',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    backgroundColor: '#1E1E1E',
  },
  card: {
    backgroundColor: '#1E1E1E',
  },
  cardContent: {
    paddingTop: 12,
  },
  nomeCarro: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  anoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  anoCarro: {
    color: '#C0392B',
    fontSize: 14,
    marginLeft: 6,
    fontWeight: 'bold',
  },
  descricaoCard: {
    color: '#AAAAAA',
    fontSize: 13,
    marginTop: 6,
  },
  cardCover: {
    height: 180,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  cardActions: {
    justifyContent: 'center',
    paddingBottom: 12,
  },
  botaoDetalhes: {
    backgroundColor: '#C0392B',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  textoBotaoDetalhes: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  /* MODAL */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.92)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#1E1E1E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '88%',
    overflow: 'hidden',
  },
  modalHeader: {
    backgroundColor: '#C0392B',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nomeTitulo: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    flex: 1,
  },
  modalScroll: {
    flex: 1,
  },

  /* CARROSSEL */
  carrosselImagem: {
    width: width,
    height: 220,
    resizeMode: 'cover',
  },
  indicadores: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  bolinha: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 4,
  },
  bolhinhaAtiva: {
    backgroundColor: '#C0392B',
  },
  bolinhaInativa: {
    backgroundColor: '#555',
  },

  /* INFORMAÇÕES */
  infoContainer: {
    padding: 20,
    paddingBottom: 30,
  },
  secaoAno: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelInfo: {
    color: '#AAAAAA',
    marginLeft: 8,
  },
  valorInfo: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  separador: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 12,
  },
  tituloSecao: {
    color: '#C0392B',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textoDescricao: {
    color: '#CCCCCC',
    textAlign: 'justify',
    lineHeight: 24,
  },
  itemOpcional: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconCheckmark: {
    marginRight: 8,
  },
  textoOpcional: {
    color: '#CCCCCC',
    fontSize: 14,
  },

  /* BOTÃO FECHAR */
  botaoFechar: {
    backgroundColor: '#C0392B',
    borderRadius: 8,
    padding: 14,
    marginTop: 20,
    alignItems: 'center',
  },
  textoFechar: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});