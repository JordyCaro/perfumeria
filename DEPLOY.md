# Guía de Deploy en Netlify

## Configuración del Proyecto

Este proyecto está optimizado para deploy en Netlify con las siguientes configuraciones:

### Archivos de Configuración

1. **netlify.toml** - Configuración principal de Netlify
2. **public/_redirects** - Reglas de redirección para SPA routing

### Comandos de Build

- **Build command:** `npm run build`
- **Publish directory:** `dist`

## Pasos para Deploy en Netlify

### Opción 1: Deploy desde Git (Recomendado)

1. Sube el proyecto a GitHub/GitLab/Bitbucket
2. Ve a [Netlify](https://app.netlify.com/)
3. Click en "Add new site" > "Import an existing project"
4. Conecta tu repositorio
5. Configuración automática (ya detecta `netlify.toml`)
6. Click en "Deploy site"

### Opción 2: Deploy Manual (Drag & Drop)

1. Ejecuta `npm run build` localmente
2. Ve a [Netlify Drop](https://app.netlify.com/drop)
3. Arrastra la carpeta `dist` completa
4. ¡Listo!

## Verificaciones Post-Deploy

Verifica que funcionen correctamente:

### ✅ Rutas
- [ ] Página principal: `/`
- [ ] Fragancias: `/fragancias`
- [ ] Contacto: `/contact`
- [ ] Filtros en fragancias: `/fragancias?filter=hombre` y `/fragancias?filter=mujer`

### ✅ Responsive
- [ ] Menú móvil funciona correctamente
- [ ] WhatsApp button visible en móvil (tamaño reducido)
- [ ] Filtros de fragancias en grid responsive
- [ ] Hero se visualiza correctamente en todos los dispositivos
- [ ] Footer responsive

### ✅ Funcionalidades
- [ ] Enlaces de navegación funcionan
- [ ] Botones de WhatsApp redirigen correctamente
- [ ] Enlaces del footer funcionan
- [ ] Filtrado de fragancias por género

## Solución de Problemas Comunes

### Error 404 en rutas
- Verifica que `netlify.toml` y `public/_redirects` estén en el proyecto
- Asegúrate de que el publish directory sea `dist`

### Estilos no se cargan
- Ejecuta `npm run build` de nuevo
- Verifica que todos los archivos estén en `dist/_astro/`

### Imágenes no cargan
- Asegúrate de que las imágenes estén en la carpeta `public/`
- Usa rutas absolutas para las imágenes (ej: `/imagen.jpg`)

## Optimizaciones Aplicadas

✅ Rutas corregidas para SPA routing
✅ WhatsApp button responsive
✅ Menú móvil optimizado
✅ Headers de seguridad configurados
✅ Cache para assets estáticos
✅ Redirects para todas las rutas

## Contacto

Para soporte adicional, contacta al equipo de desarrollo.

---
Desarrollado por [Nemco-Net](https://nemco-net.com/) - 2025


