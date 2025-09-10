---
title: Jak zrozumieć coś intuicyjnie?
published: 2025-09-10
lang: pl
tags:
    - metanauka
abbrlink: jak-zrozumiec-cos-intuicyjnie
status: 🌱
---

W swojej pracy bardzo często staję przed koniecznością nauczenia się nowych rzeczy czy zrozumienia nowych terminów. 

Czasami są to rzeczy, które muszę zrozumieć w konkretnym celu - potrzebuję jakiejś wiedzy, żeby wykonać jakieś zadanie. Często zdarza się, że ta wiedza nie będzie mi potrzebna ponownie w najbliższej przyszłości. W takich sytuacjach, kiedy liczy się czas, a stawką po prostu "dowiezienie" zadania, często wystarczy mi powierzchowne zrozumienie tematu - uczę się tyle, ile w danym momencie jest mi potrzebne i nic więcej.

Są jednak takie tematy, które chcę opanować po to, aby stać się _**naprawdę dobra**_ w tym, co robię. W takim przypadku nie optymalizuję strategii nauki pod czas/możliwość wykonania danego zadania, a dążę do zrozumienia czegoś _intuicyjnie_.

Żyjemy w ekscytujących czasach dla ludzi, którzy lubią uczyć się na własną rękę - LLMy potrafią cierpliwie i przez długi czas tłumaczyć nam wszystko to, z czym jeszcze czujemy się niepewnie. W takim kontekście wiedza o tym, _jak_ się uczyć staje się jeszcze istotniejsza niż kiedyś. 

Chciałabym, aby ten post był pomocny mnie samej jako "blueprint" procesu nauki intuicyjnej - tak, abym mogła wziąć książkę, odpalić ChatGPT i strategicznie wykonywać takie ruchy, żeby to zrozumienie intuicyjne efektywnie zbudować. 


## Czym jest rozumienie intuicyjne?
Myślę, że „rozumienie” ma różne poziomy:
* **Płytkie** – jest wtedy, kiedy umiem powtórzyć definicję czegoś i rozpoznaję coś, czego wcześniej nie rozpoznawałam. Jest wtedy, kiedy trafienie na dany koncept w świecie mnie nie zaskakuje, wiem mniej-więcej jak to coś działa, ale na "biernym" poziomie (to znaczy, sama nie do końca potrafiłabym odtworzyć definicję danej rzeczy czy wytłumaczyć jej użycie w jakimś kontekście). Kiedy rozumiem coś w płytki sposób, muszę sobie aktywnie przypominać, jak to coś działa.
* **Głębokie** – jest wtedy, kiedy potrafię coś zastosować w praktyce, rozumiem schemat wejścia i wyjścia danego procesu i umiem zrozumieć relację danego konceptu do innych. Potrafię samodzielnie podać poprawną definicję danego zjawiska i jestem pewna swojej odpowiedzi.
* **Intuicyjne** – jest wtedy, kiedy *czuję*, jak coś działa, nawet bez wzorów i instrukcji. Jest wtedy, kiedy potrafię zobaczyć różne rodzaje "ekspresji" tej rzeczy w świecie i jestem w stanie samodzielnie zastosować ten koncept czy wzór w wielu różnych domenach.

Chcę zrozumieć proces budowania takiego rozumienia intuicyjnego - tak, aby za każdym razem, kiedy muszę coś zrozumieć właśnie w taki sposób wiedzieć krok po kroku jak się za to zabrać. 

Full disclosure - rozważania nad tym tematem (_co to znaczy rozumieć coś intuicyjnie?_) prowadziłam razem z ChatemGPT - poniższe etapy to wynik naszych wspólnych dyskusji nad tym, jak krok po kroku takie rozumienie budować.

Żeby operować na konkretnym przykładzie, przejdźmy przez rzeczywistą sytuację z wczoraj, kiedy próbowałam zrozumieć, czym jest SDK (software development kit).

## Budowanie rozumienia intuicyjnego

