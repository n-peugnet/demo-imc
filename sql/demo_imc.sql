-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 21 nov. 2018 à 13:33
-- Version du serveur :  5.7.9
-- Version de PHP :  7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `demo_imc`
--

-- --------------------------------------------------------

--
-- Structure de la table `map`
--

DROP TABLE IF EXISTS `map`;
CREATE TABLE IF NOT EXISTS `map` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `html` text NOT NULL,
  `svg` text NOT NULL,
  `json` text NOT NULL,
  `image` varchar(128) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pseudo` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `map`
--

INSERT INTO `map` (`id`, `html`, `svg`, `json`, `image`, `date`, `pseudo`) VALUES
(1, '<map name=\"incal.jpg\" id=\"incal.jpg\">\r\n	<area shape=\"poly\" coords=\"249,109,324,186,249,206,249,109\" href=\"undefined\" alt=\"undefined\"  />\r\n	<area shape=\"poly\" coords=\"249,109,176,184,249,205,249,109\" href=\"undefined\" alt=\"undefined\"  />\r\n	<area shape=\"poly\" coords=\"249,145,432,183,255,234,73,175,249,145\" href=\"http://google.com\" alt=\"http://google.com\" title=\"Le très fameux site de l\'incal\" />\r\n	<area shape=\"poly\" coords=\"128,234,251,285,255,234,74,175,128,234\" href=\"http://nicolas.club1.fr\" alt=\"http://nicolas.club1.fr\" title=\"cette face est très importante\" />\r\n	<area shape=\"poly\" coords=\"255,233,431,183,380,241,251,286,255,233\" href=\"http://incal.com\" alt=\"http://incal.com\" title=\"La face cachée de l\'incal en quelque sorte\" />\r\n</map>', '<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"493\" height=\"501\">\r\n	<a xlink:href=\"undefined\"><polygon points=\"249,109 324,186 249,206 249,109\" /></a>\r\n	<a xlink:href=\"undefined\"><polygon points=\"249,109 176,184 249,205 249,109\" /></a>\r\n	<a xlink:href=\"http://google.com\"><polygon points=\"249,145 432,183 255,234 73,175 249,145\" /></a>\r\n	<a xlink:href=\"http://nicolas.club1.fr\"><polygon points=\"128,234 251,285 255,234 74,175 128,234\" /></a>\r\n	<a xlink:href=\"http://incal.com\"><polygon points=\"255,233 431,183 380,241 251,286 255,233\" /></a>\r\n</svg>', '{\r\n	\"version\": \"1.0.0\",\r\n	\"map\": {\r\n		\"name\": \"incal.jpg\",\r\n		\"width\": 493,\r\n		\"height\": 501,\r\n		\"areas\": [\r\n			{\r\n				\"shape\": \"poly\",\r\n				\"coords\": [\r\n					{\r\n						\"x\": 249.01660149929253,\r\n						\"y\": 108.53724380858466\r\n					},\r\n					{\r\n						\"x\": 323.8917158511937,\r\n						\"y\": 186.1062224606405\r\n					},\r\n					{\r\n						\"x\": 249.00985534569185,\r\n						\"y\": 205.66028740856433\r\n					}\r\n				],\r\n				\"id\": 28,\r\n				\"closed\": true\r\n			},\r\n			{\r\n				\"shape\": \"poly\",\r\n				\"coords\": [\r\n					{\r\n						\"x\": 249.00985534569185,\r\n						\"y\": 109.21351806822436\r\n					},\r\n					{\r\n						\"x\": 176.15182890790632,\r\n						\"y\": 184.08238839292423\r\n					},\r\n					{\r\n						\"x\": 249.00985534569185,\r\n						\"y\": 205.33264610394502\r\n					}\r\n				],\r\n				\"id\": 29,\r\n				\"closed\": true\r\n			},\r\n			{\r\n				\"shape\": \"poly\",\r\n				\"coords\": [\r\n					{\r\n						\"x\": 249.00985534569185,\r\n						\"y\": 144.6176240724571\r\n					},\r\n					{\r\n						\"x\": 432.16683847401384,\r\n						\"y\": 183.07047135906612\r\n					},\r\n					{\r\n						\"x\": 255.08135754884066,\r\n						\"y\": 233.66632305197274\r\n					},\r\n					{\r\n						\"x\": 73.28551440246777,\r\n						\"y\": 174.64021286427598\r\n					}\r\n				],\r\n				\"title\": \"Le très fameux site de l\'incal\",\r\n				\"id\": 30,\r\n				\"closed\": true,\r\n				\"href\": \"http://google.com\"\r\n			},\r\n			{\r\n				\"shape\": \"poly\",\r\n				\"coords\": [\r\n					{\r\n						\"x\": 127.57981128271598,\r\n						\"y\": 233.66632305197274\r\n					},\r\n					{\r\n						\"x\": 251.03368941340813,\r\n						\"y\": 285.27409177873744\r\n					},\r\n					{\r\n						\"x\": 255.08135754884066,\r\n						\"y\": 233.66632305197274\r\n					},\r\n					{\r\n						\"x\": 74.29743143632591,\r\n						\"y\": 174.97513508820106\r\n					}\r\n				],\r\n				\"title\": \"cette face est très importante\",\r\n				\"id\": 31,\r\n				\"closed\": true,\r\n				\"href\": \"http://nicolas.club1.fr\"\r\n			},\r\n			{\r\n				\"shape\": \"poly\",\r\n				\"coords\": [\r\n					{\r\n						\"x\": 255.08135754884066,\r\n						\"y\": 232.6544060181146\r\n					},\r\n					{\r\n						\"x\": 431.1549214401557,\r\n						\"y\": 183.07047135906612\r\n					},\r\n					{\r\n						\"x\": 379.5471527133909,\r\n						\"y\": 240.74974228897966\r\n					},\r\n					{\r\n						\"x\": 251.04166142105538,\r\n						\"y\": 286.27803680494833\r\n					}\r\n				],\r\n				\"title\": \"La face cachée de l\'incal en quelque sorte\",\r\n				\"id\": 32,\r\n				\"closed\": true,\r\n				\"href\": \"http://incal.com\"\r\n			}\r\n		],\r\n		\"dArea\": {\r\n			\"shape\": \"default\",\r\n			\"coords\": [],\r\n			\"id\": 0,\r\n			\"isDefault\": true\r\n		},\r\n		\"hasDefaultArea\": false,\r\n		\"lastId\": 33\r\n	}\r\n}', 'uploads/incal.jpg', '2018-11-21 01:09:52', 'anonymous');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
