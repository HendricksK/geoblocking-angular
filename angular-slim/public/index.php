<?php
// if (PHP_SAPI == 'cli-server') {
//     // To help the built-in PHP dev server, check if the request was actually for
//     // something which should probably be served as a static file
//     $url  = parse_url($_SERVER['REQUEST_URI']);
//     $file = __DIR__ . $url['path'];
//     if (is_file($file)) {
//         return false;
//     }
// }

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../controller/conversation/class.conversation.php';

session_start();

// Instantiate the app
$settings = require __DIR__ . '/../src/settings.php';
$api = new \Slim\App($settings);


/*
adding this cross origin access to allow angular to
connect and interact with slim framework
*/
$api->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$api->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:3000','*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

// Set up dependencies
//require __DIR__ . '/../src/dependencies.php';

// Register middleware
// require __DIR__ . '/../src/middleware.php';
//
// // Register routes
// require __DIR__ . '/../src/routes.php';

//select all
$api->get('/conversations', function($request, $response) {
    $conversation = new conversation();
    $result = $conversation->getConversations();

    return json_encode($result);
});

$api->get('/conversation/{id}', function($request, $response) {
    $id = $request->getAttribute('id');
    $conversation = new conversation();
    $result = $conversation->getConversation($id);

    return json_encode($result);
});

$api->post('/conversation/new/', function($request, $response) {

    $data = file_get_contents('php://input');
    $data = json_decode($data);
    $conversation_data = array_shift($data);
    $conversation = new conversation();
    $result = $conversation->saveConversation($conversation_data);
    return json_encode($result);
});

$api->put('/conversation/update/', function($request, $response) {

    $data = file_get_contents('php://input');
    $data = json_decode($data);
    $conversation_data = array_shift($data);
    $conversation = new conversation();
    $result = $conversation->updateConversation($conversation_data);
    return json_encode($result);
});

$api->delete('/conversation/delete/{id}', function($request, $response) {

    $id = $request->getAttribute('id');
    $conversation = new conversation();
    $result = $conversation->deleteConversation($id);
    return json_encode($result);
});

// Run app
$api->run();
