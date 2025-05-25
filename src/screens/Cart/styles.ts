import { StyleSheet } from 'react-native';
import { FONTS, FONT_SIZES } from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  emptyText: {
    fontSize: FONT_SIZES.lg,
    fontFamily: FONTS.medium,
    color: '#7f8c8d',
  },
  emptySubtext: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.regular,
    color: '#666',
    textAlign: 'center',
  },
  list: {
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
  },
  title: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.semiBold,
    marginBottom: 4,
    color: '#000',
  },
  price: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.semiBold,
    color: '#000',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonDisabled: {
    backgroundColor: '#f8f8f8',
  },
  quantityButtonText: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.semiBold,
    color: '#000',
  },
  quantity: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.medium,
    color: '#000',
    minWidth: 20,
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: '#ff3b30',
    padding: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  removeButtonText: {
    color: 'white',
    fontSize: FONT_SIZES.sm,
    fontFamily: FONTS.semiBold,
  },
  footer: {
    backgroundColor: 'white',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
  },
  total: {
    fontSize: FONT_SIZES.xl,
    fontFamily: FONTS.bold,
    textAlign: 'right',
    color: '#000',
  },
  checkoutButton: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: FONT_SIZES.lg,
    fontFamily: FONTS.medium,
  },
}); 