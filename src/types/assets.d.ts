declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  import { StaticImageData } from 'next/image';
  const content: StaticImageData;
  export default content;
}

declare module '*.jpeg' {
  import { StaticImageData } from 'next/image';
  const content: StaticImageData;
  export default content;
}

declare module '*.png' {
  import { StaticImageData } from 'next/image';
  const content: StaticImageData;
  export default content;
}

declare module '*.webp' {
  import { StaticImageData } from 'next/image';
  const content: StaticImageData;
  export default content;
}

declare module '*.svg' {
  import { StaticImageData } from 'next/image';
  const content: StaticImageData;
  export default content;
}

declare module '*.gif' {
  import { StaticImageData } from 'next/image';
  const content: StaticImageData;
  export default content;
}
