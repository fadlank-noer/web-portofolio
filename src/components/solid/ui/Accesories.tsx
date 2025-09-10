/** @jsxImportSource solid-js */

import { Dynamic } from "solid-js/web"; 

const FarLeftSemicircle = () => {
    return (
        <>
            <div class="left-side-semicircle relative z-10 w-[110px] h-[45px]">
                <div 
                    style={
                        "border-radius: 50% / 0 0 100% 100%;"
                    }
                    class="absolute top-16 -left-10 w-full h-full -rotate-35 bg-gradient-to-tr from-[var(--gradient-first)] to-[var(--gradient-second)]"
                >
                </div>
            </div>
        </>
    )
}

const Accesories_1 = () => {
    return (
        <>
            <div class="relative z-1">
              <div 
                style={
                  "border-radius: 50% / 100% 100% 0 0;"
                }
                class="absolute w-70 h-25 -rotate-30 bg-gradient-to-tr from-[var(--gradient-first)] to-[var(--gradient-second)] top-20 lg:top-30 -left-50"   
              >
              </div>
            </div>
        </>
    )
}

const Accesories_2 = () => {
    return (
        <>
            <div class="absolute">
                <div class="relative z-3 -top-7.5 -right-20 -rotate-30 overflow-hidden">
                    <div 
                        style={
                        "border-radius: 50% / 100% 100% 0 0;"
                        }
                        class="relative w-70 h-25 bg-gradient-to-tr from-[var(--gradient-first)]/45 to-[var(--gradient-second)] -top-10"
                    >
                    </div>
                </div>
            </div>
        </>
    )
}

const Accesories_3 = () => {
    return (
        <>
            <div class="absolute">
                <div class="relative z-3 top-24.5 -left-5 -rotate-30 overflow-hidden">
                    <div 
                        class="relative w-70 h-25 bg-gradient-to-tr from-[var(--gradient-first)] to-[var(--gradient-second)]/45 -top-10"
                    >
                    </div>
                </div>
            </div>
        </>
    )
}

const Accesories_4 = () => {
    return (
        <>
            <div class="absolute">
                <div class="relative z-3 top-16 -right-20 -rotate-30 overflow-hidden">
                    <div 
                        style={
                            "border-radius: 50% / 0 0 100% 100%;"
                        }
                        class="relative w-70 h-25 bg-gradient-to-tr from-[var(--gradient-first)]/45 to-[var(--gradient-second)] -bottom-10"
                    >
                    </div>
                </div>
            </div>
        </>
    )
}

const Accesories_5 = () => {
    return (
        <>
            <div class="absolute z-1">
                <div class="relative z-3 top-45.5 -rotate-30 overflow-hidden">
                    <div 
                        style={
                            "border-radius: 50% / 0 0 100% 100%;"
                        }
                        class="relative w-70 h-25 bg-gradient-to-tr from-[var(--gradient-first)]/45 to-[var(--gradient-second)] -bottom-10"
                    >
                    </div>
                </div>
            </div>
        </>
    )
}

const Accesories = (props: any) => {
    // Get Index Props
    const index = (props.assetNumber) - 1

    // List Accesories
    const indexed_accesories = [Accesories_1, Accesories_2, Accesories_3, Accesories_4, Accesories_5, FarLeftSemicircle]

    return (
        <>
            <Dynamic component={() => indexed_accesories[index]()} />
        </>
    )
}

export default Accesories;