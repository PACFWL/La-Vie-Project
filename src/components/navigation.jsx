import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Navigation = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Page1')} style={{ margin: 10 }}>
        <Text style={{ fontSize: 20 }}>Go to Page 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Page2')} style={{ margin: 10 }}>
        <Text style={{ fontSize: 20 }}>Go to Page 2</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Navigation;
