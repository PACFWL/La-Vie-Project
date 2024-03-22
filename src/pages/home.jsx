import React from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  const topics = [
    { id: 1, title: 'Topic 1', image: require('./images/topic1.jpg') },
    { id: 2, title: 'Topic 2', image: require('./images/topic2.jpg') },
    
  ];

  const products = [
    { id: 1, name: 'Product 1', image: require('./images/product1.jpg') },
    { id: 2, name: 'Product 2', image: require('./images/product2.jpg') },
    
];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ margin: 10 }}>
      <Image source={item.image} style={{ width: 150, height: 150 }} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <Image source={require('./images/header.jpg')} style={{ width: '100%', height: 200 }} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {topics.map(topic => (
          <TouchableOpacity key={topic.id} style={{ margin: 10 }}>
            <Image source={topic.image} style={{ width: 100, height: 100 }} />
            <Text>{topic.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Page1')} style={{ flex: 1, backgroundColor: 'blue', padding: 10 }}>
          <Text style={{ textAlign: 'center', color: 'white' }}>Olá</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Home;
