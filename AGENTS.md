# Guía para agentes

Este repositorio es un portafolio estático construido con Astro 5, React 18 y
TypeScript estricto. La página principal es un catálogo interactivo de proyectos
y las demás rutas son ejercicios frontend independientes.

El objetivo de estas instrucciones es que las skills instaladas se usen con
criterio para mejorar el código sin introducir complejidad, rediseños o
despliegues no solicitados.

## Antes de modificar código

1. Revisa `package.json`, `astro.config.mjs`, `tsconfig.json` y los archivos
   directamente relacionados con la tarea.
2. Comprueba `git status` y conserva cualquier cambio previo del usuario.
3. Selecciona sólo las skills necesarias según la tabla de este documento.
4. Lee completo el `skills/<nombre>/SKILL.md` de cada skill seleccionada antes
   de actuar. Lee sus referencias adicionales únicamente cuando el workflow de
   la skill o la tarea concreta lo requieran.
5. Indica brevemente qué skills se aplicarán y por qué.
6. Mantén el alcance de la petición. Una auditoría no autoriza una
   refactorización y una mejora de código no autoriza un despliegue.

Si dos recomendaciones entran en conflicto, aplica este orden:

1. Requisitos explícitos del usuario y comportamiento funcional existente.
2. Accesibilidad, seguridad y corrección.
3. Compatibilidad con las versiones reales del repositorio.
4. Rendimiento medido.
5. Consistencia visual y convenciones existentes.
6. Preferencias generales de una skill.

No uses APIs de React 19: este proyecto utiliza React 18. No actualices Astro,
React, Wrangler ni otras dependencias como efecto secundario de una tarea no
relacionada.

## Mapa del proyecto

- `src/pages/`: rutas Astro. Hay una portada y 16 demos locales.
- `src/layouts/Layout.astro`: documento HTML y metadatos compartidos.
- `src/landing-projects/`: implementación y CSS de cada ejercicio.
- `src/assets/`: recursos importados y optimizados por Astro.
- `src/modules/Projects/`: módulo del catálogo React.
  - `pages/main/`: pantalla, hooks y acceso a datos.
  - `commons/components/`: filtros, tarjetas, paginación y footer del módulo.
- `src/components/`: componentes React compartidos.
- `src/config/`: entorno público y cliente Axios compartido.
- `src/db/projects.json`: fuente local del catálogo.
- `src/stores/projectsStore.ts`: filtros persistidos con Zustand.
- `src/utils/`: tipos, tecnologías y filtrado de datos.
- `src/styles/` y `src/theme/`: estilos y tokens globales.
- `public/`: archivos que deben copiarse sin procesamiento.
- `skills/`: instrucciones locales para agentes; no forma parte del runtime.

El flujo principal de datos es:

`projects.json -> filterData -> fetchProjects -> React Query -> useProjects -> UI`

Al añadir una demo local, mantén sincronizados como mínimo:

- La ruta en `src/pages/`.
- La implementación en `src/landing-projects/`.
- Sus recursos en `src/assets/`, cuando existan.
- La entrada correspondiente en `src/db/projects.json`.

## Cuándo usar cada skill

### `astro`

Archivo: `skills/astro/SKILL.md`

Úsala al crear o modificar:

- Archivos `.astro`, rutas, layouts o directivas `client:*`.
- `astro.config.mjs`, integraciones, generación estática o SSR.
- Carga y optimización de assets mediante Astro.
- Estructura de páginas, content collections o adaptadores.

Reglas específicas del repositorio:

- Prefiere Astro para contenido estático y React sólo para interacción real.
- Usa la directiva de hidratación menos agresiva que satisfaga el caso. No
  introduzcas `client:only` por defecto.
- Conserva las demos aisladas y evita mover sus estilos al ámbito global.
- Consulta la documentación oficial actual de Astro antes de usar o cambiar
  APIs, integraciones, configuración o adaptadores.
- Después de cambios en configuración o integraciones, ejecuta
  `npx astro check` y `npm run build`.

### `frontend-design`

