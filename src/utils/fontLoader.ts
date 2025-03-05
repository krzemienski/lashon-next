import { getAssetPath } from './assetPath';

export function getFontUrl(fontPath: string): string {
  return getAssetPath(`/fonts/${fontPath}`);
}

export function getCustomFontFace() {
  if (typeof document !== 'undefined') {
    const amsterdamFontFace = new FontFace(
      'Amsterdam',
      `url(${getFontUrl('Amsterdam.woff')}) format('woff')`,
      { style: 'normal', weight: 'normal' }
    );
    
    amsterdamFontFace.load().then((loadedFace) => {
      document.fonts.add(loadedFace);
    }).catch((error) => {
      console.error('Error loading Amsterdam font:', error);
    });
  }
}
