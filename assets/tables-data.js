import { nanoid } from 'nanoid'

function createData(name, ...rest) {
  const id = nanoid();
  return { id, name, data: [ ...rest ] };
}


export const mountingRows = [
  createData('Стандартный монтаж', "20-25 м2", "3 000"),
  createData('Стандартный монтаж', "35 м2", "3 200"),
  createData('Стандартный монтаж', "50 м2", "3 600"),
  createData('Стандартный монтаж (сплит, кассетного, напольнопотолочного типа)', "от 70 м2", "4 500"),
  createData('Стандартный монтаж (сплит, кассетного, напольнопотолочного типа)', "от 100 м2", "6 500"),
];

export const mountingRowsWithoutTrails = [
  createData('Кондиционер', "20-25 м2", "1 500"),
  createData('Кондиционер', "35 м2", "1 700"),
  createData('Кондиционер', "50 м2", "2 000"),
  createData('Кондиционер (сплит, кассетного, напольнопотолочного типа)', "от 70 м2", "от 2 500"),
  createData('Кондиционер (сплит, кассетного, напольнопотолочного типа)', "от 100 м2", "от 3 500"),
];

export const mountingHeader = [ 'Вид работ', 'Условная площадь помещения', 'Стоимость, грн' ]


export const maintenanceRows = [
  createData('Чистка внутреннего блока, ТО', "20-25 м2", "500"),
  createData('Чистка внутреннего блока, ТО', "35 м2", "600"),
  createData('Чистка внутреннего блока, ТО', "50 м2", "800"),
  createData('Чистка внутреннего блока, ТО', "от 70 м2", "1 000"),
  createData('Чистка наружного блока парогенератором', null, "200"),
  createData('Мойка наружного блока керхером', null, "200"),
  createData('Заправка фреоном R - 22, R - 410, R- 32', null, "100 гр/ 100"),
  createData('Вакуумирование системы', null, "150"),
  createData('Вальцовка соединения (при выявлении утечки фреона)', null, "1 шт/ 100")
];

export const maintenanceHeader = [ 'Вид работ', 'Условная площадь помещения', 'Стоимость, грн' ];


export const trailRows = [
  createData('Монтаж фреоновой магистрали', "20-25 м2", "1 500"),
  createData('Монтаж фреоновой магистрали', "35 м2", "1 600"),
  createData('Монтаж фреоновой магистрали', "50 м2", "1 900"),
  createData('Монтаж фреоновой магистрали', "от 70 м2", "2 400")
];

export const trailRowsAdditionalWorks = [
  createData('Штробление стен под фреономагистраль ( кирпич, газоблок)', "150"),
  createData('Штробление стен под фреономагистраль ( бетон)', "250"),
  createData('Штробление стен под дренажную трубу', "60"),
  createData('Дополнительное отверстие под фреономагистраль (кирпич)', "150"),
  createData('Дополнительное отверстие под фреономагистраль (бетон)', "250"),
  createData('Монтаж/демонтаж стеклопакета', "150"),
];

export const trailRowsAdditionalMaterial = [
  createData('Фреономагистраль', "20-25 м2", "300"),
  createData('Фреономагистраль', "35 м2", "400"),
  createData('Фреономагистраль', "50 м2", "450"),
  createData('Фреономагистраль', "от 70 м2", "550"),
  createData('Дренажная труба D 16', null, "40"),
  createData('Короб-канал 60х60', null, "100"),
];

export const trailHeader = [ 'Вид работ', 'Условная площадь помещения', 'Стоимость, грн' ]

export const trailHeaderAdditionalWorks = [ 'Вид работ', 'Стоимость, грн' ]

export const trailHeaderAdditionalMaterial = [ 'Материалы', 'Условная площадь помещения', 'Стоимость, грн' ]


export const dismantlingRows = [
  createData('Демонтаж бытовых кондиционеров 7-12 tbtu', "600"),
  createData('Демонтаж настенных кондиционеров 18-36 tbtu', "700"),
  createData('Демонтаж напольно-потолочных кондиционеров 18-24 btu', "900"),
  createData('Демонтаж кассетных, канальных, кондиционеров 18-24 btu', "900"),
  createData('Демонтаж полупромышленной серии кондиционеров 30-60 btu', "1 200"),
  createData('Демонтаж бытовых кондиционеров   7-12 tbtu, более 2 шт', "600"),
  createData('Демонтаж настенных кондиционеров 18-36 tbtu, более 2 шт', "700"),
  createData('Демонтаж напольно-потолочных кондиционеров 18-24 btu, более 2 шт', "900"),
  createData('Демонтаж кассетных, канальных,  кондиционеров 18-24 btu, более 2 шт', "900"),
  createData('Демонтаж полупромышленной серии кондиционеров 30-60 btu, более 2 шт', "1 200")
];

export const dismantlingHeader = [ 'Услуга', 'Стоимость, грн' ]

