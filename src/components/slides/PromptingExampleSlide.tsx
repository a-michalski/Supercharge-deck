import ContentToDocumentSlide from './shared/ContentToDocumentSlide';
const exampleImage = '/assets/detour.png';
import { Lightbulb } from 'lucide-react';

export default function PromptingExampleSlide() {
  const leftContent = (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-[#31BFC7]/20">
          <svg
            className="w-6 h-6 text-[#31BFC7]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <div>
          <h3 className="text-black" style={{ fontWeight: 700 }}>Przykład zadania</h3>
          <p className="text-gray-600 text-sm">Poszukiwanie autentycznych miejsc — aplikacja DETOUR</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-black/10 overflow-hidden">
        <img
          src={exampleImage}
          alt="Aplikacja DETOUR — Poszukiwanie autentycznych miejsc"
          className="w-full h-auto"
          style={{ maxHeight: '340px', objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>

      <div className="bg-[#31BFC7]/10 border border-[#31BFC7]/30 rounded-lg p-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-[#31BFC7]" />
          <p className="text-gray-700 text-sm">
            <span style={{ fontWeight: 700 }}>Tip:</span> Dobry prompt zawiera kompletną specyfikację zadania z kontekstem produktu i oczekiwanym wynikiem.
          </p>
        </div>
      </div>
    </div>
  );

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

## Przykład: Poszukiwanie autentycznych miejsc — DETOUR

### [FUNKCJONALNOŚĆ] Ekran odkrywania autentycznych miejsc

**[KONTEKST PRODUKTU]** Aplikacja DETOUR — travel app pomagający znaleźć lokalne, autentyczne miejsca

**[JOB TO BE DONE]**
Użytkownik potrzebuje konkretnych sygnałów, które pomagają mu ocenić, czy miejsce jest autentyczne i lokalne, a nie jest pułapką turystyczną.

### [EKRAN GŁÓWNY]
- Nagłówek: "Dokąd następnym razem?"
- Filtry: "Wszystkie kierunki" / "Wybrzeże"
- Lista miejsc z obrazkiem, krajem (uppercase) i nazwą miasta

### [SYGNAŁY AUTENTYCZNOŚCI do wyświetlenia]
- Lokalny tłum (nie turyści)
- Naturalna atmosfera miejsca
- Wiedza właściciela / rekomendacja lokalsa

### [KOMPONENTY DO STWORZENIA]
- PlaceCard: zdjęcie + kraj + nazwa + strzałka
- FilterBar: poziome filtry z aktywnym stanem
- AuthenticityBadge: sygnał autentyczności miejsca

### [NAWIGACJA DOLNA]
- ODKRYJ (aktywna), CO TERAZ?, ZAPLANUJ, PROFIL

---

## Podsumowanie

Zanim coś zakodujesz, proszę napisz, jak rozumiesz moją prośbę i jaki masz plan na jej realizację.`,
  };

  return (
    <ContentToDocumentSlide
      sectionBadge="CZĘŚĆ 3: Praca z AI"
      badgeColor="#445469"
      title="Prompt w praktyce"
      subtitle="Poszukiwanie autentycznych miejsc"
      leftContent={leftContent}
      documentTitle="prompt-example.md"
      documentContent={documentContent}
      hints={{
        step1: 'Naciśnij ↓ aby zobaczyć instrukcję promptowania',
        step2: 'Naciśnij ↓ aby rozwinąć pełną instrukcję',
        step3: 'Naciśnij ↓ aby przejść dalej',
      }}
    />
  );
}
