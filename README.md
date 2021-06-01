# Car Checkin Tool

Wij ([Jordy Fronik](https://github.com/joordy), [Lars Ruijs](https://github.com/lars-ruijs) en [Guus Maij](https://github.com/tsjuusmei)) hebben een tool gemaakt om online reserveringen van huurauto's in te kunnen checken. Hierdoor hoeft de gebruiker alleen nog fysiek de sleutels van de desbetreffende auto te halen, en worden wachtrijen voor de balie een stuk korter.

<p align="center">
  <img src="https://user-images.githubusercontent.com/55750107/120201781-1ada6c00-c226-11eb-803c-5cbe6fd6b6ff.png" width="900px">
</p>

## Live demo link

Upcoming

## Debriefing

Een gebruiker reserveert vaak ruim van te voren een auto om te huren. Het inchecken van de gebruiker gaat tot op heden altijd fysiek, op locatie bij de verhuurders. Dit kost al gauw zo’n 15 minuten per gebruiker. 

Maak een digitaal incheckproces voor de verhuurservice, zodat er weinig tot geen fysieke interactie nodig is voor het ophalen van de huurauto. Het incheckproces bestaat uit het inloggen van de gebruiker, het inchecken van de reservering, bevestigen van de identiteit en rijbewijs, en het reserveren van de borg op de desbetreffende creditcard. 

## Design Challenge

Hoe kunnen wij ervoor zorgen dat de klanten die een auto hebben gereserveerd bij de verhuurders, zichzelf gemakkelijk online kunnen inchecken, zodat zij hun gereserveerde auto snel kunnen ophalen bij de desbetreffende locatie.

## Features

- Inloggen van de gebruiker
- Overzicht van reserveringen
- Inchecken van een reservering
- Bevestigen van identiteit en rijbewijs
- Borg reserveren op een creditcard

## Service

Voor het controleren van de identiteit en/of rijbewijs van de gebruiker, maken wij gebruik van [Stripe Identity](https://stripe.com/docs/identity). Dit is een externe partij die zowel betalingen als het controleren van identiteit doet.

## Dataset

Voor dit project maken we een eigen database aan, waar wij gebruikers in opslaan en hun reserveringen, met alle bijbehorende informatie hiervoor:

```js
{
  "users": {
    idString: {
      "firstName": String,
      "lastName": String,
      "email": String,
      "phone": Number,
      "birthDate": Date,
      "reservations": [
        {
          "reservation": Number,
          "checkedIn": Boolean,
          "pickUpDate": Date,
          "pickUpTime": Time,
          "handInDate": Date,
          "handInTime": Time,
          "class": String,
          "rentPrice": Number,
          "extraDriver": Number,
          "lowerOwnRisk": Boolean,
          "otherInfo": {
            "ownRisk": Number,
            "deposit": Number,
            "freeKM": Number,
            "priceExtraKM": Number
          },
          "paidDeposit": Boolean,
          "qrCode": String
        },
        {
          "reservation": ...
        }
      ]
    },
    idString: {
      "firstName": ...
    }
  }
}
```

## Tech-stack

De applicatie is gebouwd in [React.js](https://reactjs.org/). Dit is een component gebaseerd framework, waardoor we mooi in componenten samen kunnen werken.
Verder hebben we voor elke nieuwe feature, of aanpassing, samengewerkt in branches en dit vervolgens met pull requests samengevoegd. Elke pull request moet worden gereviewd door een ander persoon dan de maker van de pull request.

## Installatie

*Voer de volgende commands uit in een terminal*

1. Clone de repo

```
git clone https://github.com/joordy/car-checkin-tool.git
```

2. Navigeer naar de client folder

```
cd ./client
```

3. Maak een .env bestand aan (in de `client` folder) met de volgende variabelen voor de database connectie

```
REACT_APP_SUPABASE_URL=INSERT_SUPABASE_URL_HERE
REACT_APP_SUPABASE_PUBLIC_KEY=INSERT_PUBLIC_KEY_HERE
```

4. Installeer packages

``` 
npm install
```

5. Navigeer naar de server folder

```
cd ../server
```

6. Installeer packages

```
npm install
```

7. Run de applicatie (vanuit de `server` folder)

```
npm run dev
```

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
