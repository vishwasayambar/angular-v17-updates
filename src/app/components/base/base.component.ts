import {Component, Injector, signal} from '@angular/core';
import {UserService} from "../../services/user.service";
import {
    RequiredAndOptionalInputsComponent
} from "../required-and-optional-inputs/required-and-optional-inputs.component";
import {UsingOutputFunctionComponent} from "../using-output-function/using-output-function.component";

@Component({
    selector: 'app-base',
    standalone: true,
    imports: [
        RequiredAndOptionalInputsComponent,
        UsingOutputFunctionComponent
    ],
    templateUrl: './base.component.html',
    styleUrl: './base.component.css'
})
export class BaseComponent {
    userList: Array<any> = [];
    likes = signal(0);
    selectedUser = signal({
        avatar: "",
        name: "",
    });

    constructor(private service: UserService) {
        this.fetchUsers();
    }
    
    increaseFollowCount(name: string){
        this.likes.set(this.likes() + 1);
    }

    private fetchUsers() {
        this.service.getUsers().subscribe({
            next: res => {
                this.userList = res;
              if (this.userList.length) {
                this.selectedUser.set(this.userList[0]);
              }
            },
            error: err => {
                alert(err.messages);
            }
        })

    }
}
