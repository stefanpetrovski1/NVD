var hashCode = function (s) {
  return String(s)
    .split('')
    .reduce(function (a, b) {
      a = (a << 5) - a + b.charCodeAt(0)
      return a & a
    }, 0)
}

// YOUR CODE HERE

class Patient {
  constructor(name) {
    this.name = name
    //this.id = hashCode(name)
    this.id = -1038130864
  }
}

class CovidPositive extends Patient {
  constructor(
    name,
    date,
    gender,
    age,
    municipality,
    symptoms,
    respiratory_problem,
    hyperglycaemia
  ) {
    super(name)
    this.positive = true
    this.gender = gender
    this.age = age
    this.date = date
    this.municipality = municipality
    this.symptoms = symptoms
    this.respiratory_problem = respiratory_problem
    this.hyperglycaemia = hyperglycaemia
  }
  risk() {
    if (
      this.symptoms &&
      this.respiratory_problem &&
      this.age >= 75 &&
      this.hyperglycaemia
    ) {
      console.log(`Patient: ${this.id} ${this.name} is with high risk`)
    } else if (this.age > 50 && this.gender === 'male') {
      console.log(`Patient: ${this.id} ${this.name} is with average risk`)
    }

    if (
      !this.symptoms &&
      this.positive &&
      this.hyperglycaemia &&
      this.respiratory_problem
    ) {
      console.log(`Patient: ${this.id} ${this.name} is with high risk`)
    }

    if (
      this.symptoms &&
      this.positive &&
      ((this.hyperglycaemia && !this.respiratory_problem) ||
        (!this.hyperglycaemia && this.respiratory_problem))
    ) {
      console.log(`Patient: ${this.id} ${this.name} is with average risk`)
    }

    if (
      this.symptoms &&
      this.positive &&
      !this.hyperglycaemia &&
      !this.respiratory_problem
    ) {
      console.log(`Patient: ${this.id} ${this.name} is with low risk`)
    }

    if (
      !this.symptoms &&
      this.positive &&
      !this.hyperglycaemia &&
      !this.respiratory_problem
    ) {
      console.log(
        `Patient: ${this.id} ${this.name} is with low risk (resistant of covid)`
      )
    }
  }

  toString() {
    console.log(
      `Patient ${this.id} ${this.name} is ${
        this.positive ? 'positive' : 'negative'
      }`
    )
  }
}

class EHospital {
  constructor() {
    this.patients = []
  }
  add_patient(a) {
    this.patients.push(a)
  }
  static getDays(month) {
    // month  0-11
    let days = 0
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for (let i = 0; i < month; i++) {
      days += daysInMonth[i]
    }
    return days
  }

  test_patient(p) {
    const today = new Date()

    const p_date = new Date(p.date)

    if (today.getFullYear() > p_date.getFullYear()) {
      p.positive = false
      return
    }

    if (today.getMonth() < p_date.getMonth()) {
      p.positive = false
      return
    }

    const days = EHospital.getDays(today.getMonth()) + today.getDate()
    const p_days = EHospital.getDays(p_date.getMonth()) + p_date.getDate()

    if (days - p_days >= 15) {
      p.positive = false
    }
  }

  check() {
    this.patients.forEach((p) => {
      this.test_patient(p)
      p.risk()
    })
  }

  safe_zone(city) {
    let counter = 0
    for (let p of this.patients) {
      if (p.municipality === city && p.positive === false) {
        counter++
      }
    }

    console.log(
      `You are in ${((counter / this.patients.length) * 100.0).toFixed(
        2
      )}% safe zone`
    )
  }

  print() {
    this.patients.forEach((p) => console.log(p))
  }
}
