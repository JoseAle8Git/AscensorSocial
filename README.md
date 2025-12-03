🚀 1. Requisitos previos

Instalar:

Node.js 18+

npm

Docker (opcional, para ejecutar en contenedor)

🧩 2. Ejecutar la aplicación en modo desarrollo

git clone https://github.com/tu_usuario/ascensor-social.git
cd ascensor-social
npm install
npm run dev


Abrir en el navegador:

👉 http://localhost:5173

🏗️ 3. Construir la aplicación para producción

SvelteKit usa adapter-node para generar un servidor Node.

npm run build


Para probar la build localmente:

node build


Acceder a:

👉 http://localhost:3000

🐳 4. Ejecutar la aplicación con Docker

4.1 Construir la imagen
docker build -t ascensor-social .

4.2 Ejecutar el contenedor
docker run -p 3000:3000 ascensor-social


La aplicación estará disponible en:

👉 http://localhost:3000

📁 5. Estructura del proyecto

ascensor-social/
│
├── src/
│   ├── routes/    
│   ├── lib/       
│   └── static/data/   
│
├── build/   
├── Dockerfile 
├── .dockerignore
├── package.json
└── README.md

🔧 6. Endpoints disponibles

Endpoint	Descripción
/api/curva/:centil	Datos de movilidad nacional
/api/ranking	Ranking por comunidad autónoma
/api/quintiles	Matriz de transición de quintiles
/api/simulador/:centil	Predicción de movilidad y renta

🧮 7. Lógica del simulador

El simulador calcula:

El centil esperado del hijo usando el modelo LOESS de movilidad.

La renta media del padre y del hijo buscando en los CSV correspondientes.

Devuelve un objeto JSON como:

{
  "centil_padres": 36,
  "centil_hijo": 47.3,
  "renta_padre": 23012.87,
  "renta_hijo": 17882.41
}


Esto permite estimar si un hogar asciende o desciende socialmente.

📝 8. Licencia

Proyecto creado por Jose Alejandro, Alireza y Alberto.
Uso académico y divulgativo.
