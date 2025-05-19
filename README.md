# examen_ph_bi5
Examen Programación Híbrida - Ionic + Angular - bimestre 5 - Iplacex

Aplicación híbrida desarrollada con Ionic y Angular que permite:
crear, visualizar y eliminar avisos comunitarios con imagen, título, descripción y fecha.
Usa almacenamiento con '@capacitor/preferences' y componentes standalone.

TECNOLOGÍAS UTILIZADAS
- Ionic (https://ionicframework.com/)
- Angular (https://angular.io/)
- Capacitor (https://capacitorjs.com/) (`@capacitor/preferences`)
- Typescript / HTML / SCSS
- Ionicons
- Modal, Routing, Toggle, Storage

REQUISITOS PREVIOS
- Node.js  (v18 o superior) (https://nodejs.org/)
- Ionic CLI (npm install -g @ionic/cli)

INSTALACIÓN DEL PROYECTO
-Clonar el repositorio:
    git clone https://github.com/BeluReigns/examen_ph_bi5.git
    cd examen_ph_bi5

-Instalar dependencias
    npm install

-Ejecutar en el navegador
    ionic serve

EJECUTAR EN EMULADOR ANDROID(AndroidStudio)
- Build del proyecto: ionic build
- Sincronicar con Capacitor: npx cap sync android
- npx cap open android
- DESDE ANDROID STUDIO:
      Hacer Build > Clean Project
      Ejecutar en el emulador

FUNCIONALIDADES
- Crear aviso con foto, fescripción y fecha
- Visualizar detalles en modal
- Eliminar avisos desde Home (configurable)
- Persistencia local con Preferences
- Responsive y funcional en web y Android
- Multicomponentes reutilizables

NOTAS
- si se ejecuta en el navegador, toda la funciónalidad está operativa (no depende de SQLite)
- La persistencia usa @capacitor/preferences por lo tanto no requiere base de datos externa
- Los íconos se importan dinámicamente desde ionicons

AUTORA
Belén Ulloa – Desarrolladora Técnica Full Stack en formación
