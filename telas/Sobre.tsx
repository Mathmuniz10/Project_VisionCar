import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

//Componente de Texto
import Texto from '../componentes/Texto'

export default function Sobre() {

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Texto estiloEspecifico={styles.titulo}>Vision Car</Texto>
        <Texto estiloEspecifico={styles.subtitulo}>Sua loja de carros premium</Texto>
      </View>
      
      <Texto estiloEspecifico={styles.texto}>
        A Vision Car é a sua melhor opção para encontrar o carro dos seus sonhos! Com uma frota renovada e diversificada, oferecemos os melhores veículos do mercado com garantia e suporte completo.
        {'\n'}{'\n'}
        Nossa missão é proporcionar uma experiência excepcional na compra do seu automóvel, com um atendimento profissional e personalizado.
        {'\n'}{'\n'}
        Temos opções de financiamento flexível, documentação rápida e transparente, além de serviços de revisão e manutenção de qualidade.
        {'\n'}{'\n'}
        Visite nosso catálogo completo e encontre exatamente o que você procura!
      </Texto>
      
      <StatusBar style="light" animated />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingHorizontal:16,
  },
  header: {
    backgroundColor: '#DC143C',
    paddingVertical: 30,
    paddingHorizontal: 16,
    marginHorizontal: -16,
    marginTop: -16,
    marginBottom: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#000000',
    alignItems: 'center',
  },
  titulo: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: '#f0f0f0',
    fontSize: 16,
    marginTop: 8,
  },
  texto:{
    color: '#ffffff',
    paddingVertical: 12,
    fontSize: 16,
  },
});