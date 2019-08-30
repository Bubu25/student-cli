export class Student {
    /**
     * Id of a student. null or number
     */
    private id:number;

    /**
     * name of a student.string
     */
    private nom:string;

    /**
     * firstname of a Student. String
     */
    private prenom:string;

    /**
     * adress of a student. String or null
     */
    private adresse:string;

    /**
     * id of the class of a Student. Default  1
     */
    private idclasse:number=1;

    public setId(id:number): Student{
        this.id =id;
        return this;
    }

    /**
     * Set the name of this Student
     * @param nom Name of this Student
     * @return Student to chain invoke methods
     */
    public setNom(nom:string):Student{
        this.nom = nom;
        return this;
    }
     /**
     * Set the name of this Student
     * @param prenom Firstname of this Student
     * @return Student 
     */
    public setPrenom(prenom:string):Student{
        this.prenom = prenom;
        return this;
    }
    /**
     * Set the name of this Student
     * @param adresse Adress of this Student
     * @return Student 
     */
    public setAdresse(adresse:string):Student{
        this.adresse = adresse;
        return this;
    }
    /**
     * return the name of the Student
     */
    public getNom():string{
        return this.nom;
    }

    /**
     * return the prenom of the Student
     * @return string
     */
    public getPrenom():string{
        return this.prenom;

    }

    /**
     * return the prenom of the Student
     * @retun string
     */
    public getAdresse():string{
        return this.adresse;
    }

    /**
     * return the idclass of the Student
     * @return number
     */
    public getClasse():number{
        return this.idclasse;

    /**
     * return the id of the Student
     * @return number
     */
    }
    public getId():number{
        return this.id;
    }
}
