# Makefile for Frontend Project

DOCKER := $(shell which docker)
PROJECT_NAME = $(shell basename $(CURDIR))
NODE_IMAGE = node:16
FRONTEND_CONTAINER = $(PROJECT_NAME)-frontend

.PHONY: build start stop lint format test clean

# Build the frontend project using Docker
build:
	@echo "Building the frontend project..."
	@docker run --rm -v $(CURDIR):/app -w /app $(NODE_IMAGE) npm install
	@docker run --rm -v $(CURDIR):/app -w /app $(NODE_IMAGE) npx webpack --config webpack.config.js

# Start the frontend project using Docker
start:
	@echo "Starting the frontend project..."
	@if docker ps -a --format '{{.Names}}' | grep -Eq "^$(FRONTEND_CONTAINER)$$"; then \
		docker start $(FRONTEND_CONTAINER); \
	else \
		docker run --name $(FRONTEND_CONTAINER) -d -p 3000:3000 -v $(CURDIR):/app -w /app $(NODE_IMAGE) npm start; \
	fi

# Stop the frontend project using Docker
stop:
	@echo "Stopping the frontend project..."
	@if docker ps -a --format '{{.Names}}' | grep -Eq "^$(FRONTEND_CONTAINER)$$"; then \
		docker stop $(FRONTEND_CONTAINER); \
	fi

# Lint the frontend code using Docker
lint:
	@echo "Linting the frontend code..."
	@docker run --rm -v $(CURDIR):/app -w /app $(NODE_IMAGE) npx eslint .

# Format the frontend code using Prettier
format:
	@echo "Formatting the frontend code..."
	@docker run --rm -v $(CURDIR):/app -w /app $(NODE_IMAGE) npx prettier --write .

# Run frontend tests using Docker
test:
	@echo "Running frontend tests..."
	@docker run --rm -v $(CURDIR):/app -w /app $(NODE_IMAGE) npm test

# Clean up Docker containers and images
clean:
	@echo "Cleaning up Docker containers and images..."
	@if docker ps -a --format '{{.Names}}' | grep -Eq "^$(FRONTEND_CONTAINER)$$"; then \
		docker rm -f $(FRONTEND_CONTAINER); \
	fi
	@docker rmi -f $(NODE_IMAGE)
