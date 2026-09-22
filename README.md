# Arima Play — web oficial

Sitio estático del estudio independiente **Arima Play**. Presenta CifraLetra y la versión jugable en el navegador, en castellano e inglés.

- Dominio canónico: https://arimaplay.com
- Jugar: https://arimaplay.com/jugar/
- Repositorio previsto: `aki7an/arimaplay-web`
- Alojamiento: GitHub Pages (rama `main`, carpeta raíz)

Este repositorio es independiente del videojuego. No incluye keystores, contraseñas, secretos de PlayFab ni archivos internos de Godot.

## Estructura

```text
index.html            Portada
jugar/                Página para jugar CifraLetra
jugar/engine/         Export HTML de Godot
aviso-legal.html
privacidad.html
404.html
CNAME                 arimaplay.com
css/styles.css
js/config.js          Correo y redes
js/i18n.js            Textos ES/EN
js/site.js
assets/images/        Icono y capturas públicas de CifraLetra
```

## Cómo editar

| Qué cambiar | Dónde |
|---|---|
| Correo | `js/config.js` → `contactEmail` |
| Redes | `js/config.js` → `social` (deja vacío lo que no exista) |
| Textos ES/EN | `js/i18n.js` |
| Textos de la portada | `index.html` |
| Aviso legal / privacidad | `aviso-legal.html`, `privacidad.html` |
| Icono y capturas | `assets/images/` |
| Paleta y tipografía | `css/styles.css` |

## Imágenes

Sustituye estos archivos manteniendo el nombre, o actualiza las rutas en `index.html`:

- `assets/images/icono-cifraletra.png`
- `assets/images/captura-menu.png`
- `assets/images/captura-partida.png`
- `assets/images/captura-temas.png`
- `assets/images/logo-soundscope.png`
- `assets/images/captura-soundscope.png`

## Publicar

1. Crea el repositorio público `arimaplay-web` en la cuenta `aki7an`.
2. Sube `main`.
3. En GitHub: **Settings → Pages → Deploy from a branch → `main` / `/ (root)`**.
4. Custom domain: `arimaplay.com`.
5. Espera el certificado HTTPS y marca **Enforce HTTPS**.

URL provisional de Pages: `https://aki7an.github.io/arimaplay-web/`

Con el dominio configurado, esa URL redirige a `https://arimaplay.com/`.

## DNS (OVHcloud)

Ver las instrucciones entregadas junto a esta web. Resumen:

- `arimaplay.com` → registros A/AAAA de GitHub Pages
- `www.arimaplay.com` → CNAME a `aki7an.github.io`
- `arimaplay.es` y `www.arimaplay.es` → redirección web permanente 301 a `https://arimaplay.com`

No uses el `.es` como segundo dominio de GitHub Pages.
