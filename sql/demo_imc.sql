-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 17 déc. 2018 à 19:28
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
  `json` text NOT NULL,
  `image` varchar(128) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `session` varchar(32) NOT NULL,
  `pseudo` varchar(32) NOT NULL,
  `scale` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `map`
--

INSERT INTO `map` (`id`, `json`, `image`, `date`, `pseudo`, `scale`) VALUES
(1, '{\"version\":\"1.0.0-beta.0\",\"map\":{\"name\":\"incal.jpg\",\"width\":493,\"height\":501,\"areas\":[{\"shape\":\"poly\",\"coords\":[{\"x\":249.01660149929253,\"y\":108.53724380858466},{\"x\":323.8917158511937,\"y\":186.1062224606405},{\"x\":249.00985534569185,\"y\":205.66028740856433}],\"id\":28,\"closed\":true},{\"shape\":\"poly\",\"coords\":[{\"x\":249.00985534569185,\"y\":109.21351806822436},{\"x\":176.15182890790632,\"y\":184.08238839292423},{\"x\":249.00985534569185,\"y\":205.33264610394502}],\"id\":29,\"closed\":true},{\"shape\":\"poly\",\"coords\":[{\"x\":249.00985534569185,\"y\":144.6176240724571},{\"x\":432.16683847401384,\"y\":183.07047135906612},{\"x\":255.08135754884066,\"y\":233.66632305197274},{\"x\":73.28551440246777,\"y\":174.64021286427598}],\"href\":\"http://google.com\",\"title\":\"Le très fameux site de l\'incal\",\"id\":30,\"closed\":true},{\"shape\":\"poly\",\"coords\":[{\"x\":127.57981128271598,\"y\":233.66632305197274},{\"x\":251.03368941340813,\"y\":285.27409177873744},{\"x\":255.08135754884066,\"y\":233.66632305197274},{\"x\":74.29743143632591,\"y\":174.97513508820106}],\"href\":\"http://nicolas.club1.fr\",\"title\":\"cette face est très importante\",\"id\":31,\"closed\":true},{\"shape\":\"poly\",\"coords\":[{\"x\":255.08135754884066,\"y\":232.6544060181146},{\"x\":431.1549214401557,\"y\":183.07047135906612},{\"x\":379.5471527133909,\"y\":240.74974228897966},{\"x\":251.04166142105538,\"y\":286.27803680494833}],\"href\":\"http://incal.com\",\"title\":\"La face cachée de l\'incal en quelque sorte\",\"id\":32,\"closed\":true}],\"dArea\":{\"shape\":\"default\",\"coords\":[],\"id\":0,\"isDefault\":true},\"hasDefaultArea\":false,\"lastId\":33}}', 'uploads/94f62b8eb181e465f8acfd4f2672d7a6c44c87b1.jpg', '2018-11-21 18:26:35', 'nicoco', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
