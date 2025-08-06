import { ImageSourcePropType, View, Text, Image } from "react-native";

const colors = {
  bg: '#1b1515',
  border: '#443a38',
  bg2: 'red',
  size: 194, // squared
}

export function TabIcon({
  src,
  name,
  focused,
}: {
  src: ImageSourcePropType;
  name: string;
  focused: boolean;
  // color: string;
  // size: number;
}) {
  if (focused) {
    console.log({name});
    return (
      <View style={{backgroundColor: colors.bg, width: '260%', height: '280%', borderColor: colors.border, borderRadius: 40, borderWidth: 3, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={src} style={{
          width: 40,
          height: 40,
        }} resizeMode='contain' />
        <Text style={{marginTop: 2, color: 'white', textTransform: 'uppercase', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: 11}}>{name}</Text>
      </View>
    );
  }

  return (
    <View style={{backgroundColor: 'transparent', width: '100%', height: '100%', paddingTop: 10}}>
      <Image source={src} style={{
        width: 40,
        height: 40,
      }} resizeMode='contain' />
    </View>
  )
}