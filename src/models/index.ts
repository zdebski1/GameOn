import User from "../user/model";
import TeamMember from "../teamMember/model";

User.associate({ TeamMember });
TeamMember.associate({ User });

export { User, TeamMember };
