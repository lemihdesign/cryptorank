# CRYPTORANK
Cryptoranking jest to aplikacja internetowa, która umożliwia śledzenie aktualnych zmian na rynku kryptowalut. Pomysł stworzenia takowej strony internetowej zrodził się w mojej głowie z powodu chęci nauki i pogłębiania wiedzy z zakresu wykorzystania danych pochodzących z API. Na etapie planowania zdecydowałem się wykorzystać dość popularne API dostarczane przez CoinGecko. Zadania, które przed sobą postawiłem to stworzenie pełnej warstwy wizualnej obejmującej zarówno komputery osobiste jak i urządzenia mobilne, stworzenie i wdrożenie całej logiki systemu oraz przedstawienie danych w formie możliwie jak najlepszej dla użytkownika końcowego.

**Zobacz stronę internetową [LIVE](http://cryptorank.lemiszewski.pl)**

**Moje portfolio [KLIKNIJ](https://www.lemiszewski.pl)**. Znajdują się tutaj inne projekty, również takie, których nie umieściłem z różnych przyczyn na Githubie.


![cryptoMockup3](https://user-images.githubusercontent.com/76050486/155015055-19b54f88-e9c6-4dab-8474-fbb1d0384b40.png)

# Główne założenia projektu
Użytkownik, wchodząc na stronę internetową Cryptoranking ma możliwość śledzenia zmian kursów cenowych kryptowalut, które odświeżane są cyklicznie co 30 sekund. Stworzone zostały specjalne skrypty, które obserwują działania na rynku oraz reagują na wszelkie zmiany, sygnalizując je odpowiednimi statusami. W momencie wzrostu kursu, kolor aktualnej liczby zmieniany jest na zielony. W przypadku braku zmian, kolor pozostaje czarny, natomiast w momencie spadku cen, kolor zmienia się na czerwony. W przypadku wzrostu lub spadku, użytkownik może zaobserować dodatkowo ikony strzałek w górę oraz w dół, które mają na celu jeszcze wyraźniej wskazać aktualną sytuację.

W aktualnym wydaniu, aplikacja umożliwia monitorowanie zarówno kursów jak i zmian procentowych na przestrzeni ostatnich 24 godzin, całkowitego wolumenu 24-godzinnego, oraz całkowitej kapitalizacji rynkowej. Stworzone zostały specjalne skrypty filtrujące dane znajdujące się w tabeli. Istnieje możliwość wyświetlania odpowiedniej, interesującej nas ilości wierszy. Stworzona została również wyszukiwarka, która automatycznie wskazuje interesującą nas kryptowalutę.

![desktopMockup](https://user-images.githubusercontent.com/76050486/155015102-089d32f1-688c-4d66-8bb4-70da01985365.jpg)

# Proces tworzenia projektu
Projekt zrealizowany został przy wykorzystaniu podstawowych narzędzi, służących zarówno do projektowania warstwy wizualnej jak i do kodowania strony internetowej. W trakcie pracy użyłem programów **Figma** oraz **Visual Studio Code**. Do kontroli wersji oprogramowania, standardowo skorzystałem z **Github**.

**WYMAGANIA MINIMALNE**
- Pozyskiwanie danych z zewnętrznego API
- Automatyczne odświeżanie aktualnych danych po 30 sekundach
- Umożliwienie wyszukiwania kryptowalut
- Umożliwienie zmiany waluty
- Nasłuchiwanie na zmiany na rynku - reakcja na wzrosty i zniżki cen
- Umożliwienie filtrowania ilości wyświetlanych kryptowalut
- Przejrzystość i łatwość w obsłudze
- Stworzenie warstwy wizualnej dla komputerów osobistych
- Stworzenie warstwy wizualnej dla urządzeń mobilnych

**POCZYNIONE KROKI**
- Stworzenie konceptu strony
- Stworzenie szablonu strony
- Inicjalizacja projektu i repozytorium
- Stworzenie struktury strony
- Ostylowanie strony z wykorzystaniem preprocesora SASS
- Wykorzystanie języka Javascript do oskryptowania funkcjonalności strony
- Obsługa zdarzeń na stronie przy użyciu języka Javascript
- Przeprowadzenie testów manualnych


# Responsywność
Obecnie użytkownik końcowy chce mieć dostęp do swojego ulubionego oprogramowania na każdym urządzeniu, bez znaczenia czy mówimy tutaj o telefonach czy komputerach. Tym samym, bardzo ważne było odpowiednie zaprojektowanie strony pod urządzenia mobilne. Strona internetowa Cryptorank jest w pełni responsywna. Oznacza to, że możemy śledzić zmiany na rynku kryptowalut na urządzeniach mobilnych. Wszystkie funkcjonalności są identyczne względem tych przeznaczonych dla wersji na komputery osobiste. Jedyną różnicą jest sposób wyświetlania. Tabelę z danymi ostylowałem w taki sposób aby możliwe było jej przewijanie w poziomie.

![mobile](https://user-images.githubusercontent.com/76050486/155015292-209a483b-1a4c-4889-9e0e-32acf0d6e793.png)


# Kontakt
Miło mi jeżeli dotrwałeś/aś do końca. Jestem początkującym Frontend Developerem, który poszukuje pierwszych doświadczeń komercyjnych. Jeżeli jesteś zainteresowany/a współpracą proszę o kontakt. Z miłą chęcią podejmę się rozmowy.

- **hello@lemiszewski.pl**

Jeżeli masz ochotę zobaczyć inne moje projekty, również takie, których nie zobaczysz na Githubie, zachęcam do zajrzenia na moje portfolio. Znajduje się ono pod adresem **www.lemiszewski.pl**



