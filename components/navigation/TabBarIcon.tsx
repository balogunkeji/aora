
import { styled } from 'nativewind';
import { View, Image, Text } from 'react-native';

export function TabBarIcon({ icon, color, name, focused }: any) {
  const StyledImage = styled(Image);
  const StyledText = styled(Text);
  return (
    <View>
      <StyledImage 
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <StyledText className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
        {name}
      </StyledText>
    </View>
  );
}