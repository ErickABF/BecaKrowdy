# Reto de Scrapping.

Medir el rendimineto del módulo 1

## Utilizado.

- yarn
- wsl2
- Visual Studio Code
- Chromium
- json-server

## ~Objetivos logrados.

- Utilizar el elemento popup para poder lograr la búsqueda de un determinado conocimiento.
- Almacenar los Urls de los candidatos con la ayuda del json-server.
- Almacenar la información de los candidatos haciendo uso de json-server.
- Aplicar los scripts de scrapping.

## ~Objetivos no logrados.

- Al crear el `tab` de cada candidato, este no espera a que el scrapp se realice y pasan a ser eliminadas por el `chrome.tabs.remove()` por ende no se pasa a aplicar el script de `scrap` llevándote hasta el ultimo candidato de la lista el cual es scrapeado y su informacion es gruadada.

## ~Configuración.

- El codigo s eencuentra configurado para que solo escrape la primera pagina de candidatos, esto se puede modificar en el archivo `sw en la linea 66`