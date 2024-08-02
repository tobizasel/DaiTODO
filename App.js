import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from "./components/styles"
import { useState } from 'react';
import  Proyecto from "./components/Proyecto.js"
export default function App() {

  const [proyectos, setProyectos] = useState([{
    titulo: "nombre",
    descripcion: "desc"   
}]);  


  return (
    <View style={styles.container}>
    <TextInput type="text" placeholder="nombre del proyecto" style={[styles.input, styles.input-1 ,styles.w-100]}/>
    <TextInput type="text" placeholder="descripcion" style={[styles.input, styles.input-2 ,styles.w-100]}/>

    <View style={styles.botones__agregar} id="crearProyecto">
    <Button style={styles.botonCrear} title='Crear Proyecto'></Button>
    </View>

    {
      proyectos.map((proyecto) => (
        <Proyecto setProyecto={setProyectos} proyecto={proyecto}/>
      ))
    }

    <StatusBar style="auto" />
    </View>
  );
}


