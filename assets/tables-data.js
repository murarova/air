import { nanoid } from 'nanoid'

function createData(name, ...rest) {
  const id = nanoid();
  return { id, name, data: [ ...rest ] };
}

const mountingRows_lg = [
  createData('Стандартный монтаж', "7-9", "20-25 м2", "3 500"),
  createData('Стандартный монтаж', "12", "35 м2", "3 800"),
  createData('Стандартный монтаж', "18", "50 м2", "4 300"),
  createData('Стандартный монтаж (сплит, кассетного, напольнопотолочного типа)', "24", "от 70 м2", "4 500"),
  createData('Стандартный монтаж (сплит, кассетного, напольнопотолочного типа)', "36", "от 100 м2", "6 500"),
];

const mountingRows_sm = [
  createData("7-9", "20-25 м2", "3 500"),
  createData("12", "35 м2", "3 800"),
  createData("18", "50 м2", "4 300"),
  createData("24", "от 70 м2", "4 500"),
  createData("36", "от 100 м2", "6 500"),
];

const mountingRowsWithoutTrails_lg = [
  createData('Кондиционер', "7-9", "20-25 м2", "1 500"),
  createData('Кондиционер', "12", "35 м2", "1 700"),
  createData('Кондиционер', "18", "50 м2", "2 000"),
  createData('Кондиционер (сплит, кассетного, напольнопотолочного типа)', "24", "от 70 м2", "от 2 500"),
  createData('Кондиционер (сплит, кассетного, напольнопотолочного типа)', "36", "от 100 м2", "от 3 500"),
];

const mountingRowsWithoutTrails_sm = [
  createData("7-9", "20-25 м2", "1 500"),
  createData("12", "35 м2", "1 700"),
  createData("18", "50 м2", "2 000"),
  createData("24", "от 70 м2", "от 2 500"),
  createData("36", "от 100 м2", "от 3 500"),
];

const mountingHeader_lg = [ 'Вид работ', 'Продуктивность кондиционера, BTU', 'Условная площадь помещения', 'Стоимость, грн' ]


const mountingHeader_sm = [ 'Продуктивность кондиционера, BTU', 'Условная площадь помещения', 'Стоимость, грн' ]

export const mountingRows = {
  SM: mountingRows_sm,
  LG: mountingRows_lg
}

export const mountingHeader = {
  SM: mountingHeader_sm,
  LG: mountingHeader_lg
}

export const mountingRowsWithoutTrails = {
  SM: mountingRowsWithoutTrails_sm,
  LG: mountingRowsWithoutTrails_lg
}


export const maintenanceRows = [
  createData('Чистка внутреннего блока, ТО (7, 9, 12 BTU)', null, "1 000"),
  createData('Чистка внутреннего блока, ТО', "50 м2 - 100 м2", "1 200"),
  createData('Заправка фреоном R - 410, R- 32', null, "100 гр/ 200"),
  createData('Заправка фреоном R - 22', null, "100 гр/ 250"),
];

export const maintenanceHeader = [ 'Вид работ', 'Условная площадь помещения', 'Стоимость, грн' ];


export const trailRows = [
  createData('Монтаж фреоновой магистрали', "6 и 9 мм", "20-25 м2", "1 700"),
  createData('Монтаж фреоновой магистрали', "6 и 12 мм", "35 м2", "2 000"),
  createData('Монтаж фреоновой магистрали', "9 и 16 мм", "от 70 м2", "2 500")
];

export const trailHeader = [ 'Вид работ', 'Диаметр труб', 'Условная площадь помещения', 'Стоимость, грн' ]



export const trailRowsAdditionalWorks = [
  createData('Штробление стен под фреономагистраль ( кирпич, газоблок)', "150"),
  createData('Штробление стен под фреономагистраль ( бетон)', "250"),
  createData('Штробление стен под дренажную трубу', "60"),
  createData('Дополнительное отверстие под фреономагистраль (кирпич)', "150"),
  createData('Дополнительное отверстие под фреономагистраль (бетон)', "250"),
  createData('Монтаж/демонтаж стеклопакета', "150"),
];

export const trailRowsAdditionalMaterial = [
  createData('Фреономагистраль', "7, 9, 12", "20-35 м2", "6 и 9 мм", "450"),
  createData('Фреономагистраль', "12, 18", "35 м2", "6 и 12 мм", "550"),
  createData('Фреономагистраль', null, "50 - 70 м2", null, "700"),
  createData('Дренажная труба', null,  null, "16 мм", "40"),
  createData('Короб-канал 60х60', null,  null,  null, "250"),
];

export const trailHeaderAdditionalWorks = [ 'Вид работ', 'Стоимость, грн' ]

export const trailHeaderAdditionalMaterial = [ 'Материалы', 'Продуктивность кондиционера, BTU', 'Условная площадь помещения', 'Диаметр трубы', 'Стоимость, грн' ]


export const dismantlingRows = [
  createData('Демонтаж бытовых кондиционеров 7-12 tbtu', "700"),
  createData('Демонтаж настенных кондиционеров 18-36 tbtu', "900"),
  createData('Демонтаж напольно-потолочных кондиционеров 18-24 btu', "1 000"),
  createData('Демонтаж кассетных, канальных, кондиционеров 18-24 btu', "1 000"),
  createData('Демонтаж полупромышленной серии кондиционеров 30-60 btu', "1 400")
];

export const dismantlingHeader = [ 'Услуга', 'Стоимость, грн' ]

