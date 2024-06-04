extern crate dotenv;

mod routing;

use dotenv::dotenv;
use std::env;

#[macro_use]
mod macros;

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
            .service(routing::article::scope()) // "/articles/..."
            .service(routing::game::scope()) // "/games/..."
    })
    .bind(("127.0.0.1", port))?
    .run()
    .await
}