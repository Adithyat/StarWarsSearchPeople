import Joi from "joi";
import {SearchPeopleRequest} from "./models";

export const searchPeopleSchema = Joi.object<SearchPeopleRequest>({
    query : Joi.string().required(),
})