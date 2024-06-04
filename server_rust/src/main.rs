use actix_web::{get, web, Result, Responder};
use serde::Serialize;
extern crate dotenv;

use dotenv::dotenv;
use std::env;

#[derive(Serialize)]
struct Game {
    title: String,
    rate: u8
}

#[get("/")]
async fn json() -> Result<impl Responder> {

    let coquette_league = Game{ 
        title: "Coquette League".to_string(), 
        rate: 5 
    };

    Ok(web::Json(coquette_league))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    use actix_web::{App, HttpServer};

    dotenv().ok();

    let port: String = match env::var("APP_PORT"){
        Ok(port) => port,
        Err(_) => panic!("Variable d'environnement 'APP_PORT' non renseignée dans le .env"),
    };

    let port: u16 = match port.parse::<u16>(){
        Ok(port) => port,
        Err(_) => panic!("Veuillez saisir un nombre dans la variable d'env 'APP_PORT'"),
    };

    HttpServer::new(|| {
        App::new()
            .service(json)
    })
    .bind(("127.0.0.1", port))?
    .run()
    .await
}