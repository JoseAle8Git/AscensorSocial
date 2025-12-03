# build
FROM node:20-alpine AS builder

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos solo package*.json para instalar dependencias
COPY package*.json ./

# Instalamos dependencias (incluye dev)
RUN npm ci

# Copiamos el resto del código del proyecto
COPY . .

# Construimos la aplicación SvelteKit (usa adapter-node)
RUN npm run build


# runtime (imagen más ligera)
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Solo dependencias de producción
COPY package*.json ./
RUN npm ci --omit=dev

# Copiamos el build generado y los estáticos (CSV incluidos)
COPY --from=builder /app/build ./build
COPY --from=builder /app/static ./static

# Puerto expuesto por el contenedor
EXPOSE 3000

# Comando de arranque
CMD ["node", "build"]
