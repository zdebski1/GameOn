import User from "../user/user.model";
import TeamMember from "../teamMember/teamMember.model";

User.associate({ TeamMember });
TeamMember.associate({ User });

export { User, TeamMember };
