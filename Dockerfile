# Use Official Node.js runtime as base image
FROM node:18-alpine

# Set Working Directory in Container
WORKDIR /usr/src/app

# Copy Packages files
COPY package*.json ./

# Install Dependencies
RUN npm install --only=production

# Copy Application Code
COPY . .

# Expose Port
EXPOSE 3000

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S -u 1001 -G nodejs nodejs
USER nodejs

#Health Check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/health', (res) => { \
    process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start the Application
CMD ["npm", "start"]