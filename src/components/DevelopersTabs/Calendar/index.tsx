import Box from "@mui/joy/Box";

type eventTypes = 'Meeting' | 'Working Session' | 'Training' | 'OnCall';

interface CalEventProps {
        eventID: number;
        eventStart: Date;
        eventEnd: Date;
        eventType: eventTypes | string;
}

interface CalendarProps {
    data: {
        events: Array<CalEventProps>;
    }
}
export default function Calendar(props: CalendarProps) {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box>
                {/* Calendar View */}
            </Box>
            <Box>
                {/* List View */}
            </Box>
        </Box>

    )
}