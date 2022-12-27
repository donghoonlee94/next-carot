import type { NextPage } from "next";
import { SWRConfig } from "swr";


interface SWRConfigFallback {
    [key: string]: any;
}

const withSWRConfigFallback: NextPage<{ fallback: SWRConfigFallback }> = ({ fallback, children }) => {
    return (
        <SWRConfig
            value={{ fallback }}
        >
            {children}
        </SWRConfig>
    );
};

export default withSWRConfigFallback;