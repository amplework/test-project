import React from 'react'
import { TouchableOpacity,Text } from 'react-native';



const ButtonComponent = ({
    title,
    onPress
}) => {
return (
    <TouchableOpacity
    style={{padding:5,alignItems:'center',borderRadius:10}}

    onPress={onPress}
    
    >
        <Text style={{fontSize:18,fontWeight:"bold",color:"#FFFFFF"}}>{title}</Text>
    </TouchableOpacity>
)
}

export default ButtonComponent;