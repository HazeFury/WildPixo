CREATE TABLE game (
    id INT unsigned PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    release_date DATE NOT NULL,
    publisher VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    picture VARCHAR(255) NOT NULL,
    play_link VARCHAR(100),
    github VARCHAR(100)
);

CREATE TABLE user (
    id INT unsigned PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(30) NOT NULL,
    mail VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
	role VARCHAR(20) DEFAULT 'user' NOT NULL

);

CREATE TABLE news (
    id INT unsigned PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    intro VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    date DATE NOT NULL,
    game_id INT unsigned,
    FOREIGN KEY (game_id) REFERENCES game(id) ON DELETE SET NULL
);

CREATE TABLE rates_by_user (
    id INT unsigned PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_id INT unsigned,
    game_id INT unsigned,
    note INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (game_id) REFERENCES game(id) ON DELETE CASCADE
);