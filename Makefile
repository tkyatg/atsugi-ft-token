init:
	npm install
	cp .env.example .env
deploy-mumbai:
	npx hardhat compile
	npx hardhat run scripts/deploy.js --network mumbai