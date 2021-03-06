import { createAction } from 'redux-actions'
import fetchRetry from 'fetch-retry'
import { csvParse } from 'd3-dsv'
import { catalog } from 'pictures'

const SET_DATA = 'ishhh/inventory/SET_DATA'

const initialState = {
  data: [
    {
      key: 'KIM_DUCK_BLUE',
      front: catalog.KIM_DUCK_BLUE_1,
      back: catalog.KIM_DUCK_BLUE_2,
    },
    {
      key: 'KIM_SAREE_IVORY',
      front: catalog.KIM_SAREE_IVORY_1,
      back: catalog.KIM_SAREE_IVORY_2,
    },
    {
      key: 'KIM_SAREE_PINK_1bis',
      front: catalog.KIM_SAREE_PINK_1bis,
      back: catalog.KIM_SAREE_PINK_2,
    },
    {
      key: 'KIM_SAREE_ROYAL_BLUE',
      front: catalog.KIM_SAREE_ROYAL_BLUE_1,
      back: catalog.KIM_SAREE_ROYAL_BLUE_2,
    },
    {
      key: 'KIM_SAREE_SWEET_RED',
      front: catalog.KIM_SAREE_SWEET_RED_1,
      back: catalog.KIM_SAREE_SWEET_RED_2,
    },
    {
      key: 'KIM_SAREE_TERRACOTA',
      front: catalog.KIM_SAREE_TERRACOTA_1,
      back: catalog.KIM_SAREE_TERRACOTA_2,
    },
    {
      key: 'KIM_SKY_BLUEGOLD',
      front: catalog.KIM_SKY_BLUEGOLD_1,
      back: catalog.KIM_SKY_BLUEGOLD_2,
    },
    {
      key: 'KIM_SWEET_GREEN_AND_CO',
      front: catalog.KIM_SWEET_GREEN_AND_CO_1,
      back: catalog.KIM_SWEET_GREEN_AND_CO_2,
    },
    {
      key: 'KIM_WHITE',
      front: catalog.KIM_WHITE_1,
      back: catalog.KIM_WHITE_2,
    },
    {
      key: 'KIM_YELLOW',
      front: catalog.KIM_YELLOW_1,
      back: catalog.KIM_YELLOW_2,
    },
    {
      key: 'KIM_YELLOW_GOLD',
      front: catalog.KIM_YELLOW_GOLD_1,
      back: catalog.KIM_YELLOW_GOLD_2bis,
    },
    {
      key: 'CROP_GREENYELLOW_IRI',
      front: catalog.CROP_GREENYELLOW_IRI_1,
      back: catalog.CROP_GREENYELLOW_IRI_2,
    },
    {
      key: 'CROP_ORANGEBLUE_IRI',
      front: catalog.CROP_ORANGEBLUE_IRI_1bisbisbis,
      back: catalog.CROP_ORANGEBLUE_IRI_2,
    },
    {
      key: 'CROP_PINKYELLOW_IRI',
      front: catalog.CROP_PINKYELLOW_IRI_1,
      back: catalog.CROP_PINKYELLOW_IRI_2,
    },
    {
      key: 'CROP_SALMON_PINK',
      front: catalog.CROP_SALMON_PINK_1,
      back: catalog.CROP_SALMON_PINK_2,
    },
    {
      key: 'CROP_SAREE_SWEET_RED',
      front: catalog.CROP_SAREE_SWEET_RED_1,
      back: catalog.CROP_SAREE_SWEET_RED_2,
    },
    {
      key: 'CROP_YELLOW',
      front: catalog.CROP_YELLOW_1,
      back: catalog.CROP_YELLOW_2,
    },
    {
      key: 'CROP_YELLOWGOLD',
      front: catalog.CROP_YELLOWGOLD_1,
      back: catalog.CROP_YELLOWGOLD_2,
    },
    {
      key: 'LEVIS_GOLD',
      front: catalog.LEVIS_GOLD_1,
      back: catalog.LEVIS_GOLD_2,
    },
    {
      key: 'LEVIS_PURPLE',
      front: catalog.LEVIS_PURPLE_1,
      back: catalog.LEVIS_PURPLE_2,
    },
    {
      key: 'JEAN_ORANGEBLUE',
      front: catalog.JEAN_ORANGEBLUE_1,
      back: catalog.JEAN_ORANGEBLUE_2,
    },
    {
      key: 'JEAN_PINK',
      front: catalog.JEAN_PINK_1,
      back: catalog.JEAN_PINK_2,
    },
    {
      key: 'CUSTOMIZED_JEAN_JACKET_GREEN',
      front: catalog.CUSTOMIZED_JEAN_JACKET_GREEN_1,
      back: catalog.CUSTOMIZED_JEAN_JACKET_GREEN_3,
      detail: catalog.CUSTOMIZED_JEAN_JACKET_GREEN_2,
    },
  ],
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}

export const setData = createAction(SET_DATA)

const CLOTHES_SIZES = ['X/S', 'S/M', 'M/L', 'S', 'M', 'L']

const url =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8lPXBdXzUgoV_HWv_b70gbKfjdRMFCzkR4rRhzPjMHqM7OeXERsVi9NZyRMMOJlCojUqGdf1oJ0Uf/pub?output=csv'

export const fetchData = () => (dispatch, getState) => {
  return fetchRetry(url, {
    retries: 10,
    retryDelay: 500,
  })
    .then(d => d.text())
    .then(d => {
      const initialData = getState().inventory.data
      const inventory = csvParse(d)
      const data = inventory.map(d => ({
        ...d,
        ...initialData.find(p => p.key === d.key),
        sizes: CLOTHES_SIZES.filter(s => d[s] > 0),
      }))
      dispatch(setData(data))
    })
}
