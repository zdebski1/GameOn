import { FastifyInstance } from 'fastify';
import { getAllTeamMembersHandler } from './teamMember.controller';

export default async function (fastify: FastifyInstance) {
    fastify.get('/teams/:teamId/members', getAllTeamMembersHandler);
}




// export default async function (fastify: FastifyInstance) {
//     fastify.get('/teamMembers', async (request, reply) => {
//         try {
//             const teamMembers = await getAllTeamMembers();
//             reply.send(teamMembers);
//         } catch (error) {
//             fastify.log.error(error);
//             reply.status(500).send({ error: `Failed to fetch team members`  });
//         }
//     });
// }