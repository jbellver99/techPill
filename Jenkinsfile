pipeline {
    agent any

    tools {
        maven 'Maven-3.5.2'
        jdk 'jdk8'
    }

    environment {
        dockerfileDir = 'src/main/docker'
        sonarEnv = "SonarQube"
        dockerTool = 'docker'
    }

    stages {
        stage('Install') {
            steps {
                withMaven(maven:'Maven-3.5.2') {
                    sh """mvn clean install"""
                }
            }
        }

        stage('Test') {
            steps {
                withMaven(maven:"Maven-3.5.2") {
                    sh """mvn clean install"""
                }
            }
        }

        stage('SonarQube') {
            steps {
                withSonarQubeEnv(sonarEnv) {
                    sh """mvn sonar:sonar"""
                }
            }
        }

        stage('Build') {
            steps {
                withMaven(maven:"Maven-3.5.2") {
                    sh """mvn clean package"""
                }
            }
        }

        stage('Build Docker image') {
            steps {
                script {
                    dir(dockerfileDir) {
                        tool dockerTool
                        docker.withTool(dockerTool) {
                            sh """docker build -t techPill:example Dockerfile.jvm"""
                        }
                    }
                }
            }
        }

        stage('Upload image') {
            steps {
                tool dockerTool
                docker.withTool(dockerTool) {
                    withCredentials([usernamePassword(credentialsId: 'DockerHub', passwordVariable: 'password', usernameVariable: 'username')]) {
                        sh """
                            docker login -u $username -p $password
                            docker push
                        """
                    }
                }
            }
        }
    }
}