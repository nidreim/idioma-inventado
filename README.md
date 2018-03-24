# Platzom

Platzom es un idioma inventado para el [curso de fundamentos de javascript](https://platzi.com/js) de [platzi](https://platzi.com), el mejor lujgar de educacion online

## Descripcion del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras

- Si la plabra inicia con Z, se le añade "pe" al final

- Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guion medio

- Por ultimo, si la plabra es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palbra per intercambiando letras mayúsculas y minúsculas


## Instalación

```
npm install platzom
```

## Uso

```
import platzom from `platzom`

platzom("programar") // programa
Platzom("zorro") // Zorrope
Platzom("zarpar") // >arppe
Platzom("abecedario") //abece-dario
Platzom("sometemos") // SoMeTeMos
```

## Créditos
- [Mateo Gómez](mateogomezmolina@gmail.com)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
