# Step 1: Base image
FROM node:20

# Step 2: Working directory
WORKDIR /app

# Step 3: Copy package files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all files
COPY . .

# Step 6: Build React app
RUN npm run build

# Step 7: Install serve
RUN npm install -g serve

# Step 8: Start app
CMD ["serve", "-s", "dist", "-l", "3000"]

# Step 9: Expose port
EXPOSE 3000