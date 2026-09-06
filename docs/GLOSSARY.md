# GLOSSARY — słownik domeny (PL / EN / IS)

<!-- Nazwy w kodzie MUSZĄ pochodzić stąd. Nowy termin w diffie = nowy wiersz tutaj. -->

| Termin w kodzie (EN) | PL | IS | Znaczenie / reguła biznesowa |
|---|---|---|---|
| `Deposit Saver` | oszczędzacz kaucji | tryggingarbjörgun (opis, nie oficjalna nazwa) | flagowy pakiet: naprawa drobnych szkód najmu przed wyprowadzką, żeby odzyskać całą kaucję |
| `handyman` | fachowiec / złota rączka | húsvörður/iðnaðarmaður | wykonawca usług QuickFix; kontakt bezpośrednio przez WhatsApp/tel |
| `before/after` | przed/po | fyrir/eftir | para zdjęć w galerii dowodzącej jakości naprawy (`src/assets/before-*`, `after-*`) |
| `WHATSAPP_URL` | link WhatsApp | WhatsApp tengill | wygenerowany z `wa.me/<numer>?text=` z gotowym szablonem wiadomości (`src/lib/contact.ts`) |
| `PHONE_NUMBER` / `EMAIL` | telefon / e-mail kontaktowy | sími / netfang | jedyne źródło prawdy w `src/lib/contact.ts` — nie duplikować w komponentach |
| `IKEA assembly` | montaż mebli IKEA | IKEA samsetning | jedna z usług podstawowych (obok Deposit Saver i drobnych napraw) |
| `lang` (`en`/`pl`/`is`) | język | tungumál | przełącznik trójjęzyczny; teksty w `src/i18n/translations.ts` |
