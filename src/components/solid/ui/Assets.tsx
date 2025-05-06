import { Dynamic } from "solid-js/web"; 
import {
  DiagonalArrowIcon,
  EmailIcon,
  PhoneIcon
} from "./Icons";

interface attribute_type {
  className?: string;
  fill?: string;
}

interface prop_type {
  assetName: string;
  attribute: attribute_type;
}

// Component Switcher
const options = (assetName: string, attribute: attribute_type) => {
  // Switch Icons Components
  const components = {
    "diagonal-arrow": DiagonalArrowIcon,
    "email": EmailIcon,
    "phone": PhoneIcon
  }

  return (components as any)[assetName](attribute?.className ?? "w-15", attribute?.fill ?? "#000000");
}

const Assets = (props: any) => {
    //Destructure a Props
    const prop_value: prop_type = {
      assetName: props.assetName,
      attribute: props.attribute()
    }

    return (
        <>
            <Dynamic component={() => options(prop_value.assetName, prop_value.attribute)} />
        </>
    )
}

export default Assets;
