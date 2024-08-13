import React from "react";
import { View } from 'react-native';
import { Svg, Path, Mask, Rect, Circle, G, ClipPath, Defs } from 'react-native-svg';

export default function hairAfroTappered(props: { color: string }): any {
  const { color } = props;
  return (
    <View
    style={{
      position: "absolute",
      width: "81.6%",
      height: "61.5%",
      bottom: "39.5%",
      left: "9%"
    }}>
      <Svg viewBox="0 0 143 113" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G clipPath="url(#a)">
          <Path
            d="M140.851 43.93c-.68-.34-1.41-.22-2.1-.44a1.12 1.12 0 0 1-.41-.2c-.75-.58.46-1.74 1.01-2.35 1.01-1.11 2.03-2.74 1.16-4.23-.74-1.26-2.19-1.35-3.5-1.35-.53 0-1.39.15-1.66-.37-.12-.25-.15-.58-.12-.95.54-.75.74-1.6.67-2.46l.06-.15c.58-1.54 1.29-3.16-.35-4.34-1.62-1.16-3.64-.71-5.4-.18-1.27.39-2.5.74-3.84.81-.54.03-1.34.15-1.84-.05-.74-.3-.42-.82-.22-1.43.57-1.71.78-3.44.64-5.19.45-1.17.5-2.47-.45-3.46-.21-.22-.46-.4-.69-.6-.07-.06-.37-.34-.38-.37-.01-.05.22-.26.32-.35.25-.25.49-.53.64-.86.64-1.41.07-3.07-1.38-3.69-.72-.3-1.48-.28-2.19 0-.65.26-1.21.65-1.92.75-.75.11-1.51.09-2.24.29-.14.04-.27.09-.41.15-.19-.7-.58-1.26-1.59-1.4-1.1-.15-2.22-.23-3.34-.27 2.15-2.28 4.56-5.53 2.34-7.84-.84-.88-2.78-1.41-3.49-.07-.39.74-.02 1.46.37 2.1.28.46.47.58.35 1.16-.11.54-.68 1.05-1.06 1.41-1.87 1.82-5.59 4.11-8.5 3.32-.32-.18-.66-.36-1.01-.51-.1-.04-.21-.08-.32-.12-1.33-.97-1.16-2.98-2.92-3.55-.63-.2-1.27-.19-1.85 0-.46-2.04-1.67-3.66-4.22-3.36-1.46.17-2.95.93-4.21-.16-1.06-.91-1.73-2.04-3.17-2.4-1.11-.27-2.39 0-2.97 1.08-.16.29-.18.81-.26 1.26-.4.23-.75.52-1.03.86-.29-.17-.48-.59-.62-.9-.52-1.14-1.5-1.87-2.81-1.54-.95.24-1.55.9-1.97 1.7-.79-.67-1.68-1.23-2.69-1.44-.72-.15-1.41-.09-2.09.2-.82.35-1.27.86-2.23.8-1.89-.12-3.85-.73-5.7-1.1-2.08-.41-4.17-.83-6.25-1.24-.24-.05-.45 0-.63.09-2.48-.51-4.92.71-6.45 2.68-1.19 1.53-1.71 3.38-2 5.28-.06.28-.11.57-.12.87-.07.57-.12 1.15-.17 1.72-1.09.28-2.28-.59-3.2-1.09-1.03-.55-2.18-1.03-3.37-.87-1.03.14-1.73.74-2.41 1.49-.25.27-.58.82-.96.91-.43.09-1.1-.38-1.59-.38-2.12.02-3.92 2.74-4.61 4.47-.67 1.68-.41 3.68.96 4.85-.46 1.41-3.52.54-4.41.4-.85-.14-1.72-.19-2.56.05-.83.24-1.54.91-2.39 1.06-1.06.19-1.94-.61-2.8-1.11-.65-.38-1.31-.67-2.07-.77-1.37-.19-2.82.32-3.25 1.75-.31 1.03.07 1.93.67 2.7l.08.11c.37.46.82.87 1.25 1.23.99.84 1.25 1.43 1.04 2.76-.12.78-.27 1.52-.09 2.31.15.65.46 1.25 1 1.65.4.3 1.01.35 1.4.56.09.1.19.19.29.28.07.14.08.33 0 .59-.29.93-1.37 1.78-2.05 2.44-.63.61-1.29 1.18-1.98 1.73-.43.23-.87.46-1.3.7-2.03.08-4.26.45-5.96 1.51-1.44.9-2.31 2.81-1.07 4.27.23.27.5.47.82.61.44.18.92.04 1.33.22.97.44.16 2.16-.47 2.69-.73.61-1.6.75-1.86 1.8-.19.8-.06 1.75.05 2.63-1.96.42-4.07 1.54-3.38 3.93.32 1.1 1.33 1.62 2.41 1.67.58.02 2.14-.27 1.46.81-.33.54-1.52.63-2.06.74-2.59.56-3.41 3.41-2.89 5.79.23 1.07.85 2.03 1.82 2.57.7.39 3.92.64 3.49 1.8-.02.06-.01.11-.03.17-.18.79-1.55.91-2.18 1.13-.89.31-1.79.73-2.2 1.64-.5 1.1-.01 2.24.88 2.97.86.7 2.1.73 3.07 1.16-1.3.82-3.45.58-4.65 1.64-1.17 1.04-1.58 3.08-.24 4.16 1.6 1.28 4.34.53 6.16.24 1.48-.24 3.39-.4 4.67.49-1.87.49-3.91.12-5.83.16-2.01.04-3.97.49-5.46 1.92-.48.46-.33 1.23.2 1.57 1.77 1.13 3.7 1.57 5.78 1.48.71-.03.66.14.8.79.1.47.17.88.35 1.33.32.79 1.28 2.06.41 2.77-.65.53-.17 1.42.44 1.67 1.18.49 2.44.46 3.59.02l.18.24a23.465 23.465 0 0 1 2.45 4.21c.33.709 1.28 1.049 1.99.949.04 0 .07-.02.11-.03.46.05.94-.04 1.34-.27 1.21-.27 2.37 1.21 3.04 2 .88 1.03 1.8 1.9 3.1 2.37 1.27.45 2.83.44 3.9 1.35.99.84 1.5 2.13 2.35 3.09.81.92 2.05 1.64 3.31 1.62 1.13-.02 2.42-.77 2.48-2.01.06-1.25-1.07-2.33-1.5-3.45-.44-1.15-.67-2.37-.69-3.6-.03-2.8 1-5.54 2.99-7.52.03-.03.04-.06.06-.08l.05-.04.05-.04c.05-.04.11-.08.16-.13.22-.17.44-.33.66-.5.42-.31.84-.6 1.28-.89.43-.28.87-.55 1.33-.8.11-.06.23-.12.35-.18.12-.03.24-.05.35-.08.26-.06.52-.15.78-.21.6 0 1.21-.46 1-1.21l-1.74-6.1c-.15-.67-.29-1.34-.41-2.01.07-.12.15-.24.27-.32.52-.36.95-.84 1.47-1.22.51-.37 1.06-.67 1.58-1.03 1.07-.73 2.04-1.59 3.18-2.23 1.47-1.02 2.95-2.04 4.43-3.06.06-.04.09-.08.13-.13l.02-.02s.01-.03.02-.04c.06-.09.07-.2.05-.3-.04-.29-.3-.53-.6-.42-.05 0-.1.01-.15.04a75.34 75.34 0 0 0-7.28 3.84c-.02.01-.03.03-.04.04-1.24.62-2.45 1.3-3.61 2.07l-.02-.17c-.04-.31-.08-.62-.11-.92-.03-.27-.05-.55-.08-.82v-.3c.13-.09.25-.18.38-.26 5.55-2.8 11.09-5.6 16.64-8.4.8-.4.54-1.35-.07-1.7l-.04-.03s-.02 0-.03-.01c-.04-.02-.07-.03-.11-.05-.11-.04-.23-.08-.36-.08-.3-.03-.59.05-.86.17-.24.06-.47.16-.7.26-.07.03-.13.07-.2.11h-.02c-4.76 1.6-9.48 3.44-13.9 5.84 0-.01 0-.02.01-.04-.28.12-.57.25-.85.38.03-.6.08-1.2.14-1.8-.11-.49.22-1.08.72-1.18.29-.06.58-.14.86-.24.13-.05.26-.1.4-.15h.01l.03-.02c.06-.03.13-.06.19-.09.49-.23.98-.47 1.45-.72.81-.42 1.56-.98 2.41-1.31.11-.11.25-.2.45-.25.7-.16 1.36-.45 2.01-.75.7-.33 1.4-.63 2.1-.96 1.51-.7 3.03-1.41 4.63-1.87.05-.02.1 0 .15-.01.06-.03.11-.06.17-.1h.02l.02-.02c.06-.05.11-.1.17-.16.01-.01.06-.07.1-.11l.03-.04c.08-.12.14-.25.21-.37v-.02h.02c.02-.07.05-.14.07-.2.09-.28.15-.57.2-.85v-.05c.02-.07.02-.15.03-.22l.03-.44c.02-.32.03-.64.03-.96.01-.59.01-1.18.08-1.76.01-.12.05-.23.09-.34.18-1.21.22-2.52.91-3.57.73-1.11 2.05-1.57 3.29-1.83 1.75-.38 3.5-.71 5.26-1.04 2.65-1.02 5.11-2.36 7.93-2.94 3.2-.66 6.48-1.16 9.72-1.58 1.37-.18 2.74-.29 4.12-.33.09-.05.18-.1.3-.12 4.72-.77 9.73-.2 14.44.34 1.07.12 2.07.42 3.06.78h.04c.02.01.05.03.07.04.36.13.71.27 1.07.41 1.27 1.07 2.14 2.55 2.9 4.01 1.15 2.21 2.17 4.48 3.07 6.8.1.27.29.48.52.61.18.76 1.23.97 1.71.41 0-1.46.94-2.93 2.82-2.93.71 0 1.28.21 1.72.54.21.12.41.26.57.42.25-.13.5-.26.75-.4.14-.09.29-.17.43-.27l.19-.13.1-.07c-.07.05.12-.1.14-.11.05-.05.11-.09.16-.14.1-.09.2-.19.29-.3l.02-.02s.03-.04.04-.05l.06-.08c.03-.05.07-.11.1-.16.01-.02.02-.03.03-.04.03-.07.04-.16.06-.22.01-.04.01-.05.02-.06v-.06c0-.22 0-.43-.02-.64-.04-.41-.11-.81-.11-1.22 0-.57.48-1 1.02-1.02.55-.02.99.47 1.02.99.61.07 1.21-.05 1.78-.32.11-.05.23-.12.35-.18.44.21 1.1.54 1.12.55.63.22 1.27.23 1.92.07.76-.19 1.57-1.09 1.47-1.93-.11-.88-.4-1.69-.87-2.37.2.1.4.18.64.21.43.06.9 0 1.28-.24.58-.37.94-.91 1.05-1.57.07-.19.14-.39.21-.58.03-.09.04-.18.05-.28.54.16 1.06.41 1.53.83.2.17.41.24.62.24.03.01.05.03.09.04 1.58.33 3.16-.19 4.21-1.43.94-1.11 1.54-2.94-.03-3.72l-.07-.01Z"
            fill={color}
          />
          <Path
            d="M142.58 46.3c0-.94-.34-1.82-1.04-2.51-.38-.37-.84-.68-1.32-.91-.25-.12-.51-.23-.77-.33-.04-.02-.09-.03-.14-.05.02-.08.04-.16.07-.24.06-.19.13-.38.22-.56.23-.45.56-.77.92-1.11.76-.74 1.86-1.95 1.41-3.1 0-.01-.01-.02-.02-.03-.19-.69-.43-1.36-.91-1.91-.55-.63-1.39-.85-2.19-1.01-.43-.08-.87-.15-1.3-.19-.19-.02-.37-.03-.56-.05h-.08s-.02 0-.06-.02c-.1-.02-.2-.05-.29-.07h-.05l-.02-.02-.06-.04v-.13c0-.01.02-.16.02-.18.04-.19.09-.37.16-.54a.69.69 0 0 0 0-.47c.05-.52.13-1.04.27-1.55.17-.63.41-1.23.46-1.89.08-1.06-.41-2.18-1.23-2.85-.97-.8-2.22-.92-3.44-.84-1.23.08-2.44.34-3.58.8h-.12c-.41.08-.82.17-1.23.24-.1.02-.21.04-.31.05 0 0-.13.02-.18.03-.2.03-.39.05-.59.06-.41.03-.83.04-1.24.01-.1 0-.21-.02-.31-.03.18.02-.14-.02-.14-.02-.05 0-.09-.02-.14-.03v-.11c0-.02.01-.12.01-.16.03-.18.07-.35.12-.52.03-.09.06-.18.09-.28.01-.04.01-.04.02-.05l.03-.06c.18-.38.36-.75.5-1.14.17-.5.18-.99.11-1.5-.01-.24 0-.46.04-.66.08-.33.21-.64.29-.97.21-.81.1-1.64-.07-2.45-.18-.85-.56-1.71-1.16-2.33.51-.53.88-1.16.81-1.91-.05-.62-.4-1.25-.7-1.78-.33-.57-.72-1.1-1.29-1.45-2.23-1.39-4.75.03-7.09.25a4.61 4.61 0 0 0-2.19-1.31c-.46-.12-.93-.14-1.41-.12.45-.52.95-1.02 1.33-1.56.88-1.22 1.3-2.8.93-4.28-.18-.7-.54-1.41-1.07-1.91-.64-.62-1.44-.52-2.27-.51-.71.01-1.54-.08-2.15.35-.82.58-.75 1.54-.5 2.4.18.61.22 1.56-.1 2.14-.17.3-.43.56-.66.83l-.96 1.13a.95.95 0 0 0-.1.17c-2.11 1.74-5.07 1.82-7.35.38-.24-.36-.48-.73-.72-1.1-.31-.47-.65-.97-1.09-1.34a3.01 3.01 0 0 0-1.82-.71c-.26-.01-.52 0-.78.04-.21-.49-.47-.95-.84-1.37-.51-.58-1.11-1.16-1.76-1.58-.76-.49-1.61-.56-2.49-.41-.36.06-.71.16-1.06.25-.43.11-.56.14-.96.13h-.03c-.72-.03-1.39-.26-2-.66-.69-.46-1.28-1.02-2.07-1.32-1.68-.64-3.45.01-4.55 1.34-.18.11-.37.21-.55.32-.07-.09-.14-.17-.22-.26-.2-.24-.4-.49-.62-.72-.49-.5-1.1-.81-1.81-.85-1.08-.05-2.11.54-2.98 1.17-.82-.46-1.61-1-2.56-1.15-.64-.1-1.25-.05-1.87.14-.26.08-.51.18-.77.26l-.39.12c-.04 0-.41.08-.23.06-.17.02-.34.09-.49.17-1.01.12-2.14-.18-3.12-.33-1.1-.17-2.2-.33-3.3-.51-1.1-.18-2.2-.36-3.29-.56-1-.18-2.04-.47-3.06-.44-.04 0-.08-.03-.13-.03-1.39-.11-2.68-.05-3.98.5-1.13.49-2.24 1.23-3.07 2.15-1.77 1.94-2.13 4.56-2.34 7.08a.93.93 0 0 0-.12.46v.14c-.62-.23-1.23-.47-1.84-.75-.93-.43-1.84-.8-2.88-.8-1.02 0-2.07.22-2.97.7-.74.39-1.37.96-2.07 1.41-.57-.06-1.15-.1-1.72-.06-.73.05-1.24.36-1.79.82-.85.71-1.67 1.5-2.26 2.45-.63 1.03-.88 2.27-.95 3.47-.07 1.16.4 2.1.95 3.06-.08.03-.16.06-.27.09-.16.05-.46.05-.72.02-.65-.06-1.27-.3-1.91-.42-.75-.14-1.5-.19-2.24 0-.66.17-1.28.51-1.85.88-.04.02-.06.06-.1.09-.49.06-.99.1-1.48.05-.61-.07-1.04-.37-1.55-.67-1.14-.66-2.48-.86-3.78-.8-1.27.05-2.52.39-3.09 1.64-.58 1.29-.18 2.59.23 3.86.09.27.25.44.45.55.01.01.01.03.03.04.45.38.92.73 1.31 1.17l.02.02v.02c.05.05.08.11.12.17.03.06.06.11.09.17v.03c.04.12.08.25.11.38.02.06.03.13.04.19 0 .02.02.12.02.14.14 1.13.08 2.24.54 3.29.17.54.48 1.05.9 1.43.15.13.31.25.47.37l.18.12c.02.01.06.05.09.07.07.07.14.14.21.2.03.07.07.12.1.18l.02.03s.04.1.05.12c.02.06.04.12.05.19v.25c0 .04-.01.08-.02.09a.88.88 0 0 1-.05.15v.02s-.06.08-.08.13c-.04.05-.07.1-.11.13-.01.01-.06.05-.09.07l-.05.03s-.05.02-.08.04c-.03 0-.05.02-.08.02-.14.04-.27.12-.38.22-.65.37-1.22.89-1.78 1.38-.32.28-.64.55-.97.81-.16.13-.33.27-.5.39l-.12.09c-.1.07-.2.15-.3.22-1.31.2-2.62.43-3.89.79-1.19.34-2.61.75-3.46 1.71-.47.53-.76 1.21-.73 1.93.02.63.21 1.27.44 1.86.24.62.56 1.19 1.13 1.57.27.18.58.29.89.4.08.03.15.05.22.08-.08-.03-.06-.01.05.04.04.02.04.03.06.03v.02s0 .02.02.04c0 .01.02.02.03.04 0 .01.02.03.03.04 0 0 .03.07.04.12v.22c0 .02 0 .02-.02.06-.02.05-.03.1-.05.15 0 .02-.03.05-.04.07-.04.06-.07.12-.11.17-.08.13 0 .01-.06.08-.05.05-.09.1-.14.15-.1.1-.2.19-.31.28-.05.04-.05.04 0 0l-.09.06c-.06.04-.12.09-.18.13-.17.13-.34.25-.5.39-1.06.88-1.2 2.21-.97 3.47-.23.1-.46.22-.67.35-.41.24-.82.49-1.2.78-.85.63-1.49 1.63-1.65 2.69-.18 1.15.61 2.13 1.5 2.76.3.21.64.33.99.44-.44.17-.87.4-1.28.66-.78.49-1.29 1.15-1.73 1.95-.43.77-.76 1.59-.79 2.48-.01.46.07.93.14 1.39.06.4.16.77.32 1.14.02.07.03.14.07.2.4.74.85 1.45 1.55 1.94.71.5 1.59.52 2.4.71.2.05.41.1.61.17.08.03.17.06.25.09-.13.04-.26.07-.4.1-.29.06-.56.15-.82.28-.98.06-1.84.67-2.44 1.41-.35.43-.67.91-.8 1.46-.13.59-.06 1.17.09 1.76.26 1.06.94 1.84 1.91 2.32.2.1.41.18.62.27-.71.18-1.45.32-2.14.57-1.75.63-2.24 2.92-1.23 4.4 1.05 1.55 3.21 1.72 4.92 1.48.83-.12 1.61-.45 2.46-.48.45-.02.91-.01 1.36 0 .26 0 .52.01.78.03.13 0 .26.02.39.03h.06c.19.12.41.16.62.14.12.03.23.07.34.12.05.02.1.04.15.07-.46.03-.91.07-1.37.12-.81.09-1.62.11-2.44.09-.81-.02-1.63-.05-2.44.02-.43.04-.86.1-1.28.18-.25.05-.55.08-.8.19-.53.08-1.03.26-1.48.56-.53.34-1.12.78-1.3 1.42-.39 1.43 1.4 2.43 2.51 2.8 1.12.37 2.31.54 3.43.93.05.02.1.03.15.05-.08-.03-.07-.02.04.03.06.03.11.06.16.1 0 0 .05.05.07.08 0 .01.02.04.05.08.05.11.06.12.02.05.02.05.03.1.05.15.13.46.2.9.36 1.34v.08c.03.1.05.19.07.29 0 .04.01.06.02.08v.05c0 .1.01.2.01.3 0 .03-.01.16-.01.18-.07.4-.2.77-.25 1.18-.12 1.04.57 1.9 1.58 2.09.83.15 1.71.11 2.54.01.45-.05.89-.12 1.33-.21.08.51.2 1.02.43 1.5.38.8 1 1.5 1.52 2.21.5.669.96 1.479 1.66 1.969.76.53 1.59.48 2.46.37.79-.1 1.38.04 2 .56.67.56 1.17 1.29 1.77 1.92 1.2 1.26 2.73 1.97 4.43 2.22.03 0 .05.03.09.04 1.03.17 1.47 1.32 2.02 2.08.72.99 1.57 1.87 2.59 2.55.99.66 2.21 1.07 3.4.82 1.1-.23 2.07-1.06 2.36-2.16.01-.05 0-.1 0-.15.02-.07.05-.14.06-.22.07-1.02-.36-1.93-.83-2.81-.5-.93-.8-1.8-.96-2.85-.3-1.86-.69-4.04.18-5.81.06-.11.07-.22.09-.33.44-1.7 1.53-3.07 2.83-4.19.68-.59 1.42-1.14 2.28-1.44.89-.31 1.82-.53 2.74-.77.16.04.32.05.48 0 .55-.15.81-.7.7-1.23l-1.62-7.57c3.61-2.49 7.17-5.06 10.65-7.72.13-.1.24-.23.32-.36a.65.65 0 0 0 .11-.22c0-.03.01-.06.02-.09.02-.09.03-.17.03-.26 0-.03 0-.07-.01-.1-.07-.54-.53-1.06-1.22-.89-1.67.41-3.23 1.23-4.78 1.96-1.62.75-3.24 1.5-4.85 2.29a.47.47 0 0 0-.15.13l-.06.03c-.02 0-.02.03-.04.03-.54.29-1.08.59-1.62.88-.13.07-.27.14-.4.21 0-.14-.01-.27-.02-.41 0-.16-.03-.33-.05-.49 1.09-.82 2.36-1.39 3.59-1.94 1.46-.65 2.92-1.29 4.38-1.94.13-.02.26-.05.38-.11 1.65-.78 3.24-1.67 4.82-2.59 1.43-.84 3.02-1.63 4.14-2.89.36-.4.4-1.02 0-1.41a.844.844 0 0 0-.39-.22c-.21-.09-.45-.12-.69-.08-3.5.56-6.72 2.1-10.02 3.31h-.01c-.09.03-.18.04-.27.08-2.02.85-4.06 1.65-6.12 2.42.03-.12.04-.25.08-.36.05-.15.1-.29.15-.44.79-.36 1.59-.71 2.38-1.07.39-.18.78-.35 1.18-.53l.61-.27c.06-.03.13-.06.19-.09.15-.01.3-.04.44-.11 3.47-1.53 7.04-2.85 10.6-4.16.12-.04.23-.11.32-.18.28-.12.56-.23.83-.38.38-.21.76-.48.98-.87.2-.35.27-.74.34-1.13 0-.03 0-.06.01-.09.08-.47.09-.96.11-1.42l.12-2.63c0-.04-.02-.07-.02-.11.09-.95.13-1.9.14-2.85 4.02-1.49 8.03-3 12.17-4.14 4.42-1.21 8.94-2.08 13.5-2.56 7.19-.77 14.45-.62 21.6.4 0-.02-.01-.04-.02-.06.04 0 .08.02.13.03.02.01.05.03.07.04.04.04.08.07.11.11.04.08.08.17.14.25 2.02 2.56 3.69 5.43 4.93 8.44.02.05.06.1.09.15.53 1.29.98 2.62 1.35 3.97v.14c.08.24.23.48.46.6.24.13.51.18.77.1.2-.06.39-.14.58-.23.12-.06.23-.12.33-.2.17-.12.33-.24.48-.39.08-.08.14-.17.21-.25.28-.22.52-.46.65-.78.18-.44.14-.89.22-1.35-.01.08.03-.14.04-.16v-.02l.02-.02c.07-.12.08-.14.18-.22-.05.04.09-.06.11-.07.07-.04.14-.08.21-.11.02 0 .06-.02.08-.03.09-.02.18-.05.27-.07.34-.05.72-.01 1.06.05.91.17 1.8.45 2.73.46.38 0 .64-.18.79-.43.08-.04.16-.08.23-.12.13-.11.26-.22.4-.32.07-.05.15-.1.23-.15.45-.36.83-.8 1.07-1.33.24-.53.38-1.11.37-1.7 0-.1-.02-.2-.04-.3.4.09.84.08 1.22-.05.32-.11.64-.43.96-.5.33-.07.89.21 1.23.27.94.17 1.92.26 2.8-.17.76-.37 1.28-1.04 1.54-1.83.07-.22.05-.4 0-.57.02-.38 0-.75-.1-1.13-.04-.15-.15-.37-.26-.58.86-.12 1.67-.43 2.19-1.21.13-.19.21-.41.29-.63.57.23 1.1.41 1.72.47 1.97.2 5.59-.41 6.01-2.82.03-.18.01-.35-.03-.52h.02Zm-1.94.13c-.24.67-1.21.93-1.83 1.06-.97.21-2.02.31-2.96-.06-.5-.2-.99-.49-1.55-.37-.52.12-.91.48-1.13.97-.15.35-.15.7-.52.89-.43.22-.97.16-1.44.15-.4 0-.89.31-.96.73-.1.61-.01 1.1.23 1.67.18.43.37.85.29 1.33v.08c-.42.87-1.73.54-2.47.35-.72-.19-1.37-.28-2.06.06-.21.1-.46.34-.69.37-.17.02-.34-.11-.48-.18-.63-.3-1.52-.57-2.04.1-.44.57-.18 1.3-.04 1.92.21.9-.22 1.73-1.01 2.11l-.03.02c-.06.04-.11.09-.17.13h-.02l-.04.04h-.01l-.12.06c-.02.01-.05.02-.07.04-.73-.08-1.45-.31-2.18-.42-.94-.13-1.92-.09-2.74.42-.82.51-1.25 1.28-1.34 2.23-.01.15-.02.39-.03.49v.03l-.04.02s-.05.03-.08.05c-.31-.99-.65-1.96-1.04-2.92-.06-.13-.12-.25-.19-.35a38.993 38.993 0 0 0-5.13-8.75l-.06-.15c-.1-.15-.22-.3-.35-.42-.14-.12-.29-.24-.45-.33-.12-.06-.24-.11-.37-.16a.88.88 0 0 0-.15-.05c-.18-.05-.38-.07-.57-.08-.05 0-.09.02-.13.03-7.12-.98-14.34-1.14-21.49-.37-4.51.48-8.98 1.29-13.37 2.46-4.62 1.22-9.07 2.93-13.55 4.58-.17.06-.29.16-.4.26-.21.18-.35.43-.35.74.01 1.21-.04 2.42-.15 3.62 0 .07 0 .13.02.2-.03.75-.07 1.49-.1 2.24-.02.38-.03.75-.06 1.13 0 .04 0 .08-.01.11v.07c-.01.04-.03.08-.03.11-.01.05-.03.09-.04.13a.99.99 0 0 1-.11.17c-.03.05-.04.1-.06.15-.23.14-.47.27-.71.38-.02 0-.05.02-.07.03a.92.92 0 0 0-.24.13c-3.54 1.31-7.07 2.63-10.52 4.14h-.12c-.44.08-.87.35-1.28.53l-1.26.57c-.82.37-1.63.73-2.45 1.1-.44.08-.79.41-.84.87-.03.19-.1.37-.17.55-.07.2-.14.41-.19.62-.12.48-.18.98-.2 1.48 0 .05.02.1.03.16-.1.2-.14.43-.07.67.13.49.72.88 1.23.7 2.62-.96 5.21-1.98 7.78-3.06.04 0 .09 0 .13-.01 1.32-.48 2.62-1.02 3.94-1.52-1.02.58-2.06 1.13-3.12 1.64-.09.02-.19.04-.28.08-1.62.72-3.24 1.43-4.85 2.15-1.43.63-2.8 1.33-4.02 2.3-.01 0-.03 0-.04.01-.21.14-.4.34-.46.6l-.04.27c0 .1.02.2.05.3.06.13.08.27.11.41.04.42.04.86.06 1.28 0 .1.03.2.06.3-.02.19-.05.39-.07.58 0 .06.03.1.04.16v.12c0 .03.03.06.04.09v.02s0 .01.01.02c.04.08.09.16.15.24.02.02.02.05.04.07.01.01.03.02.05.03.25.24.6.37.93.24.71-.27 1.38-.63 2.05-.99.64-.35 1.28-.7 1.92-1.04.01 0 .02-.02.03-.03.24-.13.47-.26.72-.38.01 0 .02-.02.03-.03.22-.1.45-.21.67-.32-1.43 1.02-2.86 2.04-4.31 3.03a.96.96 0 0 0-.44.94c-.02.13-.02.27.01.41.5 2.31.99 4.62 1.49 6.94-.85.21-1.7.43-2.52.74-1.1.42-2.04 1.1-2.93 1.87-1.55 1.34-2.83 3.06-3.35 5.06-.01.05 0 .1 0 .15-.87 1.99-.68 4.119-.39 6.239.16 1.14.35 2.25.84 3.3.38.81 1 1.58 1 2.5-.15.55-.77.82-1.37.75-.88-.1-1.68-.74-2.3-1.32-.7-.66-1.19-1.43-1.73-2.22-.6-.88-1.39-1.73-2.49-1.91h-.18c-.09-.03-.18-.06-.28-.07-1.47-.19-2.63-1.03-3.58-2.12-.94-1.08-1.94-2.28-3.42-2.59-.76-.16-1.45.06-2.21.07-.65 0-.97-.68-1.32-1.15-.48-.65-1.01-1.29-1.45-1.98-.33-.52-.46-1.06-.52-1.64.15-.36.09-.78-.21-1.09-.69-.71-1.61-.34-2.44-.18-.44.08-.53.1-.98.14-.4.03-.81.05-1.21.04h-.26s-.15-.01-.18-.01c-.04 0-.08-.02-.12-.03v-.03c.01-.06.02-.12.04-.18.1-.41.21-.81.22-1.24.01-.44-.06-.88-.18-1.3 0-.02-.02-.03-.03-.05-.02-.07-.03-.15-.07-.22.06.13-.04-.13-.05-.16-.03-.1-.05-.21-.08-.31-.05-.21-.08-.42-.13-.63-.13-.5-.38-.98-.76-1.33-.77-.7-1.9-.86-2.87-1.12-.92-.24-1.9-.4-2.61-.92l-.03-.02c.13-.09.33-.22.49-.3.05-.02.07-.04.18-.07.03 0 .18-.04.23-.05.14 0 .29-.02.41-.08.02 0 .06-.02.14-.04.08-.02.17-.04.25-.05a7.295 7.295 0 0 1 1.51-.19c.76-.03 1.51 0 2.27.01 1.51.02 3-.32 4.51-.23.33.02.62-.18.8-.44.2-.18.33-.43.34-.73.02-.39.01-.79-.09-1.17-.05-.2-.14-.41-.25-.59a2.11 2.11 0 0 0-.58-.61c-.3-.22-.67-.37-1.01-.49-.24-.09-.49-.14-.74-.18-.4-.12-.86-.12-1.28-.14-.83-.04-1.69-.06-2.52.03-.75.09-1.45.38-2.19.48-.74.1-1.59.09-2.29-.16-.52-.18-.88-.61-.82-1.19.06-.65.39-.69.96-.84 1.39-.37 2.86-.6 4.06-1.45.28-.2.45-.5.47-.82 0-.02.02-.03.02-.05.11-.5-.15-1.12-.7-1.23-.8-.16-1.59-.37-2.35-.66l-.05-.02-.05-.02c-.08-.04-.17-.08-.25-.12-.12-.07-.24-.14-.35-.22-.03-.02-.1-.09-.12-.1l-.11-.12-.09-.15c-.03-.06-.03-.06 0 0-.02-.05-.04-.1-.05-.15-.06-.18-.1-.37-.14-.56l-.02-.11c0 .06 0 .06 0 0s0-.11-.01-.17v-.11c0-.05.02-.12.02-.13.01-.05.01-.06.01-.07 0-.01.01-.01.03-.05.04-.09.09-.17.15-.25 0-.01.07-.1.09-.14.03-.03.1-.12.11-.13.06-.07.13-.14.19-.21.06-.07.14-.13.21-.19.02-.02.03-.03.04-.03l.03-.01c.07-.04.13-.09.2-.13.04-.02.27-.1.1-.05.06-.02.11-.03.16-.04.31.06.63-.01.89-.25-.16.15-.04.05.01 0 .07-.02.14-.04.2-.05.19-.05.39-.07.58-.12.51-.14 1.02-.42 1.29-.89.29-.51.34-1.22.19-1.78-.18-.66-.75-.95-1.34-1.17-.42-.16-.86-.27-1.3-.36-.23-.05-.47-.09-.71-.13-.19-.03-.48-.05-.65-.15a.982.982 0 0 0-.1-.07l-.09-.06c-.06-.04-.04-.03.06.05-.12-.04-.34-.31-.41-.42.13.23-.03-.05-.06-.1-.06-.08-.11-.17-.16-.25-.1-.16-.19-.33-.28-.5-.01-.03-.01-.06-.03-.09.04.08-.02-.06-.03-.07l-.06-.22c-.03-.15-.06-.3-.08-.45-.04-.28-.08-.54-.08-.86 0-.26.05-.46.15-.77.09-.25.21-.48.36-.76.15-.27.29-.54.48-.79.1-.14.28-.29.48-.42.26-.17.53-.33.8-.47.12-.06.24-.12.29-.13.07-.02.14-.05.22-.07.02 0 .23-.04.13-.03.19-.02.36-.09.52-.19.15 0 .31-.04.44-.13.52-.34 1.1-.68 1.1-1.38 0-.66-.55-1.07-1.07-1.35-.43-.23-.9-.41-1.37-.54-.45-.13-.63-.21-.94-.53-.16-.17-.23-.21-.31-.4.05.12-.01-.11 0-.04 0 .02.02-.12.03-.14.08-.31.32-.79.47-.97.27-.33.59-.49.99-.74.21-.13.42-.25.63-.37.09-.05.17-.1.26-.14.02 0 .01 0 .02-.01h.08c.49.02.89-.39.97-.85.19-.24.29-.55.2-.87-.09-.33-.17-.64-.18-.92 0-.14 0-.27.01-.41 0-.03.02-.11.03-.13l.06-.2.04-.09.09-.15c.01 0 .05-.05.07-.07.07-.06.13-.12.2-.18l.02-.02.03-.02.22-.16c.17-.12.33-.25.49-.38 1.09-.9 1.8-2.55.91-3.85-.01-.02-.04-.03-.05-.05-.32-.5-.82-.78-1.37-.99-.22-.08-.34-.12-.52-.24.12.08-.11-.14-.02-.02-.07-.08-.12-.19-.17-.28-.08-.16-.02-.01-.07-.17-.04-.11-.07-.21-.1-.32-.08-.25-.17-.51-.21-.77-.06-.42.07-.64.38-.9.29-.24.75-.42 1.14-.56.57-.21 1.15-.38 1.73-.53 1.13-.29 2.28-.48 3.43-.65.08-.01.14-.06.21-.09.02 0 .04-.02.06-.03.03-.02.06-.03.09-.05.01 0 .03-.01.04-.02.75-.55 1.47-1.13 2.18-1.74.3-.26.59-.53.89-.77.03-.02.18-.14.06-.05l.04-.03c.08-.06.17-.12.25-.18.17-.11.35-.21.53-.3.01 0 .02-.02.02-.02 1.22-.57 1.88-1.97 1.54-3.31-.19-.75-.67-1.36-1.28-1.81-.11-.08-.22-.16-.34-.24 0 0-.07-.06-.11-.09-.05-.05-.09-.1-.14-.15v-.02c-.05-.07-.1-.14-.14-.21-.03-.06-.08-.26-.03-.06-.02-.08-.05-.15-.07-.23-.02-.07-.07-.14-.1-.2 0-.02-.02-.05-.03-.07-.05-.15-.09-.29-.12-.44-.01-.07-.03-.14-.04-.2V30c-.02-.16-.03-.31-.04-.47-.04-.63-.06-1.25-.18-1.87-.13-.65-.41-1.23-.83-1.74-.39-.48-.91-.85-1.38-1.25-.02-.02-.06-.03-.08-.05-.25-.7-.59-1.59-.19-2.22.18-.3.51-.35.85-.38a8.13 8.13 0 0 1 1.56 0c.44.05.91.15 1.31.34.5.24.93.57 1.44.78 1.06.43 2.2.35 3.31.22.28-.03.54-.15.72-.34.49-.32 1-.63 1.59-.71.6-.08 1.29.13 1.91.28 1.44.36 3 .48 4.16-.63.23-.22.31-.47.3-.7.18-.27.24-.62.03-.99-.46-.8-1.03-1.54-.99-2.51.04-.87.22-1.79.68-2.54.43-.71 1.05-1.28 1.67-1.81.16-.13.31-.3.49-.4.17-.1.3-.08.49-.08.56 0 1.11.03 1.66.1.23.03.45-.07.62-.22.71-.43 1.33-.99 2.04-1.41.69-.4 1.51-.53 2.29-.51.79.03 1.5.44 2.21.76.91.4 1.84.77 2.79 1.08.04.01.07 0 .11.02h.03c.37.07.66-.07.84-.31.07-.07.15-.14.2-.23.06-.12.11-.24.13-.37.02-.15.09-.28.13-.42.06-.22.09-.45.1-.67v-.18c.04-.11.07-.22.08-.33.17-2.06.33-4.45 1.79-6.06a7.3 7.3 0 0 1 2.4-1.72c.96-.43 1.94-.43 2.96-.36.09.02.18.05.3.04 1.13-.06 2.29.31 3.39.5s2.19.38 3.29.55c1.1.17 2.2.34 3.3.5 1.2.18 2.36.41 3.57.21.2-.03.33-.12.45-.22.33-.08.65-.17.99-.29.22-.08.45-.15.67-.2.07-.01.13-.03.2-.04-.1.02-.09.02.03 0h.34l.2.06c.12.03.24.07.35.12.03.01.17.08.17.08.13.06.25.13.37.2.47.26.92.56 1.41.79.02 0 .04.01.06.02.3.16.68.21.96 0 .54-.42 1.15-.86 1.79-1.12-.1.04.12-.03.14-.04l.22-.06h.24c-.09 0 .17.04.07 0 .06.02.13.07.18.1l.08.07c.07.07.13.14.2.21.25.28.48.57.72.85.3.35.56.72 1.05.79.46.07.85-.2 1.23-.42.34-.19.67-.38 1.01-.57.22-.12.36-.33.43-.56.28-.28.69-.5 1.1-.56.64-.1 1.2.15 1.71.51.56.4 1.07.85 1.69 1.14.76.35 1.55.54 2.38.57.02 0 .04-.01.07-.01.67 0 1.31-.17 1.96-.33.16-.04.32-.07.48-.1h.06c.08 0 .16-.01.25-.01h.12c.04 0 .17.03.19.04.02 0 .07.02.09.02.07.03.14.07.21.11.06.04.12.08.18.11.02.02.03.02.03.02l.02.02c.13.1.24.21.36.32.24.22.48.45.7.69.23.24.31.33.47.62.13.23.23.58.33.9.15.5.71.87 1.23.7h.01c.2-.05.41-.09.61-.12h-.01.05c.09-.02.06 0 .02 0 .03 0 .06-.01.08-.01.11 0 .22-.01.33 0h.12l.14.03c.01 0 .08.03.11.04h.01c.05.04.1.07.15.1 0 0 .07.08.09.09.07.07.13.14.2.21.03.04.07.08.1.12.14.19.28.39.41.59.26.4.51.81.79 1.2.03.04.07.07.11.11.01.01.03.02.04.04.05.05.09.1.15.14.04.03.06.07.1.1 3.11 2.08 7.2 1.74 10.01-.66.11-.1.18-.22.23-.36.39-.45.78-.9 1.16-1.36.44-.53.82-1.07.93-1.77.12-.73.16-1.48.04-2.21 0-.06-.08-.41-.15-.65.37-.01 1.37-.05 1.66-.04l.09.09c.06.07.1.15.15.22.13.22.21.43.27.67.26 1.03-.2 2.08-.84 2.9-.74.94-1.55 1.77-2.1 2.82-.19.2-.31.46-.3.72 0 .04.02.07.02.1 0 .02 0 .03.01.05.06.33.24.57.51.7.02.01.03.02.05.03.02 0 .03.01.05.02.04.02.08.04.13.05h.1c.05 0 .09.03.13.03.25.03.5.03.75 0 .13-.01.25-.03.38-.04l.36-.05h.02c.24-.03.49-.06.74-.06h.28l.12.03c.19.04.37.1.56.16.04.02.08.04.13.06l.27.15c.07.04.13.09.19.13.01.02.14.12.16.14.08.07.15.15.22.22.03.03.05.06.08.09v.02s.07.06.1.09c.04.06.1.11.16.16.02.02.04.03.06.04.06.04.12.08.2.1.2.09.42.11.64.04.92-.06 1.82-.27 2.71-.5.89-.22 1.85-.46 2.77-.28.35.07.7.18.94.46.27.33.48.74.65 1.13.14.31.18.34-.05.63-.2.26-.51.47-.79.66-.1.07-.19.16-.26.25-.12.11-.22.25-.26.42-.12.51.15 1.1.7 1.23.06.01.13.03.19.05.11.04.12.04.03.01.04.02.32.22.2.12.09.08.18.17.25.26.02.03.09.13.1.15.16.26.2.36.29.68.08.27.14.55.18.82.09.53.04.96-.14 1.51-.21.63-.32 1.28-.25 1.94 0 .08.04.16.06.24v.05c-.03-.22-.04.11-.02.1-.01.07-.03.14-.05.21l-.09.27c.07-.18-.07.16-.09.19-.2.42-.4.85-.52 1.3-.27.99-.35 2.34.68 2.93.43.25.93.31 1.42.36.48.05.96.06 1.44.02.9-.06 1.79-.23 2.67-.41.12.01.24 0 .35-.04.9-.36 1.89-.63 2.82-.72.49-.04 1.01-.08 1.5-.02.09.01.41.08.57.14-.02 0 .15.08.17.09 0 0 .14.1.16.11.07.06.13.12.19.18l.05.05s.01.03.04.07c.04.08.09.15.13.23 0 .02.07.16.07.18l.06.25v.18c0 .2-.04.34-.1.56-.3 1.08-.58 2.12-.66 3.25-.27.84-.28 1.88.36 2.53.66.67 1.6.74 2.49.82.09 0 .17.02.26.03h.08s.02 0 .07.01c.21.03.41.07.62.11.2.04.4.09.59.14.09.03.18.05.27.09-.17-.07.09.06.11.06.03.02.03.01.04.02l.02.03c.02.02.06.07.09.1.07.11.13.22.19.33.01.03.03.06.04.09.02.07.05.13.07.2.05.16.1.33.14.49-.04.07-.07.13-.12.2-.12.18-.26.36-.41.53-.34.39-.75.71-1.07 1.11-.61.76-1.21 1.93-1.19 2.93.02 1.25 1.24 1.4 2.11 1.84.57.29 1.4.9 1.3 1.62v.14h.05Z"
            fill="#000"
          />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill={color} d="M0 0h142.63v112.52H0z" />
          </ClipPath>
        </Defs>
      </Svg>

    </View>
  );
}