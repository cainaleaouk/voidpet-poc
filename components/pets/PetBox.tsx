import { Dimensions, Image, StyleSheet, Text, View  } from 'react-native';

import Colors from '@/constants/Colors';
import PetIcon from '@/assets/images/petIcon.png';
import PetTypeIcon from '@/assets/images/petTypeIcon.png';
import Joy from '@/assets/images/joy.png';
import Gradient from '@/assets/images/gradient.png';
import { square } from '@/utils/style';

const screenWidth = Dimensions.get('window').width;
const itemSpacing = 4; // total spacing per item
const itemWidth = (screenWidth - itemSpacing * (3 + 1)) / 3;
const itemHeight = itemWidth * 1.23;

const headerIconSize = itemWidth / 7;

const footerHeight = itemHeight / 8;

export function PetBox() {
  return (
    <View style={{
      width: itemWidth,
      maxWidth: itemWidth,
      height: itemHeight,
      borderColor: Colors.pet.container.border,
      borderWidth: 3,
      borderRadius: 12,
      overflow: 'hidden',
      flexDirection: 'column',
      flex: 1,
      marginLeft: 2,
      marginRight: 2,
      marginBottom: 3,
    }}>
      {/* CONTENT */}
      <View
        style={{
          flex: 1,
          backgroundColor: '#a9d1f5',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image source={Joy} style={{transform: 'scale(1.3)'}} resizeMode='center'  />
      </View>
    
      {/* HEADER */}
      <View style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        paddingLeft: 5,
        paddingTop: 3,
        // height: 40,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Image source={PetIcon} style={{...square(headerIconSize), marginRight: 4}} resizeMode="contain" />
        <Text style={{color: Colors.pet.container.header, fontWeight: 'bold', fontSize: headerIconSize/1.3}}>Lv2</Text>
      </View>
          
    
      {/* FOOTER */}
      <Image source={Gradient} style={{position: 'absolute', bottom: 0, transform: 'scaleY(0.5)', marginBottom: "-18%"}} />
      <View style={{
        backgroundColor: Colors.pet.container.footer,
        width: '100%',
        height: footerHeight,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        
        <View style={{
          width: footerHeight * 1.5,
          height: footerHeight * 1.5,
          backgroundColor: Colors.pet.container.footer,
          borderRadius: footerHeight,
          marginTop: -footerHeight/2,
          marginLeft: -2,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
        }}>
          <Image source={PetTypeIcon} style={{...square(footerHeight)}} resizeMode='contain' />
        </View>
        <Text style={{
          color: Colors.pet.container.footerText,
          fontWeight: 'bold'
        }}>JOY</Text>
        
      </View>
    </View>
  )
}