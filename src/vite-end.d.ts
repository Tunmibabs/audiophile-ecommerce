/// <reference types="vite/client" />

declare module '*.svg' {
  const content: string;
  export default content;
}

// You can add other file types here too
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}