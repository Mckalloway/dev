-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 14 Février 2019 à 16:32
-- Version du serveur :  5.7.25-0ubuntu0.16.04.2
-- Version de PHP :  7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `restaurant`
--

-- --------------------------------------------------------

--
-- Structure de la table `Booking`
--

CREATE TABLE `Booking` (
  `Id` int(11) NOT NULL,
  `BookingDate` date NOT NULL,
  `BookingTime` time NOT NULL,
  `NumberOfSeats` int(11) NOT NULL,
  `User_Id` int(11) NOT NULL,
  `CreationTimestamp` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Booking`
--

INSERT INTO `Booking` (`Id`, `BookingDate`, `BookingTime`, `NumberOfSeats`, `User_Id`, `CreationTimestamp`) VALUES
(1, '2019-01-01', '12:00:00', 1, 6, '2019-02-06 14:36:34');

-- --------------------------------------------------------

--
-- Structure de la table `Meal`
--

CREATE TABLE `Meal` (
  `Id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Photo` varchar(30) NOT NULL,
  `Description` text NOT NULL,
  `QuantityInStock` int(4) NOT NULL,
  `BuyPrice` double NOT NULL,
  `SalePrice` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Meal`
--

INSERT INTO `Meal` (`Id`, `Name`, `Photo`, `Description`, `QuantityInStock`, `BuyPrice`, `SalePrice`) VALUES
(1, 'Coca-Cola', 'coca.jpg', 'Mmmm, le Coca-Cola avec 10 morceaux de sucres et tout plein de caféine !', 72, 0.6, 3),
(2, 'Bagel Thon', 'bagel_thon.jpg', 'Notre bagel est constitué d\'un pain moelleux avec des grains de sésame et du thon albacore, accompagné de feuilles de salade fraîche du jour  et d\'une sauce renversante :-)', 18, 2.75, 5.5),
(3, 'Bacon Cheeseburger', 'bacon_cheeseburger.jpg', 'Ce délicieux cheeseburger contient un steak haché viande française de 150g ainsi que d\'un buns grillé juste comme il faut, le tout accompagné de frites fraîches maison !', 14, 6, 12.5),
(4, 'Carrot Cake', 'carrot_cake.jpg', 'Le carrot cake maison ravira les plus gourmands et les puristes : tous les ingrédients sont naturels !\r\nÀ consommer sans modération', 9, 3, 6.75),
(5, 'Donut Chocolat', 'chocolate_donut.jpg', 'Les donuts sont fabriqués le matin même et sont recouvert d\'une délicieuse sauce au chocolat !', 16, 3, 6.2),
(6, 'Dr. Pepper', 'drpepper.jpg', 'Son goût sucré avec de l\'amande vous ravira !', 53, 0.5, 2.9),
(7, 'Milkshake', 'milkshake.jpg', 'Notre milkshake bien crémeux contient des morceaux d\'Oréos et est accompagné de crème chantilly et de smarties en guise de topping. Il éblouira vos papilles !', 12, 2, 5.35);

-- --------------------------------------------------------

--
-- Structure de la table `Order`
--

CREATE TABLE `Order` (
  `Id` int(11) NOT NULL,
  `User_Id` int(11) NOT NULL,
  `TotalAmount` double DEFAULT NULL,
  `TaxRate` float DEFAULT NULL,
  `TaxAmount` double DEFAULT NULL,
  `CreationTimestamp` datetime DEFAULT NULL,
  `CompleteTimestamp` datetime DEFAULT NULL,
  `Status` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Order`
--

INSERT INTO `Order` (`Id`, `User_Id`, `TotalAmount`, `TaxRate`, `TaxAmount`, `CreationTimestamp`, `CompleteTimestamp`, `Status`) VALUES
(60, 6, 37.4, 0.2, 7.48, '2019-02-07 12:49:13', '2019-02-07 12:49:13', 'payed');

-- --------------------------------------------------------

--
-- Structure de la table `OrderLine`
--

CREATE TABLE `OrderLine` (
  `Id` int(11) NOT NULL,
  `QuantityOrdered` int(11) NOT NULL,
  `Meal_Id` int(11) NOT NULL,
  `Order_Id` int(11) NOT NULL,
  `PriceEach` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `OrderLine`
--

INSERT INTO `OrderLine` (`Id`, `QuantityOrdered`, `Meal_Id`, `Order_Id`, `PriceEach`) VALUES
(83, 2, 3, 60, 12.5),
(84, 2, 5, 60, 6.2);

-- --------------------------------------------------------

--
-- Structure de la table `User`
--

CREATE TABLE `User` (
  `Id` int(11) NOT NULL,
  `FirstName` varchar(40) NOT NULL,
  `LastName` varchar(40) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(64) NOT NULL,
  `BirthDate` date NOT NULL,
  `Address` varchar(250) NOT NULL,
  `City` varchar(40) NOT NULL,
  `ZipCode` varchar(5) NOT NULL,
  `Country` varchar(40) DEFAULT NULL,
  `Phone` varchar(10) NOT NULL,
  `CreationTimestamp` datetime DEFAULT NULL,
  `LastLoginTimestamp` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `User`
--

INSERT INTO `User` (`Id`, `FirstName`, `LastName`, `Email`, `Password`, `BirthDate`, `Address`, `City`, `ZipCode`, `Country`, `Phone`, `CreationTimestamp`, `LastLoginTimestamp`) VALUES
(6, 'Nasir', 'Tran', 'nasir@test.fr', '$2y$11$762c57d864e9aa3ddc4d0u.yhq/oD3MTjhUaQUhQsh4eU0RYqQeiK', '1991-02-18', '17 rue Georges Stephenson', 'Creil', '60100', NULL, '0564513564', NULL, NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Booking`
--
ALTER TABLE `Booking`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Meal`
--
ALTER TABLE `Meal`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `Order`
--
ALTER TABLE `Order`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `OrderLine`
--
ALTER TABLE `OrderLine`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Booking`
--
ALTER TABLE `Booking`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `Meal`
--
ALTER TABLE `Meal`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `Order`
--
ALTER TABLE `Order`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- AUTO_INCREMENT pour la table `OrderLine`
--
ALTER TABLE `OrderLine`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;
--
-- AUTO_INCREMENT pour la table `User`
--
ALTER TABLE `User`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
