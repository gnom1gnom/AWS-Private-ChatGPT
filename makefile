-include .env

sync:
	aws s3 sync backendless-bedrock-gptui/dist/ s3://backendlessbedrockgpt-websitebucket-nzookbkcukl7 --profile birders