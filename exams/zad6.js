var hashCode = function (s) {
  return String(s)
    .split('')
    .reduce(function (a, b) {
      a = (a << 5) - a + b.charCodeAt(0)
      return a & a
    }, 0)
}

class ObjFilters {
  constructor(name) {
    this.name = name
    this.id = hashCode(name)
    this.filters = false
  }
}

class PollutionObject extends ObjFilters {
  constructor(name, date, municipality, temperature, PM10, NO2, O3, SO2) {
    super(name)
    this.date = date
    this.municipality = municipality
    this.temperature = temperature
    this.PM10 = PM10
    this.NO2 = NO2
    this.O3 = O3
    this.SO2 = SO2
  }

  risk() {
    let risk_string = ''
    if (this.PM10 && this.NO2 && this.SO2 && this.O3 && this.temperature < 10) {
      risk_string = 'high risk'
    } else if (
      this.PM10 &&
      this.NO2 &&
      this.SO2 &&
      this.O3 &&
      this.temperature > 10
    ) {
      risk_string = 'average risk'
    } else if (this.NO2 && this.SO2 && this.O3) {
      risk_string = 'average risk'
    } else if (this.NO2 && this.PM10 && this.O3) {
      risk_string = 'average risk'
    } else if (
      (this.SO2 && this.O3) ||
      (this.PM10 && this.NO2 && this.temperature > 10)
    ) {
      risk_string = 'low risk'
    } else if (!this.PM10 && !this.NO2 && !this.SO2 && !this.O3) {
      risk_string = 'low risk (eco friendly)'
    }
    //The object  -1038130864 Alkaloid pollutes the air at average risk
    console.log(
      `The object ${this.id} ${this.name} pollutes the air at ${risk_string}`
    )
  }

  toString() {
    // Object %id %name has/hasn't got  filters
    // return (
    //   `Object ${this.id} ${this.name}` +
    //   (this.filters ? ' has ' : " hasn't ") +
    //   'got filters'
    // )
    return this
  }
}

class AirPollution {
  constructor() {
    this.list = []
  }

  add_object(a) {
    this.list.push(a)
  }

  test_object(obj) {
    const objDate = obj.date
    //const todaysDate = new Date(2021, 11, 20)

    const objYear = objDate.getFullYear()
    const objMonths = objDate.getMonth()
    const objDays = objDate.getDate()

    // const todaysYear = d.getFullYear()
    // const todaysMonths = d.getFullYear()
    // const todaysDays = d.getFullYear()

    if (objYear < 2020) obj.filters = true
    const daysDiff = 11 * 30 + 20 - (objMonths * 30 + objDays)
    if (daysDiff > 90) obj.filters = true
  }

  check() {
    this.list.forEach((obj) => {
      this.test_object(obj)
      obj.risk()
    })
  }

  safe_zone(city) {
    let countFilters = 0
    for (let o of this.list) {
      if (o.municipality === city) {
        if (o.filters === true) {
          countFilters++
        }
      }
    }

    let str = `You are in ${(
      ((countFilters * 1.0) / this.list.length) *
      100
    ).toFixed(2)}% safe zone`

    console.log(str)
  }

  print() {
    this.list.forEach((o) => {
      console.log(o.toString())
    })
  }
}
