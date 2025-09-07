import Assets from "./Assets";

const RoundedIcon = (props: any) => {
    //Destructure a Props
    const prop_value = {
        assetName: props.assetName,
        rotate: props?.rotate ?? "",
        className: props?.className ?? ""
    }

    //Redirect Route
    function redirectHref() {
        // Get Href Value
        const hrefValue = {
            "x-com": "https://x.com/pertokoan_fdln?t=8YG1YKt2gi6BIHreoFVGoQ&s=09",
            "upwork": "https://www.upwork.com/freelancers/~016d74691736d6db42?mp_source=share",
            "github": "https://github.com/fadlank-noer"
        }

        console.log((hrefValue as any)[prop_value.assetName], "ini adalah linl")

        if(typeof (hrefValue as any)[prop_value.assetName] != undefined) {
            window.open((hrefValue as any)[prop_value.assetName], "_blank")
        }
    }

    return (
        <div 
            className={`cursor-pointer w-15 h-15 bg-(--text-color-two) flex items-center justify-center rounded-full ${prop_value.rotate} ${prop_value.className}`}
            onClick={() => redirectHref()}
        >
            <Assets assetName={prop_value.assetName} />
        </div>
    )
}

export default RoundedIcon;