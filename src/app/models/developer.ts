import { Skill } from "./skill";

export interface Developer {
    lastName: string,
    firstName: string,
    age: number,
    gender: string,
    bio: string,
    skills: Skill[]
}