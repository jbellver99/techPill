FROM maven:3.6-jdk-11 AS build
WORKDIR /app
COPY jtqj/ /app
RUN mvn clean install

FROM adoptopenjdk/openjdk11:jre-11.0.4_11-alpine
WORKDIR /app
COPY --from=build /app/server/target/jtqj-server-bootified.war /app/jumpthequeue.war
ENTRYPOINT ["java","-jar","/app/jumpthequeue.war"]
EXPOSE 8081