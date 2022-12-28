import type { NextPage } from "next";
import { SWRConfig } from "swr";


const withSWRConfigFallback = (WrappedComponent: NextPage) => (props: any) => {
    return (
        <SWRConfig
            value={{ fallback: props.fallback }}
        >
            <WrappedComponent {...props} />
        </SWRConfig>
    )
}

export default withSWRConfigFallback;