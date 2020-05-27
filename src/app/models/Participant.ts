import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

/**
 * Participant 
 * class representing Student
 */
export default class Participant {
    id: number;
    nom: string;
    prenom: string;
    age: number;
    dateNaissance:NgbDate;
    email: string;
    password:string;
    tel: string;
}
