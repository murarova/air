import { nanoid } from 'nanoid'

function createData(name, ...rest) {
  const id = nanoid();
  return { id, name, data: [ ...rest ] };
}

const mountingRows_lg = [
  createData('Стандартний монтаж', "7-9", "20-25 м2", "3 500"),
  createData('Стандартний монтаж', "12", "35 м2", "3 800"),
  createData('Стандартний монтаж', "18", "50 м2", "4 300"),
  createData('Стандартний монтаж (спліт, касетного, напольно-стельового типу)', "24", "від 70 м2", "4 500"),
  createData('Стандартний монтаж (спліт, касетного, напольно-стельового типу)', "36", "від 100 м2", "6 500"),
];

const mountingRows_sm = [
  createData("7-9", "20-25 м2", "3 500"),
  createData("12", "35 м2", "3 800"),
  createData("18", "50 м2", "4 300"),
  createData("24", "від 70 м2", "4 500"),
  createData("36", "від 100 м2", "6 500"),
];

const mountingRowsWithoutTrails_lg = [
  createData('Кондиціонер', "7-9", "20-25 м2", "1 500"),
  createData('Кондиціонер', "12", "35 м2", "1 700"),
  createData('Кондиціонер', "18", "50 м2", "2 000"),
  createData('Кондиціонер (спліт, касетного, напольно-стельового типу)', "24", "від 70 м2", "від 2 500"),
  createData('Кондиціонер (спліт, касетного, напольно-стельового типу)', "36", "від 100 м2", "від 3 500"),
];

const mountingRowsWithoutTrails_sm = [
  createData("7-9", "20-25 м2", "1 500"),
  createData("12", "35 м2", "1 700"),
  createData("18", "50 м2", "2 000"),
  createData("24", "від 70 м2", "від 2 500"),
  createData("36", "від 100 м2", "від 3 500"),
];

const mountingHeader_lg = [ 'Вид робіт', 'Продуктивність кондиціонера, BTU', 'Умовна площа приміщення', 'Вартість, грн' ]


const mountingHeader_sm = [ 'Продуктивність кондиціонера, BTU', 'Умовна площа приміщення', 'Вартість, грн' ]

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
  createData('Технічне обслуговування кондиціонера настінного типу', "7, 9, 12, 24", "700"),
  createData('Технічне обслуговування кондиціонера потолочного типу', "18-36", "1 000"),
  createData('Заправка фреоном R - 410, R- 32', null, "100 гр/ 150"),
  createData('Заправка фреоном R - 22', null, "100 гр/ 200"),
];

export const maintenanceHeader = [ 'Вид робіт', 'Продуктивність кондиціонера, BTU', 'Вартість, грн' ];


export const trailRows = [
  createData('Монтаж фреонової магістралі', "6 и 9 мм", "20-25 м2", "1 700"),
  createData('Монтаж фреонової магістралі', "6 и 12 мм", "35 м2", "2 000"),
  createData('Монтаж фреонової магістралі', "9 и 16 мм", "від 70 м2", "2 500")
];

export const trailHeader = [ 'Вид робіт', 'Діаметр труб', 'Умовна площа приміщення', 'Вартість, грн' ]



export const trailRowsAdditionalWorks = [
  createData('Штроблення стін під фреономагістраль (цегла, газоблок)', "150"),
  createData('Штроблення стін під фреономагістраль (бетон)', "250"),
  createData('Штроблення стін під дренажну трубу', "60"),
  createData('Додатковий отвір під фреономагістраль (цегла)', "150"),
  createData('Додатковий отвір під фреономагістраль (бетон)', "250"),
  createData('Монтаж/демонтаж склопакета', "150"),
];

export const trailRowsAdditionalMaterial = [
  createData('Фреономагістраль',"м2", "7, 9, 12", "6 та 9 мм", "450"),
  createData('Фреономагістраль',"м2", "12, 18", "6 та 12 мм", "550"),
  createData('Фреономагістраль',"м2", "24, 36", "9 та 16 мм", "700"),
  createData('Дренажна труба',"м2", null, "16 мм", "40"),
  createData('Короб-канал 60х60',"м2", null,  null, "120"),
];

export const trailHeaderAdditionalWorks = [ 'Вид робіт', 'Вартість, грн' ]

export const trailHeaderAdditionalMaterial = [ 'Матеріали', "Од. вимірювання", 'Продуктивність кондиціонера, BTU', 'Діаметр трубы', 'Вартість, грн' ]


export const dismantlingRows = [
  createData('Демонтаж побутових кондиціонерів 7-12 tbtu', "700"),
  createData('Демонтаж настінних кондиціонерів 18-36 tbtu', "900"),
  createData('Демонтаж підлогово-стельових кондиціонерів 18-24 btu', "1 000"),
  createData('Демонтаж напівпромислової серії кондиціонерів 30-60 btu', "1 400")
];

export const dismantlingHeader = [ 'Послуга', 'Вартість, грн' ]

