import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'BBKFI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x6154a783E73Ac4A9C8fcb015C36BcE6CE1Ee6D1e',
    },
    tokenSymbol: 'BBKFI',
    tokenAddresses: {
      97: '',
      56: '0xfc8e68e30350c6603d3d29fcc8e676380c28fcf4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'BBKFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x87188D72cB8c2C2D275958Ff6417dd89b87691E1',
    },
    tokenSymbol: 'BBKFI',
    tokenAddresses: {
      97: '',
      56: '0xfc8e68e30350c6603d3d29fcc8e676380c28fcf4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'WBBK-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x9AA308a70122Bc6453054E83285ed0dea507e967',
    },
    tokenSymbol: 'WBBK',
    tokenAddresses: {
      97: '',
      56: '0x9045b0eda6b6a556cf9b3d81c2db47411714f847',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'WBBK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x51d810d76e46c5acd47f5d22f3dbcc1951eecdc0',
    },
    tokenSymbol: 'WBBK',
    tokenAddresses: {
      97: '',
      56: '0x9045b0eda6b6a556cf9b3d81c2db47411714f847',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
     quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    risk: 5,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 5,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 5,
    lpSymbol: 'WLQX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x96c3Bef501F5ddC82e0717839Dba5F4e1F75429d',
    },
    tokenSymbol: 'WLQX',
    tokenAddresses: {
      97: '',
      56: '0x4495e673eE53c61CE79c35D5e299733639362aEc',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 15,
    risk: 5,
    lpSymbol: 'WLQX-BBKFI LP',
    lpAddresses: {
      97: '',
      56: '0x6d66A8c919663AcdFBC7975294185295ADCf7aE5',
    },
    tokenSymbol: 'WLQX',
    tokenAddresses: {
      97: '',
      56: '0x4495e673eE53c61CE79c35D5e299733639362aEc',
    },
    quoteTokenSymbol: QuoteToken.BBKFI,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 16,
    risk: 5,
    lpSymbol: 'REAU-BBKFI LP',
    lpAddresses: {
      97: '',
      56: '0xf654CBCfE6dF2F6311C048BbAb16a5790BA43997',
    },
    tokenSymbol: 'REAU',
    tokenAddresses: {
      97: '',
      56: '0x4c79b8c9cB0BD62B047880603a9DEcf36dE28344',
    },
    quoteTokenSymbol: QuoteToken.BBKFI,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 17,
    risk: 5,
    lpSymbol: 'REAU-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7Cc956136C36e7Fbd6B74C07d9E40Eccd3779249',
    },
    tokenSymbol: 'REAU',
    tokenAddresses: {
      97: '',
      56: '0x4c79b8c9cB0BD62B047880603a9DEcf36dE28344',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    risk: 5,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    risk: 5,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BBKFI',
    lpAddresses: {
      97: '',
      56: '0x6154a783E73Ac4A9C8fcb015C36BcE6CE1Ee6D1e', // BBKFI-BUSD LP
    },
    tokenSymbol: 'BBKFI',
    tokenAddresses: {
      97: '',
      56: '0xfC8E68E30350c6603D3d29fCc8E676380C28FCf4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524', // BTCB-BNB LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 11,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422', // ETH-BNB LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 12,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
