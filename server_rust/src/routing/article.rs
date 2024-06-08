use actix_web::{get, web, Responder, Scope, HttpResponse};
use serde::Serialize;



// use package BDD

// fonction pour se co

// rework de get_all_articles
    // 




// toussa faut l'envoyer a terme dans des fichiers "Modele" (MVC toussa)

#[derive(Serialize)]
struct Article {
    title: String,
    content: String
}

fn get_all_articles() -> Vec<Article> {
    let mut articles: Vec<Article> = Vec::new();
    for i in 1..=10 {
        let article: Article = Article {
            title: format!("Article {}", i),
            content: format!("Contenu de l'article {}", i),
        };
        
        articles.push(article);
    }
    articles
}

// toussa au dessus faut l'envoyer a terme dans des fichiers "Modele" (MVC toussa)
// mais je vais d'abord test la co BDD par ici comme un vilain


use crate::register_routes;

pub fn scope() -> Scope {
    register_routes!("/articles", browse, read)
}

#[get("")]
async fn browse() -> impl Responder {
    let articles: Vec<Article> = get_all_articles();
    HttpResponse::Ok().json(articles)
}

#[get("/{id}")]
async fn read(path: web::Path<usize>) -> impl Responder {

    let id: usize = path.into_inner();

    let articles: Vec<Article> = get_all_articles();
    if let Some(article) = articles.get(id - 1) {
        HttpResponse::Ok().json(article)
    } else {
        HttpResponse::NotFound().finish()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_get_all_articles() {
        let articles = get_all_articles();
        assert_eq!(articles.len(), 10);

        for (i, article) in articles.iter().enumerate() {
            assert_eq!(article.title, format!("Article {}", i + 1));
            assert_eq!(article.content, format!("Contenu de l'article {}", i + 1));
        }
    }
}