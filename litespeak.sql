-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-10-2024 a las 06:10:58
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `litespeak`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `userIdOf1` int(255) DEFAULT NULL,
  `userIdOf2` int(255) DEFAULT NULL,
  `relationship` enum('friend','blocked','none') DEFAULT NULL,
  `blockedBy` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `contacts`
--

INSERT INTO `contacts` (`id`, `userIdOf1`, `userIdOf2`, `relationship`, `blockedBy`) VALUES
(67, 35, 36, 'friend', NULL),
(68, 33, 36, 'friend', NULL),
(69, 34, 36, 'friend', NULL),
(70, 37, 36, 'blocked', '36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conversationof67`
--

CREATE TABLE `conversationof67` (
  `message` varchar(255) NOT NULL,
  `userId` int(255) DEFAULT NULL,
  `type` enum('text','image') DEFAULT NULL,
  `timeSent` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `conversationof67`
--

INSERT INTO `conversationof67` (`message`, `userId`, `type`, `timeSent`) VALUES
('yo dawg', 36, 'text', '2024-10-28 05:05:44'),
('check this out ', 35, 'text', '2024-10-28 05:06:20'),
('1730092092.jpg', 35, 'image', '2024-10-28 05:08:12'),
('cool ', 36, 'text', '2024-10-28 05:08:50'),
('....', 36, 'text', '2024-10-28 05:09:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conversationof68`
--

CREATE TABLE `conversationof68` (
  `message` varchar(255) NOT NULL,
  `userId` int(255) DEFAULT NULL,
  `type` enum('text','image') DEFAULT NULL,
  `timeSent` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `conversationof69`
--

CREATE TABLE `conversationof69` (
  `message` varchar(255) NOT NULL,
  `userId` int(255) DEFAULT NULL,
  `type` enum('text','image') DEFAULT NULL,
  `timeSent` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `friendrequests`
--

CREATE TABLE `friendrequests` (
  `sentBy` int(255) NOT NULL,
  `sentTo` int(255) NOT NULL,
  `requestDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` enum('pending','accepted','rejected') NOT NULL,
  `requestId` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `friendrequests`
--

INSERT INTO `friendrequests` (`sentBy`, `sentTo`, `requestDate`, `status`, `requestId`) VALUES
(36, 33, '2024-10-28 04:53:34', 'accepted', 80),
(36, 34, '2024-10-28 04:53:39', 'accepted', 81),
(36, 35, '2024-10-28 04:53:44', 'accepted', 82),
(37, 36, '2024-10-28 05:01:10', 'rejected', 83),
(38, 36, '2024-10-28 05:04:29', 'pending', 84);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `userEmail` varchar(255) NOT NULL,
  `userPassword` varchar(255) NOT NULL,
  `loginToken` varchar(255) DEFAULT NULL,
  `userAvatar` varchar(255) DEFAULT 'default.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`userId`, `userName`, `userEmail`, `userPassword`, `loginToken`, `userAvatar`) VALUES
(33, 'andrewCool', 'andrewE@gmail.com', '$2y$10$d5hZLLL8skYqZSlLJjon1.xlfhC/ppXqVKNxAoEoQ2ektuy5qYafq', NULL, '9875-steamfacepalm.png'),
(34, 'pepe', 'pepeT@gmail.com', '$2y$10$p5C5IAuNDLdBb/1fiAluROYW1Dule/EF8oKYR.TsYHobnfQIMVAfW', NULL, 'steam-steambored.jpg'),
(35, 'jiji', 'jijiO@gmail.com', '$2y$10$qYWRm5hoXdYDPzYLiyNj/ez.9wRTz.qxJOfMwtA144uaR5xUaC3Jq', NULL, 'steamsad-steam.jpg'),
(36, 'coco', 'cocoD@gmail.com', '$2y$10$alg0Jl62Pmzegz9Wm7h/ROWmdMsyKLZwXxB3VElGUMhWqn3rRm0km', 'ea2b9a3880f22133dfd27c794dafcbcff500a1371ef8ed4bb553a7c3484b1ebc', 'does-anyone-have-a-high-quality-image-of-steamhappy-like-v0-jqaxcku3tpjb1.jpg'),
(37, 'blocko', 'blocko@gmail.com', '$2y$10$TY8ip.hum0RH8Ja8qGKMWO9ubptNo8onIhJc9ZnT4EiOsuS9sXxX6', NULL, '5524-steammocking.png'),
(38, 'requestieCV', 'requestie@gmail.com', '$2y$10$69sc6rTHjB/.IDPNkligyeHZ9js2NkYKxwwqitdM4WBGnw7HL/kWm', NULL, 'anybody-miss-the-old-steam-emojis-v0-3tjonoeda8ya1.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userIdOf1` (`userIdOf1`),
  ADD KEY `userIdOf2` (`userIdOf2`);

--
-- Indices de la tabla `friendrequests`
--
ALTER TABLE `friendrequests`
  ADD PRIMARY KEY (`requestId`),
  ADD KEY `sentBy` (`sentBy`),
  ADD KEY `sentTo` (`sentTo`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT de la tabla `friendrequests`
--
ALTER TABLE `friendrequests`
  MODIFY `requestId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `contacts_ibfk_1` FOREIGN KEY (`userIdOf1`) REFERENCES `users` (`userId`),
  ADD CONSTRAINT `contacts_ibfk_2` FOREIGN KEY (`userIdOf2`) REFERENCES `users` (`userId`);

--
-- Filtros para la tabla `friendrequests`
--
ALTER TABLE `friendrequests`
  ADD CONSTRAINT `friendrequests_ibfk_1` FOREIGN KEY (`sentBy`) REFERENCES `users` (`userId`),
  ADD CONSTRAINT `friendrequests_ibfk_2` FOREIGN KEY (`sentTo`) REFERENCES `users` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
