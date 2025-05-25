import { StyleSheet, Dimensions } from 'react-native';
import { FONTS, FONT_SIZES } from '@theme/fonts';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 450,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteButtonActive: {
    backgroundColor: '#fff',
  },
  favoriteIcon: {
    fontSize: 24,
    color: '#000',
  },
  favoriteIconActive: {
    color: '#ff3b30',
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: FONT_SIZES['2xl'],
    fontFamily: FONTS.bold,
    marginBottom: 8,
    color: '#000',
  },
  price: {
    fontSize: FONT_SIZES.xl,
    fontFamily: FONTS.semiBold,
    color: '#000',
    marginBottom: 16,
  },
  description: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.regular,
    lineHeight: 24,
    color: '#666',
    marginBottom: 24,
  },
  optionsSection: {
    marginBottom: 24,
  },
  optionTitle: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.semiBold,
    marginBottom: 12,
    color: '#000',
  },
  sizesContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  sizeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedSize: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  sizeText: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.medium,
    color: '#000',
  },
  selectedSizeText: {
    color: '#fff',
  },
  colorsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  colorButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedColor: {
    borderColor: '#000',
    borderWidth: 2,
  },
  quantitySection: {
    marginBottom: 24,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  quantityButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonDisabled: {
    backgroundColor: '#f8f8f8',
  },
  quantityButtonText: {
    fontSize: FONT_SIZES.lg,
    color: '#000',
    fontFamily: FONTS.medium,
  },
  quantityButtonTextDisabled: {
    color: '#999',
  },
  quantityText: {
    fontSize: FONT_SIZES.lg,
    fontFamily: FONTS.medium,
    color: '#000',
    minWidth: 24,
    textAlign: 'center',
  },
  footer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  addToCartButton: {
    backgroundColor: '#000',
    borderRadius: 12,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: FONT_SIZES.lg,
    fontFamily: FONTS.medium,
  },
}); 