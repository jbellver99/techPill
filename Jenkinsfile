pipeline {
    agent any

    tools {
        maven 'Maven-3.8.6'
    }

    environment {
        sonarEnv = "SonarQube"
        dockerTool = 'docker'
    }

    stages {
        stage('Install') {
            steps {
                script {
                    sh """mvn clean install"""
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh """mvn clean install"""
                }
            }
        }

        stage('SonarQube') {
            steps {
                script {
                    withSonarQubeEnv(sonarEnv) {
                        sh """mvn sonar:sonar -Dsonar.projectKey=techPill -Dsonar.projectName=techPill"""
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh """mvn clean package"""
                }

            }
        }

        stage('Build Docker image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'DockerHub', passwordVariable: 'password', usernameVariable: 'username')]) {
                        tool dockerTool
                        docker.withTool(dockerTool) {
                            def image = docker.build("jbellver99/techPill")
                            image.push("example")
                        }
                    }
                }
            }
        }
    }
}