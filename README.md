# jirikhun.cz

Osobní web — Jiří Khun, produktový & agilní konzultant. Statický web bez build nástrojů: co je v repozitáři, to se nahrává na server tak, jak to je.

## Nasazení přes FTP

### Soubory, které se nahrávají na server (produkční web)

Při každé změně nahrát vždy vše, co se změnilo:

| Soubor / adresář | Účel |
|---|---|
| `index.html` | anglická verze webu (kořen webu `/`) |
| `cs/index.html` | česká verze webu (`/cs/`) — nahrávat včetně adresáře `cs/` |
| `styles.css` | veškeré CSS, sdílené oběma jazykovými verzemi |
| `main.js` | veškerý JavaScript, sdílený oběma jazykovými verzemi |
| `photo.jpg` | profilová fotka (sekce O mně + náhled při sdílení odkazu) |
| `favicon.svg` | ikona webu v záložce prohlížeče |

Pozor: obsahová změna se téměř vždy týká **obou** souborů `index.html` a `cs/index.html` — nahrávat oba.

### Pomocné soubory — přes FTP NENAHRÁVAT

| Soubor / adresář | Účel |
|---|---|
| `README.md` | tento soubor — dokumentace pro správu repozitáře |
| `CLAUDE.md` | instrukce pro Claude Code (AI asistent pro vývoj) |
| `.claude/` | konfigurace Claude Code (lokální dev servery) |
| `.git/` | historie verzí Gitu |

### Zvláštní případ

| Soubor | Poznámka |
|---|---|
| `phpinfo.php` | diagnostický skript pro kontrolu PHP na serveru. Nahrávat jen dočasně, když je potřeba něco ověřit, a **po použití ze serveru smazat** — veřejně dostupné `phpinfo()` prozrazuje detaily o konfiguraci serveru. |

## Lokální spuštění

```bash
python -m http.server 8000
# nebo
php -S localhost:8000
```

Web pak běží na `http://localhost:8000` (EN) a `http://localhost:8000/cs/` (CZ).
