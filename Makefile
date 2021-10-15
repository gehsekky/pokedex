#!make

start:
	docker system prune -f
	docker build -t pokedex .
	docker run --name pd -p 3000:3000 pokedex
