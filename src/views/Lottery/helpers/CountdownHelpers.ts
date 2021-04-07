import getTimePeriods from 'utils/getTimePeriods'

// lottery draws UTC: 20:00
const lotteryDrawHoursUtc = 20;

const getClosestLotteryHour = (currentHour) => {
return lotteryDrawHoursUtc
}

const getNextLotteryDrawTime = (currentMillis) => {
  const date = new Date(currentMillis)
  const currentHour = date.getUTCHours()
  const nextLotteryHour = getClosestLotteryHour(currentHour)
  // next lottery is tomorrow if the next lottery is at 2am UTC...
  // ...and current time is between 02:00am & 23:59pm UTC
  const nextLotteryIsTomorrow = nextLotteryHour === 20 && currentHour >= 20
  let millisTimeOfNextDraw

  if (nextLotteryIsTomorrow) {
    const tomorrow = new Date(currentMillis)
    const nextDay = tomorrow.getUTCDate() + 1
    tomorrow.setUTCDate(nextDay)
    millisTimeOfNextDraw = tomorrow.setUTCHours(nextLotteryHour, 0, 0, 0)
  } else {
    millisTimeOfNextDraw = date.setUTCHours(nextLotteryHour, 0, 0, 0)
  }

  return millisTimeOfNextDraw
}

// @ts-ignore
const getNextTicketSaleTime = (currentMillis) => (parseInt(currentMillis / 3600000) + 1) * 3600000
const hoursAndMinutesString = (hours, minutes) => `${parseInt(hours)}h, ${parseInt(minutes)}m`

export const getTicketSaleTime = (currentMillis): string => {
  const nextTicketSaleTime = getNextTicketSaleTime(currentMillis)
  const msUntilNextTicketSale = nextTicketSaleTime - currentMillis
  const { minutes } = getTimePeriods(msUntilNextTicketSale / 1000)
  const { hours } = getTimePeriods(msUntilNextTicketSale / 1000)
  return hoursAndMinutesString(hours, minutes)
}

export const getLotteryDrawTime = (currentMillis): string => {
  const nextLotteryDrawTime = getNextLotteryDrawTime(currentMillis)
  const msUntilLotteryDraw = nextLotteryDrawTime - currentMillis
  const { minutes } = getTimePeriods(msUntilLotteryDraw / 1000)
  const { hours } = getTimePeriods(msUntilLotteryDraw / 1000)
  return hoursAndMinutesString(hours, minutes)
}

export const getTicketSaleStep = () => (1 / 12) * 100

export const getLotteryDrawStep = (currentMillis) => {
  const msBetweenLotteries = 86400000
  const endTime = getNextLotteryDrawTime(currentMillis)
  const msUntilLotteryDraw = endTime - currentMillis
  const percentageRemaining = (msUntilLotteryDraw / msBetweenLotteries) * 100
  return 100 - percentageRemaining
}
