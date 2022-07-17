/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

  Route.group( () => {
    
    Route.group( () => {
       Route.post('store', 'DomainsController.store');
       Route.get('show', 'DomainsController.show');
       Route.post('destroy/:id', 'DomainsController.destroy');
    }).prefix('/dominio')


    Route.group( () => {
      Route.post('store', 'CriteriosController.store');
      Route.post('show', 'CriteriosController.show');
      Route.post('destroy/:id', 'CriteriosController.destroy');
   }).prefix('/criterio')


  }).prefix('/v1')

}).prefix('/api');

