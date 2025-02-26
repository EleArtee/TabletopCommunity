CREATE DATABASE  IF NOT EXISTS `db_tabletopcommunity` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_tabletopcommunity`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: db_tabletopcommunity
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `idAdmin` int NOT NULL AUTO_INCREMENT,
  `nick` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idAdmin`),
  UNIQUE KEY `nick` (`nick`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `informe de juegos`
--

DROP TABLE IF EXISTS `informe de juegos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `informe de juegos` (
  `idReport` int NOT NULL AUTO_INCREMENT,
  `cuerpo` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idAdmin` int DEFAULT NULL,
  `idGame` int DEFAULT NULL,
  PRIMARY KEY (`idReport`),
  KEY `idAdmin` (`idAdmin`),
  KEY `idGame` (`idGame`),
  CONSTRAINT `informe de juegos_ibfk_1` FOREIGN KEY (`idAdmin`) REFERENCES `admins` (`idAdmin`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `informe de juegos_ibfk_2` FOREIGN KEY (`idGame`) REFERENCES `juegos` (`idGame`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `informe de juegos`
--

LOCK TABLES `informe de juegos` WRITE;
/*!40000 ALTER TABLE `informe de juegos` DISABLE KEYS */;
/*!40000 ALTER TABLE `informe de juegos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `informe de lista`
--

DROP TABLE IF EXISTS `informe de lista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `informe de lista` (
  `idReport` int NOT NULL AUTO_INCREMENT,
  `cuerpo` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idAdmin` int DEFAULT NULL,
  `idUList` int DEFAULT NULL,
  PRIMARY KEY (`idReport`),
  KEY `idAdmin` (`idAdmin`),
  KEY `idUList` (`idUList`),
  CONSTRAINT `informe de lista_ibfk_1` FOREIGN KEY (`idAdmin`) REFERENCES `admins` (`idAdmin`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `informe de lista_ibfk_2` FOREIGN KEY (`idUList`) REFERENCES `lista` (`idList`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `informe de lista`
--

LOCK TABLES `informe de lista` WRITE;
/*!40000 ALTER TABLE `informe de lista` DISABLE KEYS */;
/*!40000 ALTER TABLE `informe de lista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `informe de reviews`
--

DROP TABLE IF EXISTS `informe de reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `informe de reviews` (
  `idReport` int NOT NULL AUTO_INCREMENT,
  `cuerpo` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idAdmin` int DEFAULT NULL,
  `idReview` int DEFAULT NULL,
  PRIMARY KEY (`idReport`),
  KEY `idAdmin` (`idAdmin`),
  KEY `idReview` (`idReview`),
  CONSTRAINT `informe de reviews_ibfk_1` FOREIGN KEY (`idAdmin`) REFERENCES `admins` (`idAdmin`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `informe de reviews_ibfk_2` FOREIGN KEY (`idReview`) REFERENCES `reviews` (`idReview`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `informe de reviews`
--

LOCK TABLES `informe de reviews` WRITE;
/*!40000 ALTER TABLE `informe de reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `informe de reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `informe de usuarios`
--

DROP TABLE IF EXISTS `informe de usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `informe de usuarios` (
  `idReport` int NOT NULL AUTO_INCREMENT,
  `cuerpo` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idAdmin` int DEFAULT NULL,
  `idUser` int DEFAULT NULL,
  PRIMARY KEY (`idReport`),
  KEY `idAdmin` (`idAdmin`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `informe de usuarios_ibfk_1` FOREIGN KEY (`idAdmin`) REFERENCES `admins` (`idAdmin`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `informe de usuarios_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `usuarios` (`idUser`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `informe de usuarios`
--

LOCK TABLES `informe de usuarios` WRITE;
/*!40000 ALTER TABLE `informe de usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `informe de usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juegos`
--

DROP TABLE IF EXISTS `juegos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `juegos` (
  `idGame` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` double NOT NULL,
  `editorial` varchar(255) NOT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idGame`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juegos`
--

LOCK TABLES `juegos` WRITE;
/*!40000 ALTER TABLE `juegos` DISABLE KEYS */;
INSERT INTO `juegos` VALUES (1,'Catán','Juego competitivo de estrategia y gestión de recursos de 3 a 4 jugadores en el que vuestro objetivo es construir pueblos, ciudades y caminos con el objetivo de ser el jugador con más puntuación, negociando con el resto para ser el que más prospere.',45,'DEVIR','https://i.imgur.com/Is9VNOz.png','2025-02-20 23:08:52','2025-02-20 23:08:52'),(2,'Pandemic','Juego cooperativo de estrategia de 2 a 4 jugadores en el que encarnarás a un miembro de un equipo especializado en la contención de enfermedades ¿Vuestro objetivo? Usar todos los recursos en vuestro poder para detener la expansión de cuatro temibles plagas que amenazan la humanidad. Con vuestras habilidades y el trabajo en equipo la victoria será dura pero posible. ¿Podrás salvar la humanidad?',38.55,'Z-man Games','https://i.imgur.com/ARssr2L.png','2025-02-20 23:09:22','2025-02-20 23:09:22'),(3,'Azul','Azul es un juego de mesa familiar en el que tendrás que colocar los azulejos de manera estratégica para puntuar lo máximo posible en cada ronda y en el recuento final. ¡Decora el Palacio de la forma más bella posible!',30.1,'Next Move','https://i.imgur.com/yR8GYdN.png','2025-02-26 15:39:30','2025-02-26 15:39:30'),(4,'Betrayal: La Casa de la Colina','Un juego de mesa de suspense y emoción en el que los jugadores exploran una mansión encantada, encontrándose con espíritus y aterradores presagios que predecirán su destino. Como uno de los doce misteriosos personajes, explorarás una casa llena de secretos mortales. Mientras juegas construyes la casa. ¡Pero ten cuidado! Uno de tus compañeros te traicionará. El traidor comprobará tu cordura mientras usas todas tus habilidades para sobrevivir.',49,'Avalon Hill','https://i.imgur.com/dQv2ONj.png','2025-02-26 15:41:15','2025-02-26 15:41:15'),(5,'Cartas contra la humanidad','Un divertido juego para fiestas lleno de aleatoriadad y humor negro que sacará lo peor de todos tus comensales ¿Quién será el jugador con mejor sentido del humor? Descúbrelo junto a tus amigos',28.5,'Cards Against Humanity LLC','https://i.imgur.com/1DCkCgm.png','2025-02-26 15:44:38','2025-02-26 15:44:38'),(6,'Cluedo','Los participantes deben resolver un crimen ficticio usando su capacidad de deducción. Se ha cometido un asesinato y se ha de averiguar el autor , el arma y la habitación donde ha pasado. Solo el mejor detective saldrá con la victoria',19.9,'Hasbro Gaming','https://i.imgur.com/vteIoxP.png','2025-02-26 15:46:36','2025-02-26 15:46:36'),(7,'Mafia de Cuba','En Mafia de Cuba, cada jugador cogerá la caja de puros por turnos, la abrirá y podrá decidir entre traicionar al padrino transformándose en su enemigo o robando diamantes. Al final, el Padrino recuperará su caja de puros. Seguramente falten diamantes, lo que causará su enfado. Deberá entonces encontrar su tesoro y castigar a los perpetradores con zapatos de cemento antes de lanzarlos en la bahía. Tras una serie de debates acalorados y difíciles deducciones, el Padrino, con la ayuda de sus fieles secuaces, intentará encontrar los diamantes perdidos.',25,'Lui meme','https://i.imgur.com/vOsxrv4.png','2025-02-26 15:49:36','2025-02-26 15:49:36'),(8,'Mr. Jack','Londres, 1888. Barrio de Whitechapel La noche cubre las oscuras callejuelas con su manto tenebroso. Jack se mueve entre las sombras... La flor y la nata de los investigadores de la época se reúne para capturarlo antes de que, aprovechando la oscuridad, desaparezca para siempre. El cerco se va cerrando alrededor de Jack... pero es astuto y ha conseguido usurpar la identidad de un investigador... ¿Sabrán los demás desenmascararlo?',21.6,'Hurrican','https://i.imgur.com/BgceeB7.png','2025-02-26 15:50:37','2025-02-26 15:50:37'),(9,'Una noche. El hombre lobo','Divertido y entretenido juego en el que nada es lo que parece, donde cada personaje puede encerrar algo totalmente distinto y sorprendente. Juego de identidades ocultas donde deberéis adivinar quiénes son los hombres lobo y matar al menos uno para poder vencer la partida ¡Salvo que os hayáis transformado ya en Hombre Lobo!',22.4,'Viravi','https://i.imgur.com/AtKUKeP.png','2025-02-26 15:52:44','2025-02-26 15:52:44'),(10,'Radlands','Cada jugador obtiene un conjunto de 3 Campamentos únicos que tiene que defender. Ganas si Destruyes los 3 Campamentos de tu oponente. El recurso principal de este juego es el Agua. La gastarás para jugar tanto Personajes como Eventos y para usar las Habilidades de las cartas que ya tienes en la mesa. Los Personajes son los que te ayudan a defender tus Campamentos con sus valiosas Habilidades, mientras que los Eventos son poderosos Efectos que tardan en activarse. Para ganar, tendrás que administrar tus cartas y el Agua sabiamente.',25,'Maldito Games','https://i.imgur.com/MtUo9Aq.png','2025-02-26 15:54:42','2025-02-26 15:54:42'),(11,'ROOT','Un juego de poder y derecho del bosque. Acecha el bosque como uno de los Vagabundos, toma la iniciativa con las aves rapaces del Nido de Águilas, gobierna a tus súbditos como el Marquesado o ordena a la alianza del bosque que cree un nuevo orden. Con criaturas y astucia, gobernarás un fantástico reino del bosque en el mejor juego asimétrico, de aventuras y guerra.',59.96,'2 Tomatoes','https://i.imgur.com/7IKtHJP.png','2025-02-26 15:56:16','2025-02-26 15:56:16'),(15,'Takenoko','El Emperador japones ha decidido dejar ha cargo de la alimentación del panda a los miembros más fieles de su corte (los jugadores), ellos deberán llevar a cabo la más sagrada tarea de alimentar al panda, mediante el cultivo de jardines de bambú, estos jardines pueden ser de tres clases: verde, amarillo y rosa. El ganador de la partida sera el jugador que consiga hacer crecer la mayor cantidad de bambú y que administre mejor sus parcelas además de saciar el apetito del panda.',34.65,'Matagot','https://i.imgur.com/Sje8A4m.png','2025-02-26 15:59:13','2025-02-26 16:01:40'),(16,'Winter','El frío es el protagonista. El lago se ha convertido en hielo y tendrás que conseguir dominar las partes heladas antes de que llegue el deshielo. Escoge las partes más adecuadas y contrólalas antes que tu rival, demuéstrale que a ti el frío no te congela las ideas.',8.99,'DEVIR','https://i.imgur.com/ZJfCGX8.png','2025-02-26 16:01:04','2025-02-26 16:01:04');
/*!40000 ALTER TABLE `juegos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lista`
--

DROP TABLE IF EXISTS `lista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lista` (
  `idList` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `descripcion` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idUser` int DEFAULT NULL,
  PRIMARY KEY (`idList`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `lista_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `usuarios` (`idUser`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista`
--

LOCK TABLES `lista` WRITE;
/*!40000 ALTER TABLE `lista` DISABLE KEYS */;
/*!40000 ALTER TABLE `lista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `listajuegos`
--

DROP TABLE IF EXISTS `listajuegos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listajuegos` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `listumIdList` int NOT NULL,
  `juegoIdGame` int NOT NULL,
  PRIMARY KEY (`listumIdList`,`juegoIdGame`),
  KEY `juegoIdGame` (`juegoIdGame`),
  CONSTRAINT `listajuegos_ibfk_1` FOREIGN KEY (`listumIdList`) REFERENCES `lista` (`idList`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `listajuegos_ibfk_2` FOREIGN KEY (`juegoIdGame`) REFERENCES `juegos` (`idGame`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listajuegos`
--

LOCK TABLES `listajuegos` WRITE;
/*!40000 ALTER TABLE `listajuegos` DISABLE KEYS */;
/*!40000 ALTER TABLE `listajuegos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfiles`
--

DROP TABLE IF EXISTS `perfiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfiles` (
  `idProfile` int NOT NULL AUTO_INCREMENT,
  `descripcion` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idUser` int DEFAULT NULL,
  PRIMARY KEY (`idProfile`),
  KEY `idUser` (`idUser`),
  CONSTRAINT `perfiles_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `usuarios` (`idUser`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfiles`
--

LOCK TABLES `perfiles` WRITE;
/*!40000 ALTER TABLE `perfiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `perfiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `idReview` int NOT NULL AUTO_INCREMENT,
  `estrellas` float NOT NULL,
  `cuerpo` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idUser` int DEFAULT NULL,
  `idGame` int DEFAULT NULL,
  PRIMARY KEY (`idReview`),
  KEY `idUser` (`idUser`),
  KEY `idGame` (`idGame`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `usuarios` (`idUser`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`idGame`) REFERENCES `juegos` (`idGame`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,4,'Un juego con mucha estrategia extremedamente tenso que te dejará constantemente al borde del asiento. Cada partida se siente distintiva sobretodo con los definidos roles de cada personaje que te harán sentir todo un profesional. Me encanta','2025-02-26 16:21:05','2025-02-26 16:21:05',1,2),(2,2,'Está bien pero si hay un jugador que sea mejor estratégicamente al final él acaba decidiendo todo por el resto. No hay ninguna regla que impida o limita la comunicación así que esto probablemente pase a menudo','2025-02-26 16:22:39','2025-02-26 16:22:39',2,2);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tagjuegos`
--

DROP TABLE IF EXISTS `tagjuegos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tagjuegos` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `tagIdTag` int NOT NULL,
  `juegoIdGame` int NOT NULL,
  PRIMARY KEY (`tagIdTag`,`juegoIdGame`),
  KEY `juegoIdGame` (`juegoIdGame`),
  CONSTRAINT `tagjuegos_ibfk_1` FOREIGN KEY (`tagIdTag`) REFERENCES `tags` (`idTag`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tagjuegos_ibfk_2` FOREIGN KEY (`juegoIdGame`) REFERENCES `juegos` (`idGame`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tagjuegos`
--

LOCK TABLES `tagjuegos` WRITE;
/*!40000 ALTER TABLE `tagjuegos` DISABLE KEYS */;
INSERT INTO `tagjuegos` VALUES ('2025-02-22 16:22:20','2025-02-22 16:22:20',1,2),('2025-02-26 16:06:53','2025-02-26 16:06:53',1,4),('2025-02-26 16:08:25','2025-02-26 16:08:25',1,7),('2025-02-26 16:09:18','2025-02-26 16:09:18',1,9),('2025-02-22 16:21:54','2025-02-22 16:21:54',2,1),('2025-02-26 16:06:02','2025-02-26 16:06:02',2,3),('2025-02-26 16:06:56','2025-02-26 16:06:56',2,4),('2025-02-26 16:07:32','2025-02-26 16:07:32',2,5),('2025-02-26 16:08:00','2025-02-26 16:08:00',2,6),('2025-02-26 16:08:27','2025-02-26 16:08:27',2,7),('2025-02-26 16:08:58','2025-02-26 16:08:58',2,8),('2025-02-26 16:09:21','2025-02-26 16:09:21',2,9),('2025-02-26 16:10:01','2025-02-26 16:10:01',2,10),('2025-02-26 16:10:36','2025-02-26 16:10:36',2,11),('2025-02-26 16:10:54','2025-02-26 16:10:54',2,15),('2025-02-26 16:11:16','2025-02-26 16:11:16',2,16),('2025-02-22 16:22:03','2025-02-22 16:22:03',3,1),('2025-02-22 16:22:36','2025-02-22 16:22:36',3,2),('2025-02-26 16:07:00','2025-02-26 16:07:00',3,4),('2025-02-26 16:08:32','2025-02-26 16:08:32',3,7),('2025-02-26 16:09:02','2025-02-26 16:09:02',3,8),('2025-02-26 16:10:05','2025-02-26 16:10:05',3,10),('2025-02-26 16:10:41','2025-02-26 16:10:41',3,11),('2025-02-26 16:11:26','2025-02-26 16:11:26',3,16),('2025-02-26 16:07:37','2025-02-26 16:07:37',4,5),('2025-02-26 16:08:05','2025-02-26 16:08:05',4,6),('2025-02-22 16:22:46','2025-02-22 16:22:46',5,2),('2025-02-26 16:07:42','2025-02-26 16:07:42',5,5),('2025-02-26 16:10:09','2025-02-26 16:10:09',5,10),('2025-02-26 16:11:21','2025-02-26 16:11:21',5,16),('2025-02-26 16:07:06','2025-02-26 16:07:06',6,4),('2025-02-26 16:11:02','2025-02-26 16:11:02',6,15),('2025-02-26 16:07:47','2025-02-26 16:07:47',7,5),('2025-02-26 16:08:38','2025-02-26 16:08:38',9,7),('2025-02-26 16:09:26','2025-02-26 16:09:26',9,9),('2025-02-26 16:08:43','2025-02-26 16:08:43',10,7),('2025-02-26 16:09:38','2025-02-26 16:09:38',10,9),('2025-02-26 16:06:25','2025-02-26 16:06:25',11,3),('2025-02-26 16:11:32','2025-02-26 16:11:32',11,16),('2025-02-26 16:06:32','2025-02-26 16:06:32',12,3),('2025-02-26 16:07:18','2025-02-26 16:07:18',13,4),('2025-02-26 16:07:23','2025-02-26 16:07:23',15,4),('2025-02-26 16:09:50','2025-02-26 16:09:50',15,9);
/*!40000 ALTER TABLE `tagjuegos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `idTag` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idTag`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'Cooperativo','2025-02-22 13:53:16','2025-02-22 13:53:16'),(2,'Competitivo','2025-02-22 13:56:47','2025-02-22 13:56:47'),(3,'Estrategia','2025-02-22 13:57:58','2025-02-22 13:57:58'),(4,'Party game','2025-02-22 13:58:21','2025-02-22 13:58:21'),(5,'Cartas','2025-02-22 14:01:23','2025-02-22 14:01:23'),(6,'Dados','2025-02-22 14:01:51','2025-02-22 14:01:51'),(7,'Humor','2025-02-22 14:02:07','2025-02-22 14:02:07'),(8,'Acción/Destreza','2025-02-22 14:03:13','2025-02-22 14:03:13'),(9,'Mentir','2025-02-22 15:32:00','2025-02-22 15:32:00'),(10,'Roles secretos','2025-02-22 15:32:10','2025-02-22 15:32:10'),(11,'Abstracto','2025-02-22 15:32:26','2025-02-22 15:32:26'),(12,'Puzzles','2025-02-22 15:32:46','2025-02-22 15:32:46'),(13,'Exploración','2025-02-22 15:33:00','2025-02-22 15:33:00'),(14,'Trivia','2025-02-22 15:33:06','2025-02-22 15:33:06'),(15,'Fantasía','2025-02-23 13:29:46','2025-02-23 13:29:46');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `nick` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `isDeveloper` tinyint(1) DEFAULT NULL,
  `empresa` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `nick` (`nick`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `empresa` (`empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Ele','eleartee@gmail.com','$2b$04$UiMolb3MqrETmpTUTBwjoOK84498OG6Ti0TVuXKSiOFwTETLO4r8y',NULL,NULL,'2025-02-26 15:35:48','2025-02-26 15:35:48'),(2,'Jajasi','isaisa@gmail.com','$2b$04$kBUUOG9l1lwzv2iKZrvHku9HEIDo9sZ.WURPjABgt/mq715SmOXry',NULL,NULL,'2025-02-26 16:21:36','2025-02-26 16:21:36');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-26 16:42:23
