import {logger, readlineInterface, socket} from "./app";
import {SearchPeopleRequest} from "./models";
import {searchPeopleSchema} from "./validators";

// Controller
// Function to ask for search query
export const searchPeople = () => {
    readlineInterface.question('What character would you like to search for? ', (input: string) => {
        //Deserialize request
        const request: SearchPeopleRequest = {
            query: input
        }

        //Validate request
        const check = searchPeopleSchema.validate(request)
        if (check.error){
            logger.error(check)
        }

        //Process request
        console.log(`Searching for '${request.query}' ...`);
        socket.emit('search', request);
    });
}