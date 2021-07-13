FROM maven:3.6.3-openjdk-11 AS MAVEN_BUILD

COPY pom.xml /build/
COPY src /build/src/

WORKDIR /build/
RUN mvn package

FROM openjdk:8-jre

WORKDIR /app

COPY --from=MAVEN_BUILD /build/target/*.jar /app/backend-api.jar

ENTRYPOINT ["java", "-jar", "backend-api.jar"]