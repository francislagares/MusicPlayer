import { FlatList, FlatListProps, View } from 'react-native';
import TrackListItem from './TrackListItem';
import library from '@/assets/data/library.json';
import { utilsStyles } from '@/styles';

type TrackListProps = Partial<FlatListProps<unknown>>;

const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
);

const TrackList = ({ ...flatListProps }: TrackListProps) => {
  return (
    <FlatList
      data={library}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TrackListItem
          track={{
            ...track,
            image: track.artwork,
          }}
        />
      )}
      {...flatListProps}
    />
  );
};

export default TrackList;
