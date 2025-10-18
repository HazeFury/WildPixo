use actix_web::{get, HttpResponse, Responder};
use askama::Template;

#[derive(Template)]
#[template(path = "pages/home.html")]
struct HomeTemplate<'a>{
    h1: &'a str,
    title: &'a str,
    content: &'a str
}

#[get("")]
pub async fn homeAction() -> impl Responder {
    let home_template = HomeTemplate{
        title: "titre onglet",
        h1:"titreh1",  
        content: "content" 
    };
    let rendered_template = home_template.render().unwrap();
    HttpResponse::Ok().body(rendered_template)
}