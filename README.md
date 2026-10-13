# Window 14

A browser game: you run a state-funded shop window in a tyranny. Five days, rules that get worse each day, three endings.
Plain HTML, CSS and JavaScript. No framework, no build step needed to play.

## Run it
Open `index.html` in a browser. That is all. (Music starts on the first click, because browsers block sound before any interaction.)

## What is where
```
index.html          the page markup (menu, overlays, HUD). No game logic.
css/style.css       all styling
js/game.js          the whole game (about 1,700 lines)
js/lang-vi.js       Vietnamese dictionary, one "English": "Vietnamese" pair per line
js/assets.js        GENERATED. All images and audio packed as base64. Do not edit by hand.
assets/images/      the source image files (booth, items, newspapers, ending art, menu photos, inspector)
assets/audio/music/ the two menu songs
assets/audio/sfx/   the sound effects (file name = the slot name the game plays)
tools/build_assets.py   rebuilds js/assets.js from assets/
tools/build_single.py   packs everything into one html file: dist/window14_single.html
```
Scripts load in this order: `assets.js`, `lang-vi.js`, `game.js`.

## Changing things
After you add, replace or delete anything in `assets/`, run `python tools/build_assets.py`.
Replacing a file with a new one that has the same name is all you need. The game reads each file by its name.

**Sound slots** (`assets/audio/sfx/`): `click` UI interaction, `openwindow` the Open the window button, `pickup` clicking an item,
`items` an item landing on the tray, `paper` book / notes / page flips, `print` the fingerprint record printing,
`coin` paying and bounties, `buzz` citation warnings, `boots` guards stepping in, `slam` guards taking someone,
`shot` the gunshot, `ambience` the looping background. Sounds that have no file (stamp, test, blip) are generated in code.

**Text and customers** (search `game.js` for these headers):
- `Day 1 customers` ... `Day 5` : each customer is one object: `opening`, `questions`, `tests` (inspection results),
  `record` (fingerprint history), `doc` (import receipt), and the lines for haggling, letting go, arresting, killing.
- `text: directives` : the daily rules paper and the bulletin shown before each day.
- `const BOOK1` ... `BOOK4` : the price book pages.
- `end of day` : the ledger. `endingKey()` : the rules for which ending you get. `const FIN` : the inspector's lines.
- Item names shown to the player come from `showName()`: it strips things like "(replica)" and renames giveaways (`NAMEMAP`, e.g. Toy medal -> Medal). The real name still appears in the end-of-day ledger.
- The "regulations updated" notice on days 2 to 4 is `showUpdateNotice()` (called from `beginShift()`).
- The "father not helped" storyline: `LILY` (Day 3, hidden at slot 6 or 8), Orpo's Day 3 visit (inside `DAY3[4]`) and his two Day 4 returns (`ORPO4`). The flags `lilyOut` and `orpoDead` are saved with the day snapshot. `autoScript` / `autoLeave` on a customer make a scene play line by line without menus.
- Customer order is shuffled in `orderFor()` (a few have fixed slots: the Day 1 father is last, the Day 2 father comes
  before the medal man, the Day 3 finale is last, the real Donald Orpo is customer 6 or 8 on Day 5).

**Vietnamese:** add or edit lines in `js/lang-vi.js`. A missing line just shows in English.
To find what still needs translating while you play, open the browser console and type `[...window.__miss]`.

## Testing shortcuts
- On the Day 1 directive screen there are three **Test ending** buttons. Delete them in `index.html` (`#skips`) before sharing.
- Jump to a day by adding a hash to the address: `index.html#day3`, `#day4`, `#day5`. Add `f` for "S0S-301 funded"
  (`#day4f`), `a` on day 2 or 3 for "helped the father" (`#day2a`), and `vi` for Vietnamese (`#day5vi`).

## Limits worth knowing
- `assets.js` is about 8 MB because everything is inlined, which keeps the game working from a double-click.
- The wall poster inside `assets/images/bg.webp`, the newspapers and the ending art contain English text baked into the image.
  Vietnamese mode adds captions under the newspapers and ending art, but not on the poster.
