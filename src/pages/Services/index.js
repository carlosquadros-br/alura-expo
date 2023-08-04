import React  from "react";

import { SafeAreaView, StatusBar, Text } from "react-native";

const servicos = [
  {
    id: 1, 
    nome: "Banho",
    preco: 79.9,
    
  },
  {
    id: 2, 
  },
  {
    id: 3, 
  },
  {
    id: 4, 
  }
]

export default function Servicos () {
    return <SafeAreaView>
        <StatusBar></StatusBar>
        <Text>Serviços!</Text>
    </SafeAreaView>
}