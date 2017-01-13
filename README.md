#rebuilding geoblocking site with Angular - site to help display the differences in releases for films/series across the globe
#will eventually allow users to chat, comment add extra details - specific to their country

#IMDB cheat sheet
https://www.themoviedb.org/documentation/api/discover



#SLIM UPDATES

start slim local php server
cd [my-app-name]; php -S 0.0.0.0:8080 -t public public/index.php

commenting out dependencies, routes and middleware from slim - added cross origin for localhost:3000 so I can interact with angular app

Things I want to add:--
1. commenting section that interacts with MYSQL - using slim framework (using socket.io)--
2. display music that is connected to the specific film/series--
3. add a radio api/soundcloud to allow users to search for music directly from site--

#ANGULAR UPDATES
1. added components and services to interact with SLIM--
