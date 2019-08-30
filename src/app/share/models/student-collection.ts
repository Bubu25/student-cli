import { Student } from './student';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

export class StudentCollection {
    private students:Map<number,Student>;
    private apiService:ApiService;
    private toastrService: ToastrService;

    /**
     * le constructeur sert à initialiser
     */
    public constructor(toastrService:ToastrService, api?:ApiService) {
        // Make the attrtibute concrete
        this.students = new Map<number,Student>();

        //Call the private method
        this.remoteStudents();

        // keep ToastrService in that class
        this.toastrService = toastrService;

        if (api){
            this.apiService = api;
        }
    }

    /**
     * Returns the student collection
     * @return Map<number, Student>
     * 
     */
    public getCollection():Map<number, Student> {
        return this.students
    }

    /**
     * add a Student in that collection
     * @param student 
     */
    public add(student: Student):void {
        this.students.set(student.getId(), student);
        //TODO: don't forget to update the DB
        //TODO: don't forget to get the Id of the
        //freshly created DB Student

    /**
     * returns the Student identified by an Id
     * @param id Id of the Student to return
     * @return Student
     */
    }
    public get(id:number):Student {
        return this.students.get(id);
    }
    /**
     * Remove a student identified by an id from collection
     * @param id the Id of the Student to remove locally
     */
    public remove(id:number):void {
        this.apiService.delete(id).subscribe((response:any)=>{
            this.students.delete(id);
            this.toastrService.success('I killed the f..g student','you got it');
        
        }, (error:any) => {
            //Here comes the toast
            if (error.status==403){
                this.students.delete(id);
                //some warning error
                this.toastrService.warning('This student was gone before !','it was Casper');
            }else{
                //some big error
                this.toastrService.error('unable to delete this student','Error');
            }
            
        });
        
        
    }
    /**
     * Updates the local Student
     * @param student 
     */
    public update(student: Student):void {
        this.add(student);
        //TODO: call the update route of the api
    }

    /**
     * call the api to get all the students from database
     */
    private remoteStudents(): void{};
        //TODO:call the api !!!
}
