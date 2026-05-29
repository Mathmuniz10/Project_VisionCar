import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

//Componente de Texto
import Texto from '../componentes/Texto'

export default function Sobre() {
  const player = useVideoPlayer(require('../assets/videoVISION.mp4'), player => {
    player.loop = true
    player.play()
  })

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Texto style={styles.titulo}>Vision Car</Texto>
        <Texto style={styles.subtitulo}>Sua loja de carros premium</Texto>
      </View>
      
      <Texto style={styles.texto}>
        A Vision Car é a sua melhor opção para encontrar o carro dos seus sonhos! Com uma frota renovada e diversificada, oferecemos os melhores veículos do mercado com garantia e suporte completo.
        {'\n'}{'\n'}
        Nossa missão é proporcionar uma experiência excepcional na compra do seu automóvel, com um atendimento profissional e personalizado.
        {'\n'}{'\n'}
        Temos opções de financiamento flexível, documentação rápida e transparente, além de serviços de revisão e manutenção de qualidade.
        {'\n'}{'\n'}
        Visite nosso catálogo completo e encontre exatamente o que você procura!
      </Texto>

      <View style={styles.secaoVideo}>
        <Texto style={styles.tituloSecao}>Conheça nossa loja</Texto>
        <VideoView
          player={player}
          style={styles.video}
          allowsFullscreen
          allowsPictureInPicture
        />
      </View>
      
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
  video: {
    width: 350,
    height: 220,
    alignSelf: 'center',
    borderRadius: 10,
  },
  secaoVideo: {
    marginVertical: 20,
    paddingHorizontal: 4,
  },
  tituloSecao: {
    color: '#DC143C',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});