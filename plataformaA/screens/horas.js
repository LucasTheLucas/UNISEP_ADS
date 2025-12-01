import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView  } from "react-native";
import {Ionicons} from "@expo/vector-icons"
import { useState } from "react";
export default function Notas() 
{
    const [cards, setCards] = useState([]);

    function adicionarCard() {
        const novoCard = 
        { 
            id: Date.now(),    
            instituicao: "",
            horas: "" 
        };
        setCards([...cards, novoCard])
    }

    function removerCard(id) {
    setCards(cards.filter(card => card.id !== id))
    }

    function atualizarCard(id, campo, valor) {
    setCards(cards.map(card =>
        card.id === id ? { ...card, [campo]: valor } : card
    ))
    }

    const totalHoras = cards.reduce((acc, card) => acc + Number(card.horas || 0), 0);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>{totalHoras}/200 Hrs</Text>
                <TouchableOpacity onPress={adicionarCard}>
                    <View style={styles.adicionar}>
                        <Text style={styles.titulo}>Adicionar</Text>
                        <Ionicons name="add-outline" size={30}></Ionicons>
                    </View>
                </TouchableOpacity>
            </View>
            
            <ScrollView>
            {cards.map((card) => (
                <View key={card.id} style={styles.card}>

                    <View style={{width:'100%'}}>
                        <View style={styles.cardTitle}>
                            <Text style={styles.titulo}>Hora complementar</Text>
                            <TouchableOpacity onPress={() => removerCard(card.id)}>
                                <Ionicons name="trash-outline" size={30} color={'#000'}></Ionicons>
                            </TouchableOpacity>
                        </View>

                        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <TextInput style={styles.inputInt}
                            placeholder='Intituicão'
                            onChangeText={valor => atualizarCard(card.id, "instituicao", valor)}
                            />

                            <TextInput  style={styles.inputTem}
                                keyboardType="numeric"
                                placeholder='Tempo (H)'
                                onChangeText={valor => atualizarCard(card.id, "horas", valor)}
                            />
                        </View>
                        <TouchableOpacity style={styles.button}>
                                <Text>Adicionar certificado</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))} 
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            backgroundColor: '#f4f6f8',
            flex: 1,
        },
        header:
        {
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            gap: 8,                      
            padding: 20
        },
        adicionar:
        {
            flexDirection: 'row'
        },
        titulo:
        {
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 15,
        },
        card:
        {
            backgroundColor:"#fff",
            borderRadius: 15,
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
            gap: 5,
            margin: 5
        },
        inputInt: {
            height: 46,
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 12,
            marginBottom: 10,
            fontSize: 15,
            width:'70%'
        },
        inputTem: {
            height: 46,
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 12,
            marginBottom: 10,
            fontSize: 15,
            width:'26%'
        },
        button:
        {
            height: 46,
            backgroundColor: '#c8003c',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 6
        },
        cardTitle:
        {
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'space-between'
        }
    })