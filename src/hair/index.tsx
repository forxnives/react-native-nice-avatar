import React from "react";
import { View } from 'react-native';

import Normal from "./normal";
import Thick from "./thick";
import Mohawk from "./mohawk";
import WomanLong from "./womanLong";
import WomanShort from "./womanShort";
import Locks from "./locks";

export default function hair(props: { style: string, color: string, colorRandom: boolean }): any {
  const { style, color, colorRandom } = props;
  switch (style) {
    case "thick": return <Thick color={color} colorRandom={colorRandom} />;
    case "mohawk": return <Mohawk color={color} colorRandom={colorRandom} />;
    case "locks": return <Locks color={color} />;
    case "womanLong": return <WomanLong color={color} />;
    case "womanShort": return <WomanShort color={color} />;
    case "normal":
    default:
      return <Normal color={color} />;
  }
}
