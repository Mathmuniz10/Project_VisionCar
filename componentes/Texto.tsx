import { Text, StyleSheet } from "react-native";

export default function Texto({children, style}: any){
    return <Text style={[estilos.padrao, style]}>{children}</Text>
}

const estilos = StyleSheet.create({
    padrao: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        textAlign: 'justify',
        lineHeight: 30,
        color: '#FFFFFF',
    }
})