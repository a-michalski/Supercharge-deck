import ContentToDocumentSlide from './shared/ContentToDocumentSlide';
const figmaScreenshot = '/assets/67b8317d76614f5b4ab56bd20e742dbc8172488f.png';

export default function ExtractTokensSlide() {
  // Full prompt content
  const promptFull = `Użyj Figma MCP. Wykonaj kolejno: pobierz metadata, następnie design context.

Zwróć:

- JSON tokenów systemu: colors, typography, spacing, radius, border, breakpoints.

- Komponenty (Markdown): lista komponentów, warianty, props, data-node-id, mapowanie nazw (Figma → kod).

- Layout (Markdown): siatki / grid, skala spacing, wzorce sekcji.

- Assets / ikony (Markdown): nazwa, typ pliku (svg/png), źródło (pełny URL).

- Pobierz wszystkie assety lokalnie do public/assets/ i potwierdź zapis.

Pamiętaj: pliki muszą być zapisane lokalnie, same linki nie wystarczą.

FIGMA_URL= [Twój link]`;

  // Preview content (first 15 lines)
  const promptPreview = promptFull.split('\n').slice(0, 15).join('\n');

  return (
    <ContentToDocumentSlide
      sectionBadge="CZĘŚĆ 4: Ekstrakcja tokenów"
      badgeColor="#1976D2"
      title="Extract Tokens and Styles"
      subtitle="Pierwszy krok: ekstrakcja design tokenów z Figma"
      leftContent={
        <img 
          src={figmaScreenshot} 
          alt="Figma Variables Panel"
          className="w-full h-auto object-contain rounded"
        />
      }
      documentTitle="Extract tokens and styles.md"
      documentContent={{
        preview: promptPreview,
        full: promptFull,
      }}
      hints={{
        step1: 'Naciśnij ↓ aby zobaczyć dokument',
        step2: 'Naciśnij ↓ aby rozwinąć',
        step3: 'Naciśnij ↓ aby wrócić do początku',
      }}
    />
  );
}