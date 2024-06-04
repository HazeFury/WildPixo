use actix_web::{get, web, Responder, Scope, HttpResponse};
use serde::Serialize;
use rand::Rng;

#[derive(Serialize)]
struct Game {
    title: String,
    rate: u8
}

fn get_all_games() -> Vec<Game> {
    let mut games: Vec<Game> = Vec::new();
    let mut rng: rand::prelude::ThreadRng = rand::thread_rng();

    for i in 1..=10 {
        let game: Game = Game {
            title: format!("Game {}", i),
            rate: rng.gen_range(1..=5),
        };
        
        games.push(game);
    }
    games
}

use crate::register_routes;

pub fn scope() -> Scope {
    register_routes!("/games", browse, read)
}

#[get("")]
async fn browse() -> impl Responder {
    let games: Vec<Game> = get_all_games();
    HttpResponse::Ok().json(games)
}

#[get("/{id}")]
async fn read(path: web::Path<usize>) -> impl Responder {

    let id: usize = path.into_inner();

    let games: Vec<Game> = get_all_games();
    if let Some(game) = games.get(id - 1) {
        HttpResponse::Ok().json(game)
    } else {
        HttpResponse::NotFound().finish()
    }
}