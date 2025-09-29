export declare enum ChainId {
    MAINNET = 1,
    NUTRIEMP = 432,
    ARBITRUM_ONE = 42161,
    POL = 137
}
export declare const SUPPORTED_CHAINS: readonly [ChainId.MAINNET, ChainId.NUTRIEMP, ChainId.ARBITRUM_ONE, ChainId.POL];
export declare type SupportedChainsType = typeof SUPPORTED_CHAINS[number];
export declare enum NativeCurrencyName {
    ETHER = "ETH",
    POL = "POL",
    GRAMZ = "GRAMZ"
}
