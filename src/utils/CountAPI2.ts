import axios from "axios";
import content from "../../content";

export const CountAPI = async () => {
  try {
    /* const token = request.headers()['mcp-token'] */
    await axios.post(
        `https://trafico.meuconsultorioparticular.com.br/${content.nameAPI}/count`,
      {},
      { headers: { "mcp-token": "d671baae-8442-4bab-aa07-3b97d177502e"} }
    )
  } catch (error) {
    console.log(error);
  }
};

/* Route.group(() => {
  Route.post('/:name/count', 'SitesController.store')
  Route.get('/all', 'SitesController.indexUniqueNames')
  Route.get('/:name/count', 'SitesController.getCountByName')
}).middleware(async (ctx: HttpContextContract, next) => {
  const { request, response } = ctx
  const token = request.headers()['mcp-token']
  if (token !== 'd671baae-8442-4bab-aa07-3b97d177502e') {
    return response.status(403).send('Forbidden')
  }
  await next()
}) */