### 0. **Definicja**
Na początku wypada zapoznać się z definicją danego terminu. Według [Wikipedii](https://pl.wikipedia.org/wiki/Software_development_kit) _SDK to zestaw narzędzi dla programistów niezbędny w tworzeniu aplikacji korzystających z funkcjonalności danej biblioteki (np. Java Runtime Environment) pod daną platformę (np. system operacyjny Android), sprzęt (np. moduł GPS) itp._

_Na SDK najczęściej składają się:_
- _dokumentacja_
- _pliki nagłówkowe dla danego języka programowania_
- _przykładowe kody źródłowe_
- _skompilowane biblioteki (w przypadku SDK dla jakiejś biblioteki)_
- _kod źródłowy biblioteki (w zależności od licencji i typu SDK)_

Myślę, że dobrze byłoby już wtedy  spróbować też sparafrazować tę definicję własnymi słowami. 

Na ten moment rozumiem, że SDK to pewna warstwa abstrakcji pozwalająca programistom w prostszy i czytelniejszy sposób tworzyć funkcjonalności _osadzone w pewnym kontekście_ (i być może tym SDK różni się od "zwykłej" biblioteki. 

Biblioteki są raczej agnostyczne, jeżeli chodzi o nośnik, a SDK wydaje się być połączeniem logiki różnych komponentów w abstrakcję osadzoną w jakimś konkretnym kontekście, np. OS czy sprzęt). 

Fair enough, chociaż nie jestem jeszcze pewna, czy to rzeczywiście dobra definicja.

### 1. **Ekspozycja**
Kolejnym krokiem budowania rozumienia intuicyjnego wydaje się być zwiększenie własnej _ekspozycji_ na dany termin. 

Chodzi o to, aby zobaczyć przykłady ekspresji danego terminu z życia - to znaczy różne narzędzia czy zjawiska spełniające podaną wcześniej definicję itd. Intuicja rośnie po zobaczeniu *wielu instancji* danej definicji w rzeczywistości.

Szukam więc przykładów - a przykładami SDK są m.in.:
- [Google Cloud SDK](https://cloud.google.com/sdk) - narzędzia i biblioteki do obsługi GCP
- [Stripe SDK](https://docs.stripe.com/sdks) - narzędzia do dodawania płatności w aplikacji
- [Android](https://www.twilio.com/docs/libraries) - narzędzia do dodawanie SMS-ów, połączeń głosowych, WhatsApp etc. do aplikacji.

Celowo staram się wybierać takie przykłady, które są najbliżej mojego "mentalnego rusztowania" i są dla mnie już w jakiś sposób znajome. Mam np. więcej doświadczenia z GCP niż np. z Androidem, stąd ten konkretny przykład bardziej do mnie przemawia. 

Przeglądając dokumentacje podanych przykładów zauważam, że:
1. SDK to nie jest jednolity twór - w zasadzie są do _SDKs_ do róznych kontekstów (np. `Google Cloud SDK for Go` vs. `Google Cloud SDK for Python` itd.)
2. Moje początkowe założenie (SDK = biblioteki/narzędzia + kontekst) wydaje się być poprawne - wszystkie przykłady, które znalazłam, mają taki sam model (X - zestaw narzędzi - dla Y - kontekst). Kontekstem są platformy, ale też różne języki, np. Go czy Python. 
3. "Narzędzia" w tym zestawie narzędzi to często API danego serwisu, ale również biblioteki, narzędzia developerskie (np. debugger czy emulator), dokumentacja (!) a czasem też gotowe pluginy czy szablony projektów.

### 2. **Zabawa**
Żeby dobrze coś zrozumieć, trzeba przenieść to ze sfery teoretyczno-językowej do rzeczywistości. Skoro znam już definicję i konkretne przykłady "materializacji" danego pojęcia w realnym świecie mogę spróbować się którymś z tych przykładów pobawić - tak, aby zbudować "pamięć mięśniową" zastosowania tej rzeczy w praktyce, pooglądać tę rzecz z różnych stron i w niej podłubać.

W przypadku SDK jest to dosyć proste - a w erze vibe codingu prostsze, niż kiedykolwiek. Pomyślałam, że zbuduję małą aplikację, która będzie miała na celu pomóc mi zrozumieć, jak i do czego można wykorzystać SDK

Do takich przypadków zazwyczaj wykorzystuję Cline z którymś z modeli Claude. W tym przypadku poprosiłam go po prostu o stworzenie bardzo prostej aplikacji z wykorzystaniem Stripe SDK - tak, abym mogła poczytać kod, zrozumieć składnię tego konkretnego SDK i zapoznać się z funkcjonalnościami, które można zaimplementować z jego użyciem. 

Wynikiem była nieskomplikowana apka złożona z serwera HTTP i serwera API:

![Fragment kodu mojej aplikacji](src/content/posts/_images/stripesdk_code.png)

A tak prezentowała się w przeglądarce:

![Aplikacja - "learning lab" Stripe SDK](src/content/posts/_images/stripesdk_playground.png)

Aplikacja miała też zmockowaną stronę do zakupu produktów:

!["Zakup" "produktów" w aplikacji](src/content/posts/_images/stripesdk_products.png)

I mogłam zobaczyć, że rzeczywiście te zakupy logowane są po stronie Stripe:

!["Zakupione" produkty widoczne w Stripe](src/content/posts/_images/stripe_sandbox.png)

Oczywiście aplikacja sama w sobie jest w zasadzie "do wyrzucenia", a kod w wielu miejscach jest dziurawy i wyrzuca błędy. Podstawowe funkcjonalności jednak działają, a ja jestem w stanie prześledzić cały flow i zrozumieć w praktyce, do czego wykorzystuje się SDK (w tym przypadku SDK Stripe dla Pythona) - a to mi wystarczy. 

### 3. **Reprezentacje**
Kolejnym krokiem "rozumienia intuicyjnego", jaki podrzucił mi ChatGPT jest próba "przełożenia" idei z jednej formy na drugą - np. rysunek, metafora, równanie czy opowieść. Każda zmiana wymusza „przekodowanie” pojęcia w głowie i daje kolejne możliwości na przyjrzenie się temu, co chcemy zrozumieć.

Uwielbiam "wizualne metafory" różnych pojęć związanych z programowaniem czy designem tworzone przez [Maggie Appleton](https://maggieappleton.com/reactpotato). Wykorzystując mój Remarkable spróbowałam więc sama narysować, czym jest SDK. 

![Moja "wizualizacja" SDK](src/content/posts/_images/remarkable_sdk.png)

Z ciekawości zapytałam ChataGPT, jak zwizualizowałby SDK. Odpowiedział tak:

!["Wizualizacja" SDK wykonana przez ChatGPT](src/content/posts/_images/sdk_lego_kit.png)

Metafora "lego" przejawiała się w artykułach wyjaśniających SDK dość często, stąd nic dziwnego, że taki model mentalny się tutaj pojawił. 

Swoją drogą, wszyscy "intuicyjnie" rozumiemy, czym jest lego, stąd rozumiemy też, kiedy pojęcie lego pojawia się w całkowicie innym kontekście. Chcę zrozumieć SDK na tyle, żeby umieć zrobić to samo - rozumieć czym jest na tyle, żeby spostrzec rzeczy, które przypominają SDK mimo, że nie mają nic wspólnego z programowaniem.

Spróbowałam też pobawić się Sorą i wygenerować wideo-wizualizację tego, czym jest SDK. Po kilku próbach, które wygenerowały, uhm... dość [dziwne](https://sora.chatgpt.com/g/gen_01k4tmt6w3ekktmbnwrshn6zwt) rezultaty, w końcu siadł mi taki prompt:
> _Please visualize what an SDK is. Don't include any people or text in the video, but rather create an imaginary visual, artistic representation of what an SDK is. It can be abstract, yet it should feel familiar to people intuitively understanding the concept._

!["Wizualizacja" SDK wykonana przez Sorę](src/content/posts/_images/sdk.gif)

### 4. **Alternatywy**
Zgodnie z teorią [strukturalizmu](https://www.youtube.com/watch?v=RJfurfb5_kw), nowe pojęcia zyskują znaczenie nie tyle przez połączenie nazwy z reprezentacją, co przez umieszczenie tej nazwy w kontekście, w systemie innych definicji, które już znamy. Pozwala nam to na rozróżnienie - `X` to nie `Y`, nie `A`, nie `Z`. 

W naszym przypadku chcemy zrozumieć, jak SDK różni się od innych, podobnych pojęć takich, jak biblioteka, framework czy API. Ponownie korzystając z pomocy ChataGPT:

- **biblioteka** to zbiór funkcji, klas czy modułów, które możesz wywołać w swoim kodzie, żeby nie pisać wszystkiego od zera. To jak zestaw narzędzi w skrzynce – np. młotek, śrubokręt. To Ty decydujesz, kiedy sięgnąć po młotek, a kiedy po śrubokręt. Przykładem jest np. NumPy w Pythonie – sama wybierasz, kiedy wywołać `numpy.array()` albo `numpy.dot()`.
- **SDK** to pakiet narzędzi, który producent jakiejś platformy albo usługi daje programistom, żeby łatwiej budowali aplikacje w tym ekosystemie. Jego zawartość to biblioteki + dokumentacja + przykłady kodu + narzędzia developerskie (czasem też kompilatory, debugery, testery). Jego celem jest uprościć interakcję z jakąś zewnętrzną usługą/systemem. To nie tylko skrzynka narzędziowa, ale cały zestaw do majsterkowania IKEA – masz nie tylko śrubokręt, ale też instrukcję, śrubki, klej, czasem nawet gotowe półprodukty. Przykładem jest np. Android SDK – daje Ci biblioteki do pracy z Androidem, emulator telefonu, dokumentację i narzędzia do budowy aplikacji.
- **framework** to szkielet (ramy), w które wstawiasz swój kod. Framework ma swoje zasady, cykl życia i konwencje, a Twój kod żyje wewnątrz nich. Zamiast skrzynki narzędzi masz plac budowy z rusztowaniem – musisz dopasować się do jego kształtu. Ty wypełniasz rusztowanie cegłami (swoim kodem), ale konstrukcja już została narzucona. Przykładem jest np. Django (Python) – framework webowy, który narzuca strukturę aplikacji, sposób definiowania modeli, widoków, routingu.
- **API** to interfejs – zestaw zasad, nazw metod, struktur danych, które mówią Ci jak komunikować się z danym systemem. Nie jest rzeczą materialną jak plik .dll czy .so. API to raczej kontrakt: „jeśli wywołasz tę funkcję z takimi parametrami, dostaniesz taki wynik”. To jak menu w restauracji. API to spis dań i sposób zamawiania – mówi Ci: „żeby dostać pizzę, powiedz kelnerowi `orderPizza(size=large)`”. Samo menu nie gotuje pizzy, tylko mówi, co możesz dostać i jak o to poprosić.

### 5. **Szkolenie**
[Metoda Feynmana](https://fs.blog/feynman-technique/) jest chyba znana wszystkim, którzy interesują się metanauką. Jej istotą jest "testowanie" własnego zrozumienia danego konceptu poprzez próbę wytłumaczenia (rzeczywistemu lub wyimaginowanemu) dwunastolatkowi, czym on jest, zidentyfikowania luk we własnym zrozumieniu, a następnie ich zapełnienia. 

Jeśli macie jakiegoś dwunastolatka pod ręką, posadźcie go proszę przed monitorem i dajcie mi znać, jak zareagował na następującą definicję:
> _Wiesz, czym jest Facebook, prawda? (istnieje ryzyko, że polegnę już w tym miejscu, bo ponoć jest to już medium tylko dla boomerów). To teraz wyobraź sobie, że na swojej stronie internetowej chciałabym zaimplementować funkcjonalność, która pozwoli mi wyświetlać na niej kilka ostatnich postów z mojego profilu. Gdybym chciała to zrobić z wykorzystaniem "surowego" kodu, zajęłoby mi to dużo czasu i jest szansa, że zrobiłabym to w sposób, który spowoduje błędy. Na szczęście Facebook udostępnia [zestaw narzędzi](https://developers.facebook.com/docs/javascript/), który pozwala taką funkcjonalność zaimplementować dużo szybciej - takie gotowe "klocki", które pozwalają mi na to, że mogę w prosty sposób - za pomocą kilku, a nie kilkuset linii kodu - powiedzieć "hej Facebook, w tym miejscu mają być widoczne ostatnie posty z mojego profilu". Ponieważ Facebook wie lepiej, jak na różnego rodzaju platformach zaimplementować takie rozwiązanie, wykorzystując ich narzędzia mogę zminimalizować ryzyko, że coś pójdzie nie tak. Facebookowi jako platformie zależy, żeby jej użytkownicy budowali takie integracje, bo przyczynia się to do rozwoju popularności ich platformy - stąd decyzja o zbudowaniu, utrzymywaniu i udostępnianiu takich narzędzi. Te narzędzia - od konkretnej platformy, dla konkretnego kontekstu (np. języka programowania) to właśnie SDK._

Naturalnie pojawia mi się kilka hipotez, które postaram się zweryfikować - na przykład czy sytuacja, którą przywołałam, jest rzeczywistym przykładem wykorzystania SDK Facebooka? Albo czy rzeczywiście taka motywacja stoi za tym, że platformy decydują sie na stworzenie i utrzymywanie SDK? 

Każda z tych hipotez to rzecz do weryfikacji - a cały proces można oczywiście powtarzać kilkukrotnie, aż dojdzie się do wyjaśnienia, którego jest się pewnym w 100%.

### 6. **Czas**
Chociaż po całym tym procesie czuję, że rzeczywiście _intuicyjnie_ rozumiem, czym jest SDK, to zdaję sobie sprawę, że moje rozumienie może być w nieświadomy sposób ograniczone i mogę nie widzieć, czego jeszcze nie wiem. Intuicja to „wolne gotowanie”. Podświadomość potrzebuje powtórek i ekspozycji w czasie.

Mając już świadomość tego, czym jest SDK i jak działa będę na ten koncept wyczulona - będę zwracać uwagę na inne przykłady SDK, będę rozglądać się za innymi rzeczami, które przypominają SDK (nawet tymi niezwiązanymi z programowaniem), będę budować kolejne projekty, które różne SDK wykorzystują. Tak, aby z czasem budować coraz lepsze zrozumienie tego tematu.

## Podsumowanie
Ostatecznie uważam, że razem z AI udało mi się wypracować sensowny framework intuicyjnego rozumienia różnych tematów na własne potrzeby. 

Mając cały proces rozpisany na kroki, będę go testować do przerabiania innych tematów (związanych i niezwiązanych z programowaniem) i dopracowywać. 

Ostatecznie dążę do tego, żeby stworzyć sobie własną "mentalną skrzynkę narzędziową" tak, aby uczyć się nowych tematów szybko i efektywnie - i chociaż AI nie jest w tym procesie konieczne, to jak widać może rzeczywiście wiele z tych etapów przyspieszyć.