import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { TextInput, Card, Button } from 'react-native-paper';
import { Camera, CameraView, CameraType } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TelaPerfil() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [ladoCamera, setLadoCamera] = useState<CameraType>('back');
  const [edicaoHabilitada, setEdicaoHabilitada] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const pedirPermissaoNovamente = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const handleSalvarMudancas = () => {
    // Aqui você pode adicionar lógica para salvar os dados (API, AsyncStorage, etc)
    setEdicaoHabilitada(false);
  };

  if (hasPermission === null) {
    return <View style={styles.container} />;
  }

  if (hasPermission === false) {
    return (
      <View style={[styles.container, styles.centralizar]}>
        <Text style={styles.textoErro}>Precisamos de permissão para acessar a câmera.</Text>
        <Button mode="contained" buttonColor="#DC143C" onPress={pedirPermissaoNovamente}>
          Conceder Permissão
        </Button>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tituloHeader}>Meu Perfil</Text>
      </View>

      <View style={styles.cameraBox}>
        <CameraView style={styles.camera} facing={ladoCamera}>
          <TouchableOpacity 
            style={styles.botaoInverter}
            onPress={() => setLadoCamera(atual => atual === 'back' ? 'front' : 'back')}
          >
            <Ionicons name="camera-reverse" size={28} color="white" />
          </TouchableOpacity>
        </CameraView>
      </View>

      <Card style={styles.cardFormulario}>
        <Card.Content>
          <TextInput
            label="Nome Completo"
            mode="outlined"
            value={nome}
            onChangeText={setNome}
            editable={edicaoHabilitada}
            textColor="white"
            activeOutlineColor="#DC143C"
            theme={{ colors: { onSurfaceVariant: '#aaa' } }}
            style={styles.input}
          />
          <TextInput
            label="E-Mail"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            editable={edicaoHabilitada}
            textColor="white"
            keyboardType="email-address"
            activeOutlineColor="#DC143C"
            theme={{ colors: { onSurfaceVariant: '#aaa' } }}
            style={styles.input}
          />
          <TextInput
            label="WhatsApp"
            mode="outlined"
            value={whatsapp}
            onChangeText={setWhatsapp}
            editable={edicaoHabilitada}
            textColor="white"
            keyboardType="numeric"
            activeOutlineColor="#DC143C"
            theme={{ colors: { onSurfaceVariant: '#aaa' } }}
            style={styles.input}
          />
        </Card.Content>
      </Card>

      <TouchableOpacity 
        style={styles.botaoSalvar}
        onPress={() => edicaoHabilitada ? handleSalvarMudancas() : setEdicaoHabilitada(true)}
      >
        <Text style={styles.textoBotao}>
          {edicaoHabilitada ? 'Salvar Mudanças' : 'Editar Perfil'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  centralizar: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    backgroundColor: '#DC143C',
    paddingVertical: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  tituloHeader: {
    fontFamily: 'FontePadrao',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  cameraBox: {
    width: '90%',
    height: 250,
    alignSelf: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  botaoInverter: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
    borderRadius: 50,
    alignSelf: 'flex-end',
    margin: 15,
  },
  cardFormulario: {
    backgroundColor: '#262626',
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 10,
  },
  input: {
    backgroundColor: '#333333',
    marginBottom: 15,
    fontFamily: 'FontePadrao',
  },
  botaoSalvar: {
    backgroundColor: '#DC143C',
    margin: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    fontFamily: 'FontePadrao',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff',
  },
  textoErro: {
    fontFamily: 'FontePadrao',
    textAlign: 'center',
    marginBottom: 20,
    color: '#ffffff',
  }
});