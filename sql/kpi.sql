-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Nov 15, 2019 at 01:23 AM
-- Server version: 10.3.14-MariaDB
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kpi`
--

-- --------------------------------------------------------

--
-- Table structure for table `area_graph`
--

DROP TABLE IF EXISTS `area_graph`;
CREATE TABLE IF NOT EXISTS `area_graph` (
  `year` varchar(20) COLLATE utf8_croatian_ci NOT NULL,
  `a` int(11) NOT NULL,
  `b` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `area_graph`
--

INSERT INTO `area_graph` (`year`, `a`, `b`) VALUES
('2006', 96, 3),
('2007', 34, 78),
('2008', 12, 12),
('2009', 18, 12);

-- --------------------------------------------------------

--
-- Table structure for table `area_graph_2`
--

DROP TABLE IF EXISTS `area_graph_2`;
CREATE TABLE IF NOT EXISTS `area_graph_2` (
  `y` int(20) NOT NULL,
  `a` int(20) NOT NULL,
  `b` int(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `area_graph_2`
--

INSERT INTO `area_graph_2` (`y`, `a`, `b`) VALUES
(2001, 100, 90),
(2002, 75, 65),
(2003, 50, 40),
(2004, 75, 65);

-- --------------------------------------------------------

--
-- Table structure for table `area_graph_3`
--

DROP TABLE IF EXISTS `area_graph_3`;
CREATE TABLE IF NOT EXISTS `area_graph_3` (
  `year` int(20) NOT NULL,
  `a` int(20) NOT NULL,
  `b` int(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `area_graph_3`
--

INSERT INTO `area_graph_3` (`year`, `a`, `b`) VALUES
(2001, 100, 75),
(2002, 75, 65),
(2003, 50, 40),
(2004, 75, 95);

-- --------------------------------------------------------

--
-- Table structure for table `area_graph_4`
--

DROP TABLE IF EXISTS `area_graph_4`;
CREATE TABLE IF NOT EXISTS `area_graph_4` (
  `year` int(20) NOT NULL,
  `a` int(20) NOT NULL,
  `b` int(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `area_graph_4`
--

INSERT INTO `area_graph_4` (`year`, `a`, `b`) VALUES
(2010, 25, 20),
(2011, 35, 30),
(2012, 50, 33),
(2013, 60, 75);

-- --------------------------------------------------------

--
-- Table structure for table `area_graph_6`
--

DROP TABLE IF EXISTS `area_graph_6`;
CREATE TABLE IF NOT EXISTS `area_graph_6` (
  `year` int(20) NOT NULL,
  `a` int(20) NOT NULL,
  `b` int(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `area_graph_6`
--

INSERT INTO `area_graph_6` (`year`, `a`, `b`) VALUES
(2007, 90, 85),
(2008, 100, 75),
(2009, 50, 45),
(2010, 75, 65);

-- --------------------------------------------------------

--
-- Table structure for table `area_graph_7`
--

DROP TABLE IF EXISTS `area_graph_7`;
CREATE TABLE IF NOT EXISTS `area_graph_7` (
  `year` int(20) NOT NULL,
  `a` int(20) NOT NULL,
  `b` int(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `area_graph_7`
--

INSERT INTO `area_graph_7` (`year`, `a`, `b`) VALUES
(2001, 76, 65),
(2002, 87, 90),
(2003, 95, 80),
(2004, 100, 75);

-- --------------------------------------------------------

--
-- Table structure for table `area_graph_8`
--

DROP TABLE IF EXISTS `area_graph_8`;
CREATE TABLE IF NOT EXISTS `area_graph_8` (
  `year` int(20) NOT NULL,
  `a` int(20) NOT NULL,
  `b` int(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `area_graph_8`
--

INSERT INTO `area_graph_8` (`year`, `a`, `b`) VALUES
(2005, 100, 75),
(2006, 75, 65),
(2007, 50, 60),
(2007, 60, 50);

-- --------------------------------------------------------

--
-- Table structure for table `area_graph_9`
--

DROP TABLE IF EXISTS `area_graph_9`;
CREATE TABLE IF NOT EXISTS `area_graph_9` (
  `year` int(20) NOT NULL,
  `a` int(20) NOT NULL,
  `b` int(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `area_graph_9`
--

INSERT INTO `area_graph_9` (`year`, `a`, `b`) VALUES
(2005, 45, 55),
(2006, 55, 60),
(2007, 60, 63),
(2008, 75, 68);

-- --------------------------------------------------------

--
-- Table structure for table `average_stay`
--

DROP TABLE IF EXISTS `average_stay`;
CREATE TABLE IF NOT EXISTS `average_stay` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `no_of_days` int(20) NOT NULL,
  `count` int(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `average_stay`
--

INSERT INTO `average_stay` (`id`, `date`, `no_of_days`, `count`) VALUES
(1, '2019-10-01', 1, 10),
(2, '2019-10-01', 2, 30),
(3, '2019-10-01', 3, 30),
(4, '2019-10-01', 4, 70);

-- --------------------------------------------------------

--
-- Table structure for table `stays_by_payer`
--

DROP TABLE IF EXISTS `stays_by_payer`;
CREATE TABLE IF NOT EXISTS `stays_by_payer` (
  `label` varchar(255) COLLATE utf8_croatian_ci NOT NULL,
  `value` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `stays_by_payer`
--

INSERT INTO `stays_by_payer` (`label`, `value`, `id`) VALUES
('Medicate', 39, 1),
('Private Insurance', 31, 2),
('Medicaid', 21, 3),
('Uninsured', 6, 4);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
