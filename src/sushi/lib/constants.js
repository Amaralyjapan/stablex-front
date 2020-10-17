import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}


export const contractAddresses = {
  sushi: {
    97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
    56:  '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4'
    // 56: '0xbbB2aaEB8c9dA72bb7faDB42A9c84AACF26974Fd'
  },
  syrup: {
    97: '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    56:  '0x009cF7bC57584b7998236eff51b98A168DceA9B0'
  },
  masterChef: {
    97: '0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9',
    56: '0xC80991F9106e26e43Bf1C07C764829a85f294C71', //  real cake
    // 56: '0x39447351Fe7939C064CDD9A258F22FC76233E28e'
  },
  sousChef: {
    97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
    56: '0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95', //  real cake
  },
  weth: {
    97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  },
  lottery: {
    97: '0xCd1D9c9bD049C882A05353b7C646F423e1603Ce1',
    56:  '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'
  },
  lotteryNFT: {
    97: '0x329Ca0d33261d6F3144Ae7540e44b5044dDeb1bd',
    56:  '0x009cF7bC57584b7998236eff51b98A168DceA9B0'
  }
}

export const sousChefTeam = [
]

// BUSD-BNB LP
// 0x1b96b92314c44b159149f7e0303511fb2fc4774f
// BAKE-BNB LP
// 0x3da30727ed0626b78c212e81b37b97a8ef8a25bb
// BUSD-BAKE LP
// 0xe2d1b285d83efb935134f644d00fb7c943e84b5b

// 56 MAINNET
export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x7FB0017195470bc6978659396eC9D750A35C51fE'
    },
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4'
    },
    name: 'STAX STAKING',
    tokenSymbol: 'STAX',
    symbol: 'STAX-BNB FLIP',
    multiplier: '5X'
  },
  {
    pid: 1,
    lpAddresses: {
      97: '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
      56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd'
    },
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
    },
    name: 'Cake STAKING',
    symbol: 'BUSD-USDT FLIP',
    tokenSymbol: 'BUSD',
    multiplier: '3X'
  },
  {
    pid: 2,
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC'
    },
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
    },
    name: 'Cake Party!',
    symbol: 'BUSD-DAI FLIP',
    tokenSymbol: 'DAI',
    multiplier: '3X'
  },
  {
    pid: 3,
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0xb3c4217AB2b265bF8c69718D280E3708b5E50577'
    },
    tokenAddresses: {
      97: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      56: '0x55d398326f99059ff775485246999027b3197955'
    },
    name: 'Cake Party!',
    symbol: 'USDT-DAI FLIP',
    tokenSymbol: 'USDT',
    multiplier: '3X'
  },
]

export const forShowPools = [
  {
    pid: 0,
    name: 'Oranges Party!',
    symbol: 'STAX-BNB',
    tokenSymbol: 'STAX',
    multiplier: '5X'
  },
  {
    pid: 1,
    symbol: 'BUSD-USDT',
    tokenSymbol: 'ADA',
    multiplier: '3X'
  },
  {
    pid: 2,
    symbol: 'BUSD-DAI',
    tokenSymbol: 'ADA',
    multiplier: '3X'
  },
  {
    pid: 3,
    symbol: 'USDT-DAI',
    tokenSymbol: 'DAI',
    multiplier: '3X'
  },
]
