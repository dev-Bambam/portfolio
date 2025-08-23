# Multi-stage Dockerfile for building and running the TypeScript backend
# 1) Dependencies stage: install all dependencies (dev+prod) to build
FROM node:18-alpine AS deps
WORKDIR /app
# Copy package manifests first (for better cache usage)
COPY package.json package-lock.json* ./
# Install all dependencies (including dev) to be able to build
RUN npm ci --silent

# 2) Builder stage: build the TypeScript project
FROM node:18-alpine AS builder
WORKDIR /app
# Reuse installed node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules
# Copy source
COPY . .
# Build production artifacts (use the full build script which creates config.js)
RUN npm run build:prod

# 3) Runner stage: minimal production image
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Copy package manifest and install only production deps
COPY package.json package-lock.json* ./
RUN npm ci --production --silent
# Copy built artifacts and any runtime files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/config.js ./config.js
# If the above commands fail, it's likely because the files don't exist
# You can add some logging to verify this
RUN ls -la /app
# Create non-root user and switch
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
# Expose the port defined in .env (default 8080)
EXPOSE 8080
# Start the app using the production start command (matches package.json)
CMD ["npm", "run", "start"]