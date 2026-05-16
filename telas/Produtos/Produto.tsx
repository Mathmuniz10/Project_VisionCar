import { Card } from "react-native-paper";
import { StyleSheet } from "react-native";

import Texto from '../../componentes/Texto'
import Style from './estiloProd'

export default function Produto({produto:{id,nome,ano,imagem,descricao}}:any){
    return <Card mode='elevated' style={Style.card}>
        <Card.Content>
            <Texto>{nome}</Texto>
            <Texto style={styles.ano}>Ano: {ano}</Texto>
            <Texto>{descricao}</Texto>
        </Card.Content>
        <Card.Cover source={imagem}/>
    </Card>
}

const styles = StyleSheet.create({
    ano: {
        color: '#DC143C',
        fontWeight: 'bold',
        fontSize: 14,
    }
});