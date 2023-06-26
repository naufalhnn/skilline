import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import Features from "../components/fragments/features.jsx";

const ComponentPreviews = () => {
  return <Previews palette={<PaletteTree />}>
    <ComponentPreview path="/Features">
      <Features/>
    </ComponentPreview>
  </Previews>;
};

export default ComponentPreviews;
