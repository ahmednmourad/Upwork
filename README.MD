## template.yaml

Here you'll find the cloudformation template that deploys An API Gateway resource with 2 Endpoint (POST, GET contact)
It also deploys two lambda functions and associate them with the 2 endpoints created earlier from API Gateway,
Lastly it deploys 2 Lambda Layers (MySQL, LambdaSharedUtils) those layers are shared across all lambda functions for reusability

## openapi.yaml

Here you'll find the actual API Gateway endpoints defined according to openapi specifications this will be responsible for validating the incoming request

## functions folder

This contains the code for the lambda functions

## layers folder

This contains the lambda layers

## samconfig.toml

This file stores configuration for any command used to deploy or run the serverless architecture

## locals.json

This file contains environment variables that can be used to test the flow locally