Archivo: `skills/frontend-design/SKILL.md`

Úsala cuando se solicite:

- Crear una página, landing, componente o experiencia visual nueva.
- Rediseñar o embellecer la portada.
- Mejorar composición, tipografía, color, animación o responsive design.

No la uses para una corrección lógica o una refactorización invisible.

En los ejercicios de Frontend Mentor, los diseños de referencia, `style-guide.md`
y requisitos existentes tienen prioridad sobre una nueva dirección artística.
En la portada sí puede proponerse una identidad propia, pero debe ser coherente,
responsive y accesible. Evita efectos decorativos que empeoren la legibilidad,
la navegación por teclado o `prefers-reduced-motion`.

### `vercel-react-best-practices`

Archivo: `skills/react-best-practices/SKILL.md`

Úsala siempre que la tarea escriba, revise o refactorice:

- Componentes `.tsx` o hooks.
- El catálogo, filtros, paginación o tarjetas.
- React Query, Zustand o lógica de hidratación.
- Rendimiento, renderizados o tamaño del bundle React.

Prioriza en este proyecto:

- Reducir JavaScript enviado al cliente y evitar hidratación innecesaria.
- Derivar estado durante render en lugar de sincronizarlo con efectos.
- Suscribirse en Zustand al estado mínimo necesario.
- Evitar waterfalls y paralelizar operaciones independientes.
- Evitar componentes declarados dentro de otros componentes.
- No añadir `memo`, `useMemo` o `useCallback` sin un coste verificable.
- Preferir imports directos en código nuevo sensible al bundle. No reescribas
  todos los barrels existentes sin evidencia de impacto.

Las reglas específicas de Next.js o React Server Components no aplican aquí.

### `vercel-composition-patterns`

Archivo: `skills/composition-patterns/SKILL.md`

Úsala al:

- Diseñar componentes compartidos o APIs reutilizables.
- Refactorizar componentes con muchas props booleanas.
- Crear compound components, providers o estado compartido entre hermanos.
- Revisar la arquitectura de `src/components/` o de un componente complejo.

No conviertas un componente pequeño en un sistema de composición. Prefiere una
API sencilla hasta que existan variantes o consumidores reales. Usa variantes
explícitas, `children` y contratos de contexto claros cuando reduzcan
acoplamiento. Omite todas las reglas marcadas como React 19.

### `typescript-advanced-types`

Archivo: `skills/typescript-advanced-types/SKILL.md`

Úsala cuando la tarea implique:

- Genéricos reutilizables o inferencia compleja.
- Uniones discriminadas para estados o eventos.
- Tipado seguro de filtros, formularios, stores, configuración o APIs.
- Eliminar `any`, casts inseguros o duplicación de tipos.
- Migrar JavaScript a TypeScript.

El proyecto ya usa el modo estricto. Prefiere inferencia, `unknown`, type guards
y tipos simples. No introduzcas conditional types o mapped types complejos si
una interfaz o unión directa expresa mejor el dominio. Documenta los tipos no
obvios y evita `as unknown as T`.

### `accessibility`

Archivo: `skills/accessibility/SKILL.md`

Es obligatoria para cualquier cambio visible o interactivo, aunque el usuario
no mencione accesibilidad. Aplícala especialmente en:

- Formularios, filtros, selectores, botones, enlaces y menús.
- Imágenes, iconos y contenido dinámico.
- Estados de carga, vacío, error o validación.
- Animaciones, modales y navegación responsive.

Objetivo mínimo: WCAG 2.2 AA. Verifica HTML semántico, nombres accesibles,
labels asociados, texto alternativo útil, orden de encabezados, contraste,
foco visible, teclado, targets de al menos 24x24 CSS px, zoom y reducción de
movimiento. Prefiere elementos nativos antes que recrearlos con ARIA.

No consideres una UI terminada sólo porque pasa una herramienta automática:
realiza también una revisión manual de teclado y foco cuando sea posible.

### `seo`

Archivo: `skills/seo/SKILL.md`

Úsala al cambiar:

