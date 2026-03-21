# infra-terraform
===

## Description

infra-terraform is a Terraform-based infrastructure management tool designed to streamline the process of creating, managing, and deploying cloud infrastructure. It provides a modular and scalable framework for automating Terraform configurations, ensuring consistency and reproducibility across different environments.

## Features

### Key Features

* **Modular Terraform Configuration**: Break down large Terraform configurations into smaller, reusable modules for easier management and maintenance.
* **Environment Management**: Easily switch between different environments (e.g., dev, staging, prod) using a simple and intuitive configuration system.
* **Automation**: Automate Terraform plan and apply operations using a robust workflow engine.
* **Consistency**: Enforce consistency across different environments using built-in validation and governance features.
* **Scalability**: Scale your infrastructure deployments with ease using Terraform's built-in support for cloud providers like AWS, Azure, and Google Cloud.

### Additional Features

* **Terraform Module Registry**: A built-in registry for storing and managing Terraform modules, ensuring that your infrastructure configuration is always up-to-date and consistent.
* **Infrastructure-as-Code (IaC)**: infra-terraform supports IaC using Terraform's HCL (HashiCorp Configuration Language) syntax.
* **CI/CD Integration**: Easily integrate infra-terraform with popular CI/CD tools like Jenkins, Travis CI, and CircleCI.

## Technologies Used

* **Terraform** (0.15.x): The industry-standard infrastructure as code tool for defining and managing cloud infrastructure.
* **Go** (1.17.x): The primary programming language used for building and maintaining the infra-terraform tool.
* **Docker** (20.10.x): Used for containerizing the infra-terraform tool and ensuring consistent deployments.
* **github.com/terraform-providers**: A collection of Terraform provider libraries for interacting with cloud providers like AWS, Azure, and Google Cloud.

## Installation

### Prerequisites

* **Terraform**: Ensure that Terraform is installed on your system and version 0.15.x is used.
* **Go**: Install Go version 1.17.x or later.
* **Docker**: Install Docker version 20.10.x or later.

### Installation Steps

1. Clone the infra-terraform repository using `git clone https://github.com/your-username/infra-terraform.git`.
2. Navigate to the project directory using `cd infra-terraform`.
3. Build the infra-terraform tool using `go build -o infra-terraform main.go`.
4. Create a Docker image using `docker build -t infra-terraform .
5. Run the infra-terraform tool using `docker run -it --rm infra-terraform`.

### Configuration

1. Create a `config.yaml` file in the project directory with the required configuration settings.
2. Update the `TERRAFORM_PROVIDER` environment variable to point to your preferred cloud provider.

## Getting Started

1. Familiarize yourself with the infra-terraform tool and its features by reading the [User Guide](./doc/user-guide.md).
2. Explore the [Terraform Module Registry](./doc/terraform-module-registry.md) for available modules.
3. Start building your infrastructure configurations using the [Terraform HCL Syntax](./doc/terraform-hcl-syntax.md).

## Contributing

We welcome contributions to the infra-terraform project! Please refer to the [Contributing Guide](./doc/contributing.md) for details on how to contribute.

## License

infra-terraform is licensed under the [Apache License, Version 2.0](./LICENSE).

## Acknowledgments

We would like to thank the Terraform community for their contributions to the Terraform project.