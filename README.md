# rekrutacja-fe

Witaj kandydacie!

Twoim zadaniem będzie przygotowanie prostego formularza kontaktowego. Ułatwiliśmy Ci zadanie i stworzyliśmy bootstrap'owy formularz. 

1) Sklonuj proszę to repozytorium i wstaw rozwiązanie na swój profil na githubie.

2) Na początku dodaj jakieś paddingi, kolory, hovery, focusy itp., żeby to nabrało jakiegoś wyglądu.

3) Wykorzystując AJAX'a pobierz dane z http://test.projets.pl/rekrutacja/php/data.json

4) Wypełnij selecta pobranymi wartościamy e-mail.

5) Po wybraniu konkretnej wartości selecta formularz wypełnia się pozostałymi danymi przypisanymi do tego maila, jeżeli formularz zawiera 
   już jakieś dane, to kolejny wybór nadpisuje formularz.

6) Kolejnym krokiem jest walidacja formularza. Po wciśnięciu przycisku "SEND", sprawdzamy czy pole textarea nie jest puste
   oraz czy checkbox "acceptTerms" jest zaakceptowany. Informacje o błędzie wyświetlamy pod właściwym znacznikem label.
   Oczywiście informacja o błędzie znika automatycznie po dokonaniu zmiany :)

7) Po pozytywnej walidacji wyświetlamy bootstrap'owego modala zawierającego dane z formularza w formie tesktowej(p, span) oraz dwa        przyciski "Cancel" i "Send". (Przykładowy modal do znalezienia w dokumentacji https://getbootstrap.com/docs/4.1/components/modal/ )

8) Po wciśnięciu "Send" wysyłamy formularz do index.html, natomiast "Cancel" zamyka modala.

HAVE FUN :)
