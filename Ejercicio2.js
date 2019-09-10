const Peso =83
const PesoIdeal = 69
const CambioDePeso = 3
Semanas = 0
contador = Peso
do {
    contador = contador - CambioDePeso
    Semanas = Semanas + 1
}while (contador > PesoIdeal)
    console.log(Semanas)
