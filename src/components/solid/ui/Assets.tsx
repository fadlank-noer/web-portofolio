import { createSignal } from "solid-js";
import { Dynamic } from "solid-js/web"; 

interface attribute_type {
  className?: string;
  fill?: string;
}

interface prop_type {
  assetName: string;
  attribute: attribute_type;
}

const DiagonalArrow = (className: string, fill: string) => {
    return (
        <svg class={`${className}`} viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.0002 0.80011V2.72011H11.3266L0.200195 13.8465L1.5538 15.2001L12.6802 4.07371V10.4001H14.6002V0.80011H5.0002Z" fill={fill}/>
        </svg>
    )
}

const Email = (className, fill) => {

}

// Component Switcher
const options = (assetName: string, attribute: attribute_type) => {
  console.log("Apakah saya membaca attr?", attribute);  

  // Switch
    const components = {
        "diagonal-arrow": DiagonalArrow
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
