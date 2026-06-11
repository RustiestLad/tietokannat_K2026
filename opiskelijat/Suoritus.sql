CREATE VIEW Suoritus AS
SELECT Sukunimi, Etunimi, Nimi, Arvosana
FROM Opiskelija
JOIN Arviointi ON Opiskelija.idOpiskelija=Arviointi.idOpiskelija
JOIN Opintojakso ON Opintojakso.idOpintojakso = Arviointi.idOpintojakso