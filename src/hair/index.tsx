import React from "react";
import { View } from 'react-native';

import Normal from "./normal";
import Thick from "./thick";
import Mohawk from "./mohawk";
import WomanLong from "./womanLong";
import WomanShort from "./womanShort";
import LowCut from "./lowCut";
import Afro from "./afro";
import AfroLong from "./afroLong";
import AfroLow from "./afroLow";
import AfroPart from "./afroPart";
import Tappered from "./tappered";

export default function hair(props: { style: string, color: string, colorRandom: boolean }): any {
  const { style, color, colorRandom } = props;
  switch (style) {
    case "thick": return <Thick color={color} colorRandom={colorRandom} />;
    case "mohawk": return <Mohawk color={color} colorRandom={colorRandom} />;
    case "lowCut": return <LowCut color={color} />;
    case "womanLong": return <WomanLong color={color} />;
    case "womanShort": return <WomanShort color={color} />;
    case "afro": return <Afro color={color} />;
    case "afroLong": return <AfroLong color={color} />;
    case "afroLow": return <AfroLow color={color} />;
    case "afroPart": return <AfroPart color={color} />;
    case "tappered": return <Tappered color={color} />;
    case "normal": return <Normal color={color} />;
    case "none":
      default:
        return null;
  }
}
