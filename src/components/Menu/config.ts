import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "/",
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: "Exchange",
        href: "http://exchange.bitblocks.finance//#/swap",
      },
      {
        label: "Liquidity",
        href: "http://exchange.bitblocks.finance//#/pool",
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Blocks Factory',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Lottery (Coming Soon)',
    icon: 'TicketIcon',
    href: '#'
  },
  {
    label: 'Buy BBKFI',
    icon: 'IfoIcon',
    href: 'https://exchange.bitblocks.finance//#/swap?inputCurrency=BNB&outputCurrency=0xfc8e68e30350c6603d3d29fcc8e676380c28fcf4',
  },
  {
    label: 'Roadmap',
    icon: 'RoadmapIcon',
    href: 'https://bitblocks-finance.gitbook.io/bitblocks-finance/roadmap',
  },
  {
    label: 'old BBFI',
    icon: 'GroupsIcon',
    href: 'https://old.bitblocks.finance',
  },
  {
    label: 'Swap BBFI→BBKFI',
    icon: 'MoreIcon',
    href: 'https://bitblocksproject.gitbook.io/bitblocks-finance/tokenomics/how-to-swap-from-oldbbfi-to-bbkfi',
  },
  {
    label: 'Tools',
    icon: 'NftIcon',
    href: 'https://bitblocksfinance.web.app',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://bitblocks-finance.gitbook.io/bitblocks-finance/',
      },
      {
        label: 'Github',
        href: 'https://github.com/BitBlocksProject',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xfC8E68E30350c6603D3d29fCc8E676380C28FCf4',
      },

    ],
  },
]

export default config
