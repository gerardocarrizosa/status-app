import { Router } from 'express';
import { SERVER_STATUS_ENDPOINT } from '../const/endpoint';
import { getRoutes } from '../services/serverStatus.service';

export const router: Router = Router();

// getStatus
router.get(SERVER_STATUS_ENDPOINT + "/", (req, res) => {
  res.status(200).send({
    "status": "server is running"
  });
});

// getRoutes
router.get(SERVER_STATUS_ENDPOINT + "/routes", (req, res) => {
  const routes = getRoutes();
  res.status(200).send({
    numberOfRoutes: routes.length,
    routes: routes
  });
});


