export const BORDER_RADIUS = 4;
export const APP_NAME = 'XXX | Staking';

export const LG_BREAKPOINT = 'md';
export const SM_BREAKPOINT = 'sm';

export const IS_DEV = process.env.NODE_ENV === 'development';

export const CACHE_WALLET_KEY = 'wallet';

export const NETWORK_MAINNET = 'mainnet';
export const NETWORK_GOERLI = 'goerli';
export const AVAILABLE_NETWORKS = [NETWORK_MAINNET, NETWORK_GOERLI];

export const TOKEN_0_ADDRESS: Record<string, string> = {
  [NETWORK_GOERLI]: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  [NETWORK_MAINNET]: '0x56ee175fe37cd461486ce3c3166e0cafccd9843f',
};

export const TOKEN_1_ADDRESS: Record<string, string> = {
  [NETWORK_GOERLI]: '0x410d8333dfcc1636678c7ce9c0c473bc7bd2e2c7',
  [NETWORK_MAINNET]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
};

export const NFT_POSITIONS_MANAGER_ADDRESS: Record<string, string> = {
  [NETWORK_GOERLI]: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  [NETWORK_MAINNET]: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
};

export const STAKING_REWARDS_ADDRESS: Record<string, string> = {
  [NETWORK_GOERLI]: '0xe34139463bA50bD61336E0c446Bd8C0867c6fE65',
  [NETWORK_MAINNET]: '0x9213d5c6d737Fc2744db9d67037fE90D76Cb0F77',
};

export const SUBGRAPHS: Record<string, string> = {
  [NETWORK_GOERLI]:
    'https://api.thegraph.com/subgraphs/name/wshbair/uniswap-v3-subgraph',
  [NETWORK_MAINNET]:
    'https://api.thegraph.com/subgraphs/name/vbstreetz/witswap-staking',
};
