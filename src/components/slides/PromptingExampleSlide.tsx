import ContentToDocumentSlide from './shared/ContentToDocumentSlide';
const exampleImage = '/assets/c11c47964265c5b66e6940b4796b0f16fb5ceec0.png';
import { Lightbulb } from 'lucide-react';

export default function PromptingExampleSlide() {
  // Left content - Example task image
  const leftContent = (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-green-500/20">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <div>
          <h3 className="text-white" style={{ fontWeight: 700 }}>Przykład zadania</h3>
          <p className="text-white/60 text-sm">Ćwiczenie relaksacyjne - Oddech 4-7-8</p>
        </div>
      </div>

      {/* Example task image */}
      <div className="bg-white rounded-lg border border-white/10 overflow-hidden">
        <img 
          src={exampleImage} 
          alt="Przykład zadania - Oddech 4-7-8" 
          className="w-full h-auto"
        />
      </div>

      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-green-500" />
          <p className="text-white/90 text-sm">
            <span style={{ fontWeight: 700 }}>Tip:</span> Dobry prompt zawiera kompletną specyfikację zadania z wszystkimi szczegółami implementacyjnymi.
          </p>
        </div>
      </div>
    </div>
  );

  // Document content - Prompting instructions
  const documentContent = {
    preview: `# Instrukcja dla AI - Jak poprawnie promptować

## Zanim zaczniesz cokolwiek kodować

Chciałbym, żebyś zaprojektował dla mnie nową funkcjonalność na podstawie informacji, które poniżej Ci zawarłem.

**Przeanalizuj aplikację:**
- Przyjrzyj się dokładnie całej aplikacji
- Przeanalizuj, jakie są komponenty
- Sprawdź, jakie są ustawione style
- Dowiedz się jak najwięcej, żeby ułatwiło Ci to późniejszą implementację rozwiązania

**Stwórz plan:**
- Zanim zaczniesz cokolwiek kodować, pokaż mi plan co chcesz zrealizować
- Plan zapisz w pliku .md
- Proszę odznaczaj na nim progress
...`,
    full: `# Instrukcja dla AI - Jak poprawnie promptować

## Zanim zaczniesz cokolwiek kodować

Chciałbym, żebyś zaprojektował dla mnie nową funkcjonalność na podstawie informacji, które poniżej Ci zawarłem.

**Przeanalizuj aplikację:**
- Przyjrzyj się dokładnie całej aplikacji
- Przeanalizuj, jakie są komponenty
- Sprawdź, jakie są ustawione style
- Dowiedz się jak najwięcej, żeby ułatwiło Ci to późniejszą implementację rozwiązania

**Stwórz plan:**
- Zanim zaczniesz cokolwiek kodować, proszę, pokaż mi plan, co chcesz zrealizować
- Plan zapisz w pliku md
- Proszę odznaczaj na nim progress

## W trakcie pracy

**Komunikacja:**
- Pamiętaj, że jeżeli masz jakieś pytania, to proszę, pytaj mnie o to

**Wykorzystuj istniejące komponenty:**
- Pamiętaj, żeby wykorzystywać komponenty, które istnieją w aplikacji
- Staraj się używać tego, co już jest
- Jeżeli musisz stworzyć coś na nowo, to po prostu zapytaj mnie, czy to jest OK

## Przykład: Ćwiczenie relaksacyjne - struktura treści

### [TYTUŁ ĆWICZENIA] Oddech 4-7-8

**[KATEGORIA]** Oddechowe
**[CZAS TRWANIA]** 2 minuty
**[POZIOM TRUDNOŚCI]** Początkujący
**[IKONA/EMOJI]** 🫁 (lub wind/breeze icon z Lucide)

### [KRÓTKI OPIS]
Prosta technika oddechowa, która pomaga zredukować stres i uspokoić umysł w ciągu kilku minut.

### [KORZYŚCI]
- Szybkie uspokojenie
- Redukcja napięcia
- Lepsze skupienie

### [INSTRUKCJE KROK PO KROKU]

**[KROK 1 - Przygotowanie]**
- Tytuł: "Usiądź wygodnie"
- Opis: "Znajdź spokojne miejsce. Usiądź z prostymi plecami lub połóż się. Zamknij oczy lub skup wzrok na jednym punkcie."
- Czas: 15 sekund

**[KROK 2 - Akcja]**
- Tytuł: "Wdech przez nos - licz do 4"
- Opis: "Powoli wdychaj powietrze przez nos, licząc w myślach: 1, 2, 3, 4. Poczuj jak brzuch unosi się."
- Czas: 4 sekundy
- Animacja: Okrąg rozszerza się

**[KROK 3 - Akcja]**
- Tytuł: "Zatrzymaj oddech - licz do 7"
- Opis: "Delikatnie wstrzymaj oddech. Licz spokojnie: 1, 2, 3, 4, 5, 6, 7. Bez napinania się."
- Czas: 7 sekund
- Animacja: Okrąg zatrzymany

**[KROK 4 - Akcja]**
- Tytuł: "Wydech przez usta - licz do 8"
- Opis: "Wypuść powietrze przez lekko rozchylone usta ze świszczącym dźwiękiem. Licz: 1, 2, 3, 4, 5, 6, 7, 8."
- Czas: 8 sekund
- Animacja: Okrąg kurczy się

**[KROK 5 - Powtórzenie]**
- Tytuł: "Powtórz cykl 4 razy"
- Opis: "To było jedno pełne ćwiczenie. Powtórz cały cykl jeszcze 3 razy (łącznie 4 powtórzenia)."
- Licznik: 1/4, 2/4, 3/4, 4/4

### [WSKAZÓWKI]
- Nie martw się, jeśli na początku trudno Ci wstrzymać oddech przez 7 sekund - możesz skrócić do 5
- Skup się na spokojnym, równym rytmie
- Jeśli poczujesz zawroty głowy, wróć do normalnego oddechu

### [TRIGGER/KIEDY STOSOWAĆ]
- Przed ważnym zadaniem
- Po ukończeniu trudnego projektu
- Gdy czujesz napięcie lub stres
- Przed snem

### [TAGI]
#oddech #szybkie #biuro #wszędzie

---

## Podsumowanie

Zanim coś zakodujesz, proszę napisz, jak rozumiesz moją prośbę i jaki masz plan na jej realizację.`,
  };

  return (
    <ContentToDocumentSlide
      sectionBadge="CZĘŚĆ 3: Praca z AI"
      badgeColor="#9333EA"
      title="Prompt w praktyce"
      subtitle="Przykład: Ćwiczenie relaksacyjne Oddech 4-7-8"
      leftContent={leftContent}
      documentTitle="prompt-example.md"
      documentContent={documentContent}
      hints={{
        step1: 'Naciśnij ↓ aby zobaczyć instrukcję promptowania',
        step2: 'Naciśnij ↓ aby rozwinąć pełną instrukcję',
        step3: 'Naciśnij ↓ aby wrócić do początku',
      }}
    />
  );
}