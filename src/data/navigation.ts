// Define type for navigation items
export type NavigationItem = {
  name: string;
  href: string;
  external?: boolean;
};

export const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Music', href: '/music' },
  { name: 'Shop', href: 'https://lashonsstore.myshopify.com/', external: true },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const socialLinks = [
  { name: 'Spotify', href: 'https://open.spotify.com/artist/lashonmusic', icon: 'spotify' },
  { name: 'Apple Music', href: 'https://music.apple.com/artist/lashon-music', icon: 'apple' },
  { name: 'SoundCloud', href: 'https://soundcloud.com/lashonmusic', icon: 'soundcloud' },
  { name: 'YouTube', href: 'https://youtube.com/c/lashonmusic', icon: 'youtube' },
  { name: 'Instagram', href: 'https://instagram.com/lashon.music', icon: 'instagram' },
  { name: 'Twitter', href: 'https://twitter.com/lashon_music', icon: 'twitter' },
  { name: 'Facebook', href: 'https://facebook.com/lashonmusic', icon: 'facebook' },
];