- `Layout.astro`, `<head>`, títulos o descripciones.
- Rutas públicas, contenido indexable o jerarquía de encabezados.
- Canonicals, sitemap, robots.txt, Open Graph o datos estructurados.
- Imágenes y enlaces que influyen en descubrimiento o snippets.

Cada página pública debe tener título y descripción específicos. No inventes la
URL canónica, marca personal, perfiles sociales ni datos estructurados que no
puedan verificarse. Si aún no se conoce el dominio de producción, deja la
decisión explícitamente pendiente en vez de insertar URLs ficticias.

Combina esta skill con `astro` para implementación y con `web-perf` cuando el
trabajo abarque Core Web Vitals.

### `web-perf`

Archivo: `skills/web-perf/SKILL.md`

Úsala cuando el usuario pida:

- Auditoría de rendimiento, Lighthouse o Core Web Vitals.
- Mejorar LCP, INP, CLS, carga inicial o tamaño del bundle.
- Investigar imágenes, fuentes, caché, recursos bloqueantes o waterfalls.

También aplícala si una modificación incorpora una dependencia pesada,
hidratación adicional, imágenes hero, fuentes o scripts de terceros.

Mide antes de optimizar. Usa un build de producción y Chrome DevTools cuando
las herramientas requeridas estén disponibles. Si no están configuradas,
detén la auditoría métrica conforme a la skill, explica la limitación y separa
claramente cualquier observación estática del código. No presentes estimaciones
como mediciones ni recomiendes eliminar recursos sin comprobar que no se usan.

### `cloudflare`

Archivo: `skills/cloudflare/SKILL.md`

Úsala para decisiones de arquitectura o desarrollo sobre Cloudflare:

- Pages, Workers, R2, KV, D1, Queues o Durable Objects.
- Bindings, seguridad, observabilidad, networking o infraestructura como código.
- Seleccionar el producto adecuado para una necesidad nueva.

No la actives para cambios frontend normales sólo porque las miniaturas actuales
provienen de R2. Este repositorio genera un sitio estático; Cloudflare Pages es
la opción inicial más sencilla mientras no se requiera ejecución dinámica.

Recupera documentación oficial actual antes de afirmar límites, precios, APIs,
flags o campos de configuración.

### `workers-best-practices`

Archivo: `skills/workers-best-practices/SKILL.md`

Úsala únicamente cuando se escriba o revise código de Cloudflare Workers,
Pages Functions o configuración de bindings.

Exige, entre otras cosas:

- `wrangler.jsonc` como fuente de verdad y tipos generados con `wrangler types`.
- Cero secretos hardcodeados.
- Cero estado mutable por request a nivel de módulo.
- Cero promesas flotantes.
- Streaming para cuerpos grandes o de tamaño desconocido.
- Bindings en lugar de llamadas REST innecesarias.
- `ctx.waitUntil()` para trabajo posterior a la respuesta.
- Logging estructurado y observabilidad.

Recupera primero las prácticas, tipos y schema actuales indicados por la skill.
Combínala con `typescript-advanced-types` para contratos `Env` y handlers, pero
no escribas manualmente un `Env` que pueda generar Wrangler.

### `wrangler`

Archivo: `skills/wrangler/SKILL.md`

Debe cargarse antes de ejecutar cualquier comando Wrangler o editar
`wrangler.jsonc`.

Antes de actuar:

- Comprueba la versión instalada y contrástala con el requisito vigente de la
  skill. El repositorio puede tener una versión antigua; no la actualices de
  forma silenciosa.
- Consulta la documentación y el schema actuales.
- Usa `npx wrangler ...` para respetar la dependencia local.
- Después de cambiar bindings, genera y comprueba sus tipos.
- Usa almacenamiento local durante desarrollo salvo que la tarea requiera
  explícitamente recursos remotos.

Nunca muestres, registres ni pases secretos como argumentos. No ejecutes
comandos destructivos sobre recursos remotos sin autorización explícita y sin
resolver primero el recurso exacto.

### `cloudflare-deploy`

