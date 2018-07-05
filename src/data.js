import { catalog } from 'pictures'
import { csvParse } from 'd3-dsv'
import fetchRetry from 'fetch-retry'

const pictures = [
  {
    key: 'KIM_DUCK_BLUE',
    front: catalog.KIM_DUCK_BLUE_1,
    back: catalog.KIM_DUCK_BLUE_2,
    sizes: [],
  },
  {
    key: 'KIM_SAREE_IVORY',
    front: catalog.KIM_SAREE_IVORY_1,
    back: catalog.KIM_SAREE_IVORY_2,
    sizes: [],
  },
  {
    key: 'KIM_SAREE_PINK_1bis',
    front: catalog.KIM_SAREE_PINK_1bis,
    back: catalog.KIM_SAREE_PINK_2,
    sizes: [],
  },
  {
    key: 'KIM_SAREE_ROYAL_BLUE',
    front: catalog.KIM_SAREE_ROYAL_BLUE_1,
    back: catalog.KIM_SAREE_ROYAL_BLUE_2,
    sizes: [],
  },
  {
    key: 'KIM_SAREE_SWEET_RED',
    front: catalog.KIM_SAREE_SWEET_RED_1,
    back: catalog.KIM_SAREE_SWEET_RED_2,
    sizes: [],
  },
  {
    key: 'KIM_SAREE_TERRACOTA',
    front: catalog.KIM_SAREE_TERRACOTA_1,
    back: catalog.KIM_SAREE_TERRACOTA_2,
    sizes: [],
  },
  {
    key: 'KIM_SKY_BLUEGOLD',
    front: catalog.KIM_SKY_BLUEGOLD_1,
    back: catalog.KIM_SKY_BLUEGOLD_2,
    sizes: [],
  },
  {
    key: 'KIM_SWEET_GREEN_AND_CO',
    front: catalog.KIM_SWEET_GREEN_AND_CO_1,
    back: catalog.KIM_SWEET_GREEN_AND_CO_2,
    sizes: [],
  },
  {
    key: 'KIM_WHITE',
    front: catalog.KIM_WHITE_1,
    back: catalog.KIM_WHITE_2,
    sizes: [],
  },
  {
    key: 'KIM_YELLOW',
    front: catalog.KIM_YELLOW_1,
    back: catalog.KIM_YELLOW_2,
    sizes: [],
  },
  {
    key: 'KIM_YELLOW_GOLD',
    front: catalog.KIM_YELLOW_GOLD_1,
    back: catalog.KIM_YELLOW_GOLD_2bis,
    sizes: [],
  },
  {
    key: 'CROP_GREENYELLOW_IRI',
    front: catalog.CROP_GREENYELLOW_IRI_1,
    back: catalog.CROP_GREENYELLOW_IRI_2,
    sizes: [],
  },
  {
    key: 'CROP_ORANGEBLUE_IRI',
    front: catalog.CROP_ORANGEBLUE_IRI_1bisbisbis,
    back: catalog.CROP_ORANGEBLUE_IRI_2,
    sizes: [],
  },
  {
    key: 'CROP_PINKYELLOW_IRI',
    front: catalog.CROP_PINKYELLOW_IRI_1,
    back: catalog.CROP_PINKYELLOW_IRI_2,
    sizes: [],
  },
  {
    key: 'CROP_SALMON_PINK',
    front: catalog.CROP_SALMON_PINK_1,
    back: catalog.CROP_SALMON_PINK_2,
    sizes: [],
  },
  {
    key: 'CROP_SAREE_SWEET_RED',
    front: catalog.CROP_SAREE_SWEET_RED_1,
    back: catalog.CROP_SAREE_SWEET_RED_2,
    sizes: [],
  },
  {
    key: 'CROP_YELLOW',
    front: catalog.CROP_YELLOW_1,
    back: catalog.CROP_YELLOW_2,
    sizes: [],
  },
  {
    key: 'CROP_YELLOWGOLD',
    front: catalog.CROP_YELLOWGOLD_1,
    back: catalog.CROP_YELLOWGOLD_2,
    sizes: [],
  },
  {
    key: 'LEVIS_GOLD',
    front: catalog.LEVIS_GOLD_1,
    back: catalog.LEVIS_GOLD_2,
    sizes: [],
  },
  {
    key: 'LEVIS_PURPLE',
    front: catalog.LEVIS_PURPLE_1,
    back: catalog.LEVIS_PURPLE_2,
    sizes: [],
  },
  {
    key: 'JEAN_ORANGEBLUE',
    front: catalog.JEAN_ORANGEBLUE_1,
    back: catalog.JEAN_ORANGEBLUE_2,
    sizes: [],
  },
  {
    key: 'JEAN_PINK',
    front: catalog.JEAN_PINK_1,
    back: catalog.JEAN_PINK_2,
    sizes: [],
  },
]

const CLOTHES_SIZES = ['X/S', 'S/M', 'M/L', 'S', 'M', 'L']

const url =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8lPXBdXzUgoV_HWv_b70gbKfjdRMFCzkR4rRhzPjMHqM7OeXERsVi9NZyRMMOJlCojUqGdf1oJ0Uf/pub?output=csv'
let DATA = null
const getData = () => {
  if (DATA) {
    return Promise.resolve(DATA)
  }
  return fetchRetry(url, {
    retries: 10,
    retryDelay: 500,
  })
    .then(d => d.text())
    .then(d => {
      const data = csvParse(d)
      DATA = data.map(d => ({
        ...d,
        ...pictures.find(p => p.key === d.key),
        sizes: CLOTHES_SIZES.filter(s => d[s] > 0),
      }))
      return DATA
    })
}

export default getData
