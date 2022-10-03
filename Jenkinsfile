pipeline {
    agent any

    tools {
        maven 'Maven-3.8.6'
    }

    environment {
        sonarEnv = "SonarQube"
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
                        sh """mvn sonar:sonar"""
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
                    sh """docker build -t techPill:example Dockerfile.jvm"""
                }
            }
        }

        stage('Upload image') {
            steps {
                script {
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