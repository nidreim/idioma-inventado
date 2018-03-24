const expect = require("chai").expect
const platzom = require("..").default

describe("#platzom", function () {

  it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
    const translation = platzom("programar")
    expect(translation).to.equal("program")
  })

  it('Si la plabra inicia con Z, se le añade "pe" al final', function () {
    const translation = platzom("zorro")
    expect(translation).to.equal("zorrope")
  })

  it('Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guion medio', function () {
    const translation = platzom("abecedario")
    expect(translation).to.equal("abece-dario")
  })

  it('Por ultimo, si la plabra es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palbra per intercambiando letras mayúsculas y minúsculas', function () {
    const translation = platzom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })

})
