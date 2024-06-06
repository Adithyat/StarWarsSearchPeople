import {logger, socket} from "./app";
import {searchPeople} from "./services";
import {SearchPeopleResponse} from "./models";

// Socket connections file
export const initializeSocket = () => {
    socket.on('connect', () => {
        console.log('Connected to the server');
        searchPeople();
    });
    socket.on('disconnect', () => {
        console.log('Disconnected from the server');
    });
    socket.on('error', (error: string) => {
        logger.error('Socket error:', error);
        console.error('Connection error occurred');
    });
    // Listen for search results
    socket.on('search', (record: SearchPeopleResponse) => {
        //Handle errors
        if(record.page === -1 && record.resultCount === -1){
            logger.error(record)
            console.error(record.error)
        }
        else{
            //Format results
            console.log(`(${record.page}/${record.resultCount}) ${record.name} - [${record.films}]`);
        }

        //Trigger question on last record
        if (record.page === record.resultCount) searchPeople();
    });
}