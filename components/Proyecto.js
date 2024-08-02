import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from "./styles.js";
import { useState } from 'react';

export default function Proyecto({ titulo, descripcion, setProyecto }) {
    const [tareas, setTareas] = useState([
        {
            nombre: "",
            estado: false,
            fecha: Date.now(),
        }
    ]);
    const [input, setInput] = useState({
        nombre: "",
        estado: false,
        fecha: Date.now()
    });

    const submit =()=>{
        setTareas([...tareas, input]);
    }

    const HandleChange = (evt) => {
        
        const { target } = evt;
        const { name, value } = target;

        const newValues = {
            ...input,
            [name]: value
          };

        setInput(newValues);
    };

    return (
        <View>
            <View>
                <Text>{titulo}</Text>
                <Text>{descripcion}</Text>
            </View>

            <View>
                <TextInput
                    placeholder="nombre de la tarea"
                    style={styles.tareaInput}
                    value={input.nombre}
                    onChangeText={HandleChange}
                />
                <Button
                    onPress={submit}
                    title='Agregar tarea'
                />
            </View>

            {tareas.map((tarea,key)=>{

                

            })}
        </View>
    );
}