Archivo: `skills/cloudflare-deploy/SKILL.md`

Úsala sólo cuando el usuario pida explícitamente desplegar, publicar, alojar o
configurar el proyecto en Cloudflare. No la uses para una petición de
preparación, revisión o corrección local.

Para este sitio estático, el flujo esperado es:

1. Validar lint y build.
2. Confirmar que `dist/` existe y contiene las 17 rutas esperadas.
3. Cargar también la skill `wrangler`.
4. Verificar autenticación con `npx wrangler whoami`.
5. Realizar un dry run cuando el comando aplicable lo soporte.
6. Desplegar sólo el artefacto validado y reportar la URL confirmada.

No cambies el proyecto a SSR ni añadas un adapter de Workers sólo para poder
desplegarlo. Un despliegue es una mutación externa y requiere petición
explícita.

## Combinaciones recomendadas

| Tipo de tarea                        | Skills                                                                             |
| ------------------------------------ | ---------------------------------------------------------------------------------- |
| Nueva ruta o demo estática           | `astro` + `frontend-design` + `accessibility`                                      |
| Cambio en el catálogo React          | `react-best-practices` + `accessibility`                                           |
| Nuevo componente compartido          | `react-best-practices` + `composition-patterns` + `accessibility`                  |
| Store, filtros o contratos complejos | `typescript-advanced-types` + `react-best-practices`                               |
| Rediseño de la portada               | `frontend-design` + `astro` + `react-best-practices` + `accessibility`             |
| Auditoría SEO                        | `seo` + `astro` + `accessibility`                                                  |
| Auditoría de velocidad               | `web-perf` + `astro` + `react-best-practices`                                      |
| Integrar R2, D1, KV o Pages          | `cloudflare` + `wrangler`                                                          |
| Crear una Function o Worker          | `cloudflare` + `workers-best-practices` + `wrangler` + `typescript-advanced-types` |
| Publicar en Cloudflare               | `cloudflare-deploy` + `wrangler` y, si hay Worker, `workers-best-practices`        |

## Convenciones de implementación

- Respeta los alias definidos en `tsconfig.json`.
- Mantén TypeScript estricto y evita `any`.
- Conserva los cambios enfocados; no reformatees archivos no relacionados.
- Reutiliza tokens de `src/theme/` y variables CSS antes de duplicar valores.
- Mantén componentes exclusivos del catálogo dentro de
  `src/modules/Projects/commons/`; mueve algo a `src/components/` sólo cuando
  tenga consumidores fuera del módulo.
- Mantén el CSS del catálogo junto a su componente y el CSS de cada demo dentro
  de su carpeta.
- Usa `astro:assets` para recursos fuente que deban optimizarse; usa `public/`
  sólo para archivos que deban conservar nombre y contenido exactos.
- No conviertas una página estática en React sólo por comodidad.
- No añadas dependencias sin justificar el coste de mantenimiento y bundle.
- No alteres una reproducción visual de Frontend Mentor fuera del alcance
  solicitado.
- Trata `src/db/projects.json` como la fuente de verdad actual mientras no se
  implemente una API real.

## Validación antes de terminar

Para cualquier cambio de código ejecuta:

```sh
npm run lint
npm run build
```

El build ya incluye `astro check`. Corrige errores introducidos por la tarea y
reporta por separado avisos preexistentes.

Añade según el cambio:

- UI: revisar al menos viewport móvil y desktop.
- Interacción: probar teclado, foco, estado vacío, error y carga.
- Datos/filtros: probar búsqueda, filtros combinados, limpieza y paginación.
- SEO: inspeccionar el HTML generado y comprobar metadatos por ruta.
- Rendimiento: comparar mediciones de producción antes/después.
- Cloudflare Worker: typecheck, tests aplicables y dry run de Wrangler.
- Despliegue: smoke test de la URL publicada y de sus rutas principales.

Si el repositorio no dispone de tests para el comportamiento modificado, no
afirmes que está completamente cubierto: documenta la verificación manual
realizada y recomienda el test más valioso que falta.
