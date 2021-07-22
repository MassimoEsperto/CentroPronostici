-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Lug 22, 2021 alle 15:49
-- Versione del server: 5.6.33-log
-- PHP Version: 5.6.40

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
-- Struttura della tabella `utenti`
--

CREATE TABLE IF NOT EXISTS `utenti` (
  `username` varchar(40) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `cellulare` varchar(11) DEFAULT NULL,
  `password` varchar(40) NOT NULL,
  `ruolo` varchar(20) NOT NULL,
  `versato` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`username`, `email`, `cellulare`, `password`, `ruolo`, `versato`) VALUES
('admin', 'admin', NULL, 'admin', 'admin', 0),
('Almat18', 'albebernocchi@hotmail.it', '', 'federernadal18', 'giocatore', 21),
('smarri', 'silvia.marri@hotmail.it', NULL, 'Al3x1991', 'giocatore', 0),
('Ciro', 'ciroguarino87@gmail.com', NULL, 'Ciro1', 'giocatore', 0),
('messomale', 'em.decarlo@gmail.com', '3925184699', 'messomale', 'giocatore', 0),
('Ferrigno10', 'ferrignovincenzo09@libero.it', '', 'Napoli70', 'giocatore', 3),
('genny-brvd1014', 'genny.gdl50@gmail.com', '', 'Coglione1$', 'giocatore', 3),
('Tony Word', 'ant.parola@gmail.com', '', 'Tonyword@92', 'giocatore', 9),
('Carmine Noviello', 'Carminenovie92@gmail.com', '', 'Raffaele.20', 'giocatore', 9),
('martino2683', 'martinomaresca@virgilio.it', NULL, 'Amore0506', 'giocatore', 0),
('alessiomoresca', 'alessiomoresca3@gmail.com', '', 'Napoli92', 'giocatore', 15),
('enzini90', 'carmine.enzini90@gmail.com', '', 'edicola', 'giocatore', 9),
('nicola.aromino', 'nicola.aromino91@gmail.com', '3661746386', 'aromino91', 'giocatore', 3),
('Cozzolinojr.', 'iosonoio061@gmail.com', '', 'Fenicottero17', 'giocatore', 9),
('Peppma', 'giuseppemariamanzo@gmail.com', '', 'Solojuve10', 'giocatore', 6),
('Fabioiannone', 'fabioiannone@hotmail.it', '', 'FANTADIO.', 'giocatore', 6),
('manny97tdg13', 'mannyemme@gmail.com', '', 'Seiuncoglione71#31#', 'giocatore', 3),
('AntonioPonticelli', 'ponticellifs@gmail.com', '3281355949', 'Barcafabio20?', 'giocatore', 12),
('Antonio Manzo', 'kitfs82@gmail.com', '', 'Antonio', 'giocatore', 15),
('BALB', 'a_baldrati@hotmail.it', '', 'QJSgH3y!N$efdy', 'giocatore', 21),
('Fosc97', 'Domenico.foschini.97@outlook.it', '', 'TeleseTerme97', 'giocatore', 9),
('Barbablack', 'thebarbablack@hotmail.it', '', 'Forzamilan92!', 'giocatore', 9),
('Mennillo81', 'mennillopopc9@gmail.com', '', 'bolletta2021', 'giocatore', 30),
('gianluka93', 'gianluka3293@gmail.com', '', 'numero10', 'giocatore', 6),
('Michele Vorraro', 'miich86@hotmail.it', '', '09011986', 'giocatore', 6),
('Alexcastaldo', 'alexcastaldo93@hotmail.com', '', 'Amici91!', 'giocatore', 3),
('Vincenzo 86', 'vincenzotrenitalia@libero.it', '', 'Nicole1@', 'giocatore', 6),
('Antoniofrascarino', 'ciaonapoli2012@hotmail.com', '', 'Antonio86f', 'giocatore', 21),
('LadyInOrange', 'alesssandrapolese@gmail.com', '', '150992', 'giocatore', 3),
('Antonio Temante', 'antoniotemante@gmail.com', '3289272819', 'Antonio', 'giocatore', 12),
('Paolo. lagarese', 'pablo_619@hotmail.it', '', 'G@ia2012', 'giocatore', 3),
('Sabooo87', 'pazzi.chef87@yahoo.it', '', 'Ost5pazzi', 'giocatore', 18),
('Tonsurton', 'simoneferrigno1985@gmail.com', '', 'simo1985', 'giocatore', 3),
('Gennaro Dussmann', 'janviergallo@libero.it', '', 'Hilary2016', 'giocatore', 6),
('PieForm', 'pietro.formisano@libero.it', '', 'Milano123', 'giocatore', 3),
('Carla manzo', 'kitfs82@gmail.com', '', 'Carla', 'giocatore', 12),
('Palpao', 'armandoascione@hotmail.it', '3934321653', 'Pwdacapocchia', 'giocatore', 0),
('Gaetana Perrone', 'kitfs82@gmail.com', '', 'Gaetana', 'giocatore', 12),
('Luigi Galazzo', 'kitfs82@gmail.com', '', 'Luigi', 'giocatore', 9),
('Gianluca De Lisio', 'giandelisio2000@gmail.com', '', 'Juventus', 'giocatore', 6),
('Francesco De Caro', 'raider82@hotmail.it', '', 'Micky123!', 'giocatore', 3),
('Ilmondodelbebe', 'iosononapoletanoemenevanto@live.it', '', 'Napoli1926', 'giocatore', 18),
('GennaroLiguori', 'gennaroliguori@live.it', '', 'Gennaro90', 'giocatore', 9),
('Vincent', 'vincent_96@libero.it', '', 'Annapia1', 'giocatore', 9),
('Ultrazzurro91', 'antonio_figliolino@libero.it', '3480125261', 'Napoli91?', 'giocatore', 15),
('Giuliopana', 'Giulio.panariello@hotmail.com', '360265182', 'Napoli1926', 'giocatore', 9),
('Giangio', 'gianlucasantini39@gmail.com', '3933227647', 'Danielederossi16', 'giocatore', 9),
('Biagiobarone', 'baronebia@gmail.com', '3932884234', 'biagio090', 'giocatore', 3),
('Adriano Arpaia', 'adrianoarpaia@gmail.com', '3801387338', 'Adriano8', 'giocatore', 9),
('fabrizio.carotenuto', 'fabrizio.carotenuto@icloud.com', '3351591704', 'Vucinic123', 'giocatore', 6),
('Magica.21', 'luigivastarella21@hotmail.it', '3348624744', '1926Lv21', 'giocatore', 6),
('Anna', 'grokky@hotmail.it', '3397611012', 'Affrico2021', 'giocatore', 3),
('Giuseppeinsuperabile', 'moresca92@icloud.com', '3407929758', 'napoli92', 'giocatore', 6),
('Ionut1', 'c.ionut@live.it', '3421846232', 'BUONASEGA1.', 'giocatore', 6),
('Ronofrio luigi', 'luigironofrio91@gmail.com', '3477858576', 'Peppefranci', 'giocatore', 15),
('Cred89', 'ciro891@icloud.com', '3455981565', 'Napoli1926', 'giocatore', 9),
('Italo Borriello', 'ita.borriello@hotmail.it', '3406161493', 'Italo1997', 'giocatore', 3),
('__Luigibruno', 'luigi.bruno801@gmail.com', '3391843826', 'Daniela80', 'giocatore', 15),
('Simone De Vita', 'simone.devita98@gmail.com', '3384338679', 'DVSimo98', 'giocatore', 3),
('danielewar', 'danifiengo@libero.it', '3312541020', 'Napoli1994', 'giocatore', 9),
('Lorenzo Borriello Fè', 'Lorenzosbrr@outlook.com', '3317940387', 'Morragay', 'giocatore', 3),
('Luigi Carillo', 'alex032008@live.it', '3286162013', '1973', 'giocatore', 3),
('Marcotar', 'marco.tarchiani29@gmail.com', '3335903422', 'Tarchiani98', 'giocatore', 0),
('Matteo', 'teo580@libero.it', '3389510535', 'Maresca', 'giocatore', 3),
('Giancarlo pernice', 'giancarlopernice@gmail.com', '3881943762', 'Giovanna08', 'giocatore', 0),
('alexmaresca85', 'alexmaresca85@libero.it', '3495429545', 'ForzaNapoli', 'giocatore', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `_competizioni`
--

CREATE TABLE IF NOT EXISTS `_competizioni` (
  `id_comp` int(11) NOT NULL AUTO_INCREMENT,
  `sigla` varchar(10) NOT NULL DEFAULT 'GENERICA',
  `descrizione` varchar(40) NOT NULL DEFAULT 'competizione generica',
  `isAttiva` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'specifica se lacompetizione è attiva e quindi è possibile partecipare',
  `scadenza` varchar(20) NOT NULL DEFAULT '2021/08/07',
  `footer` varchar(20) NOT NULL DEFAULT 'fanta maresca',
  `isOpen` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'quando la competizione è attiva ma non si possono inserire piu nuovi pronostici',
  PRIMARY KEY (`id_comp`),
  UNIQUE KEY `sigla` (`sigla`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dump dei dati per la tabella `_competizioni`
--

INSERT INTO `_competizioni` (`id_comp`, `sigla`, `descrizione`, `isAttiva`, `scadenza`, `footer`, `isOpen`) VALUES
(1, 'CHAMPIONS', 'champions league', 1, '2021/08/07', 'champions league', 1),
(9, 'EUROPA', 'europa league', 1, '2021/08/07', 'europa league', 1),
(10, 'MONDIALE', 'coppa del mondo 2022', 0, '2021/08/07', 'mondiali 2022', 0),
(11, 'COPPA-IT', 'coppa italia', 0, '2021/08/07', 'fanta coppa italia', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `_gruppi_antepost_base`
--

CREATE TABLE IF NOT EXISTS `_gruppi_antepost_base` (
  `id_singolo` int(11) NOT NULL AUTO_INCREMENT,
  `risultato` varchar(40) NOT NULL,
  `gruppo` varchar(1) NOT NULL DEFAULT 'A',
  `comp_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_singolo`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dump dei dati per la tabella `_gruppi_antepost_base`
--

INSERT INTO `_gruppi_antepost_base` (`id_singolo`, `risultato`, `gruppo`, `comp_id`) VALUES
(20, 'PSG', 'A', 1),
(17, 'PSG', 'V', 1),
(19, 'PSG', 'D', 1),
(22, 'De Carlo', 'C', 1),
(23, 'Maresca', 'C', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `_lista_cannonieri`
--

CREATE TABLE IF NOT EXISTS `_lista_cannonieri` (
  `id_cannoniere` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) NOT NULL,
  `comp_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_cannoniere`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dump dei dati per la tabella `_lista_cannonieri`
--

INSERT INTO `_lista_cannonieri` (`id_cannoniere`, `nome`, `comp_id`) VALUES
(3, 'Maresca', 1),
(2, 'De Carlo', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `_lista_squadre`
--

CREATE TABLE IF NOT EXISTS `_lista_squadre` (
  `id_squadra` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) NOT NULL,
  `girone` varchar(1) NOT NULL DEFAULT 'A',
  `comp_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_squadra`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dump dei dati per la tabella `_lista_squadre`
--

INSERT INTO `_lista_squadre` (`id_squadra`, `nome`, `girone`, `comp_id`) VALUES
(1, 'PSG', 'A', 1),
(2, 'Real Madrid', 'A', 1),
(3, 'Club Bruges', 'A', 1),
(4, 'Galatasary', 'A', 1),
(5, 'Bayern Monaco', 'B', 1),
(6, 'Tottenham', 'B', 1),
(7, 'Olympiakos', 'B', 1),
(8, 'Stella ROssa', 'B', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `_punteggi_risultati`
--

CREATE TABLE IF NOT EXISTS `_punteggi_risultati` (
  `id_risulato` int(11) NOT NULL,
  `tipo_ris` varchar(20) NOT NULL,
  `punti_id` int(11) NOT NULL,
  PRIMARY KEY (`id_risulato`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `_punteggi_risultati`
--

INSERT INTO `_punteggi_risultati` (`id_risulato`, `tipo_ris`, `punti_id`) VALUES
(1, '1', 1),
(2, 'X', 1),
(3, '2', 1),
(4, '1X', 2),
(5, 'X2', 2),
(6, '12', 2),
(7, 'UNDER', 5),
(8, 'OVER', 5),
(9, 'NOGOL', 4),
(10, 'GOL', 4),
(11, 'DISPARI', 3),
(12, 'PARI', 3),
(13, '1-0', 6),
(14, '2-0', 6),
(15, '3-0', 6),
(16, '4-0', 6),
(18, '2-1', 6),
(19, '3-1', 6),
(20, '4-1', 6),
(22, '3-2', 6),
(23, '4-2', 6),
(25, '4-3', 6),
(28, '0-0', 6),
(29, '1-1', 6),
(30, '2-2', 6),
(31, '3-3', 6),
(32, '4-4', 6),
(34, '0-1', 6),
(35, '0-2', 6),
(36, '0-3', 6),
(37, '0-4', 6),
(39, '1-2', 6),
(40, '1-3', 6),
(41, '1-4', 6),
(43, '2-3', 6),
(44, '2-4', 6),
(46, '3-4', 6),
(48, 'ALTRO', 6);

-- --------------------------------------------------------

--
-- Struttura della tabella `_punti_previsti`
--

CREATE TABLE IF NOT EXISTS `_punti_previsti` (
  `id_punti` int(11) NOT NULL,
  `descrizione` varchar(20) NOT NULL,
  `valore` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_punti`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `_punti_previsti`
--

INSERT INTO `_punti_previsti` (`id_punti`, `descrizione`, `valore`) VALUES
(1, 'Fisso(1X2)', 4),
(2, 'Doppia chance', 2),
(3, 'Pari-Dispari', 4),
(4, 'Gol-NoGol', 2),
(5, 'Under-Over', 2),
(6, 'Ris Esatto', 12),
(7, 'Vincente Torneo', 50),
(8, 'Miglior Attacco', 16),
(9, 'Miglior Difesa', 15),
(10, 'Capocannoniere', 15),
(11, 'Prima Girone', 6),
(12, 'Seconda Girone', 4),
(13, 'Terza Girone', 3),
(14, 'Ultima Girone', 2),
(15, 'Girone Completo', 5);

-- --------------------------------------------------------

--
-- Struttura della tabella `_schedina`
--

CREATE TABLE IF NOT EXISTS `_schedina` (
  `id_evento` int(11) NOT NULL,
  `id_schedina` int(11) NOT NULL,
  `risultato` varchar(20) NOT NULL,
  `tipo` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `_schedina`
--

INSERT INTO `_schedina` (`id_evento`, `id_schedina`, `risultato`, `tipo`) VALUES
(2, 8, 'Real Madrid', 3),
(1, 8, 'Galatasary', 3),
(4, 8, 'Real Madrid', 2),
(3, 8, 'Olympiakos', 2),
(2, 8, 'De Carlo', 2),
(1, 8, 'Tottenham', 2),
(8, 8, '0-0', 1),
(7, 8, '12', 1),
(6, 8, '2-4', 1),
(5, 8, '2-2', 1),
(4, 8, '3-0', 1),
(3, 8, '2', 1),
(2, 8, 'ALTRO', 1),
(1, 8, '1X', 1),
(10, 7, 'Tot-Bay-Oly-Ste', 3),
(9, 7, 'Stella ROssa', 3),
(8, 7, 'Olympiakos', 3),
(7, 7, 'Bayern Monaco', 3),
(6, 7, 'Tottenham', 3),
(5, 7, 'Gal-Rea-Clu-PSG', 3),
(4, 7, 'PSG', 3),
(3, 7, 'Club Bruges', 3),
(2, 7, 'Real Madrid', 3),
(1, 7, 'Galatasary', 3),
(4, 7, 'Real Madrid', 2),
(3, 7, 'Olympiakos', 2),
(2, 7, 'De Carlo', 2),
(1, 7, 'Tottenham', 2),
(8, 7, '0-0', 1),
(7, 7, '12', 1),
(6, 7, '2-4', 1),
(5, 7, '2-2', 1),
(4, 7, '3-0', 1),
(3, 7, '2', 1),
(2, 7, 'ALTRO', 1),
(1, 7, '1X', 1),
(8, 9, 'Bayern Monaco', 3),
(7, 9, 'Tottenham', 3),
(6, 9, 'Stella ROssa', 3),
(5, 9, 'Gal-Rea-PSG-Clu', 3),
(4, 9, 'Club Bruges', 3),
(3, 9, 'PSG', 3),
(2, 9, 'Real Madrid', 3),
(1, 9, 'Galatasary', 3),
(4, 9, 'Bayern Monaco', 2),
(3, 9, 'Olympiakos', 2),
(2, 9, 'Maresca', 2),
(1, 9, 'PSG', 2),
(8, 9, '2-2', 1),
(7, 9, '2', 1),
(6, 9, 'NOGOL', 1),
(5, 9, '1-1', 1),
(4, 9, '2', 1),
(3, 9, '0-3', 1),
(2, 9, '1X', 1),
(1, 9, '3-4', 1),
(10, 9, 'Ste-Tot-Bay-Oly', 3),
(9, 9, 'Olympiakos', 3),
(3, 8, 'Club Bruges', 3),
(4, 8, 'PSG', 3),
(5, 8, 'Gal-Rea-Clu-PSG', 3),
(6, 8, 'Tottenham', 3),
(7, 8, 'Bayern Monaco', 3),
(8, 8, 'Olympiakos', 3),
(9, 8, 'Stella ROssa', 3),
(10, 8, 'Tot-Bay-Oly-Ste', 3);

-- --------------------------------------------------------

--
-- Struttura della tabella `_schedina_user`
--

CREATE TABLE IF NOT EXISTS `_schedina_user` (
  `schedina_id` int(11) NOT NULL AUTO_INCREMENT,
  `utente_id` varchar(40) NOT NULL,
  `tempo` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `descrizione` varchar(40) NOT NULL DEFAULT 'Compilata' COMMENT 'verifica se la scheda sia stata compilata copiata oppure random',
  `comp_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`schedina_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dump dei dati per la tabella `_schedina_user`
--

INSERT INTO `_schedina_user` (`schedina_id`, `utente_id`, `tempo`, `descrizione`, `comp_id`) VALUES
(8, 'messomale', '2021-07-20 16:23:46', 'Copiata', 1),
(7, 'messomale', '2021-07-20 16:19:41', 'Random', 1),
(9, 'admin', '2021-07-20 17:22:32', 'Random', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `_scommesse_antepost_base`
--

CREATE TABLE IF NOT EXISTS `_scommesse_antepost_base` (
  `id_evento` int(11) NOT NULL,
  `tipo` int(11) NOT NULL DEFAULT '2',
  `gruppo_id` varchar(1) NOT NULL,
  `punti_id` int(11) NOT NULL,
  PRIMARY KEY (`id_evento`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `_scommesse_antepost_base`
--

INSERT INTO `_scommesse_antepost_base` (`id_evento`, `tipo`, `gruppo_id`, `punti_id`) VALUES
(2, 2, 'C', 10),
(3, 2, 'A', 8),
(4, 2, 'D', 9),
(1, 2, 'V', 7);

-- --------------------------------------------------------

--
-- Struttura della tabella `_scommesse_antepost_gironi`
--

CREATE TABLE IF NOT EXISTS `_scommesse_antepost_gironi` (
  `id_evento` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` int(11) NOT NULL DEFAULT '3',
  `girone` varchar(1) NOT NULL,
  `specie` varchar(1) NOT NULL DEFAULT 'S' COMMENT 's per singolo c per completo',
  `risultato` varchar(20) NOT NULL DEFAULT '',
  `punti_id` int(11) NOT NULL,
  `comp_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_evento`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dump dei dati per la tabella `_scommesse_antepost_gironi`
--

INSERT INTO `_scommesse_antepost_gironi` (`id_evento`, `tipo`, `girone`, `specie`, `risultato`, `punti_id`, `comp_id`) VALUES
(1, 3, 'A', 'S', 'Galatasary', 11, 1),
(2, 3, 'A', 'S', 'Real Madrid', 12, 1),
(3, 3, 'A', 'S', 'Club Bruges', 13, 1),
(4, 3, 'A', 'S', 'PSG', 14, 1),
(5, 3, 'A', 'C', 'Gal-Rea-Clu-PSG', 15, 1),
(6, 3, 'B', 'S', '', 11, 1),
(7, 3, 'B', 'S', '', 12, 1),
(8, 3, 'B', 'S', '', 13, 1),
(9, 3, 'B', 'S', '', 14, 1),
(10, 3, 'B', 'C', '', 15, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `_scommesse_risultati`
--

CREATE TABLE IF NOT EXISTS `_scommesse_risultati` (
  `id_evento` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` int(11) NOT NULL DEFAULT '1',
  `partita` varchar(40) NOT NULL,
  `girone` varchar(1) NOT NULL,
  `data` varchar(20) NOT NULL DEFAULT '',
  `goalc` int(11) DEFAULT NULL,
  `goalt` int(11) DEFAULT NULL,
  `fisso` varchar(10) NOT NULL DEFAULT '',
  `doppiachance1` varchar(10) NOT NULL DEFAULT '',
  `doppiachance2` varchar(10) NOT NULL DEFAULT '',
  `underover` varchar(10) NOT NULL DEFAULT '',
  `risesatto` varchar(10) NOT NULL DEFAULT '',
  `paridispari` varchar(10) NOT NULL DEFAULT '',
  `golnogol` varchar(10) NOT NULL DEFAULT '',
  `comp_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_evento`),
  UNIQUE KEY `scommessa` (`partita`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dump dei dati per la tabella `_scommesse_risultati`
--

INSERT INTO `_scommesse_risultati` (`id_evento`, `tipo`, `partita`, `girone`, `data`, `goalc`, `goalt`, `fisso`, `doppiachance1`, `doppiachance2`, `underover`, `risesatto`, `paridispari`, `golnogol`, `comp_id`) VALUES
(1, 1, 'Club Bruges-Galatasary', 'A', '08/01/2021', 1, 0, '1', '1X', '12', 'UNDER', '1-0', 'DISPARI', 'NOGOL', 1),
(2, 1, 'PSG-Real Madrid', 'A', '08/01/2021', 1, 1, 'X', '1X', 'X2', 'UNDER', '1-1', 'PARI', 'GOL', 1),
(3, 1, 'Real Madrid-Club Bruges', 'A', '08/09/2021', 2, 0, '1', '1X', '12', 'UNDER', '2-0', 'PARI', 'NOGOL', 1),
(4, 1, 'Galatasary-PSG', 'A', '08/09/2021', 0, 2, '2', 'X2', '12', 'UNDER', '0-2', 'PARI', 'NOGOL', 1),
(5, 1, 'Bayern Monaco-Tottenham', 'B', '08/09/2021', 3, 2, '1', '1X', '12', 'OVER', '3-2', 'DISPARI', 'GOL', 1),
(6, 1, 'Olympiakos-Stella ROssa', 'B', '08/09/2021', 0, 0, 'X', '1X', 'X2', 'UNDER', '0-0', 'PARI', 'NOGOL', 1),
(7, 1, 'Bayern Monaco-Olympiakos', 'B', '08/09/2021', 0, 2, '2', 'X2', '12', 'UNDER', '0-2', 'PARI', 'NOGOL', 1),
(8, 1, 'Tottenham-Stella ROssa', 'B', '08/09/2021', 2, 0, '1', '1X', '12', 'UNDER', '2-0', 'PARI', 'NOGOL', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `_utenti`
--

CREATE TABLE IF NOT EXISTS `_utenti` (
  `username` varchar(40) NOT NULL,
  `nome` varchar(20) NOT NULL,
  `cognome` varchar(20) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `cellulare` varchar(11) DEFAULT NULL,
  `password` varchar(40) NOT NULL,
  `ruolo` varchar(20) NOT NULL,
  `versato` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `_utenti`
--

INSERT INTO `_utenti` (`username`, `nome`, `cognome`, `email`, `cellulare`, `password`, `ruolo`, `versato`) VALUES
('admin', 'Andrea', 'Maresca', 'fantamondiale2014andreamaresca@gmail.com', '3661746386', 'admin', 'admin', 0),
('messomale', 'Emanuele', 'De Carlo', 'em.decarlo@gmail.com', '3925184699', 'messomale', 'giocatore', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
