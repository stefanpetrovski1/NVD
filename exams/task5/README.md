Потребно е да се креира Е-Болница која ќе се погрижи за заболените од корона вирусот. За таа цел се потребни најпрво помошни класи, Patient е класа во која се чува id-то на тестот (хеширање на името) и името. Оваа класа е наследена од класата CovidPositive каде како дополнителни атрибути се чуваат пол, годишна возраст на пациентот, датум на тестирањe, резултатите од тестот дали е позитивен или негативен (секој внесен пациент на почетокот има позитивен тест), симптоми , дијабетeс или проблеми со респираторен систем(true/false). Функции кои треба да се имплементираат во оваа класа:

Функција за ризик -> Печати колкав е ризикот во зависност од:

- Ако има симптоми, дијабетeс, проблеми со респираторниот систем и е над 75 години или над 50 години и е од машки пол -> high risk, во другиот случај -> average risk
- Ако нема симптоми, а тестот му е позитивен и има дијабетeс, проблеми со респираторниот систем -> high risk
- Ако има симптоми и тестот му е позитивен а има или дијабетeс или проблеми со респираторниот систем -> average risk
- Ако има симптоми и тестот му е позитивен а нема ниту дијабетeс ниту проблеми со респираторниот систем -> low risk
- Ако нема симптоми и тестот му е позитивен а нема ниту дијабетeс ниту проблеми со респираторниот систем -> low risk (resistant of covid)

toString -> метода за печатење во формат: Patient %id %name is positive/negative

EHospital класата е составена од листа од пациенти (тестирани на корона вирусот), каде е потребно да се имплементираат следните функционалности:

- додади пациент (add_patient): додавање пациент во листата
- тестирај пациент (test_patient): ако датумот на тестирање е пред 15 дена тогаш резултатот од тестот се менува од позитивен во негативен
- проверка на пациентите (check()): се проверуваат сите пациенти со тоа што најпрво секој од нив се тестира, а потоа се печати ризикот кој го имаат
- проверка дали дадената општина како аргумент е во безбедна зона (safe_zone): се печати процентот на пациенти кои се негативни во дадената општина
- Печати (print()): Печати го секој пациент од листата
