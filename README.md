# jirikhun.cz

Osobní web — Jiří Khun, produktový & agilní konzultant. Statický web bez build nástrojů: co je v repozitáři, to se nahrává na server tak, jak to je.

Hlavní verze webu je **česká** (kořen `/`). Anglická verze je na `/en/`. Návštěvníkům s prohlížečem nastaveným na češtinu nebo slovenštinu se zobrazí česká verze, ostatním anglická; ruční volba přepínačem CZ/EN má přednost a pamatuje se.

## Nasazení přes FTP

### Soubory, které se nahrávají na server (produkční web)

Při každé změně nahrát vždy vše, co se změnilo:

| Soubor / adresář | Účel |
|---|---|
| `index.html` | česká verze webu (kořen webu `/`) — obsahuje i jazykovou detekci |
| `en/index.html` | anglická verze webu (`/en/`) — nahrávat včetně adresáře `en/` |
| `cs/index.html` | jen přesměrování staré adresy `/cs/` na kořen — nahrát jednou, dál se nemění |
| `styles.css` | veškeré CSS, sdílené oběma jazykovými verzemi |
| `main.js` | veškerý JavaScript, sdílený oběma jazykovými verzemi |
| `photo.jpg` | profilová fotka (sekce O mně + náhled při sdílení odkazu) |
| `favicon.svg` | ikona webu v záložce prohlížeče |

Pozor: obsahová změna se téměř vždy týká **obou** souborů `index.html` a `en/index.html` — nahrávat oba.

### Pomocné soubory — přes FTP NENAHRÁVAT

| Soubor / adresář | Účel |
|---|---|
| `README.md` | tento soubor — dokumentace pro správu repozitáře |
| `CLAUDE.md` | instrukce pro Claude Code (AI asistent pro vývoj) |
| `.claude/` | konfigurace Claude Code (lokální dev servery) |
| `.git/` | historie verzí Gitu |

## Lokální spuštění

```bash
python -m http.server 8000
# nebo
php -S localhost:8000
```

Web pak běží na `http://localhost:8000` (CZ) a `http://localhost:8000/en/` (EN). Pozor: s prohlížečem nastaveným na jiný jazyk než čeština/slovenština vás kořen automaticky přesměruje na `/en/` — pro vynucení české verze klikněte na přepínač CZ, nebo v konzoli spusťte `localStorage.setItem('lang', 'cs')`.
