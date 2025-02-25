# Gunakan image Node.js versi terbaru sebagai base image
FROM node:22

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file ke dalam container
COPY . .

# Build TypeScript
RUN npm run build

# Expose port yang digunakan aplikasi
EXPOSE 3000

# Jalankan server saat container dijalankan
CMD ["node", "dist/index.js"]
