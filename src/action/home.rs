use actix_web::{get, HttpResponse, Responder};
use askama::Template;

#[derive(Template)]
#[template(path = "pages/home.html")]
struct HomeTemplate;

#[get("")]
pub async fn homeAction() -> impl Responder {
    let home_template = HomeTemplate;
    let rendered_template = home_template.render().unwrap();
    HttpResponse::Ok().body(rendered_template)
}