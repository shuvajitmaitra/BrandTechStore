import React from 'react';
import { Pressable, Text, View } from 'react-native';

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

const EmptyState = ({
  title,
  description,
  actionLabel,
  onActionPress,
}: EmptyStateProps) => {
  return (
    <View className="mx-5 mt-12 overflow-hidden rounded-[32px] border border-border bg-card px-6 py-10">
      <View className="absolute -right-12 top-0 h-32 w-32 rounded-full bg-primary/15" />
      <Text className="text-center text-xs font-semibold uppercase tracking-[2px] text-primary">
        BrandTECH State
      </Text>
      <Text className="mt-3 text-center text-2xl font-bold text-foreground">
        {title}
      </Text>
      <Text className="mt-3 text-center text-base leading-6 text-muted-foreground">
        {description}
      </Text>

      {actionLabel && onActionPress ? (
        <Pressable
          onPress={onActionPress}
          className="mt-6 self-center rounded-full border border-primary bg-primary px-5 py-3">
          <Text className="text-base font-semibold text-primary-foreground">
            {actionLabel}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
};

export default EmptyState;
