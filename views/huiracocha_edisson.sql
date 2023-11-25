-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-12-2021 a las 22:02:19
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `huiracocha_edisson`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `Código` varchar(20) NOT NULL,
  `Descripción` varchar(50) NOT NULL,
  `Precio` double(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`Código`, `Descripción`, `Precio`) VALUES
('ALM4', 'Aladino y la lampará maravillosa', 9.00),
('APL1', 'Asno con piel de león', 8.30),
('APMA9', 'Arturo y el pájaro de mal agüero', 3.50),
('BVSM11', 'Blanca, la vaca sin machas', 6.00),
('EGP12', 'El gusanito Pepito', 10.50),
('EML13', 'El monstruo del lago', 7.15),
('EMMD7', 'El misterio del mono desaparecido', 4.00),
('EPDGG10', 'El pequeño David y el gran Goliat', 9.50),
('LCT8', 'La chica del tocadiscos', 5.00),
('LF6', 'Los fantasmas', 7.00),
('LHC5', 'La historia de un caballo', 12.00),
('LPV3', 'La piel de venado', 12.00),
('P14', 'Perdido', 8.75),
('PDO2', 'Pez de Oro', 6.50);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`Código`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
