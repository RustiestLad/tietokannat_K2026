# tietokannat_K2026

HUOM! En ole kokenut VSC:n, Gitbashin, GitHubin TAIKKA Postman:in käyttäjä joten jos raportistä jää jotakin olennaista pois olen pahoillani, en ole kovin tietoinen että mitä kaikkea näissä pitäisi selostaa.
Ohjelma toimii Express ja SQL2:sen avulla, käynnistäen serverin Gitbashistä käyttäjä voi Postman:in avulla lähettää komentoja tietokantaan. 
Komennot ovat seuraavat, GET:in avulla saadaan nykyisten opiskelijoiden tiedot tulostettua näytölle, POST:in avulla voidaan lisätä uusi opiskelija, DELETE poistaa opiskelijan ja PUT päivittää opiskelijan opiskelija ID:n perusteella, apuna on paljon eri aliohjelmia jotka saavuttavat nämä toiminnot.

Tietokannan rakenne on aika yksinkertainen, on Opiskelija tietopankki, arviointi tietopankki ja kurssi tietopankki, jokaisella on oma ID:nssä jota Arviointi käyttää hyväkseen luodakseen suoritustaulukon opiskelijoista ja Arvioinnilla on Kurssi ja Opiskelija ID Integeerit Lapsi-suhteessa edellämainuttuihin taluihin, ja jos opiskelijan poistaa poistuu myös taulusta opiskelijan suoritukset, sama kun kurssi poistetaan niin kurssisuoritukset poistuu.

Olen julkaissut OAMK:kin OneDrivee:n videon missä käyn läpi sovelluksen toimintoja, linkki alla:
https://unioulu-my.sharepoint.com/:v:/g/personal/c4vami00_students_oamk_fi/IQChhDDLzpt7RIJ1h4Lp9m7nAYGrzuvzIGlas8EpVT6IK78?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=C1NGYZ
