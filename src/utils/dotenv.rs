use std::env;
use std::str::FromStr;

pub fn get_env_var<T: FromStr>(var_name: &str) -> T {

    let value = match env::var(var_name) {
        Ok(value) => value,
        Err(_) => panic!("Variable d'environnement '{}' non renseignée dans le .env", var_name),
    };

    match value.parse::<T>() {
        Ok(converted_value) => converted_value,
        Err(_) => panic!("La variable d'environnement '{}' ne peut pas être convertie en le type souhaité", var_name),
    }
    
}
