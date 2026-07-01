# BLACKPRINT — Mejoras para la IA de código + Links verificados
**Referencia técnica para actualizar la guía web**
BP-001 v2.2 / Julio 2026

---

## PARTE 1: MEJORAS PARA LA IA DE CÓDIGO

### A. UX y navegación

1. **Toggle manual de dark/light mode** — Ahora solo responde a la preferencia del sistema. Añadir un botón en la esquina superior derecha que cambie el tema manualmente y guarde la preferencia en localStorage.

2. **Menú móvil** — La sidebar desaparece en móvil sin alternativa. Añadir un botón hamburguesa que abra la nav en un drawer lateral o desplegable.

3. **Barra de progreso global fija** — Una barra fina en la parte superior del viewport que muestre "X / 64 tareas completadas" con porcentaje. Se actualiza en tiempo real al marcar tareas. Nunca desaparece aunque el usuario scrollee.

4. **Indicador de fase en sidebar** — Junto al nombre de cada fase, mostrar "(X/Y tareas)" completadas. Si la fase está al 100%, mostrar un checkmark verde. Esto da retroalimentación visual sin abrir la sección.

5. **Botón "Siguiente tarea"** — Al final de cada sección, mostrar la próxima tarea sin completar en un botón que lleve directamente a la sección correspondiente.

6. **Scroll suave entre secciones** — Actualmente el cambio de sección es inmediato. Añadir `scroll-behavior: smooth` y fade-in ligero (150ms, no 300ms, más rápido, más elegante).

7. **Estado "completada" en nav** — Cuando una fase tiene todas sus tareas completadas, cambiar el estilo del botón en sidebar (añadir check + color diferente).

---

### B. Funcionalidades del checklist

8. **Notas por tarea** — Icono de nota (✏️) junto a cada tarea. Al hacer clic, aparece un campo de texto expandible donde el usuario puede escribir apuntes. Se guarda en localStorage bajo la misma clave que el checkbox.

9. **Fecha de inicio + cálculo de deadlines** — Campo al principio: "¿Cuándo empiezas?" (date input). La guía auto-calcula la fecha estimada de cada fase y la muestra en el badge de la sección (ej: "Fase 1 — 14 ago a 28 ago").

10. **Exportar checklist a PDF** — Botón "Exportar mi progreso" que genera un PDF con todas las tareas y su estado (marcada/no marcada) usando `window.print()` con CSS de impresión específico. Sin dependencias externas.

11. **Compartir progreso** — Botón "Compartir" que codifica el estado de las 64 tareas en un hash en la URL (`#progress=101010...`). Quien reciba el link ve el mismo progreso. Útil para mentores o socios.

12. **Reset por fase** — En cada sección de checklist, añadir un botón pequeño "Reiniciar fase" que desmarca solo las tareas de esa fase, con confirmación previa.

---

### C. Contenido y recursos

13. **Links directos en todos los recursos** — Sustituir toda mención del tipo "busca X en YouTube" o "ver canal de Y" por un anchor tag con href directo. Usar los links de la Parte 2 de este documento. Los links abren en `target="_blank"` con `rel="noopener noreferrer"`.

14. **Chips de tipo de recurso** — Antes de cada link, mostrar un badge de tipo: `GRATIS`, `PAGO`, `TRIAL`, `YOUTUBE`. Usa color neutro para todos, no semáforo de colores.

15. **Calculadora de COG interactiva** — En Fase 5 / Tarea 5-4, añadir una calculadora embebida con estos inputs:
    - Coste blank/producción (€)
    - Coste impresión/bordado (€)
    - Coste etiquetas + packaging (€)
    - Coste envío al cliente (€)
    - Multiplicador deseado (2.5x / 3x / 3.5x, selector)
    Output: Precio de venta sugerido (€) y margen bruto (%).

16. **Calculadora de nombre (verificador)** — En la tarea 1-8, añadir un input donde el usuario escriba su nombre de marca candidato y la herramienta lo evalúe automáticamente:
    - Número de sílabas (contar vocales)
    - Longitud en caracteres
    - Si contiene números o guiones
    - Links pre-rellenados a comprobar disponibilidad en Instagram, TikTok y Namecheap con el nombre escrito

17. **Glosario con búsqueda** — El glosario de 50 términos actualmente es estático. Añadir un input de búsqueda encima que filtre los términos en tiempo real por nombre o definición (JS puro, sin librerías).

18. **Tabla comparativa POD interactiva** — En Fase 4, sustituir la tabla estática por una con checkboxes de filtro: "Precio bajo", "Envío España rápido", "Sin MOQ", "Integración Shopify". Al activar un filtro, las plataformas que no cumplen se atenúan.

