import { ScrollView, View } from 'react-native';
import TrackList from '@/components/TrackList';
import { screenPadding } from '@/constants/tokens';
import { defaultStyles } from '@/styles';

export const SongsScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={{
          paddingTop: screenPadding.vertical,
          paddingHorizontal: screenPadding.horizontal,
        }}
      >
        <TrackList scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
