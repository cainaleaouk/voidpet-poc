import { FlatList, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { PetBox } from '@/components/pets/PetBox';
import Colors from '@/constants/Colors';
import Missions from '@/assets/images/missions.png';
import { square } from '@/utils/style';

const data = Array.from({ length: 43 }).map((_, i) => ({id: `joy${i}`}));

export default function TabTwoScreen() {

  const renderItem = ({ item }: any) => (
    <PetBox />
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.title}>VOIDPETS</Text>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => {}}
            style={styles.sortBtn}
            disabled
          >
            <Text style={styles.sortText}>sort by bp</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => {}}
          style={styles.btn}
          disabled
        >
          <Image source={Missions} style={{...square(60)}} resizeMode='contain' />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: Colors.pet.container.background,
  },
  list: {
    paddingLeft: 2,
  },
  header: {
    width: '100%',
    height: 88,
    padding: 10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  headerText: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    flex: 3,
  },
  sortBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortText: {
    color: '#aab6ff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  btn: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10
  }
});