19. **Links a playlists específicas** — No solo al canal. Para Zoe Hong, enlazar directamente a su playlist de Tech Pack. Para CLO 3D, al canal oficial. Ver todos los links en Parte 2.

20. **Fichas de marcas referentes** — En la tarea 1-4 (estudiar 5 marcas techwear), añadir fichas colapsables de cada marca con: web oficial, Instagram, descripción en 2 líneas, y PVP aproximado de su prenda hero.

---

### D. Diseño visual

21. **Tipografía más editorial** — La guía habla de estética techwear. La fuente actual es genérica. Cargar desde Google Fonts: `Space Grotesk` para títulos y `Inter` para cuerpo. Mantener todo en CSS variable para que el cambio sea global.

22. **Eliminar bordes redondeados excesivos** — Los `border-radius: 12px` en tarjetas hacen el diseño "blando". Reducir a `border-radius: 4px` en tarjetas y `2px` en inputs y badges. Más técnico, más techwear.

23. **Espaciado más generoso en móvil** — Actualmente en móvil el padding se reduce a 1rem. Debería ser `1.25rem` horizontal y `2rem` vertical para que no se sienta apretado.

24. **Microinteracción en checkbox** — Al marcar una tarea, la label debería tener una transición más visible: `text-decoration: line-through` + `opacity: 0.5` con `transition: all 0.2s`. El checkbox debería cambiar a verde con un micro-bounce.

25. **Número de tarea visible** — En cada item del checklist, mostrar el ID de tarea (ej: `1-3`) en un monospace pequeño a la izquierda. Ayuda al usuario a referenciar tareas en conversaciones o notas.

---

### E. Correcciones técnicas

26. **Shopify Compass no existe en 2026** — Se rebautizó como "Shopify Academy" (academy.shopify.com) y luego se integró en Shopify Learn. Actualizar todas las menciones.

27. **El link de "Hidden Champions" Discord** — No existe un link público estable. Sustituir por dos alternativas con links verificados: `r/streetwearstartup` y el servidor de Discord de la comunidad Indie Brand Builder.

28. **"Valentina" (software de patronaje)** — Se bifurcó en dos proyectos separados: Seamly2D (Windows/Mac) y el Valentina original. Para Mac, el correcto es Seamly2D. Actualizar la descripción y el link.

29. **Filatures du Parc** — El nombre correcto es "Filatures du Parc" (no "du Park"). El link correcto es `filaturesduparc.com`. Verificar antes de publicar.

30. **Procreate en Mac** — La guía ya lo aclara correctamente (solo iPad), pero en la tabla de software aparece listado sin deixar claro que NO es para Mac. Añadir un badge rojo `SOLO iPAD` junto al nombre.

---

## PARTE 2: LINKS VERIFICADOS POR CATEGORÍA

### CURSOS DE PAGO
| Recurso | Link | Precio |
|---|---|---|
| Domestika – Diseño de Identidad para Marcas (The Negra) | https://www.domestika.org/es/courses/852-diseno-de-identidad-para-marcas | ~11,99 € en oferta |
| Udemy – Shopify (buscar "shopify español") | https://www.udemy.com/es/topic/shopify/ | ~12,99 € en oferta |

### CURSOS GRATUITOS (PLATAFORMAS)
| Recurso | Link | Coste |
|---|---|---|
| Fashion as Design – MoMA (Coursera, audit gratis) | https://www.coursera.org/learn/fashion-design | Gratis (sin certificado) |
| Shopify – Curso oficial en español (Ecomkers, aprobado por Shopify) | https://www.ecomkers.com/curso-shopify-0-a-100 | Gratis |
| Shopify Academy | https://academy.shopify.com/ | Gratis (inglés) |
| Google Digital Garage (español) | https://learndigital.withgoogle.com/digitalgarage/es | Gratis |
| HubSpot Academy | https://academy.hubspot.com/ | Gratis |
| freeCodeCamp | https://www.freecodecamp.org/ | Gratis |
| Figma Academy (YouTube oficial) | https://www.youtube.com/@Figma | Gratis |
| Adobe Education en Coursera | https://www.coursera.org/partners/adobe | Gratis (audit) |

### YOUTUBE – BRANDING Y DISEÑO GRÁFICO
| Canal | Link |
|---|---|
| CharliMarieTV | https://www.youtube.com/@charlimarietv |
| The Futur | https://www.youtube.com/@thefutur |
| Roberto Blake | https://www.youtube.com/@robertoblake |
| Sebastian Esqueda (branding ES) | https://www.youtube.com/@sebastianesqueda |
| Wholesale Ted (POD y ecommerce) | https://www.youtube.com/@WholesaleTed |
| Printful oficial | https://www.youtube.com/@Printful |

