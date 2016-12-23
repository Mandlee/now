# Gulp - Angular - Es6

## Előkészület

- Telepíteni a nodejs és npm csomagokat
- Telepíteni a gulp csomagot
- Telepíteni a bower csomagot

### nodejs
A nodejs oldaláról letölteni az LTS verziót.
Ennek a csomagnak a készítésekor ez a 6.x.x

### Gulp

```bash
npm install gulp -g
```

### Bower

```bash
npm install bower -g
```

## Fejlesztéshez

Hogyha először használjuk ezt a csomagot, akkor az npm és bower segítégével töltjük le a futtatáshoz szükséges csomagokat.

```bash
npm install
bower install
```

Hogyha minden csomag elérhető, akkor kiadhatjuk a gulp parancsot a build futtatásához.

```bash
gulp
```

## Javaslat (opcionális)

A csomag elkészítésénél a yarn csomagkezelőt használtam. Ez tökéletesen kompatibilis az npm-el, csak sokkal gyorsabb és hatékonyabb.

Hogyha használni szeretnéd a yarn csomagkezelőt csak egyszerűen fel kell telepítened, és onnantól ugyanúgy működik mint az npm.

### Yarn parancsok (opcionális)

#### Dependenciák telepítése (opcionális)

```bash
yarn install
```

A yarn csomagkezelőről bővebben itt olvashatsz.
Nagyon hasznos és modern. 

[YARN](https://yarnpkg.com/)

[Telepítés](https://yarnpkg.com/en/docs/install#mac-tab)
