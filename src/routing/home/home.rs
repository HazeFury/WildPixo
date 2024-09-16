use actix_web::{web, Scope};

use crate::action::homeAction;

pub fn routes() -> Scope {
    web::scope("")

    .service(web::scope("/")
        .service(homeAction)
    )
}
