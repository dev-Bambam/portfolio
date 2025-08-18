# Stage 1: The Build Stage
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

# Install only production dependencies for the final image
RUN npm install --omit=dev

COPY . .

# Use the production build script
RUN npm run build:prod

# Stage 2: The Production Stage
FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package.json ./
COPY --from=builder /usr/src/app/node_modules/ ./node_modules/
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000

# The command to run your compiled application in the dist folder
CMD ["node", "dist/entrypoint.js"]