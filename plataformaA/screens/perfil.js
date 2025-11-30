import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import {Ionicons} from "@expo/vector-icons"
import perfil from "../assets/200w.gif"

export default function Perfil({navigation}) {

    const navegar = (rota) =>
    {
        navigation.navigate(rota)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={ styles.notas }>
                    <TouchableOpacity style={{ width: 40 }} onPress={() => navegar("Horas Complementares")}>
                        <Ionicons name="timer-outline" size={30} color={'#fff'}></Ionicons>
                    </TouchableOpacity>
                </View>
                <Image
                    source={perfil}
                    style={ styles.avatar }
                />
                <Text style={styles.nome}>Lucas</Text>
                <Text style={styles.curso}>Analise e Desenvolvimento de Software</Text>
            </View>

            <View style={styles.conteudo}>
                <Text style={styles.titulo}>Meu Desempenho</Text>
                <View style={styles.card}>
                    <Ionicons name="book-outline" size={30} color={'#0f62fe'}></Ionicons>
                    <View style={{marginLeft: 12}}>
                        <Text style={styles.cardTitulo}>Diciplinas Ativas</Text>
                        <Text style={styles.cardValor}>4</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create
(
    {
        container:
        {
            flex: 1,
            backgroundColor: "#f4f6f8"
        },
        header:
        {
            alignItems: "center",
            backgroundColor: "#c8003c",
            paddingVertical: 50,
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
        },
        avatar:
        {
            width: 110,
            height: 110,
            borderRadius: 65,
            marginBottom: 10
        },
        nome:
        {
            color: "#fff",
            fontSize: 24,
            fontWeight: 'bold'
        },
        curso:
        {
            color: "#eaeaea",
            fontSize: 15,
            margintop: 15
        },
        conteudo:
        {
            padding: 20
        },
        titulo:
        {
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 15
        },
        card:
        {
            backgroundColor:"#fff",
            borderRadius: 15,
            flexDirection: "row",
            alignItems: "center",
            padding: 15
            },
        cardTitulo:
        {
            fontSize: 14,
            color: "#555"
        },
        cardValor: 
        {
            fontSize: 20,
            fontWeight: 'bold'
        },
        notas:
        {
            width: '100%',
            direction: "rtl",
            paddingHorizontal: 20 
        }
    }
)