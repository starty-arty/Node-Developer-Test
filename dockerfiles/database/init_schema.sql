-- create database
drop database if exists `messages`;

create database `messages`;

use `messages`;

-- create table messages
DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender_privilege` enum('member', 'admin') NOT NULL,
  `content` text NOT NULL,
  `sent_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = latin1;

-- populate table messages
LOCK TABLES `messages` WRITE;

INSERT INTO
  `messages`
VALUES
  (1, 'admin', 'hey man', '2023-05-26 16:04:33'),
  (2, 'member', 'hey wassup', '2023-05-26 16:04:33');

UNLOCK TABLES;