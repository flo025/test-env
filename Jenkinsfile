pipeline {
    agent any

    environment {
        test = 'ENV du Jenkinsfile'
    }

    stages {
        stage('Checkout') {
            steps {
                println '+++  stage: Checkout ++++'
                checkout scm
                script {
                    env.GIT_COMMIT = sh (script: "git log -n 1 --pretty=format:'%h'", returnStdout: true)
                }
                sh 'chmod -R 777 .'
                echo "+++ ending job"
            }
        }

        stage ("Build and publish docker") {
            steps {
                println '+++  stage: Build and publish docker ++++'
                sh "docker-compose -f docker-compose.yml up --build -d"
                echo "+++ ending job"
            }
        }
    }
}
