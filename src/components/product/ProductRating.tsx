import React from 'react';
import { Text, View } from 'react-native';
import { Star } from 'lucide-react-native';
import { ProductRating as ProductRatingType } from '../../types/productTypes';

type ProductRatingProps = {
  rating: ProductRatingType;
  iconSize?: number;
  textSizeClassName?: string;
  countSizeClassName?: string;
  className?: string;
};

const TOTAL_STARS = 5;

const ProductRating = ({
  rating,
  iconSize = 14,
  textSizeClassName = 'text-xs',
  countSizeClassName = 'text-xs',
  className = '',
}: ProductRatingProps) => {
  const filledStars = Math.round(rating.rate);

  return (
    <View className={`flex-row items-center ${className}`}>
      <View className="flex-row items-center">
        {Array.from({ length: TOTAL_STARS }).map((_, index) => {
          const filled = index < filledStars;

          return (
            <Star
              key={index}
              size={iconSize}
              color="#f4a640"
              fill={filled ? '#f4a640' : 'transparent'}
              strokeWidth={1.8}
            />
          );
        })}
      </View>
      <Text className={`ml-1 font-semibold text-[#f4a640] ${textSizeClassName}`}>
        {rating.rate.toFixed(1)}
      </Text>
      <Text className={`ml-1 text-muted-foreground ${countSizeClassName}`}>
        ({rating.count})
      </Text>
    </View>
  );
};

export default ProductRating;
