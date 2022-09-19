import { Text, View } from 'react-native'
import { SIZES } from '../constants'

export const NFTTitle = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}

export const EthPrice = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}

export const ImageCmp = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}

export const People = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text>SubInfo</Text>
    </View>
  )
}

export const EndDate = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }}>
      <People />
      <EndDate />
    </View>
  )
}
