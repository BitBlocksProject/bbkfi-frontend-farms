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
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery'
  },
  {
    label: 'Buy BBKFI',
    icon: 'IfoIcon',
    href: 'https://exchange.bitblocks.finance//#/swap?inputCurrency=BNB&outputCurrency=0xfc8e68e30350c6603d3d29fcc8e676380c28fcf4',
  },
  {
    label: '+ BBKFI to Metamask',
    icon: 'LayerIcon',
    href: 'https://cutt.ly/addbbkfi',
  },
  {
    label: '+ wBBK to Metamask',
    icon: 'LayerIcon',
    href: 'https://cutt.ly/addwbbk',
  },
  {
    label: 'Roadmap',
    icon: 'RoadmapIcon',
    href: 'https://bitblocks-finance.gitbook.io/bitblocks-finance/roadmap',
  },
  {
    label: 'Tools',
    icon: 'NftIcon',
    items: [
      {
        label: 'Lp Worth calculator',
        href: 'https://bitblocksfinance.web.app/calc.html',
      },
      {
        label: 'Farm stats',
        href: 'https://bitblocksfinance.web.app/farm.html',
      },

    ],
  },
  {
    label: 'Audit by TechRate (Coming Soon)',
    icon: 'AuditIcon',
    href: '#',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Price Chart',
        href: 'https://goswapp-bsc.web.app/0xfc8e68e30350c6603d3d29fcc8e676380c28fcf4'
      },
      {
        label: 'DappRadar (Stats)',
        href: 'https://dappradar.com/binance-smart-chain/defi/bitblocks-finance'
      },
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
  {
    label: 'oldBBFI website',
    icon: 'MoreIcon',
    href: 'https://old.bitblocks.finance',
  },
  {
    label: 'Swap BBFI→BBKFI',
    icon: 'MoreIcon',
    href: 'https://bitblocks-finance.gitbook.io/bitblocks-finance/old-bbfi/how-to-swap-from-oldbbfi-to-bbkfi',
  },
]

export default config
