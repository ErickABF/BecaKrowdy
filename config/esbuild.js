import esbuild from 'esbuild'

/* en vez de crearlo en el package.json cramos el archivo importanto la libreria y haciendo uso de sus funciones que tiene creadas, en este caso  
*entryPoints: los archivos a revisar
*watch: estara mirando cada modificacion en los archivos
*bundle: junta los archivos en uno solo para que no se pierda la informacion
*outdir: la carpeta donde se guardara
-minify: le da un formato mas corto para que la maquina pueda leerlo mas rapido
*/
const entryPoints=[
    'src/sw.js', 
    'src/scripts/scrapper.js',
    'src/scripts/pop.js',
    'src/scripts/scrapCandidates.js'
]
esbuild.build({
    entryPoints,
    watch: true,
    bundle: true,
    outdir: 'dist',
    minify: true,
    allowOverwrite: true
})

//convierte un objeto o valor de JavaScript en una cadena de texto JSON
.then(response => console.log(JSON.stringify(response)))
.catch(err => console.log(err))