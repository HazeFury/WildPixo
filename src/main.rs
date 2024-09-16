extern crate dotenvy;

// mod structure;
mod routing;
mod action;
// mod modele;
mod utils;
// mod service;
// mod tests;

use dotenvy::dotenv;
use utils::dotenv::get_env_var;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    use actix_web::{App, HttpServer};

    dotenv().ok();

    let ip: String = get_env_var("APP_URL");
    let port: u16 = get_env_var("APP_PORT");

    let server_address: String = format!("{}:{}", ip, port);

    match HttpServer::new(|| {
        App::new().service(routing::home::routes())
    }).bind(&server_address) {
        Ok(server) => {
            println!("Serveur up on http://{server_address}");
            server.run().await
        },
        Err(error) => panic!("{}", error),
    }
}