### YOUTUBE – DISEÑO DE MODA (PLAYLISTS ESPECÍFICAS)
| Recurso | Link | Nota |
|---|---|---|
| Zoe Hong – Canal principal | https://www.youtube.com/zoehongteaches | Activa hasta 2026 |
| Zoe Hong – Playlist Tech Pack | https://www.youtube.com/playlist?list=PLenrM9mHOMGyIaXP7WxZJXJArpwxE18wj | Directa |
| Justine Leconte | https://www.youtube.com/@justineleconte | Tejidos y construcción |
| Timothy Westbrook | https://www.youtube.com/@timothywestbrook | Bocetado y sostenibilidad |
| CLO 3D Canal oficial | https://www.youtube.com/@CLO3D | Software 3D moda |

### HERRAMIENTAS DE DISEÑO
| Recurso | Link | Coste |
|---|---|---|
| Figma | https://www.figma.com/ | Gratis (plan básico) |
| Photopea | https://www.photopea.com/ | Gratis |
| Canva | https://www.canva.com/ | Gratis (plan básico) |
| GIMP (Mac nativo) | https://www.gimp.org/downloads/ | Gratis |
| Inkscape (Mac Apple Silicon) | https://inkscape.org/release/ | Gratis |
| Krita (Mac Apple Silicon) | https://krita.org/en/download/ | Gratis |
| Placeit (mockups ropa) | https://placeit.net/ | Freemium |
| Smartmockups | https://smartmockups.com/ | Freemium |
| Coolors (paletas) | https://coolors.co/ | Gratis |
| Google Fonts | https://fonts.google.com/ | Gratis |
| Adobe Express (web) | https://www.adobe.com/express/ | Gratis |
| Adobe Fresco (Mac) | https://www.adobe.com/products/fresco.html | Gratis (límites) |
| Adobe Color | https://color.adobe.com/ | Gratis |
| Adobe Fonts | https://fonts.adobe.com/ | Gratis (con Adobe ID) |
| Adobe Portfolio | https://portfolio.adobe.com/ | Gratis (con Adobe ID) |

### SOFTWARE 3D MODA
| Recurso | Link | Coste |
|---|---|---|
| CLO 3D (trial 30 días) | https://www.clo3d.com/en/ | Trial gratis |
| CLO 3D Educación (licencia estudiante) | https://www.clo3d.com/en/education | Gratis (email .edu) |
| Blender (100% gratis, Mac nativo) | https://www.blender.org/download/ | Gratis |
| Seamly2D (patronaje Mac, fork de Valentina) | https://seamly.net/ | Gratis |

### IDENTIDAD DE MARCA
| Recurso | Link |
|---|---|
| Shopify Business Name Generator | https://www.shopify.com/tools/business-name-generator |
| Coolors (paletas) | https://coolors.co/ |
| Google Fonts | https://fonts.google.com/ |
| Looka (logo IA) | https://looka.com/ |

### BANCOS DE IMÁGENES
| Recurso | Link |
|---|---|
| Unsplash | https://unsplash.com/ |
| Pexels | https://www.pexels.com/ |
| Pixabay | https://pixabay.com/ |
| Behance | https://www.behance.net/ |
| Dribbble | https://dribbble.com/ |
| Are.na | https://www.are.na/ |
| Pinterest | https://www.pinterest.com/ |

### PRODUCCIÓN – PRINT ON DEMAND
| Plataforma | Link | Margen aprox. |
|---|---|---|
| Printful (ES) | https://www.printful.com/es/ | €5-10 |
| Printify | https://printify.com/ | Variable |
| Redbubble | https://www.redbubble.com/es/ | €2-5 |
| Merch by Amazon | https://merch.amazon.com/ | €2-8 |

### PRODUCCIÓN – BLANKS PREMIUM
| Proveedor | Link | Nota |
|---|---|---|
| AS Colour | https://www.ascolour.com/ | Premium internacional |
| Comfort Colors | https://www.comfortcolors.com/ | Vintage/premium USA |
| Bella+Canvas | https://www.bellacanvas.com/ | Calidad media-alta |

### TEJIDOS Y PROVEEDORES (ESPAÑA)
| Proveedor | Link | Nota |
|---|---|---|
| Tejidos Royo (Valencia) | https://www.tejidosroyo.com/ | B2B, no retail online |
| Filatures du Parc (técnicos) | https://www.filaturesduparc.com/ | Técnicos y sostenibles |
| MOMAD Madrid (feria) | https://momad.ifema.es/ | Feria presencial |

