# Build a simple RESTful API using Node JS, Express JS and MySQL.

Hello Readers!. In this tutorial, I am going to build a simple CRUD RESTful API by using Node JS, Express JS and MySQL.

### Prerequisites

Before you start this tutorial it is you need to fulfill all the requirements listed below:


```
1. Node JS and MySQL  installed on your PC.
2. It is better to have a basic understanding of Node JS, Express JS and MySQL queries.
3. A text editor or IDE of your choice.
```

### Installing

A step by step by step guide how to run this application in your development environment.

Git clone on your developemnt machine (any folder of your choice)

```
git clone https://github.com/thebhandariprakash/nodeRestApp.git
```

go to the root folder of project from command line  and update dependencies b y using below command

```
npm install
```


## Creating the database for the app

```sql
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `app1`
--
CREATE DATABASE IF NOT EXISTS `app1` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `app1`;

-- 

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `status`, `created_at`) VALUES
(1, 'Electronics, Computers & Office', 1, '2019-03-02 06:36:08'),
(2, 'Toys, Kids & Baby', 1, '2019-03-02 06:36:08'),
(4, 'Shoes', 1, '2019-03-02 21:49:17'),
(5, 'Health & Beauty', 1, '2019-03-02 22:16:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```

## Database connection

inside app.js file

```node
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost', // host name
    user: 'root', // username of your database
    password: 'root', // password your application
    database: 'app1'// database name of your application
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
```

### Run application

Run below command

```
nodemon app.js
```