import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/player', 'player/play.tsx'),
] satisfies RouteConfig;
