export interface networkConfigItem {
  blockConfirmations?: number;
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem;
}

export const networkConfig: networkConfigInfo = {
  localhost: {
    blockConfirmations: 1,
  },
  hardhat: {
    blockConfirmations: 1,
  },
  goerli: {
    blockConfirmations: 1,
  },
  rinkeby: {
    blockConfirmations: 1,
  },
  kovan: {
    blockConfirmations: 1,
  },
};

export const developmentChains = ["hardhat", "localhost"];
