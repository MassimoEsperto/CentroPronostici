-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 25, 2020 alle 20:27
-- Versione del server: 5.6.33-log
-- PHP Version: 5.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_marescafantaeuropeo`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `calendario`
--

CREATE TABLE IF NOT EXISTS `calendario` (
  `id_partita` int(11) NOT NULL AUTO_INCREMENT,
  `partita` varchar(40) NOT NULL,
  `girone` varchar(1) NOT NULL,
  `data` datetime NOT NULL,
  `goalc` int(11) DEFAULT NULL,
  `goalt` int(11) DEFAULT NULL,
  `risultato` varchar(10) NOT NULL,
  `doppiachance1` varchar(10) NOT NULL,
  `doppiachance2` varchar(10) NOT NULL,
  `underover` varchar(10) NOT NULL,
  `risesatto` varchar(10) NOT NULL,
  `paridispari` varchar(10) NOT NULL,
  `golnogol` varchar(10) NOT NULL,
  PRIMARY KEY (`id_partita`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=54 ;

--
-- Dump dei dati per la tabella `calendario`
--

INSERT INTO `calendario` (`id_partita`, `partita`, `girone`, `data`, `goalc`, `goalt`, `risultato`, `doppiachance1`, `doppiachance2`, `underover`, `risesatto`, `paridispari`, `golnogol`) VALUES
(3, 'Turchia-Italia', 'A', '2020-06-12 21:00:00', 2, 2, 'X', '1X', 'X2', 'OVER', '2-2', 'PARI', 'GOL'),
(4, 'Galles-Svizzera', 'A', '2020-06-13 15:00:00', 2, 2, 'X', '1X', 'X2', 'OVER', '2-2', 'PARI', 'GOL'),
(5, 'Danimarca-Finlandia', 'B', '2020-06-13 18:00:00', 2, 4, '2', 'X2', '12', 'OVER', '2-4', 'PARI', 'GOL'),
(6, 'Belgio-Russia', 'B', '2020-06-13 21:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(7, 'Inghilterra-Croazia', 'D', '2020-06-14 15:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(8, 'Austria-Bo', 'C', '2020-06-14 18:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(9, 'Olanda-Ucraina', 'C', '2020-06-14 21:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(10, 'Bo-RepCeca', 'D', '2020-06-15 15:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(11, 'Polonia-Bo', 'E', '2020-06-15 18:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(12, 'Spagna-Svezia', 'E', '2020-06-15 21:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(13, 'Bo-Portogallo', 'F', '2020-06-16 18:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(14, 'Francia-Germania', 'F', '2020-06-16 21:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(15, 'Finlandia-Russia', 'B', '2020-06-17 15:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(16, 'Turchia-Galles', 'A', '2020-06-17 18:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(17, 'Italia-Svizzera', 'A', '2020-06-17 18:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(18, 'Ucraina-Bo', 'C', '2020-06-18 15:00:00', 0, 0, 'X', '1X', 'X2', 'UNDER', '0-0', 'PARI', 'NOGOL'),
(19, 'Danimarca-Belgio', 'B', '2020-06-18 18:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(20, 'Olanda-Austria', 'C', '2020-06-18 21:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(21, 'Svezia-Bo', 'E', '2020-06-19 15:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(22, 'Croazia-RepCeca', 'D', '2020-06-19 18:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(23, 'Inghilterra-Bo', 'D', '2020-06-19 21:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(24, 'Bo-Francia', 'F', '2020-06-20 15:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(25, 'Portogallo-Germania', 'F', '2020-06-20 18:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(26, 'Spagna-Polonia', 'E', '2020-06-20 21:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(27, 'Italia-Galles', 'A', '2020-06-21 18:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(28, 'Svizzera-Turchia', 'A', '2020-06-21 18:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(29, 'Bo-Olanda', 'C', '2020-06-22 18:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(30, 'Ucraina-Austria', 'C', '2020-06-22 18:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(31, 'Russia-Danimarca', 'B', '2020-06-22 21:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(32, 'Finlandia-Belgio', 'B', '2020-06-22 21:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(33, 'Croazia-Bo', 'D', '2020-06-23 21:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(34, 'RepCeca-Inghilterra', 'D', '2020-06-23 21:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(35, 'Bo-Spagna', 'E', '2020-06-24 18:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(36, 'Svezia-Polonia', 'E', '2020-06-24 18:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(37, 'Portogallo-Francia', 'F', '2020-06-24 21:00:00', NULL, NULL, '', '', '', '', '', '', ''),
(38, 'Germania-Bo', 'F', '2020-06-24 21:00:00', NULL, NULL, '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Struttura della tabella `cannoniere`
--

CREATE TABLE IF NOT EXISTS `cannoniere` (
  `id_cannoniere` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) NOT NULL,
  PRIMARY KEY (`id_cannoniere`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dump dei dati per la tabella `cannoniere`
--

INSERT INTO `cannoniere` (`id_cannoniere`, `nome`) VALUES
(12, 'Dzeko'),
(2, 'Ronaldo'),
(3, 'Del Piero'),
(4, 'Baggio'),
(11, 'Immobile'),
(9, 'energia'),
(7, 'vieri'),
(10, 'Ascione');

-- --------------------------------------------------------

--
-- Struttura della tabella `punteggio_risultati`
--

CREATE TABLE IF NOT EXISTS `punteggio_risultati` (
  `id_risulato` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_ris` varchar(20) NOT NULL,
  `punti_previsti` int(11) NOT NULL,
  PRIMARY KEY (`id_risulato`),
  UNIQUE KEY `tipo_ris` (`tipo_ris`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=49 ;

--
-- Dump dei dati per la tabella `punteggio_risultati`
--

INSERT INTO `punteggio_risultati` (`id_risulato`, `tipo_ris`, `punti_previsti`) VALUES
(1, '1', 4),
(2, 'X', 4),
(3, '2', 4),
(4, '1X', 1),
(5, 'X2', 1),
(6, '12', 1),
(7, 'UNDER', 2),
(8, 'OVER', 2),
(9, 'NOGOL', 2),
(10, 'GOL', 2),
(11, 'DISPARI', 2),
(12, 'PARI', 2),
(13, '1-0', 8),
(14, '2-0', 8),
(15, '3-0', 8),
(16, '4-0', 8),
(17, '5-0', 8),
(18, '2-1', 8),
(19, '3-1', 8),
(20, '4-1', 8),
(21, '5-1', 8),
(22, '3-2', 8),
(23, '4-2', 8),
(24, '5-2', 8),
(25, '4-3', 8),
(26, '5-3', 8),
(27, '5-4', 8),
(28, '0-0', 8),
(29, '1-1', 8),
(30, '2-2', 8),
(31, '3-3', 8),
(32, '4-4', 8),
(33, '5-5', 8),
(34, '0-1', 8),
(35, '0-2', 8),
(36, '0-3', 8),
(37, '0-4', 8),
(38, '0-5', 8),
(39, '1-2', 8),
(40, '1-3', 8),
(41, '1-4', 8),
(42, '1-5', 8),
(43, '2-3', 8),
(44, '2-4', 8),
(45, '2-5', 8),
(46, '3-4', 8),
(47, '3-5', 8),
(48, '4-5', 8);

-- --------------------------------------------------------

--
-- Struttura della tabella `schedina`
--

CREATE TABLE IF NOT EXISTS `schedina` (
  `id_partita` int(11) NOT NULL,
  `id_schedina` int(11) NOT NULL,
  `risultato` varchar(20) NOT NULL,
  `tipo` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `schedina`
--

INSERT INTO `schedina` (`id_partita`, `id_schedina`, `risultato`, `tipo`) VALUES
(3, 255, '1', 1),
(4, 255, '1', 1),
(5, 255, '1', 1),
(6, 255, '1', 1),
(7, 255, '1', 1),
(8, 255, '1', 1),
(9, 255, '1', 1),
(10, 255, '1', 1),
(11, 255, '1', 1),
(12, 255, '1', 1),
(13, 255, '1', 1),
(14, 255, '1', 1),
(15, 255, '1', 1),
(16, 255, '1', 1),
(17, 255, '1', 1),
(18, 255, '1', 1),
(19, 255, '1', 1),
(20, 255, '1', 1),
(21, 255, '1', 1),
(22, 255, '1', 1),
(23, 255, '1', 1),
(24, 255, '1', 1),
(25, 255, '1', 1),
(26, 255, '1', 1),
(27, 255, '1', 1),
(28, 255, '1', 1),
(29, 255, '1', 1),
(30, 255, '1', 1),
(31, 255, '1', 1),
(32, 255, '1', 1),
(33, 255, '1', 1),
(34, 255, '1', 1),
(35, 255, '1', 1),
(36, 255, '1', 1),
(37, 255, '1', 1),
(38, 255, '1', 1),
(39, 255, '', 2),
(40, 255, '', 2),
(41, 255, '', 2),
(42, 255, '', 2),
(43, 255, '', 2),
(44, 255, '', 2),
(45, 255, '', 2),
(46, 255, '', 2),
(47, 255, '', 2),
(48, 255, '', 2),
(3, 258, '2', 1),
(4, 258, 'NOGOL', 1),
(5, 258, '1', 1),
(6, 258, '1', 1),
(7, 258, '1', 1),
(8, 258, '1', 1),
(9, 258, '1', 1),
(10, 258, '1', 1),
(11, 258, '1', 1),
(12, 258, '1', 1),
(13, 258, '1', 1),
(14, 258, '1', 1),
(15, 258, '1', 1),
(16, 258, '1', 1),
(17, 258, '1', 1),
(18, 258, '1', 1),
(19, 258, '1', 1),
(20, 258, '1', 1),
(21, 258, '1', 1),
(22, 258, '1', 1),
(23, 258, '1', 1),
(24, 258, '1', 1),
(25, 258, '1', 1),
(26, 258, '1', 1),
(27, 258, '1', 1),
(28, 258, '1', 1),
(29, 258, '1', 1),
(30, 258, '1', 1),
(31, 258, '1', 1),
(32, 258, '1', 1),
(33, 258, '1', 1),
(34, 258, '1', 1),
(35, 258, '1', 1),
(36, 258, '1', 1),
(37, 258, '1', 1),
(38, 258, '1', 1),
(39, 258, '', 2),
(40, 258, '', 2),
(41, 258, '', 2),
(42, 258, '', 2),
(43, 258, '', 2),
(44, 258, '', 2),
(45, 258, '', 2),
(46, 258, '', 2),
(47, 258, '', 2),
(48, 258, '', 2),
(53, 423, 'Austria', 2),
(52, 423, 'Bo', 2),
(51, 423, 'Olanda', 2),
(50, 423, 'Danimarca', 2),
(49, 423, 'Danimarca', 2),
(48, 423, 'Finlandia', 2),
(47, 423, 'Russia', 2),
(46, 423, 'Galles', 2),
(45, 423, 'Italia', 2),
(44, 423, 'Svizzera', 2),
(43, 423, 'Turchia', 2),
(42, 423, 'Finlandia', 2),
(41, 423, 'Finlandia', 2),
(40, 423, 'Immobile', 2),
(39, 423, 'Belgio', 2),
(38, 423, '5-5', 1),
(37, 423, '12', 1),
(36, 423, '1-0', 1),
(35, 423, '2-1', 1),
(34, 423, 'OVER', 1),
(33, 423, '5-3', 1),
(32, 423, '1-5', 1),
(31, 423, '5-4', 1),
(30, 423, '3-3', 1),
(29, 423, '3-2', 1),
(28, 423, 'OVER', 1),
(27, 423, '1-0', 1),
(26, 423, '2-1', 1),
(25, 423, 'OVER', 1),
(24, 423, '2-1', 1),
(23, 423, '4-4', 1),
(22, 423, '2-3', 1),
(21, 423, '3-5', 1),
(20, 423, '2-3', 1),
(19, 423, '5-4', 1),
(18, 423, '3-2', 1),
(17, 423, '3-2', 1),
(16, 423, '5-3', 1),
(15, 423, '4-2', 1),
(14, 423, 'OVER', 1),
(13, 423, '5-0', 1),
(12, 423, '0-4', 1),
(11, 423, '3-5', 1),
(10, 423, '3-3', 1),
(9, 423, '5-3', 1),
(8, 423, 'X', 1),
(7, 423, '3-2', 1),
(6, 423, 'NOGOL', 1),
(5, 423, 'UNDER', 1),
(4, 423, 'DISPARI', 1),
(3, 423, 'X2', 1),
(66, 427, 'Francia', 2),
(65, 427, 'Germania', 2),
(64, 427, 'Portogallo', 2),
(63, 427, 'Portogallo', 2),
(62, 427, 'Spagna', 2),
(45, 427, 'Italia', 2),
(44, 427, 'Svizzera', 2),
(43, 427, 'Turchia', 2),
(42, 427, 'Polonia', 2),
(41, 427, 'Spagna', 2),
(40, 427, 'Del Piero', 2),
(39, 427, 'Spagna', 2),
(38, 427, '2-2', 1),
(37, 427, '2-2', 1),
(36, 427, '2-5', 1),
(35, 427, '3-4', 1),
(34, 427, '2-4', 1),
(33, 427, '3-4', 1),
(32, 427, '2-5', 1),
(31, 427, '0-5', 1),
(30, 427, 'OVER', 1),
(29, 427, 'X2', 1),
(28, 427, '1', 1),
(27, 427, '2-3', 1),
(26, 427, '2-4', 1),
(25, 427, '2-4', 1),
(24, 427, '3-4', 1),
(23, 427, '3-4', 1),
(22, 427, '2-5', 1),
(21, 427, '3-4', 1),
(20, 427, '2-4', 1),
(19, 427, '2-4', 1),
(18, 427, '3-4', 1),
(17, 427, '2-5', 1),
(16, 427, '3-4', 1),
(15, 427, '2-5', 1),
(14, 427, '2-5', 1),
(13, 427, '0-0', 1),
(12, 427, '4-1', 1),
(11, 427, 'OVER', 1),
(10, 427, 'X2', 1),
(9, 427, 'OVER', 1),
(8, 427, '4-1', 1),
(7, 427, '0-2', 1),
(6, 427, 'GOL', 1),
(5, 427, 'GOL', 1),
(4, 427, 'GOL', 1),
(3, 427, '2-2', 1),
(66, 423, 'Bo', 2),
(65, 423, 'Francia', 2),
(61, 427, 'Svezia', 2),
(60, 427, 'Polonia', 2),
(59, 427, 'Svezia', 2),
(58, 427, 'Croazia', 2),
(57, 427, 'Inghilterra', 2),
(56, 427, 'RepCeca', 2),
(55, 427, 'Inghilterra', 2),
(54, 427, 'Olanda', 2),
(53, 427, 'Olanda', 2),
(52, 427, 'Olanda', 2),
(51, 427, 'Ucraina', 2),
(50, 427, 'Belgio', 2),
(49, 427, 'Danimarca', 2),
(48, 427, 'Finlandia', 2),
(47, 427, 'Russia', 2),
(46, 427, 'Galles', 2),
(64, 423, 'Germania', 2),
(63, 423, 'Portogallo', 2),
(62, 423, 'Polonia', 2),
(61, 423, 'Polonia', 2),
(60, 423, 'Spagna', 2),
(59, 423, 'Svezia', 2),
(58, 423, 'Bo', 2),
(57, 423, 'Croazia', 2),
(56, 423, 'Inghilterra', 2),
(55, 423, 'RepCeca', 2),
(54, 423, 'Austria', 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `schedina_user`
--

CREATE TABLE IF NOT EXISTS `schedina_user` (
  `id_schedina` int(11) NOT NULL AUTO_INCREMENT,
  `id_utente` varchar(40) NOT NULL,
  `tempo` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_schedina`),
  KEY `id_utente` (`id_utente`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=430 ;

--
-- Dump dei dati per la tabella `schedina_user`
--

INSERT INTO `schedina_user` (`id_schedina`, `id_utente`, `tempo`) VALUES
(244, 'admin', '2020-02-13 23:16:01'),
(245, 'admin', '2020-02-13 23:17:37'),
(246, 'admin', '2020-02-13 23:21:41'),
(247, 'admin', '2020-02-13 23:22:40'),
(248, 'admin', '2020-02-13 23:28:00'),
(249, 'admin', '2020-02-13 23:36:30'),
(250, 'admin', '2020-02-13 23:37:12'),
(251, 'admin', '2020-02-13 23:41:28'),
(252, 'admin', '2020-02-13 23:51:14'),
(253, 'admin', '2020-02-13 23:53:14'),
(254, 'admin', '2020-02-14 13:06:33'),
(255, 'nico.aromino', '2020-02-14 13:17:35'),
(256, 'admin', '2020-02-14 13:19:15'),
(257, 'Kitfs82@gmail.com', '2020-02-14 13:20:03'),
(258, 'nico.aromino', '2020-02-14 13:27:51'),
(259, 'admin', '2020-02-14 14:35:52'),
(260, 'admin', '2020-02-14 14:37:30'),
(261, 'nico.aromino', '2020-02-14 21:33:09'),
(262, 'admin', '2020-02-17 19:21:13'),
(263, 'admin', '2020-02-17 19:23:19'),
(264, 'admin', '2020-02-17 19:24:01'),
(265, 'admin', '2020-02-17 19:26:27'),
(266, 'admin', '2020-02-17 19:27:13'),
(267, 'admin', '2020-02-17 19:35:37'),
(268, 'admin', '2020-02-17 19:41:30'),
(269, 'admin', '2020-02-17 19:44:43'),
(270, 'admin', '2020-02-17 19:48:39'),
(271, 'admin', '2020-02-17 19:50:58'),
(272, 'admin', '2020-02-17 19:52:02'),
(273, 'admin', '2020-02-17 19:52:56'),
(274, 'admin', '2020-02-17 19:53:32'),
(275, 'admin', '2020-02-17 19:57:53'),
(276, 'admin', '2020-02-17 20:05:47'),
(277, 'admin', '2020-02-17 20:24:20'),
(278, 'admin', '2020-02-17 20:46:34'),
(279, 'admin', '2020-02-17 20:47:40'),
(280, 'admin', '2020-02-17 20:49:21'),
(281, 'admin', '2020-02-17 20:50:10'),
(282, 'admin', '2020-02-17 21:03:04'),
(283, 'admin', '2020-02-17 21:04:09'),
(284, 'admin', '2020-02-17 21:04:37'),
(285, 'admin', '2020-02-17 21:07:41'),
(286, 'admin', '2020-02-17 21:10:28'),
(287, 'admin', '2020-02-17 21:11:01'),
(288, 'admin', '2020-02-17 21:11:24'),
(289, 'admin', '2020-02-17 21:12:13'),
(290, 'admin', '2020-02-17 21:13:32'),
(291, 'admin', '2020-02-17 21:14:14'),
(292, 'admin', '2020-02-17 21:15:48'),
(293, 'admin', '2020-02-17 21:17:14'),
(294, 'admin', '2020-02-17 21:25:21'),
(295, 'admin', '2020-02-17 21:34:00'),
(296, 'admin', '2020-02-17 21:36:18'),
(297, 'admin', '2020-02-17 21:38:35'),
(298, 'admin', '2020-02-17 21:40:38'),
(299, 'admin', '2020-02-17 21:55:19'),
(300, 'admin', '2020-02-17 21:58:55'),
(301, 'admin', '2020-02-17 21:59:37'),
(302, 'admin', '2020-02-17 22:00:23'),
(303, 'admin', '2020-02-17 22:01:18'),
(304, 'admin', '2020-02-17 22:02:39'),
(305, 'admin', '2020-02-17 22:03:33'),
(306, 'admin', '2020-02-17 22:04:05'),
(307, 'admin', '2020-02-17 22:05:46'),
(308, 'admin', '2020-02-17 22:14:53'),
(309, 'admin', '2020-02-17 22:15:33'),
(310, 'admin', '2020-02-17 22:16:46'),
(311, 'admin', '2020-02-17 22:28:11'),
(312, 'admin', '2020-02-17 22:31:43'),
(313, 'admin', '2020-02-17 22:34:10'),
(314, 'admin', '2020-02-17 22:35:38'),
(315, 'admin', '2020-02-17 22:37:00'),
(316, 'admin', '2020-02-17 22:37:53'),
(317, 'admin', '2020-02-17 22:39:09'),
(318, 'admin', '2020-02-17 22:39:47'),
(319, 'admin', '2020-02-17 22:42:24'),
(320, 'admin', '2020-02-17 22:42:34'),
(321, 'admin', '2020-02-17 22:50:11'),
(322, 'admin', '2020-02-17 22:52:35'),
(323, 'admin', '2020-02-17 22:57:23'),
(324, 'admin', '2020-02-17 23:01:30'),
(325, 'admin', '2020-02-17 23:02:36'),
(326, 'admin', '2020-02-17 23:03:20'),
(327, 'admin', '2020-02-17 23:04:35'),
(328, 'admin', '2020-02-17 23:05:33'),
(329, 'admin', '2020-02-17 23:07:30'),
(330, 'admin', '2020-02-17 23:10:53'),
(331, 'admin', '2020-02-17 23:14:34'),
(332, 'admin', '2020-02-17 23:15:27'),
(333, 'admin', '2020-02-17 23:18:59'),
(334, 'admin', '2020-02-17 23:22:16'),
(335, 'admin', '2020-02-17 23:23:32'),
(336, 'admin', '2020-02-17 23:24:27'),
(337, 'admin', '2020-02-17 23:25:06'),
(338, 'admin', '2020-02-17 23:25:20'),
(339, 'admin', '2020-02-17 23:26:03'),
(340, 'admin', '2020-02-17 23:26:37'),
(341, 'admin', '2020-02-17 23:28:39'),
(342, 'admin', '2020-02-17 23:29:29'),
(343, 'admin', '2020-02-17 23:33:46'),
(344, 'admin', '2020-02-17 23:34:23'),
(345, 'admin', '2020-02-17 23:40:59'),
(346, 'admin', '2020-02-17 23:43:28'),
(347, 'admin', '2020-02-17 23:43:59'),
(348, 'admin', '2020-02-17 23:47:05'),
(349, 'admin', '2020-02-17 23:47:27'),
(350, 'admin', '2020-02-17 23:47:44'),
(351, 'admin', '2020-02-17 23:49:09'),
(352, 'admin', '2020-02-17 23:50:11'),
(353, 'admin', '2020-02-17 23:51:07'),
(354, 'admin', '2020-02-17 23:53:13'),
(355, 'admin', '2020-02-17 23:54:46'),
(356, 'admin', '2020-02-17 23:59:40'),
(357, 'admin', '2020-02-18 00:01:23'),
(358, 'admin', '2020-02-18 00:04:10'),
(359, 'admin', '2020-02-18 00:04:47'),
(360, 'admin', '2020-02-18 00:06:39'),
(361, 'admin', '2020-02-18 00:08:08'),
(362, 'admin', '2020-02-18 00:09:07'),
(363, 'admin', '2020-02-18 00:09:58'),
(364, 'admin', '2020-02-18 00:14:26'),
(365, 'admin', '2020-02-18 00:15:01'),
(366, 'admin', '2020-02-18 00:17:33'),
(367, 'admin', '2020-02-18 00:18:19'),
(368, 'admin', '2020-02-18 00:19:16'),
(369, 'admin', '2020-02-18 00:19:35'),
(370, 'admin', '2020-02-18 00:20:07'),
(371, 'admin', '2020-02-18 00:20:26'),
(372, 'admin', '2020-02-18 00:22:57'),
(373, 'admin', '2020-02-18 00:23:51'),
(374, 'admin', '2020-02-18 00:24:14'),
(375, 'admin', '2020-02-18 00:47:54'),
(376, 'admin', '2020-02-18 07:52:54'),
(377, 'admin', '2020-02-18 08:52:59'),
(378, 'admin', '2020-02-18 09:24:18'),
(379, 'admin', '2020-02-18 09:24:45'),
(380, 'admin', '2020-02-18 10:45:43'),
(381, 'admin', '2020-02-18 17:01:25'),
(382, 'admin', '2020-02-18 19:08:07'),
(383, 'admin', '2020-02-18 19:10:33'),
(384, 'admin', '2020-02-18 22:57:07'),
(385, 'admin', '2020-02-18 23:01:50'),
(386, 'admin', '2020-02-19 00:09:19'),
(387, 'admin', '2020-02-19 00:18:26'),
(388, 'admin', '2020-02-19 21:24:02'),
(389, 'admin', '2020-02-19 22:52:37'),
(390, 'admin', '2020-02-19 23:27:56'),
(391, 'admin', '2020-02-19 23:30:32'),
(392, 'admin', '2020-02-19 23:45:52'),
(393, 'admin', '2020-02-20 19:09:54'),
(394, 'admin', '2020-02-20 19:14:04'),
(395, 'admin', '2020-02-20 21:04:59'),
(396, 'admin', '2020-02-20 22:50:57'),
(397, 'admin', '2020-02-20 22:51:59'),
(398, 'admin', '2020-02-21 00:02:49'),
(399, 'admin', '2020-02-21 23:36:33'),
(400, 'admin', '2020-02-21 23:37:02'),
(401, 'admin', '2020-02-21 23:37:13'),
(402, 'admin', '2020-02-21 23:54:32'),
(403, 'admin', '2020-02-22 10:15:07'),
(404, 'admin', '2020-02-23 16:05:26'),
(405, 'admin', '2020-02-23 16:07:46'),
(406, 'admin', '2020-02-23 16:08:58'),
(407, 'admin', '2020-02-23 16:14:15'),
(408, 'admin', '2020-02-23 16:21:38'),
(409, 'admin', '2020-02-23 16:22:36'),
(410, 'admin', '2020-02-23 16:23:19'),
(411, 'admin', '2020-02-23 16:24:11'),
(412, 'admin', '2020-02-23 16:25:04'),
(413, 'admin', '2020-02-23 16:26:42'),
(414, 'admin', '2020-02-23 16:33:27'),
(415, 'admin', '2020-02-23 16:35:48'),
(416, 'admin', '2020-02-23 16:36:12'),
(417, 'admin', '2020-02-23 16:37:36'),
(418, 'admin', '2020-02-23 16:52:58'),
(419, 'admin', '2020-02-23 17:17:54'),
(420, 'admin', '2020-02-23 22:23:18'),
(421, 'admin', '2020-02-24 00:02:12'),
(422, 'admin', '2020-02-24 00:03:09'),
(423, 'admin', '2020-02-24 00:03:54'),
(424, 'admin', '2020-02-24 00:07:26'),
(425, 'admin', '2020-02-24 20:54:41'),
(426, 'admin', '2020-02-24 21:24:58'),
(427, 'admin', '2020-02-25 00:02:12'),
(428, 'admin', '2020-02-25 00:14:30'),
(429, 'admin', '2020-02-25 19:16:38');

-- --------------------------------------------------------

--
-- Struttura della tabella `scommesse_antepost`
--

CREATE TABLE IF NOT EXISTS `scommesse_antepost` (
  `id_partita` int(11) NOT NULL AUTO_INCREMENT,
  `scommessa` varchar(40) NOT NULL,
  `risultato` varchar(20) NOT NULL,
  `punti_previsti` int(11) NOT NULL,
  UNIQUE KEY `id_calendario` (`id_partita`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=67 ;

--
-- Dump dei dati per la tabella `scommesse_antepost`
--

INSERT INTO `scommesse_antepost` (`id_partita`, `scommessa`, `risultato`, `punti_previsti`) VALUES
(39, 'Vincente Mondiale', '', 50),
(40, 'Capocannoniere', 'Fabio Longo', 15),
(41, 'Miglior Attacco', '', 10),
(42, 'Miglior Difesa', '', 10),
(43, 'Ultima Girone A', '', 10),
(44, 'Seconda Girone A', '', 10),
(45, 'Terza Girone A', '', 10),
(46, 'Vincente Girone A', '', 10),
(47, 'Ultima Girone B', '', 10),
(48, 'Seconda Girone B', '', 10),
(49, 'Terza Girone B', '', 3),
(50, 'Vincente Girone B', '', 3),
(51, 'Ultima Girone C', '', 3),
(52, 'Seconda Girone C', '', 3),
(53, 'Terza Girone C', '', 3),
(54, 'Vincente Girone C', 'Austria', 3),
(55, 'Ultima Girone D', '', 3),
(56, 'Seconda Girone D', '', 3),
(57, 'Terza Girone D', '', 3),
(58, 'Vincente Girone D', '', 3),
(59, 'Ultima Girone E', '', 3),
(60, 'Seconda Girone E', '', 3),
(61, 'Terza Girone E', '', 3),
(62, 'Vincente Girone E', '', 3),
(63, 'Ultima Girone F', '', 3),
(64, 'Seconda Girone F', '', 3),
(65, 'Terza Girone F', '', 3),
(66, 'Vincente Girone F', '', 3);

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE IF NOT EXISTS `utenti` (
  `username` varchar(40) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `password` varchar(40) NOT NULL,
  `ruolo` int(1) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`username`, `email`, `password`, `ruolo`) VALUES
('admin', 'admin', 'admin', 1),
('Nuntrammneur', '', 'Ascione', 2),
('Andrea nun t ramm n eur', '', 'Ascione', 2),
('ASDASD', '', 'ASDASD', 3),
('nico.aromino', '', 'aromino91', 2),
('alexmaresca85', 'alexmaresca85@libero.it', 'ForzaNapoli', 2),
('Kitfs82@gmail.com', 'Kitfs82@gmail.com', '002371', 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `variabile`
--

CREATE TABLE IF NOT EXISTS `variabile` (
  `id` int(11) NOT NULL,
  `open` tinyint(1) NOT NULL COMMENT 'possibilità di effettuare ancora scommesse',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `variabile`
--

INSERT INTO `variabile` (`id`, `open`) VALUES
(1, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
