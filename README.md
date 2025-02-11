# Application de Gestion de Tâches

Cette application de gestion de tâches est construite avec Next.js, MySQL et Tailwind CSS. Elle permet aux utilisateurs d'ajouter, modifier, supprimer et visualiser des tâches.

## Fonctionnalités

- Ajouter une nouvelle tâche
- Modifier une tâche existante
- Supprimer une tâche
- Visualiser la liste des tâches
- Interface utilisateur responsive avec Tailwind CSS

## Prérequis

- Node.js (version 14 ou supérieure)
- MySQL

## Installation

1. Clonez ce dépôt :
```
git@github.com:amineassas31/task-management-app.git
```
2.Créez la BDD et la table `task`:
```
CREATE DATABASE tasklist_db;
USE tasklist_db;
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `status` enum('En cours','Terminée') NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
)
```
2. Modifiez le fichier `.env.local` en ajoutant vos identifiant `DB_USER` et `DB_PASSWORD`.
3. Lancez sur le terminal:
```
npm install
npm run dev
```

