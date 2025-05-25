import { StyleSheet } from 'react-native';
import { FONTS, FONT_SIZES } from '@theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    padding: 10,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  emptyText: {
    fontSize: FONT_SIZES.xl,
    fontFamily: FONTS.semiBold,
    color: '#000',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.regular,
    color: '#666',
    textAlign: 'center',
  },
}); 