### ECOMMERCE Y PLATAFORMAS
| Recurso | Link | Coste |
|---|---|---|
| Shopify (ES) | https://www.shopify.com/es/ | 1€/mes 3 meses, luego 36€ |
| Namecheap (dominio) | https://www.namecheap.com/ | ~10€/año |
| Cloudflare Registrar | https://www.cloudflare.com/products/registrar/ | Precio costo |
| Mailchimp | https://mailchimp.com/ | Gratis hasta 500 |
| Linktree | https://linktr.ee/ | Gratis (plan básico) |
| Zoho Mail (email profesional gratis) | https://www.zoho.com/mail/ | Gratis (1 cuenta) |
| CapCut (edición vídeo) | https://www.capcut.com/ | Gratis |

### COMUNIDADES
| Recurso | Link |
|---|---|
| r/streetwearstartup | https://www.reddit.com/r/streetwearstartup/ |
| r/streetwear | https://www.reddit.com/r/streetwear/ |
| r/techwear | https://www.reddit.com/r/techwear/ |
| r/fashiondesign | https://www.reddit.com/r/fashiondesign/ |
| Shopify Community (español) | https://community.shopify.com/ |

### EXTENSIONES DE NAVEGADOR (CHROME)
| Recurso | Link |
|---|---|
| ColorZilla | https://www.colorzilla.com/chrome/ |
| WhatFont | https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm |
| GoFullPage | https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechigigjjh38efnpmijhaem |
| Notion Web Clipper | https://www.notion.so/web-clipper |
| Fonts Ninja | https://www.fonts.ninja/ |
| Pinterest Save Button | https://chrome.google.com/webstore/detail/pinterest-save-button/gpdjojdkbbmdfjfahjcgigfpmkopogic |

### REFERENCIAS Y LECTURAS
| Recurso | Link | Nota |
|---|---|---|
| The Evans Group (tech packs, blog) | https://www.theevansgroup.com/ | Plantillas gratuitas |
| Fashionary (recursos moda) | https://www.fashionary.org/ | Plantillas y referencias |
| Business of Fashion (newsletter) | https://www.businessoffashion.com/ | Gratis (limitado) |
| Ssense Editorial | https://www.ssense.com/en-us/editorial | Gratis |

### FICHAS DE MARCAS REFERENTES (para tarea 1-4)
| Marca | Web | Instagram |
|---|---|---|
| Acronym | https://acrnm.com/ | @acronymberlin |
| Goldwin | https://www.goldwin.co.jp/sp/ | @goldwin_jp |
| Arcteryx Veilance | https://veilance.arcteryx.com/ | @veilance |
| Salomon Advanced | https://www.salomon.com/en-us/apparel/advanced.html | @salomon |
| Stone Island Shadow Project | https://www.stoneisland.com/us/shadow-project | @stoneislandshadowproject |

---

## PARTE 3: CORRECCIONES DE NOMBRE EN EL DOCUMENTO

| Nombre en el PDF | Nombre correcto |
|---|---|
| "Filatures du Park" | Filatures du Parc |
| "Shopify Compass" | Shopify Academy |
| "Valentina (patronaje)" | Seamly2D (fork de Valentina, compatible Mac) |
| "Hidden Champions Discord" | Sin link estable – sustituir por Indie Brand Builder Discord o eliminar |
| "Arena" (inspiración) | Are.na → https://www.are.na/ |
| YouTube "Kestin Goar" | No encontrado con este nombre exacto – verificar antes de publicar |
| YouTube "Sartorial Talks" | Verificar handle exacto antes de publicar |

---

## PARTE 4: BÚSQUEDAS PRECONFIGURADAS PARA YOUTUBE

Sustituir estas instrucciones de búsqueda por links directos en la web:

| Instrucción en PDF | Link directo sugerido |
|---|---|
| "Busca 'Inkscape fashion design' en YouTube" | https://www.youtube.com/results?search_query=inkscape+fashion+flat+sketch |
| "Busca 'Blender cloth simulation' en YouTube" | https://www.youtube.com/results?search_query=blender+cloth+simulation+fashion |
| "Busca 'patronaje básico principiantes' en YouTube" | https://www.youtube.com/results?search_query=patronaje+basico+principiantes+español |
| "Busca 'GIMP tutoriales en español'" | https://www.youtube.com/results?search_query=GIMP+tutoriales+en+espanol+principiantes |
| "Busca 'Krita digital painting'" | https://www.youtube.com/results?search_query=krita+digital+painting+fashion+illustration |
| "Busca 'CLO 3D para principiantes'" | https://www.youtube.com/@CLO3D (canal oficial) |
| "Busca 'streetwear análisis' en YouTube" | https://www.youtube.com/results?search_query=streetwear+brand+analisis+español |

---

*Documento generado como referencia técnica para actualización de BP-001 v2.2*
*Julio 2026*
