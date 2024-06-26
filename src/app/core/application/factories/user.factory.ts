import { format } from 'date-fns';

import { User } from "../../infrastructure/models/user";
import { PersonFactory } from "./person.factory";
import { RoleFactory } from "./role.factory";

export class UserFactory {

    static assignment(user: User, fields: any) {

        if (fields.userId) {
            user.setUserId = fields.userId;
        } else {
            user.setUserId = undefined;
        }

        if (fields.person) {
            user.setPerson = PersonFactory.jsonToModel(fields.person);
        } else {
            user.setPerson = undefined;
        }

        if (fields.username) {
            user.setUsername = fields.username;
        } else {
            user.setUsername = undefined;
        }

        if (fields.email) {
            user.setEmail = fields.email;
        } else {
            user.setEmail = undefined;
        }

        if (fields.password) {
            user.setPassword = fields.password;
        } else {
            user.setPassword = undefined;
        }

        if (fields.token) {
            user.setToken = fields.token;
        } else {
            user.setToken = undefined;
        }

        if (fields.role) {
            user.setRole = RoleFactory.jsonToModel(fields.role);
        } else {
            user.setRole = undefined;
        }

        if (fields.status) {
            user.setStatus = fields.status;
        } else {
            user.setStatus = undefined;
        }

        if (fields.dateRegister) {
            user.setDateRegister = fields.dateRegister
        } else {
            user.setDateRegister = undefined;
        }

        if (fields.dateUpdate) {
            user.setDateUpdate = fields.dateUpdate;
        } else {
            user.setDateUpdate = undefined;
        }
    }

    static jsonToModel(fields: any) {
        let user = new User()

        if (fields.userId) {
            user.setUserId = fields.userId;
        } else {
            user.setUserId = undefined;
        }

        if (fields.person) {
            user.setPerson = PersonFactory.jsonToModel(fields.person);
        } else {
            user.setPerson = undefined;
        }

        if (fields.token) {
            user.setToken = fields.token;
        } else {
            user.setToken = undefined;
        }

        if (fields.username) {
            user.setUsername = fields.username;
        } else {
            user.setUsername = undefined;
        }

        if (fields.email) {
            user.setEmail = fields.email;
        } else {
            user.setEmail = undefined;
        }

        if (fields.password) {
            user.setPassword = fields.password;
        } else {
            user.setPassword = undefined;
        }

        if (fields.role) {
            user.setRole = RoleFactory.jsonToModel(fields.role);
        } else {
            user.setRole = undefined;
        }

        if (fields.status) {
            user.setStatus = fields.status;
        } else {
            user.setStatus = undefined;
        }

        if (fields.dateRegister) {
            user.setDateRegister = fields.dateRegister;
        } else {
            user.setDateRegister = undefined;
        }

        if (fields.dateUpdate) {
            user.setDateUpdate = fields.dateUpdate;
        } else {
            user.setDateUpdate = undefined;
        }

        return user;
    }

    static toJson(user: User) {
        return {
            userId: user.getUserId,
            username: user.getUsername,
            email: user.getEmail,
            password: user.getPassword,
            token: user.getToken,
            role: user.getRole ? RoleFactory.toJson(user.getRole!) : undefined,
            person: user.getPerson ? PersonFactory.toJson(user.getPerson!) : undefined,
            status: user.getStatus,
            dateRegister: user.getDateRegister,
            dateUpdate: user.getDateUpdate,
        };
    }

    static toJsonLogin(user: User) {
        return {
            userId: user.getUserId,
            username: user.getUsername,
            email: user.getEmail,
            password: user.getPassword,
            token: user.getToken,
            roleName: user.getRole ? user.getRole?.getRoleName : undefined,
        };
    }

    static checkUndefinedFields(user: User) {
        const fields = [
            user.getPerson,
            user.getRole,
            user.getUsername,
            user.getPassword,
            user.getEmail
        ];

        return fields.some(field => field === undefined);
    }

    static arrayToJsonArray(data: User[]) {
        let userJson: any[] = [];
        data?.map(user => {
            userJson.push(this.toJson(user));
        });
        return userJson;
    }

    static arrayJsonToModelArray(data: any) {
        let users: User[] = [];
        data?.map((user: any) => {
            users.push(this.jsonToModel(user));
        });
        return users;
    }


}