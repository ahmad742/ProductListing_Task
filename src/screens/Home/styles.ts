import { StyleSheet } from 'react-native';
import { FONTS, FONT_SIZES } from '@theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoIcon: {
    marginRight: 8,
  },
  logoText: {
    fontSize: FONT_SIZES.lg,
    fontFamily: FONTS.bold,
    color: '#000',
    letterSpacing: 1,
  },
  title: {
    fontSize: FONT_SIZES['2xl'],
    fontFamily: FONTS.bold,
    color: '#000',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: FONT_SIZES['2xl'],
    fontFamily: FONTS.bold,
    color: '#000',
    marginBottom: 20,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 12,
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.regular,
    color: '#000',
  },
  list: {
    padding: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    padding: 10,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    padding: 16,
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.md,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  noResultsText: {
    fontSize: FONT_SIZES.xl,
    fontFamily: FONTS.semiBold,
    color: '#000',
    marginBottom: 8,
  },
  noResultsSubtext: {
    fontSize: FONT_SIZES.md,
    fontFamily: FONTS.regular,
    color: '#666',
    textAlign: 'center',
  },
}); 