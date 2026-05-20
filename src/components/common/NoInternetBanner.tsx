import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { WifiOff } from 'lucide-react-native';
import { useThemeColors } from '@/hooks/useThemeColors';

const NoInternetBanner = () => {
  const { colors } = useThemeColors();
  const { isConnected, isInternetReachable } = useNetInfo();
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    if (isConnected === true) {
      setIsOffline(false);
      return;
    }

    if (isConnected === false || isInternetReachable === false) {
      setIsOffline(true);
    }
  }, [isConnected, isInternetReachable]);

  if (!isOffline) {
    return null;
  }

  return (
    <View
      pointerEvents="none"
      style={{
        backgroundColor: colors.destructive,
      }}
    >
      <View className="flex-row items-center justify-center px-4 py-1">
        <WifiOff color={colors.destructiveForeground} size={18} />
        <Text
          className="ml-2 text-sm font-semibold"
          style={{ color: colors.destructiveForeground }}
        >
          No Internet Connection, Reload again!
        </Text>
      </View>
    </View>
  );
};

export default NoInternetBanner;
