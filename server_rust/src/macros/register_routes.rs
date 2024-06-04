#[macro_export]
macro_rules! register_routes {
    ($prefix:expr, $( $route:expr ),* ) => {
        {
            let mut scope = web::scope($prefix);
            $(
                scope = scope.service($route);
            )*
            scope
        }
    };
}