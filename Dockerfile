# Use the official Playwright image (includes browsers)
FROM mcr.microsoft.com/playwright:v1.50.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for efficient caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Run Playwright tests when the container starts
CMD ["npx", "playwright", "test"]