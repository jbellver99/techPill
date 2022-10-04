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
                        sh """
                            docker login -u $username -p $password
                            docker build -t techpill .
                            docker tag techPill jbellver99/techpill:example
                            docker push jbellver99/techpill:example
                        """
                    }
                }
            }
        }
    }
}