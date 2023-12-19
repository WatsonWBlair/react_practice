import { Box, List, Sheet, Typography } from "@mui/joy";

interface ProfileProps {
    data: {
        fName: string;
        lName: string;
        pronouns: string;
    }
}

export default function Profile(props: ProfileProps) {
    return (
        // Working address
        // At a Glance info

        <Sheet>
            <Box>
                {/*
                    Context about person:
                        - where they live,
                        - what office they report to,
                        - skillsets,
                        - attributes (use a spider graph)
                */}
            </Box>
            <Box>
                {/* 
                    Team and Working Group Context
                        - note that an individual can have roles on multiple teams. 
                        - think of teams as the expression of long-running dev commitments.
                            - eg: a dedicated Intra engineer may be the main implementer of
                                  infra for multiple teams.
                            - eg: dedicated frontend engineer is responsible for maintaining several team's UIs
                        - think of teams as a way to sort individuals into groups of similar skill-sets.
                            - eg: the infra-team, frontend-team, database team, ect...
                            - ongoing maintenance tasks are then routed to these skill-set tribes.
                */}
            </Box>
            <Box>
                {/* 
                    Project Context
                        - note that project teams are short term working groups that can grow and change.
                        - think of project teams as the expression of focused development effort.
                            - eg: migrating marketing material off Wordpress and onto Docusaurus.
                            - eg: launching a new feature
                 */}
            </Box>
        </Sheet>
    )
}