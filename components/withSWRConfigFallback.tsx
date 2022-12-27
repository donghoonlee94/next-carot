import type { NextPage } from "next";
import { SWRConfig } from "swr";


interface SWRConfigFallback {
    [key: string]: any;
}

// const withSWRConfigFallback: NextPage<{ fallback: SWRConfigFallback }> = ({ fallback, children }) => {
//     return (
//         <SWRConfig
//             value={{ fallback }}
//         >
//             {children}
//         </SWRConfig>
//     );
// };

const withSWRConfigFallback = (WrappedComponent: any) => {
    return (props: any) => {
        console.log('WrappedComponent', WrappedComponent);
        console.log('props', props)
        return (
            <SWRConfig
                value={{ fallback: props.fallback }}
            >
                <WrappedComponent {...props} />
            </SWRConfig>
        )
    }
}

export default withSWRConfigFallback;